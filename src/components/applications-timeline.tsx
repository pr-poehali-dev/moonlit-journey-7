import { useState } from "react"
import Icon from "@/components/ui/icon"
import { Button } from "@/components/ui/button"

const days = [
  {
    date: "24 апреля",
    weekday: "Четверг",
    sessions: [
      { time: "19:00", title: "Открытие фестиваля", desc: "Торжественное открытие. Вступительное слово организаторов. Показ конкурсной программы — блок 1.", type: "opening" },
      { time: "21:00", title: "Неформальное общение", desc: "Дискуссия с авторами фильмов. Вопросы и ответы.", type: "talk" },
    ],
  },
  {
    date: "25 апреля",
    weekday: "Пятница",
    sessions: [
      { time: "19:00", title: "Конкурсная программа — блок 2", desc: "Продолжение показов основного конкурса.", type: "screening" },
      { time: "20:30", title: "Мастер-класс", desc: "Разбор работ участников. Открытая дискуссия.", type: "workshop" },
    ],
  },
  {
    date: "26 апреля",
    weekday: "Суббота",
    sessions: [
      { time: "18:00", title: "Финальная программа", desc: "Показ финальных работ конкурса.", type: "screening" },
      { time: "20:00", title: "Церемония закрытия", desc: "Объявление победителей. Награждение. Финальная вечеринка.", type: "closing" },
    ],
  },
]

const typeColors: Record<string, string> = {
  opening: "text-red-400 border-red-500/40 bg-red-500/5",
  screening: "text-white/70 border-white/10 bg-white/5",
  talk: "text-red-300 border-red-500/20 bg-red-500/5",
  workshop: "text-white/70 border-white/10 bg-white/5",
  closing: "text-red-400 border-red-500/40 bg-red-500/5",
}

export function ApplicationsTimeline() {
  const [activeDay, setActiveDay] = useState(0)

  return (
    <section id="schedule" className="py-20 px-4 bg-zinc-950">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-bebas text-5xl md:text-7xl text-white tracking-wide">Расписание показов</h2>
          <p className="font-geist text-white/40 text-sm mt-2 tracking-widest uppercase">
            ГЭС 9/02 · Проспект Мусы Джалиля 51 · Этаж 4 · 420 кабинет
          </p>
        </div>

        <div className="flex gap-2 md:gap-4 mb-10 justify-center">
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
              <span className="font-bebas text-2xl md:text-3xl leading-none">{day.date.split(" ")[0]}</span>
              <span className="font-geist text-xs opacity-70">{day.date.split(" ")[1]}</span>
              <span className="font-geist text-[10px] opacity-50 mt-0.5">{day.weekday}</span>
            </button>
          ))}
        </div>

        <div className="space-y-4">
          {days[activeDay].sessions.map((session, i) => (
            <div
              key={i}
              className={`flex gap-4 p-5 rounded-lg border transition-all duration-300 ${typeColors[session.type]}`}
            >
              <div className="flex-shrink-0 w-16 text-center">
                <span className="font-space-mono text-lg text-red-500 font-bold">{session.time}</span>
              </div>
              <div className="w-px bg-red-500/20 flex-shrink-0" />
              <div>
                <h3 className="font-bebas text-xl text-white tracking-wide">{session.title}</h3>
                <p className="font-geist text-white/50 text-sm mt-1 leading-relaxed">{session.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="font-geist text-white/25 text-xs mb-4">
            * Расписание может уточняться. Следите за обновлениями в соцсетях.
          </p>
          <Button className="bg-red-600 hover:bg-red-700 text-white font-geist px-8 border-0">
            <Icon name="Ticket" size={16} className="mr-2" />
            Купить билеты на показы
          </Button>
        </div>
      </div>
    </section>
  )
}
