import { useState } from "react"
import Icon from "@/components/ui/icon"
import { Button } from "@/components/ui/button"
import { CityMapBackground } from "@/components/city-map-background"

// Каждый день — два одинаковых показа: 14:00 и 18:00
const sharedSessions = [
  {
    time: "14:00",
    title: "Дневной показ",
    desc: "Полная программа фестиваля — Блок 1 и Блок 2. Показ для тех, кто предпочитает дневное время.",
    type: "screening",
  },
  {
    time: "18:00",
    title: "Вечерний показ",
    desc: "Полная программа фестиваля — Блок 1 и Блок 2. Основной вечерний сеанс.",
    type: "screening",
  },
  {
    time: "после показа",
    title: "Обсуждение",
    desc: "Открытый разговор с авторами фильмов. Вопросы из зала.",
    type: "talk",
  },
]

const days = [
  {
    date: "24 апреля",
    weekday: "Четверг",
    sessions: [
      { ...sharedSessions[0] },
      { ...sharedSessions[1] },
      { ...sharedSessions[2] },
      {
        time: "после",
        title: "Открытие фестиваля",
        desc: "Торжественное открытие. Слово организаторов. Небольшой праздник.",
        type: "opening",
      },
    ],
  },
  {
    date: "25 апреля",
    weekday: "Пятница",
    sessions: [
      { ...sharedSessions[0] },
      { ...sharedSessions[1] },
      { ...sharedSessions[2] },
    ],
  },
  {
    date: "26 апреля",
    weekday: "Суббота",
    sessions: [
      { ...sharedSessions[0] },
      { ...sharedSessions[1] },
      { ...sharedSessions[2] },
      {
        time: "после",
        title: "Церемония закрытия",
        desc: "Финальное слово организаторов. Финальная вечеринка.",
        type: "closing",
      },
    ],
  },
]

const typeColors: Record<string, string> = {
  opening:   "border-red-500/40 bg-red-500/5",
  screening: "border-white/10 bg-white/3",
  talk:      "border-red-500/20 bg-red-500/3",
  closing:   "border-red-500/40 bg-red-500/5",
}

const typeTextColors: Record<string, string> = {
  opening:   "text-red-400",
  screening: "text-white",
  talk:      "text-red-300",
  closing:   "text-red-400",
}

export function ApplicationsTimeline() {
  const [activeDay, setActiveDay] = useState(0)

  return (
    <section id="schedule" className="py-20 px-4 bg-zinc-950 relative overflow-hidden">
      <CityMapBackground opacity={0.18} />
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-10">
          <h2 className="font-heading text-4xl md:text-6xl text-white">Расписание показов</h2>
          {/* Важная подсказка про два показа */}
          <div className="mt-4 inline-flex items-start gap-2 bg-red-500/8 border border-red-500/20 rounded-lg px-4 py-3 max-w-lg mx-auto">
            <Icon name="Info" size={14} className="text-red-400 flex-shrink-0 mt-0.5" />
            <p className="font-geist text-white/60 text-sm text-left leading-relaxed">
              Каждый день — <span className="text-white">два показа</span>: в <span className="text-red-400">14:00</span> и в <span className="text-red-400">18:00</span>. Выберите удобное время. Места ограничены — берите билеты заранее.
            </p>
          </div>
        </div>

        {/* Переключатель дней */}
        <div className="flex gap-2 md:gap-4 mb-8 justify-center">
          {days.map((day, i) => (
            <button
              key={i}
              onClick={() => setActiveDay(i)}
              className={`flex flex-col items-center px-4 md:px-8 py-3 rounded-lg border transition-all duration-300 ${
                activeDay === i
                  ? "bg-red-600 border-red-600 text-white"
                  : "bg-transparent border-white/10 text-white/50 hover:border-red-500/40 hover:text-white/80"
              }`}
            >
              <span className="font-heading text-2xl md:text-3xl leading-none">{day.date.split(" ")[0]}</span>
              <span className="font-geist text-xs opacity-70">{day.date.split(" ")[1]}</span>
              <span className="font-geist text-[10px] opacity-50 mt-0.5">{day.weekday}</span>
            </button>
          ))}
        </div>

        {/* Сессии */}
        <div className="space-y-3">
          {days[activeDay].sessions.map((session, i) => (
            <div
              key={i}
              className={`flex gap-4 p-4 md:p-5 rounded-lg border transition-all duration-300 ${typeColors[session.type]}`}
            >
              <div className="flex-shrink-0 w-20 text-center">
                <span className={`font-space-mono text-base font-bold ${typeTextColors[session.type]}`}>
                  {session.time}
                </span>
              </div>
              <div className="w-px bg-red-500/15 flex-shrink-0" />
              <div>
                <h3 className={`font-heading text-lg ${typeTextColors[session.type]}`}>
                  {session.title}
                </h3>
                <p className="font-geist text-white/45 text-sm mt-1 leading-relaxed">
                  {session.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="font-geist text-white/25 text-xs mb-5">
            * Расписание может уточняться. Следите за обновлениями в соцсетях.
          </p>
          <Button className="bg-red-600 hover:bg-red-700 text-white font-ui border-0 text-xs tracking-widest px-8">
            <Icon name="Ticket" size={15} className="mr-2" />
            Купить билеты
          </Button>
        </div>
      </div>
    </section>
  )
}
