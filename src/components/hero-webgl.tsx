import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"
import { CityMapBackground } from "@/components/city-map-background"

const FLYER_URL = "https://cdn.poehali.dev/projects/59266136-7b6c-414f-a200-d1fd1000076c/bucket/8b7aa1a5-cce5-49f4-9034-39e37035d7fa.jpg"

interface Flyer {
  id: number
  x: number
  y: number
  rotation: number
  scale: number
  vx: number
  vy: number
  vr: number
  opacity: number
  // индивидуальная "волна" для плавного дрейфа
  waveOffset: number
  waveSpeed: number
  waveAmp: number
}

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

export function FlyerAnimation({ onDone }: { onDone: () => void }) {
  const [phase, setPhase] = useState<"intro" | "center" | "leave" | "done">("intro")
  // время для волн
  const timeRef = useRef(0)
  // флаги для анимации приклеенного флаера
  const [centerRotation, setCenterRotation] = useState(-2)

  const [flyers] = useState<Flyer[]>(() =>
    Array.from({ length: 14 }, (_, i) => ({
      id: i,
      x: Math.random() * 110 - 5,
      y: Math.random() * 110 - 5,
      rotation: (Math.random() - 0.5) * 35,
      scale: 0.18 + Math.random() * 0.28,
      vx: (Math.random() - 0.5) * 0.08,   // очень медленно — ветер
      vy: -0.04 - Math.random() * 0.06,    // слегка вверх, как листовки
      vr: (Math.random() - 0.5) * 0.4,
      opacity: 0.25 + Math.random() * 0.55,
      waveOffset: Math.random() * Math.PI * 2,
      waveSpeed: 0.4 + Math.random() * 0.6,
      waveAmp: 0.015 + Math.random() * 0.025,
    }))
  )

  // позиции через requestAnimationFrame
  const [positions, setPositions] = useState(() =>
    flyers.map(f => ({ x: f.x, y: f.y, rotation: f.rotation }))
  )

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("center"), 2200)
    const t2 = setTimeout(() => setPhase("leave"), 9500)
    const t3 = setTimeout(() => { setPhase("done"); onDone() }, 11200)
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3) }
  }, [onDone])

  // плавная анимация полёта — RAF
  useEffect(() => {
    if (phase !== "intro") return
    let raf: number
    const tick = () => {
      timeRef.current += 0.016
      const t = timeRef.current
      setPositions(prev =>
        prev.map((p, i) => {
          const f = flyers[i]
          // дрейф + синусоидальное колебание (ветер)
          const nx = p.x + f.vx + Math.sin(t * f.waveSpeed + f.waveOffset) * f.waveAmp
          const ny = p.y + f.vy + Math.cos(t * f.waveSpeed * 0.7 + f.waveOffset) * f.waveAmp * 0.5
          const nr = p.rotation + f.vr * 0.3 + Math.sin(t * f.waveSpeed + f.waveOffset) * 0.3
          return {
            x: ((nx % 120) + 120) % 120,
            y: ((ny % 120) + 120) % 120,
            rotation: nr,
          }
        })
      )
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [phase, flyers])

  // покачивание приклеенного флаера на ветру
  useEffect(() => {
    if (phase !== "center") return
    let raf: number
    let t = 0
    const tick = () => {
      t += 0.018
      // мягкое покачивание: от -3 до +3 градусов
      setCenterRotation(-2 + Math.sin(t * 0.9) * 2.5 + Math.sin(t * 1.7) * 1.2)
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [phase])

  if (phase === "done") return null

  return (
    <div className="fixed inset-0 z-[10000] bg-black/92 overflow-hidden flex items-center justify-center">

      {/* Фоновые летящие флаеры */}
      {phase === "intro" && flyers.map((f, i) => (
        <div
          key={f.id}
          className="absolute pointer-events-none"
          style={{
            left: `${positions[i].x}%`,
            top: `${positions[i].y}%`,
            transform: `translate(-50%, -50%) rotate(${positions[i].rotation}deg) scale(${f.scale})`,
            opacity: f.opacity,
            width: "220px",
            willChange: "transform",
          }}
        >
          <img
            src={FLYER_URL}
            alt="флаер"
            className="w-full h-auto rounded shadow-xl"
            draggable={false}
            style={{ filter: "brightness(0.75)" }}
          />
        </div>
      ))}

      {/* Флаеры улетают при переходе к центру */}
      {phase !== "intro" && flyers.map((f, i) => (
        <div
          key={f.id}
          className="absolute pointer-events-none"
          style={{
            left: `${positions[i].x}%`,
            top: `${positions[i].y}%`,
            transform: `translate(-50%, -50%) rotate(${positions[i].rotation + 20}deg) scale(${f.scale * 0.3})`,
            opacity: 0,
            width: "220px",
            transition: `all 1.2s cubic-bezier(0.4, 0, 0.2, 1)`,
            transitionDelay: `${i * 40}ms`,
          }}
        >
          <img src={FLYER_URL} alt="" className="w-full h-auto rounded" draggable={false} />
        </div>
      ))}

      {/* Приклеенный флаер по центру */}
      <div
        className="relative z-20 flex flex-col items-center"
        style={{
          opacity: phase === "center" ? 1 : 0,
          transform: phase === "center"
            ? "scale(1) translateY(0)"
            : phase === "leave"
            ? "scale(0.85) translateY(-40px) rotate(8deg)"
            : "scale(0.85) translateY(30px)",
          transition: phase === "leave"
            ? "all 1.4s cubic-bezier(0.4, 0, 0.2, 1)"
            : "all 0.9s cubic-bezier(0.34, 1.56, 0.64, 1)",
          transitionDelay: phase === "center" ? "0.3s" : "0s",
          pointerEvents: "none",
        }}
      >
        {/* Скотч сверху */}
        <div
          className="absolute -top-3 left-1/2 -translate-x-1/2 z-30"
          style={{
            width: "60px",
            height: "18px",
            background: "rgba(210, 190, 230, 0.55)",
            transform: `translateX(-50%) rotate(${centerRotation * 0.3}deg)`,
            borderRadius: "2px",
            boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
          }}
        />
        <div
          className="relative"
          style={{
            transform: `rotate(${centerRotation}deg)`,
            transformOrigin: "50% 0%", // качается от верхнего края (где скотч)
            transition: "transform 0.05s linear",
            filter: "drop-shadow(0 20px 60px rgba(0,0,0,0.7)) drop-shadow(0 0 40px rgba(239,68,68,0.2))",
            width: "min(280px, 80vw)",
          }}
        >
          <img
            src={FLYER_URL}
            alt="ОКИНО — Карта города"
            className="w-full h-auto rounded-sm shadow-2xl"
            draggable={false}
          />
        </div>
        <p
          className="font-geist text-white/40 text-xs mt-5 tracking-widest"
          style={{
            opacity: phase === "center" ? 1 : 0,
            transition: "opacity 0.5s ease",
            transitionDelay: "1.5s",
            animation: "pulse 2.5s ease-in-out infinite",
          }}
        >
          нажмите, чтобы продолжить
        </p>
      </div>

      {/* Клик-зона */}
      <button
        className="absolute inset-0 w-full h-full cursor-pointer z-10"
        onClick={() => { setPhase("leave"); setTimeout(onDone, 1000) }}
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