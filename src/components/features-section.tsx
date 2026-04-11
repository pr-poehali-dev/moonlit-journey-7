import { useState } from "react"
import Icon from "@/components/ui/icon"
import { Badge } from "@/components/ui/badge"
import { CityMapBackground } from "@/components/city-map-background"

interface Film {
  id: number
  title: string
  author: string
  synopsis: string
  duration: string
  location: string
  block: 1 | 2
  x: number
  y: number
}

// Блок 1 — левая часть карты, Блок 2 — правая
const films: Film[] = [
  // БЛОК 1
  { id: 4,  title: "Три товарища",    author: "Ксения Ремарк",        synopsis: "Синопсис появится позже.",  duration: "12:26", location: "Библиотека",           block: 1, x: 22, y: 28 },
  { id: 5,  title: "Мост",            author: "Артур Садриев",         synopsis: "Синопсис появится позже.",  duration: "2:52",  location: "Мост",                 block: 1, x: 30, y: 44 },
  { id: 9,  title: "С любовью, Борис",author: "Виталий Красильников",  synopsis: "Синопсис появится позже.",  duration: "15:07", location: "Деревенский домик",    block: 1, x: 18, y: 58 },
  { id: 15, title: "ПВЗ",             author: "Артур Камалов",         synopsis: "Синопсис появится позже.",  duration: "9:45",  location: "ПВЗ",                  block: 1, x: 38, y: 22 },
  { id: 20, title: "Остановка",       author: "Андрей Петров",         synopsis: "Синопсис появится позже.",  duration: "11:54", location: "Остановка",            block: 1, x: 26, y: 68 },
  { id: 21, title: "Plato",           author: "Темур Сангинов",        synopsis: "Синопсис появится позже.",  duration: "6:13",  location: "Роллердром/скейтпарк", block: 1, x: 42, y: 52 },
  { id: 23, title: "МУЖЕСТВО",        author: "Денис Файзуллин",       synopsis: "Синопсис появится позже.",  duration: "3:38",  location: "Подземный переход",    block: 1, x: 34, y: 76 },
  // БЛОК 2
  { id: 2,  title: "Кисть",          author: "Катерина Кузнецова",    synopsis: "Синопсис появится позже.",  duration: "—",     location: "Автовокзал",           block: 2, x: 58, y: 26 },
  { id: 3,  title: "—",              author: "Айрат Башаров",         synopsis: "Синопсис появится позже.",  duration: "—",     location: "Банк / банкомат",      block: 2, x: 68, y: 38 },
  { id: 10, title: "—",              author: "Алексей Мурыгин",       synopsis: "Синопсис появится позже.",  duration: "—",     location: "Туалет",               block: 2, x: 74, y: 54 },
  { id: 13, title: "Побочный эффект",author: "Алиса Чинская",         synopsis: "Синопсис появится позже.",  duration: "—",     location: "СТО / Автомойка / АЗС",block: 2, x: 62, y: 62 },
  { id: 14, title: "КОШМАР",         author: "Михаил Чепкасов",       synopsis: "Синопсис появится позже.",  duration: "—",     location: "Парковка",             block: 2, x: 80, y: 44 },
  { id: 19, title: "—",              author: "Артур Мифтахов",        synopsis: "Синопсис появится позже.",  duration: "—",     location: "Офис",                 block: 2, x: 70, y: 68 },
  { id: 27, title: "—",              author: "Дима Сарычев",          synopsis: "Синопсис появится позже.",  duration: "—",     location: "Кухня",                block: 2, x: 84, y: 72 },
]

function MapPin({ film, isActive, onClick }: { film: Film; isActive: boolean; onClick: () => void }) {
  const color = film.block === 1 ? "#dc2626" : "#b91c1c"
  return (
    <button
      onClick={onClick}
      className="absolute -translate-x-1/2 -translate-y-full group"
      style={{ left: `${film.x}%`, top: `${film.y}%`, zIndex: isActive ? 20 : 10 }}
    >
      <div className="relative flex flex-col items-center">
        <div className={`transition-all duration-300 ${isActive ? "scale-130" : "scale-100 group-hover:scale-115"}`}>
          <svg viewBox="0 0 40 56" className="w-7 h-9 md:w-9 md:h-12 drop-shadow-xl" fill="none">
            <path d="M20 2C10.6 2 3 9.6 3 19c0 11.7 17 35 17 35s17-23.3 17-35C37 9.6 29.4 2 20 2z"
              fill={isActive ? "#ef4444" : color} />
            <circle cx="20" cy="19" r="8" fill="#000" opacity="0.35" />
            <circle cx="20" cy="19" r="4" fill={isActive ? "#fff" : "#fca5a5"} opacity="0.7" />
          </svg>
          {isActive && <div className="absolute -inset-2 rounded-full border-2 border-red-400/50 animate-ping" />}
        </div>
        <span className="font-geist text-[8px] text-white/60 mt-0.5 whitespace-nowrap bg-black/70 px-1 py-0.5 rounded max-w-[80px] truncate">
          {film.author.split(" ")[0]}
        </span>
      </div>
    </button>
  )
}

function FilmCard({ film, onClose }: { film: Film; onClose: () => void }) {
  const hasTitle = film.title !== "—"
  const hasDuration = film.duration !== "—"

  return (
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[92%] max-w-md z-30"
      style={{ animation: "slideUp 0.25s ease-out" }}>
      <div className="bg-zinc-900/95 border border-red-500/30 rounded-lg p-4 shadow-2xl backdrop-blur">
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <Badge className={`text-white text-[10px] font-ui border-0 ${film.block === 1 ? "bg-red-600" : "bg-red-800"}`}>
                Блок {film.block}
              </Badge>
              <span className="font-geist text-white/30 text-xs">#{film.id}</span>
            </div>
            <h3 className="font-heading text-xl text-white leading-tight">
              {hasTitle ? `«${film.title}»` : <span className="text-white/30 italic text-base">Название уточняется</span>}
            </h3>
            <p className="font-geist text-red-400 text-sm mt-0.5">{film.author}</p>
          </div>
          <button onClick={onClose} className="text-white/30 hover:text-white transition-colors ml-3 flex-shrink-0">
            <Icon name="X" size={16} />
          </button>
        </div>

        <div className="flex flex-wrap gap-3 text-xs font-geist text-white/40 mb-3">
          <span className="flex items-center gap-1">
            <Icon name="MapPin" size={11} />
            {film.location}
          </span>
          {hasDuration && (
            <span className="flex items-center gap-1">
              <Icon name="Clock" size={11} />
              {film.duration}
            </span>
          )}
        </div>

        <p className="font-geist text-white/40 text-xs leading-relaxed italic">
          Синопсис появится позже
        </p>

        <div className="mt-3 pt-3 border-t border-white/8 flex items-center justify-between">
          <span className="font-geist text-white/20 text-[10px]">🎬 Кадр из фильма — скоро</span>
          <span className={`font-ui text-[9px] tracking-wider ${film.block === 1 ? "text-red-500/60" : "text-red-700/60"}`}>
            БЛОК {film.block}
          </span>
        </div>
      </div>
    </div>
  )
}

export function FeaturesSection() {
  const [activeFilm, setActiveFilm] = useState<Film | null>(null)
  const [activeBlock, setActiveBlock] = useState<0 | 1 | 2>(0)

  const handlePin = (film: Film) => {
    setActiveFilm(prev => prev?.id === film.id ? null : film)
  }

  const visibleFilms = activeBlock === 0 ? films : films.filter(f => f.block === activeBlock)

  return (
    <section id="films" className="py-20 px-4 bg-black relative overflow-hidden">
      <CityMapBackground opacity={0.20} />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-8">
          <h2 className="font-heading text-4xl md:text-6xl text-white">Карта фильмов</h2>
          <p className="font-geist text-white/40 text-sm mt-2 tracking-widest uppercase">
            Нажмите на метку, чтобы узнать о фильме
          </p>
          <p className="font-geist text-white/25 text-xs mt-1">
            * Последовательность фильмов не утверждена
          </p>
        </div>

        {/* Фильтр по блокам */}
        <div className="flex gap-2 justify-center mb-6">
          {([["Все фильмы", 0], ["Блок 1", 1], ["Блок 2", 2]] as [string, 0|1|2][]).map(([label, val]) => (
            <button
              key={val}
              onClick={() => { setActiveBlock(val); setActiveFilm(null) }}
              className={`font-ui text-xs px-4 py-2 rounded border transition-all tracking-widest ${
                activeBlock === val
                  ? "bg-red-600 border-red-600 text-white"
                  : "border-white/15 text-white/40 hover:border-red-500/40 hover:text-white/70"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Карта */}
        <div
          className="relative rounded-lg overflow-hidden border border-white/10"
          style={{
            height: "520px",
            background: "#090909",
            backgroundImage: `
              radial-gradient(ellipse 90% 80% at 50% 45%, rgba(60,60,60,0.15) 0%, transparent 70%),
              linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px),
              linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
            `,
            backgroundSize: "auto, 60px 60px, 60px 60px, 15px 15px, 15px 15px",
          }}
        >
          {/* Декоративный SVG — круги и маршруты */}
          <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice">
            <circle cx="200" cy="200" r="160" stroke="white" strokeWidth="0.5" fill="none" />
            <circle cx="200" cy="200" r="110" stroke="white" strokeWidth="0.5" fill="none" />
            <circle cx="200" cy="200" r="60"  stroke="white" strokeWidth="0.5" fill="none" />
            <line x1="40"  y1="200" x2="360" y2="200" stroke="white" strokeWidth="0.5" />
            <line x1="200" y1="40"  x2="200" y2="360" stroke="white" strokeWidth="0.5" />
            <path d="M200 40 Q240 100 270 140 Q310 180 360 200 Q310 220 270 260 Q240 300 200 360 Q160 300 130 260 Q90 220 40 200 Q90 180 130 140 Q160 100 200 40Z" stroke="white" strokeWidth="0.3" fill="none" opacity="0.5" />
            <path d="M100 80  Q140 120 170 160 Q185 180 190 200" stroke="white" strokeWidth="0.4" fill="none" opacity="0.6" />
            <path d="M300 80  Q260 120 230 160 Q215 180 210 200" stroke="white" strokeWidth="0.4" fill="none" opacity="0.6" />
            <path d="M80  300 Q130 280 170 250 Q185 225 200 215" stroke="white" strokeWidth="0.4" fill="none" opacity="0.6" />
            <path d="M320 300 Q270 280 230 250 Q215 225 200 215" stroke="white" strokeWidth="0.4" fill="none" opacity="0.6" />
          </svg>

          {/* Разделитель блоков */}
          <div className="absolute inset-y-0 left-1/2 w-px bg-red-500/15" style={{ borderLeft: "1px dashed rgba(239,68,68,0.2)" }} />

          {/* Подписи блоков */}
          <div className="absolute top-3 left-[25%] -translate-x-1/2 font-ui text-[9px] text-red-500/50 tracking-widest">БЛОК 1</div>
          <div className="absolute top-3 left-[75%] -translate-x-1/2 font-ui text-[9px] text-red-700/50 tracking-widest">БЛОК 2</div>

          {/* Пины */}
          {visibleFilms.map((film) => (
            <MapPin
              key={film.id}
              film={film}
              isActive={activeFilm?.id === film.id}
              onClick={() => handlePin(film)}
            />
          ))}

          {/* Карточка фильма */}
          {activeFilm && (
            <FilmCard film={activeFilm} onClose={() => setActiveFilm(null)} />
          )}

          <div className="absolute bottom-3 right-3 flex items-center gap-1.5 text-white/20 text-[10px] font-geist">
            <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
            {films.length} фильмов
          </div>
        </div>

        {/* Список фильмов под картой */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-3">
          {[1, 2].map(block => (
            <div key={block}>
              <p className="font-ui text-red-500/70 text-[10px] tracking-[0.4em] mb-3">БЛОК {block}</p>
              <div className="space-y-1.5">
                {films.filter(f => f.block === block).map(f => (
                  <button
                    key={f.id}
                    onClick={() => { setActiveBlock(0); setActiveFilm(f) }}
                    className="w-full flex items-center gap-3 px-3 py-2 rounded border border-white/8 bg-zinc-950/60 hover:border-red-500/30 hover:bg-zinc-900/60 transition-all text-left group"
                  >
                    <span className="font-ui text-white/20 text-[10px] w-4 flex-shrink-0">#{f.id}</span>
                    <div className="flex-1 min-w-0">
                      <span className="font-geist text-white/80 text-sm group-hover:text-white transition-colors">
                        {f.title !== "—" ? `«${f.title}»` : <span className="text-white/25 italic text-xs">название уточняется</span>}
                      </span>
                      <span className="font-geist text-white/30 text-xs block">{f.author} · {f.location}</span>
                    </div>
                    {f.duration !== "—" && (
                      <span className="font-space-mono text-white/30 text-[10px] flex-shrink-0">{f.duration}</span>
                    )}
                    <Icon name="MapPin" size={12} className="text-red-500/40 flex-shrink-0" />
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="text-center font-geist text-white/20 text-xs mt-5">
          * Синопсисы и кадры из фильмов будут добавлены позднее
        </p>
      </div>
    </section>
  )
}