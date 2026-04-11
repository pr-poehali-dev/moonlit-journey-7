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
  district: string
  x: number
  y: number
  color?: string
}

const films: Film[] = [
  { id: 1, title: "Место добавится", author: "Автор", synopsis: "Описание фильма появится здесь позже.", duration: "—", district: "Центр", x: 48, y: 42, color: "#ef4444" },
  { id: 2, title: "Место добавится", author: "Автор", synopsis: "Описание фильма появится здесь позже.", duration: "—", district: "Север", x: 52, y: 28, color: "#ef4444" },
  { id: 3, title: "Место добавится", author: "Автор", synopsis: "Описание фильма появится здесь позже.", duration: "—", district: "Запад", x: 30, y: 50, color: "#ef4444" },
  { id: 4, title: "Место добавится", author: "Автор", synopsis: "Описание фильма появится здесь позже.", duration: "—", district: "Восток", x: 70, y: 52, color: "#ef4444" },
  { id: 5, title: "Место добавится", author: "Автор", synopsis: "Описание фильма появится здесь позже.", duration: "—", district: "Юг", x: 50, y: 70, color: "#ef4444" },
]

function MapPin({ film, isActive, onClick }: { film: Film; isActive: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="absolute -translate-x-1/2 -translate-y-full group"
      style={{ left: `${film.x}%`, top: `${film.y}%`, zIndex: isActive ? 20 : 10 }}
    >
      <div className="relative flex flex-col items-center">
        <div className={`transition-all duration-300 ${isActive ? "scale-125" : "scale-100 group-hover:scale-110"}`}>
          <svg viewBox="0 0 40 56" className="w-8 h-10 md:w-10 md:h-14 drop-shadow-xl" fill="none">
            <path d="M20 2C10.6 2 3 9.6 3 19c0 11.7 17 35 17 35s17-23.3 17-35C37 9.6 29.4 2 20 2z"
              fill={isActive ? "#dc2626" : "#991b1b"} />
            <circle cx="20" cy="19" r="8" fill="#000" opacity="0.4" />
            <circle cx="20" cy="19" r="5" fill={isActive ? "#ef4444" : "#dc2626"} opacity="0.8" />
          </svg>
          {isActive && (
            <div className="absolute -inset-2 rounded-full border-2 border-red-500/50 animate-ping" />
          )}
        </div>
        <span className="font-geist text-[9px] text-white/70 mt-1 whitespace-nowrap bg-black/80 px-1 py-0.5 rounded">
          {film.district}
        </span>
      </div>
    </button>
  )
}

function FilmCard({ film, onClose }: { film: Film; onClose: () => void }) {
  return (
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[90%] max-w-sm z-30 animate-in slide-in-from-bottom-4 duration-300">
      <div className="bg-zinc-900 border border-red-500/30 rounded-lg p-4 shadow-2xl">
        <div className="flex items-start justify-between mb-3">
          <div>
            <Badge className="bg-red-600 text-white text-xs mb-2 font-geist">{film.district}</Badge>
            <h3 className="font-bebas text-2xl text-white leading-tight">{film.title}</h3>
            <p className="font-geist text-red-400 text-sm">{film.author}</p>
          </div>
          <button onClick={onClose} className="text-white/40 hover:text-white transition-colors ml-2">
            <Icon name="X" size={18} />
          </button>
        </div>
        <p className="font-geist text-white/60 text-sm leading-relaxed mb-3">{film.synopsis}</p>
        <div className="flex items-center gap-4 text-white/40 text-xs font-geist">
          <span className="flex items-center gap-1"><Icon name="Clock" size={12} /> {film.duration}</span>
          <span className="flex items-center gap-1"><Icon name="MapPin" size={12} /> {film.district}</span>
        </div>
        <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between">
          <span className="font-geist text-white/30 text-xs">🎬 Кадр из фильма появится здесь</span>
          <span className="font-geist text-white/20 text-[10px]">скоро</span>
        </div>
      </div>
    </div>
  )
}

export function FeaturesSection() {
  const [activeFilm, setActiveFilm] = useState<Film | null>(null)

  const handlePin = (film: Film) => {
    setActiveFilm(prev => prev?.id === film.id ? null : film)
  }

  return (
    <section id="films" className="py-20 px-4 bg-black relative overflow-hidden">
      <CityMapBackground opacity={0.20} />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-10">
          <h2 className="font-bebas text-5xl md:text-7xl text-white tracking-wide">Карта фильмов</h2>
          <p className="font-geist text-white/50 text-sm mt-2 tracking-widest uppercase">
            Нажмите на точку, чтобы узнать о фильме
          </p>
        </div>

        <div
          className="relative rounded-lg overflow-hidden border border-white/10"
          style={{
            height: "480px",
            background: "radial-gradient(ellipse 90% 80% at 50% 45%, rgba(60,60,60,0.15) 0%, transparent 70%), #0a0a0a",
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
          <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice">
            <circle cx="200" cy="200" r="160" stroke="white" strokeWidth="0.5" fill="none" />
            <circle cx="200" cy="200" r="110" stroke="white" strokeWidth="0.5" fill="none" />
            <circle cx="200" cy="200" r="60" stroke="white" strokeWidth="0.5" fill="none" />
            <line x1="40" y1="200" x2="360" y2="200" stroke="white" strokeWidth="0.5" />
            <line x1="200" y1="40" x2="200" y2="360" stroke="white" strokeWidth="0.5" />
            <path d="M200 40 Q240 100 270 140 Q310 180 360 200 Q310 220 270 260 Q240 300 200 360 Q160 300 130 260 Q90 220 40 200 Q90 180 130 140 Q160 100 200 40Z" stroke="white" strokeWidth="0.3" fill="none" opacity="0.5" />
            <path d="M100 80 Q140 120 170 160 Q185 180 190 200" stroke="white" strokeWidth="0.4" fill="none" opacity="0.6" />
            <path d="M300 80 Q260 120 230 160 Q215 180 210 200" stroke="white" strokeWidth="0.4" fill="none" opacity="0.6" />
            <path d="M80 300 Q130 280 170 250 Q185 225 200 215" stroke="white" strokeWidth="0.4" fill="none" opacity="0.6" />
            <path d="M320 300 Q270 280 230 250 Q215 225 200 215" stroke="white" strokeWidth="0.4" fill="none" opacity="0.6" />
          </svg>

          {films.map((film) => (
            <MapPin
              key={film.id}
              film={film}
              isActive={activeFilm?.id === film.id}
              onClick={() => handlePin(film)}
            />
          ))}

          {activeFilm && (
            <FilmCard film={activeFilm} onClose={() => setActiveFilm(null)} />
          )}

          <div className="absolute top-3 left-3 font-geist text-white/20 text-[10px] uppercase tracking-widest">
            Интерактивная карта фестиваля
          </div>
          <div className="absolute top-3 right-3 flex items-center gap-1 text-red-500/60 text-[10px] font-geist">
            <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
            {films.length} фильмов
          </div>
        </div>

        <p className="text-center font-geist text-white/25 text-xs mt-4 tracking-wide">
          * Фильмы и описания будут добавляться по мере поступления материалов
        </p>
      </div>
    </section>
  )
}