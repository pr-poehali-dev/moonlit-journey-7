import { useEffect, useState } from "react"

const FESTIVAL_DATE = new Date("2026-04-24T14:00:00")

function getTimeLeft() {
  const now = new Date()
  const diff = FESTIVAL_DATE.getTime() - now.getTime()

  if (diff <= 0) return null

  const days    = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours   = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((diff % (1000 * 60)) / 1000)

  return { days, hours, minutes, seconds }
}

function Digit({ value, label }: { value: number; label: string }) {
  const display = String(value).padStart(2, "0")
  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        {/* Плашка с числом */}
        <div
          className="font-bebas text-5xl md:text-7xl text-white tabular-nums leading-none"
          style={{ minWidth: "2ch", textAlign: "center" }}
        >
          {display}
        </div>
        {/* Тонкая горизонтальная линия посередине — как флаер на скотче */}
        <div className="absolute inset-x-0 top-1/2 h-px bg-white/10 pointer-events-none" />
      </div>
      <span className="font-ui text-white/40 text-[9px] tracking-[0.3em] mt-2 uppercase">
        {label}
      </span>
    </div>
  )
}

export function Countdown() {
  const [time, setTime] = useState(getTimeLeft)

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000)
    return () => clearInterval(id)
  }, [])

  // Фестиваль уже идёт или прошёл
  if (time === null) return null

  return (
    <section className="bg-black relative overflow-hidden py-14 px-4 border-y border-white/5">
      <div className="max-w-3xl mx-auto text-center">

        <p className="font-ui text-red-500 text-[10px] tracking-[0.5em] mb-8 uppercase">
          До начала фестиваля
        </p>

        {/* Счётчик */}
        <div className="flex items-start justify-center gap-3 md:gap-10">
          <Digit value={time.days}    label="дней"   />
          <span className="font-heading text-4xl md:text-6xl text-red-500/50 leading-none mt-1 select-none font-light">:</span>
          <Digit value={time.hours}   label="часов"  />
          <span className="font-heading text-4xl md:text-6xl text-red-500/50 leading-none mt-1 select-none font-light">:</span>
          <Digit value={time.minutes} label="минут"  />
          <span className="font-heading text-4xl md:text-6xl text-red-500/50 leading-none mt-1 select-none font-light">:</span>
          <Digit value={time.seconds} label="секунд" />
        </div>

        <p className="font-geist text-white/25 text-sm mt-8 tracking-wider">
          24–26 апреля · 14:00 и 18:00 · Набережные Челны
        </p>

        <div className="flex items-center gap-4 mt-8">
          <div className="flex-1 h-px bg-white/6" />
          <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
          <div className="flex-1 h-px bg-white/6" />
        </div>
      </div>
    </section>
  )
}