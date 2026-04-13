import { useEffect, useState } from "react"
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

// Параметры фоновых флаеров — фиксированные, не меняются между рендерами
const BG_FLYERS = [
  { id:0,  x:8,   y:12,  rot:-18, s0:0.10, s1:0.26, dur:7.0, delay:0.0, op:0.55 },
  { id:1,  x:72,  y:5,   rot: 22, s0:0.08, s1:0.20, dur:8.5, delay:0.4, op:0.45 },
  { id:2,  x:40,  y:18,  rot:-8,  s0:0.12, s1:0.30, dur:6.5, delay:0.8, op:0.60 },
  { id:3,  x:85,  y:30,  rot: 35, s0:0.09, s1:0.22, dur:9.0, delay:0.2, op:0.40 },
  { id:4,  x:15,  y:55,  rot:-25, s0:0.11, s1:0.28, dur:7.5, delay:1.0, op:0.50 },
  { id:5,  x:60,  y:48,  rot: 12, s0:0.07, s1:0.18, dur:8.0, delay:0.6, op:0.38 },
  { id:6,  x:90,  y:62,  rot:-15, s0:0.13, s1:0.32, dur:7.2, delay:1.4, op:0.52 },
  { id:7,  x:28,  y:80,  rot: 28, s0:0.09, s1:0.24, dur:8.8, delay:0.3, op:0.42 },
  { id:8,  x:55,  y:75,  rot:-32, s0:0.10, s1:0.27, dur:6.8, delay:1.1, op:0.48 },
  { id:9,  x:78,  y:85,  rot: 18, s0:0.08, s1:0.21, dur:9.2, delay:0.7, op:0.36 },
  { id:10, x:20,  y:35,  rot:-10, s0:0.11, s1:0.29, dur:7.8, delay:1.6, op:0.44 },
  { id:11, x:50,  y:90,  rot: 40, s0:0.09, s1:0.23, dur:8.3, delay:0.9, op:0.46 },
]

// Частицы для эффекта рассыпания — конечные позиции разлёта
const PARTICLES = [
  { tx: -28, ty: -42, r: -120, sc: 0.05 },
  { tx:  10, ty: -58, r:  95,  sc: 0.04 },
  { tx:  42, ty: -30, r:  200, sc: 0.06 },
  { tx: -48, ty: -12, r: -180, sc: 0.04 },
  { tx:  55, ty:   8, r:  150, sc: 0.05 },
  { tx: -15, ty:  48, r: -90,  sc: 0.04 },
  { tx:  32, ty:  52, r:  220, sc: 0.03 },
  { tx: -42, ty:  38, r: -160, sc: 0.05 },
  { tx:   5, ty:  65, r:  80,  sc: 0.04 },
  { tx:  62, ty: -18, r: -200, sc: 0.04 },
  { tx: -62, ty: -28, r:  170, sc: 0.03 },
  { tx:  18, ty: -72, r: -130, sc: 0.05 },
]

function Particles() {
  const [exploded, setExploded] = useState(false)

  useEffect(() => {
    const id = requestAnimationFrame(() => setExploded(true))
    return () => cancelAnimationFrame(id)
  }, [])

  return (
    <>
      {PARTICLES.map((p, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            width: "min(120px, 30vw)",
            overflow: "hidden",
            borderRadius: "3px",
            opacity: exploded ? 0 : 0.9,
            transform: exploded
              ? `translate(${p.tx}vw, ${p.ty}vh) rotate(${p.r}deg) scale(${p.sc})`
              : "translate(0,0) rotate(0deg) scale(1)",
            transition: `transform ${0.8 + i * 0.03}s cubic-bezier(0.2,0,0.6,1) ${i * 0.02}s, opacity ${0.6}s ease ${0.15 + i * 0.02}s`,
          }}
        >
          <img src={FLYER_URL} alt="" style={{ width: "100%", display: "block" }} draggable={false} />
        </div>
      ))}
    </>
  )
}

export function FlyerAnimation({ onDone }: { onDone: () => void }) {
  const [phase, setPhase] = useState<"fly" | "pinned" | "leave" | "done">("fly")

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("pinned"), 3500)
    const t2 = setTimeout(() => setPhase("leave"),  10500)
    const t3 = setTimeout(() => { setPhase("done"); onDone() }, 12000)
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3) }
  }, [onDone])

  if (phase === "done") return null

  const flying = phase === "fly"
  const pinned = phase === "pinned"
  const leaving = phase === "leave"

  return (
    <div className="fixed inset-0 z-[10000] bg-black overflow-hidden">

      {/* Фоновые флаеры */}
      {BG_FLYERS.map(f => (
        <div
          key={f.id}
          className="absolute pointer-events-none"
          style={{
            left: `${f.x}%`,
            top:  `${f.y}%`,
            width: "280px",
            animation: flying
              ? `flyerZoom ${f.dur}s cubic-bezier(0.2, 0.0, 0.4, 1.0) ${f.delay}s both`
              : "none",
            opacity: flying ? undefined : 0,
            transform: flying
              ? undefined
              : `translate(-50%,-50%) rotate(${f.rot + 20}deg) scale(0.05)`,
            transition: flying ? "none" : `opacity 1.5s ease, transform 1.8s ease`,
            "--rot": `${f.rot}deg`,
            "--s0":  `${f.s0}`,
            "--s1":  `${f.s1}`,
          } as React.CSSProperties}
        >
          <img src={FLYER_URL} alt="" style={{ width: "100%", borderRadius: "3px", filter: "brightness(0.55)" }} draggable={false} />
        </div>
      ))}

      {/* Приклеенный флаер по центру */}
      <div className="absolute inset-0 flex items-center justify-center" style={{ pointerEvents: "none" }}>

        {/* Частицы рассыпания — монтируются в момент leave, сразу разлетаются */}
        {leaving && <Particles />}

        {/* Основной флаер — скрывается мгновенно при leave */}
        <div style={{
          width: "min(290px, 80vw)",
          position: "relative",
          opacity: pinned ? 1 : 0,
          animation: pinned ? "flyerWave 4.5s ease-in-out infinite" : "none",
          transition: "opacity 1.0s ease 0.2s",
          transformOrigin: "50% 6px",
          filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.8))",
        }}>
          {/* Скотч */}
          <div style={{
            position: "absolute", top: "-7px", left: "50%",
            transform: "translateX(-50%)",
            width: "68px", height: "17px",
            background: "rgba(215,192,238,0.56)",
            borderRadius: "3px",
            boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
          }} />
          <img
            src={FLYER_URL}
            alt="ОКИНО — Карта города"
            style={{ width: "100%", borderRadius: "4px", display: "block" }}
            draggable={false}
          />
        </div>
      </div>

      {/* Подпись */}
      <p
        className="absolute bottom-[10%] left-1/2 -translate-x-1/2 font-geist text-white/30 text-xs tracking-widest"
        style={{
          opacity: pinned ? 1 : 0,
          transition: "opacity 0.8s ease 2s",
          animation: pinned ? "pulse 2.5s ease-in-out 2s infinite" : "none",
          whiteSpace: "nowrap",
        }}
      >
        нажмите, чтобы продолжить
      </p>

      {/* Клик */}
      <button
        className="absolute inset-0 w-full h-full cursor-pointer"
        onClick={() => { setPhase("leave"); setTimeout(onDone, 1400) }}
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
        <CityMapBackground opacity={0.28} />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent z-10" />
          <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black to-transparent z-10" />
        </div>

        <div className="relative z-10 text-center px-4 flex flex-col items-center">
          <div className="mb-4 hidden sm:flex items-center gap-3">
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
            <a href="https://okino-event.timepad.ru/event/3922667/" target="_blank" rel="noopener noreferrer">
              <Button className="bg-red-600 hover:bg-red-700 text-white font-ui border-0 text-xs tracking-widest px-8 py-3">
                Купить билет
              </Button>
            </a>

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