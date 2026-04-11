import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

const FLYER_URL = "https://cdn.poehali.dev/projects/59266136-7b6c-414f-a200-d1fd1000076c/bucket/8b7aa1a5-cce5-49f4-9034-39e37035d7fa.jpg"

interface FlyingFlyer {
  id: number
  x: number
  y: number
  rotation: number
  scale: number
  vx: number
  vy: number
  vr: number
  opacity: number
  phase: "flying" | "stopping" | "stopped" | "leaving"
  delay: number
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
  const [flyers, setFlyers] = useState<FlyingFlyer[]>(() =>
    Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      rotation: (Math.random() - 0.5) * 60,
      scale: 0.3 + Math.random() * 0.4,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      vr: (Math.random() - 0.5) * 2,
      opacity: 0.6 + Math.random() * 0.4,
      phase: "flying",
      delay: i * 80,
    }))
  )

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("center"), 1800)
    const t2 = setTimeout(() => setPhase("leave"), 9000)
    const t3 = setTimeout(() => { setPhase("done"); onDone() }, 10200)
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3) }
  }, [onDone])

  useEffect(() => {
    if (phase !== "intro") return
    const interval = setInterval(() => {
      setFlyers(prev => prev.map(f => ({
        ...f,
        x: (f.x + f.vx + 100) % 100,
        y: (f.y + f.vy + 100) % 100,
        rotation: f.rotation + f.vr,
      })))
    }, 50)
    return () => clearInterval(interval)
  }, [phase])

  if (phase === "done") return null

  return (
    <div className="fixed inset-0 z-[10000] bg-black/90 overflow-hidden flex items-center justify-center">
      {flyers.map((f) => (
        <div
          key={f.id}
          className="absolute transition-all"
          style={{
            left: phase === "intro" ? `${f.x}%` : "50%",
            top: phase === "intro" ? `${f.y}%` : "50%",
            transform: phase === "intro"
              ? `translate(-50%, -50%) rotate(${f.rotation}deg) scale(${f.scale})`
              : phase === "center"
              ? `translate(-50%, -50%) rotate(${f.id === 0 ? -2 : f.rotation}deg) scale(${f.id === 0 ? 0 : 0})`
              : `translate(-50%, -50%) rotate(${f.rotation + 180}deg) scale(0.1)`,
            opacity: phase === "intro" ? f.opacity : 0,
            transition: phase === "intro" ? "none" : `all ${f.id === 0 ? 0.8 : 0.5}s ease-in-out`,
            transitionDelay: phase === "intro" ? "0ms" : `${f.id * 30}ms`,
            width: "180px",
            zIndex: f.id === 0 ? 2 : 1,
          }}
        >
          <img src={FLYER_URL} alt="флаер" className="w-full h-auto rounded shadow-2xl" draggable={false} />
        </div>
      ))}

      <div
        className="relative z-10 transition-all duration-700"
        style={{
          opacity: phase === "center" ? 1 : 0,
          transform: phase === "center" ? "scale(1) translateY(0)" : "scale(0.8) translateY(30px)",
          transitionDelay: phase === "center" ? "0.5s" : "0s",
        }}
      >
        <div className="relative max-w-xs mx-auto" style={{ filter: "drop-shadow(0 0 60px rgba(239,68,68,0.4))" }}>
          <img src={FLYER_URL} alt="ОКИНО — Карта города" className="w-full h-auto rounded-lg shadow-2xl" draggable={false} />
        </div>
        <p className="text-white/50 text-center text-xs mt-4 font-geist tracking-widest animate-pulse">
          нажмите, чтобы продолжить
        </p>
      </div>

      <button
        className="absolute inset-0 w-full h-full cursor-pointer"
        onClick={() => { setPhase("leave"); setTimeout(onDone, 800) }}
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
      <section
        className="min-h-screen bg-black relative overflow-hidden flex flex-col items-center justify-center city-map-bg"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 80% 60% at 50% 40%, rgba(180,180,180,0.07) 0%, transparent 70%),
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(rgba(255,255,255,0.012) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.012) 1px, transparent 1px)
          `,
          backgroundSize: "auto, 80px 80px, 80px 80px, 20px 20px, 20px 20px",
        }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black to-transparent" />
        </div>

        <div className="relative z-10 text-center px-4 flex flex-col items-center">
          <div className="mb-2 flex items-center gap-2">
            <span className="font-bebas text-red-500 text-sm tracking-[0.3em]">18+</span>
            <span className="w-px h-4 bg-red-500/40" />
            <span className="font-geist text-white/50 text-xs tracking-widest uppercase">Любительское кино</span>
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

          <p className="font-bebas text-red-500 text-xl md:text-2xl tracking-[0.25em] mt-2">
            ФЕСТИВАЛЬ КОРОТКОМЕТРАЖНОГО КИНО
          </p>

          <div className="mt-6 tape-effect inline-block bg-white text-black px-6 py-2 rounded-sm shadow-lg">
            <span className="font-space-mono text-sm md:text-base font-bold tracking-wider">24 / 25 / 26 АПРЕЛЯ</span>
          </div>

          <p className="font-geist text-white/40 text-xs tracking-widest mt-4 uppercase">
            ГЭС 9/02 · Проспект Мусы Джалиля 51 · Этаж 4 · 420 кабинет
          </p>

          <div className="flex gap-4 mt-8">
            <Button className="bg-red-600 hover:bg-red-700 text-white font-geist px-8 py-3 text-base border-0">
              Купить билеты
            </Button>
            <Button variant="outline" className="border-white/20 text-white bg-transparent hover:bg-white/10 font-geist px-6 py-3">
              Смотреть программу
            </Button>
          </div>

          <div className="flex gap-6 mt-6">
            <a href="https://vk.com/okino.square" target="_blank" rel="noopener noreferrer"
              className="font-geist text-white/40 hover:text-red-500 transition-colors text-xs tracking-wider flex items-center gap-1">
              <Icon name="Users" size={14} /> vk.com/okino.square
            </a>
            <a href="https://t.me/okinosquare" target="_blank" rel="noopener noreferrer"
              className="font-geist text-white/40 hover:text-red-500 transition-colors text-xs tracking-wider flex items-center gap-1">
              <Icon name="Send" size={14} /> t.me/okinosquare
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={24} className="text-white/30" />
        </div>
      </section>
    </>
  )
}