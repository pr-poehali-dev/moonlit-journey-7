import { useState } from "react"
import Icon from "@/components/ui/icon"
import { Button } from "@/components/ui/button"
import { CityMapBackground } from "@/components/city-map-background"

interface Session {
  time: string
  title: string
  desc: string
  type: "opening" | "screening" | "talk" | "closing" | "special"
}

interface ShowBlock {
  label: string
  labelTime: string
  color: "day" | "evening"
  sessions: Session[]
}

interface Day {
  date: string
  weekday: string
  shows: ShowBlock[]
}

const days: Day[] = [
  {
    date: "24 апреля",
    weekday: "Четверг",
    shows: [
      {
        label: "Дневной показ",
        labelTime: "14:00",
        color: "day",
        sessions: [
          {
            time: "до показа",
            title: "Открытие фестиваля",
            desc: "Торжественное открытие первого дня. Слово организаторов и знакомство с программой.",
            type: "opening",
          },
          {
            time: "14:00",
            title: "Дневной показ",
            desc: "Полная программа фестиваля — Блок 1 и Блок 2. Показ для тех, кто предпочитает дневное время.",
            type: "screening",
          },
          {
            time: "после показа",
            title: "Обсуждение",
            desc: "Открытый разговор с авторами фильмов. Вопросы из зала, живое общение с командой.",
            type: "talk",
          },
        ],
      },
      {
        label: "Вечерний показ",
        labelTime: "18:00",
        color: "evening",
        sessions: [
          {
            time: "до показа",
            title: "Сбор гостей",
            desc: "Встреча участников и гостей фестиваля. Небольшой фуршет перед вечерним сеансом.",
            type: "special",
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
            desc: "Открытый разговор с авторами фильмов. Вопросы из зала, живое общение с командой.",
            type: "talk",
          },
        ],
      },
    ],
  },
  {
    date: "25 апреля",
    weekday: "Пятница",
    shows: [
      {
        label: "Дневной показ",
        labelTime: "14:00",
        color: "day",
        sessions: [
          {
            time: "до показа",
            title: "Сбор гостей",
            desc: "Встреча участников и гостей фестиваля.",
            type: "special",
          },
          {
            time: "14:00",
            title: "Дневной показ",
            desc: "Полная программа фестиваля — Блок 1 и Блок 2. Показ для тех, кто предпочитает дневное время.",
            type: "screening",
          },
          {
            time: "после показа",
            title: "Обсуждение",
            desc: "Открытый разговор с авторами фильмов. Вопросы из зала.",
            type: "talk",
          },
        ],
      },
      {
        label: "Вечерний показ",
        labelTime: "18:00",
        color: "evening",
        sessions: [
          {
            time: "до показа",
            title: "Сбор гостей",
            desc: "Встреча участников и гостей фестиваля.",
            type: "special",
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
        ],
      },
    ],
  },
  {
    date: "26 апреля",
    weekday: "Суббота",
    shows: [
      {
        label: "Дневной показ",
        labelTime: "14:00",
        color: "day",
        sessions: [
          {
            time: "до показа",
            title: "Сбор гостей",
            desc: "Встреча участников и гостей фестиваля.",
            type: "special",
          },
          {
            time: "14:00",
            title: "Дневной показ",
            desc: "Полная программа фестиваля — Блок 1 и Блок 2. Показ для тех, кто предпочитает дневное время.",
            type: "screening",
          },
          {
            time: "после показа",
            title: "Обсуждение",
            desc: "Открытый разговор с авторами фильмов. Вопросы из зала.",
            type: "talk",
          },
        ],
      },
      {
        label: "Вечерний показ",
        labelTime: "18:00",
        color: "evening",
        sessions: [
          {
            time: "до показа",
            title: "Сбор гостей",
            desc: "Встреча участников и гостей фестиваля.",
            type: "special",
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
          {
            time: "после",
            title: "Церемония закрытия",
            desc: "Объявление итогов фестиваля. Слово организаторов. Финальная вечеринка.",
            type: "closing",
          },
        ],
      },
    ],
  },
]

const typeColors: Record<string, string> = {
  opening: "border-red-500/40 bg-red-500/5",
  screening: "border-white/10 bg-white/3",
  talk: "border-red-500/20 bg-red-500/3",
  closing: "border-red-500/40 bg-red-500/5",
  special: "border-white/8 bg-white/2",
}

const typeTimeColors: Record<string, string> = {
  opening: "text-red-400",
  screening: "text-red-400",
  talk: "text-red-300",
  closing: "text-red-400",
  special: "text-white/40",
}

const typeTitleColors: Record<string, string> = {
  opening: "text-red-400",
  screening: "text-white",
  talk: "text-red-300",
  closing: "text-red-400",
  special: "text-white/60",
}

function ShowAccordion({ show }: { show: ShowBlock }) {
  const [open, setOpen] = useState(false)

  const isDay = show.color === "day"

  return (
    <div className="rounded-lg border overflow-hidden border-red-500/20">
      {/* Заголовок-кнопка */}
      <button
        onClick={() => setOpen(!open)}
        className={`w-full flex items-center justify-between px-4 py-3 transition-colors ${
          isDay ? "bg-white/4 hover:bg-white/8" : "bg-red-500/6 hover:bg-red-500/10"
        }`}
      >
        <div className="flex items-center gap-3">
          <span className="font-space-mono text-lg font-bold text-red-500">
            {show.labelTime}
          </span>
          <div className="w-px h-5 bg-white/15" />
          <span className="font-heading text-base text-white">{show.label}</span>
        </div>
        <Icon
          name={open ? "ChevronUp" : "ChevronDown"}
          size={16}
          className={`transition-colors flex-shrink-0 ${open ? (isDay ? "text-white/60" : "text-red-400") : "text-white/25"}`}
        />
      </button>

      {/* Содержимое */}
      {open && (
        <div className="px-3 pb-3 pt-2 space-y-2 border-t border-white/6">
          {show.sessions.map((session, i) => (
            <div
              key={i}
              className={`flex gap-3 p-3 rounded-lg border ${typeColors[session.type]}`}
            >
              <div className="flex-shrink-0 w-20 text-center">
                <span className={`font-space-mono text-xs font-bold leading-tight ${typeTimeColors[session.type]}`}>
                  {session.time}
                </span>
              </div>
              <div className="w-px bg-red-500/15 flex-shrink-0" />
              <div>
                <h4 className={`font-heading text-sm ${typeTitleColors[session.type]}`}>
                  {session.title}
                </h4>
                <p className="font-geist text-white/40 text-xs mt-0.5 leading-relaxed">
                  {session.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export function ApplicationsTimeline() {
  const [activeDay, setActiveDay] = useState(0)

  return (
    <section id="schedule" className="py-20 px-4 bg-zinc-950 relative overflow-hidden">
      <CityMapBackground opacity={0.18} />
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-10">
          <h2 className="font-heading text-4xl md:text-6xl text-white">Расписание показов</h2>
          <div className="mt-4 inline-flex items-start gap-2 bg-red-500/8 border border-red-500/20 rounded-lg px-4 py-3 max-w-lg mx-auto">
            <Icon name="Info" size={14} className="text-red-400 flex-shrink-0 mt-0.5" />
            <p className="font-geist text-white/70 text-sm text-left leading-relaxed font-semibold">
              Каждый день — <span className="text-white">два показа</span>: в <span className="text-red-400">14:00</span> и в <span className="text-red-400">18:00</span>. Нажмите на показ, чтобы увидеть программу.
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

        {/* Показы */}
        <div className="space-y-3">
          {days[activeDay].shows.map((show, i) => (
            <ShowAccordion key={i} show={show} />
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