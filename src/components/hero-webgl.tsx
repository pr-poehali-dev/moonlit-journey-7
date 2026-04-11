import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"
import { CityMapBackground } from "@/components/city-map-background"

const FLYER_URL = "https://cdn.poehali.dev/projects/59266136-7b6c-414f-a200-d1fd1000076c/bucket/8b7aa1a5-cce5-49f4-9034-39e37035d7fa.jpg"

function useOnce(key: string) {
  const [shown, setShown] = useState(() => {
    try { return sessionStorage.getItem(key) === "1" } catch (_e) { return false }
  })
  const markShown = () => {
    try { sessionStorage.setItem(key, "1") } catch (_e) { /* ignore */ }
    setShown(true)
  }
  return [shown, markShown] as const
}

// Одна частица флаера в 3D-пространстве
interface Particle {
  // позиция в "мировом" пространстве: x,y в [-1..1], z в [0..1] (0=далеко, 1=близко)
  x: number
  y: number
  z: number
  vx: number   // скорость по x (ветер)
  vy: number   // скорость по y
  vz: number   // скорость приближения
  rot: number  // текущий угол
  vr: number   // скорость вращения
  // волновые параметры для колебания на ветру
  wo: number   // wave offset
  ws: number   // wave speed
  wa: number   // wave amplitude (угол)
  baseRot: number
}

function makeParticles(count: number): Particle[] {
  return Array.from({ length: count }, () => ({
    x: (Math.random() - 0.5) * 2.4,
    y: (Math.random() - 0.5) * 2.4,
    z: Math.random() * 0.6,          // начинают вдали
    vx: (Math.random() - 0.5) * 0.0015,
    vy: (Math.random() - 0.5) * 0.001,
    vz: 0.0008 + Math.random() * 0.0012,  // медленно летят на зрителя
    rot: (Math.random() - 0.5) * 40,
    vr: (Math.random() - 0.5) * 0.08,
    wo: Math.random() * Math.PI * 2,
    ws: 0.5 + Math.random() * 1.0,
    wa: 1.5 + Math.random() * 3,
    baseRot: (Math.random() - 0.5) * 40,
  }))
}

export function FlyerAnimation({ onDone }: { onDone: () => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const phaseRef = useRef<"fly" | "freeze" | "leave">("fly")
  const [phase, setPhase] = useState<"fly" | "freeze" | "leave" | "done">("fly")
  const particles = useRef<Particle[]>(makeParticles(18))
  const imgRef = useRef<HTMLImageElement | null>(null)
  const rafRef = useRef<number>(0)
  const tRef = useRef(0)
  // данные приклеенного флаера
  const pinnedRef = useRef({ rot: -2, t: 0 })

  // Загружаем картинку
  useEffect(() => {
    const img = new Image()
    img.crossOrigin = "anonymous"
    img.src = FLYER_URL
    img.onload = () => { imgRef.current = img }
  }, [])

  // Таймеры фаз
  useEffect(() => {
    const t1 = setTimeout(() => { phaseRef.current = "freeze"; setPhase("freeze") }, 2800)
    const t2 = setTimeout(() => { phaseRef.current = "leave";  setPhase("leave") },  9800)
    const t3 = setTimeout(() => { setPhase("done"); onDone() }, 11400)
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3) }
  }, [onDone])

  // RAF рендер на canvas
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resize = () => {
      canvas.width  = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener("resize", resize)

    const ASPECT = 280 / 400  // соотношение флаера (ширина/высота)

    const draw = () => {
      const W = canvas.width
      const H = canvas.height
      tRef.current += 0.016
      const t = tRef.current
      const curPhase = phaseRef.current

      ctx.clearRect(0, 0, W, H)

      // Фон
      ctx.fillStyle = "rgba(0,0,0,0.92)"
      ctx.fillRect(0, 0, W, H)

      if (!imgRef.current) {
        rafRef.current = requestAnimationFrame(draw)
        return
      }

      const img = imgRef.current
      const ps = particles.current

      if (curPhase === "fly") {
        // Обновляем и рисуем все флаеры
        for (const p of ps) {
          // Ветровое колебание угла
          const windRot = Math.sin(t * p.ws + p.wo) * p.wa
                        + Math.sin(t * p.ws * 0.6 + p.wo + 1) * p.wa * 0.4

          p.x   += p.vx + Math.sin(t * p.ws * 0.4 + p.wo) * 0.0006
          p.y   += p.vy + Math.cos(t * p.ws * 0.3 + p.wo) * 0.0004
          p.z   += p.vz
          p.rot  = p.baseRot + windRot

          // Если улетел за экран — респаун вдали
          if (p.z > 1.05 || Math.abs(p.x) > 1.6 || Math.abs(p.y) > 1.6) {
            p.x = (Math.random() - 0.5) * 2.4
            p.y = (Math.random() - 0.5) * 2.4
            p.z = 0
            p.baseRot = (Math.random() - 0.5) * 40
          }

          // Проекция: z=0 → мелкий, z=1 → крупный
          const scale = 0.08 + p.z * 0.55
          const screenX = W / 2 + p.x * W * 0.5 * (0.3 + p.z * 0.7)
          const screenY = H / 2 + p.y * H * 0.5 * (0.3 + p.z * 0.7)
          const fw = 260 * scale
          const fh = fw / ASPECT

          const opacity = Math.min(1, p.z * 2.5) * 0.8

          ctx.save()
          ctx.translate(screenX, screenY)
          ctx.rotate((p.rot * Math.PI) / 180)
          ctx.globalAlpha = opacity
          ctx.drawImage(img, -fw / 2, -fh / 2, fw, fh)
          ctx.restore()
        }
      }

      // Фаза "freeze" — рисуем один большой приклеенный флаер
      if (curPhase === "freeze" || curPhase === "leave") {
        pinnedRef.current.t += 0.018
        const pt = pinnedRef.current.t

        // Флаеры фоном — тихо улетают
        for (const p of ps) {
          p.x += p.vx * 0.5
          p.y += p.vy * 0.5 - 0.001
          p.z = Math.max(0, p.z - 0.008)
          const scale = 0.08 + p.z * 0.55
          const screenX = W / 2 + p.x * W * 0.4 * (0.3 + p.z * 0.7)
          const screenY = H / 2 + p.y * H * 0.4 * (0.3 + p.z * 0.7)
          const fw = 260 * scale
          const fh = fw / ASPECT
          ctx.save()
          ctx.translate(screenX, screenY)
          ctx.rotate((p.rot * Math.PI) / 180)
          ctx.globalAlpha = Math.min(1, p.z * 2.5) * 0.3
          ctx.drawImage(img, -fw / 2, -fh / 2, fw, fh)
          ctx.restore()
        }

        // Приклеенный — покачивается на ветру
        const windRot = Math.sin(pt * 0.9) * 2.8
                      + Math.sin(pt * 1.7) * 1.2
                      + Math.sin(pt * 0.4) * 0.6

        const leaveProgress = curPhase === "leave" ? Math.min(1, (pt - 7) / 1.2) : 0
        const pinX = W / 2 + leaveProgress * W * 0.6
        const pinY = H / 2 - leaveProgress * H * 0.5
        const pinScale = 1 - leaveProgress * 0.3
        const pinOpacity = 1 - leaveProgress

        const fw = Math.min(W * 0.55, 300) * pinScale
        const fh = fw / ASPECT

        // Тень
        ctx.save()
        ctx.translate(pinX + 8, pinY + 8)
        ctx.rotate(((windRot - 2) * Math.PI) / 180)
        ctx.globalAlpha = 0.25 * pinOpacity
        ctx.filter = "blur(12px)"
        ctx.drawImage(img, -fw / 2, -fh / 2, fw, fh)
        ctx.restore()

        // Сам флаер (качается от верхнего края)
        ctx.save()
        ctx.translate(pinX, pinY - fh * 0.45)  // pivot сверху
        ctx.rotate(((windRot - 2) * Math.PI) / 180)
        ctx.globalAlpha = pinOpacity
        ctx.filter = "none"
        // Лёгкая тень
        ctx.shadowColor = "rgba(0,0,0,0.5)"
        ctx.shadowBlur = 30
        ctx.drawImage(img, -fw / 2, 0, fw, fh)
        ctx.restore()

        // Скотч
        if (curPhase === "freeze") {
          ctx.save()
          ctx.translate(pinX, pinY - fh * 0.45 + 4)
          ctx.rotate(((windRot * 0.3 - 1) * Math.PI) / 180)
          ctx.globalAlpha = 0.5
          ctx.fillStyle = "rgba(210,185,230,0.7)"
          ctx.beginPath()
          ctx.roundRect(-28, -9, 56, 16, 3)
          ctx.fill()
          ctx.restore()
        }
      }

      rafRef.current = requestAnimationFrame(draw)
    }

    rafRef.current = requestAnimationFrame(draw)
    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener("resize", resize)
    }
  }, [])

  if (phase === "done") return null

  return (
    <div className="fixed inset-0 z-[10000] overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Подпись под приклеенным флаером */}
      {phase === "freeze" && (
        <div
          className="absolute bottom-[12%] left-1/2 -translate-x-1/2 text-center"
          style={{ animation: "fadeIn 0.8s ease 1.5s both" }}
        >
          <p className="font-geist text-white/40 text-xs tracking-widest animate-pulse">
            нажмите, чтобы продолжить
          </p>
        </div>
      )}

      {/* Клик-зона */}
      <button
        className="absolute inset-0 w-full h-full cursor-pointer"
        onClick={() => {
          phaseRef.current = "leave"
          setPhase("leave")
          setTimeout(onDone, 1200)
        }}
        aria-label="Закрыть"
      />
    </div>
  )
}

export function Hero3DWebGL() {
  const [animDone, setAnimDone] = useOnce("okino-intro-shown")
  const [showAnim, setShowAnim] = useState(!animDone)

  const handleAnimDone = () => {
    setAnimDone()
    setShowAnim(false)
  }

  return (
    <>
      {showAnim && <FlyerAnimation onDone={handleAnimDone} />}
      <section id="okino" className="min-h-screen bg-black relative overflow-hidden flex flex-col items-center justify-center">
        <CityMapBackground opacity={0.06} />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent z-10" />
          <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black to-transparent z-10" />
        </div>

        <div className="relative z-10 text-center px-4 flex flex-col items-center">
          <div className="mb-4 flex items-center gap-3">
            <span className="font-ui text-red-500 text-xs tracking-[0.3em]">18+</span>
            <span className="w-px h-4 bg-white/20" />
            <span className="font-ui text-white/30 text-xs tracking-widest">Любительское кино</span>
          </div>

          <div className="relative mb-2">
            <svg viewBox="0 0 120 160" className="w-28 md:w-40 mx-auto drop-shadow-2xl" fill="none">
              <path
                d="M60 8C35.1 8 15 28.1 15 53c0 35 45 99 45 99s45-64 45-99C105 28.1 84.9 8 60 8z"
                fill="#dc2626"
              />
              <circle cx="60" cy="53" r="22" fill="#000" opacity="0.5" />
              <circle cx="60" cy="53" r="14" fill="#dc2626" opacity="0.7" />
              <circle cx="60" cy="53" r="6" fill="#000" opacity="0.8" />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-28 h-28 md:w-40 md:h-40 rounded-full border border-red-500/20 animate-ping" style={{ animationDuration: "3s" }} />
            </div>
          </div>

          <h1 className="font-bebas text-7xl md:text-9xl lg:text-[11rem] text-white leading-none tracking-wide">
            КАРТА
          </h1>
          <h1 className="font-bebas text-7xl md:text-9xl lg:text-[11rem] text-white leading-none tracking-wide -mt-4 md:-mt-6">
            ГОРОДА
          </h1>

          <p className="font-ui text-red-500 text-sm tracking-[0.3em] mt-2">
            ФЕСТИВАЛЬ КОРОТКОМЕТРАЖНОГО КИНО
          </p>

          <div className="mt-6 tape-effect inline-block bg-white text-black px-6 py-2 rounded-sm shadow-lg">
            <span className="font-ui text-sm font-bold tracking-wider">24 / 25 / 26 АПРЕЛЯ</span>
          </div>

          <div className="flex gap-3 mt-8">
            <Button className="bg-red-600 hover:bg-red-700 text-white font-ui border-0 text-xs tracking-widest px-8 py-3">
              Купить билеты
            </Button>
            <Button variant="outline" className="border-white/20 text-white bg-transparent hover:bg-white/10 font-ui text-xs tracking-widest px-6 py-3">
              Программа
            </Button>
          </div>

          <div className="flex gap-5 mt-6">
            {[
              ["https://boosty.to/okino_official", "Heart", "Boosty"],
              ["https://vk.com/okino.square", "Users", "VK"],
              ["https://t.me/okinosquare", "Send", "Telegram"],
              ["https://youtube.com/@okino.square", "Youtube", "YouTube"],
            ].map(([href, icon, label]) => (
              <a key={href} href={href} target="_blank" rel="noopener noreferrer"
                className="font-ui text-white/30 hover:text-red-500 transition-colors text-[10px] tracking-widest flex items-center gap-1">
                <Icon name={icon} size={12} /> {label}
              </a>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={24} className="text-white/30" />
        </div>
      </section>
    </>
  )
}