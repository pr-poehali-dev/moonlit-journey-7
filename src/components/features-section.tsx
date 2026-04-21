import { useState } from "react"
import Icon from "@/components/ui/icon"
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
  image?: string
}

// Блок 1 — левая часть карты, Блок 2 — правая
const films: Film[] = [
  // БЛОК 1
  { id: 4,  title: "Три товарища",    author: "Ксения Ремарк",        synopsis: "В уютной библиотеке трое давних друзей собираются вместе, погруженные в атмосферу уюта и спокойствия. В их образах — женщины в мужских ролях — делятся своими мыслями о женщинах, о чувствах и жизни. В этот тихий вечер разговоры ведутся откровенно, но один из них скрывает тайну, которая остаётся за кадром до самого конца.",  duration: "12:26", location: "Библиотека",           block: 1, x: 8,  y: 31, image: "https://cdn.poehali.dev/projects/59266136-7b6c-414f-a200-d1fd1000076c/bucket/1fb63b86-b3f0-469e-8433-7c373957db27.jpg" },
  { id: 5,  title: "Мост",            author: "Артур Садриев",         synopsis: "Камерная драматическая история о случайной ночной встрече на пустынном мосту. Один разговор между двумя незнакомыми людьми постепенно раскрывает их внутреннюю боль, одиночество и хрупкое стремление продолжать жить. Это фильм о человеческой близости, эмпатии и надежде, которая может появиться даже в самый тёмный момент.",  duration: "2:52",  location: "Мост",                 block: 1, x: 29, y: 17, image: "https://cdn.poehali.dev/projects/59266136-7b6c-414f-a200-d1fd1000076c/bucket/460e6d73-50c7-4eeb-b1f3-936f1c6d3eff.PNG" },
  { id: 9,  title: "С любовью, Борис",author: "Виталий Красильников",  synopsis: "«Не читал, но осуждаю» — последствия травли великого поэта Пастернака Бориса в вольной интерпретации Красильникова Виталия.",  duration: "15:07", location: "Деревенский домик",    block: 1, x: 14, y: 72, image: "https://cdn.poehali.dev/projects/59266136-7b6c-414f-a200-d1fd1000076c/bucket/54059d7c-fafa-47ee-8dd3-8765b74e075d.jpg" },
  { id: 15, title: "ПВЗ",             author: "Артур Камалов",         synopsis: "Мрачная фантастическая драма о нарастающем безумии вокруг рядового оператора нишевого пункта выдачи заказов на фоне мирового кризиса.",  duration: "9:45",  location: "ПВЗ",                  block: 1, x: 41, y: 55, image: "https://cdn.poehali.dev/projects/59266136-7b6c-414f-a200-d1fd1000076c/bucket/e6c9541f-6aa5-43d0-ac5f-02ac92322fd1.png" },
  { id: 20, title: "Остановка",       author: "Андрей Петров",         synopsis: "Этот фильм не о любви, как можно подумать, только посмотрев его. Он о том, что в жизни каждое событие, даже мимолётное, имеет определённый смысл и делает нас такими, какие мы есть.",  duration: "11:54", location: "Остановка",            block: 1, x: 22, y: 47, image: "https://cdn.poehali.dev/projects/59266136-7b6c-414f-a200-d1fd1000076c/bucket/eea9042f-070b-49d0-b9c1-81f0d476d696.png" },
  { id: 21, title: "Plato",           author: "Темур Сангинов",        synopsis: "Экспериментальный фильм, приглашающий зрителя поучаствовать в интерпретации истории о расставании, принятии и столкновении с очередной непреодолимой стеной. Так ли это на самом деле?",  duration: "6:13",  location: "Роллердром/скейтпарк", block: 1, x: 36, y: 83, image: "https://cdn.poehali.dev/projects/59266136-7b6c-414f-a200-d1fd1000076c/bucket/b08e8704-7ec1-4642-aa20-dfedb70e9d1c.jpg" },
  { id: 23, title: "Мужество",        author: "Денис Файзулин",        synopsis: "Двое молодых людей сталкиваются в подземном переходе. Никто из них не выходит из подземки прежним.",  duration: "3:38",  location: "Подземный переход",    block: 1, x: 44, y: 28, image: "https://cdn.poehali.dev/projects/59266136-7b6c-414f-a200-d1fd1000076c/bucket/f6b72159-c479-4780-a10c-5de961551d0e.png" },
  // БЛОК 2
  { id: 2,  title: "Кисть",           author: "Екатерина Кузнецова",   synopsis: "Один шедевр. Один покупатель. И одна грандиозная ловушка. Коллекционер-циник годами продаёт «пустые» картины богатым простакам. Но когда анонимный художник под псевдонимом «Мастер» приглашает его в провинциальный город за «уникальным артефактом» — правила игры начинают меняться. Он всё ещё мастер блефа или главный экспонат в чужой игре абсурда?",  duration: "13:00",     location: "Автовокзал",           block: 2, x: 55, y: 19, image: "https://cdn.poehali.dev/projects/59266136-7b6c-414f-a200-d1fd1000076c/bucket/dde5a1eb-506b-470c-986a-37ca0cc5f27c.jpg" },
  { id: 3,  title: "Форма жизни",     author: "Айрат Башаров",         synopsis: "У юной девушки есть мечта: купить себе музыкальный инструмент своими силами. Но один курьёзный случай мешает её планам. Как она справится с этим — или ей кто-то поможет?",  duration: "9:20",  location: "Банк / банкомат",      block: 2, x: 77, y: 36, image: "https://cdn.poehali.dev/projects/59266136-7b6c-414f-a200-d1fd1000076c/bucket/85d3f854-e1ff-44bd-9597-0ccccfa65443.png" },
  { id: 10, title: "Между стенами",   author: "Алексей Мурыгин",       synopsis: "Случайная перепалка двух девушек в общежитии становится началом странного и неожиданного диалога. История о столкновении характеров и хрупком контакте между людьми.",  duration: "9:50",     location: "Туалет",               block: 2, x: 63, y: 74, image: "https://cdn.poehali.dev/projects/59266136-7b6c-414f-a200-d1fd1000076c/bucket/a6e8d4cb-0674-4c14-9272-8cea2eb421f1.jpg" },
  { id: 13, title: "Побочный эффект", author: "Алиса Чинская",         synopsis: "После происшествия на ночной дороге герой пытается сохранить контроль над ситуацией… Но напряжение сильнее, чем он способен выдержать.",  duration: "8:40",     location: "СТО / Автомойка / АЗС",block: 2, x: 88, y: 61, image: "https://cdn.poehali.dev/projects/59266136-7b6c-414f-a200-d1fd1000076c/bucket/148c1646-ba9a-4b4c-9e82-f8834be12f02.jpg" },
  { id: 14, title: "Кошмар",          author: "Михаил Чепкасов",       synopsis: "Мария приходит в себя ночью на пустой заснеженной парковке рядом с сигналящей машиной. Пытаясь выбраться, она обнаруживает, что попала в место, живущее по своим правилам: пространство меняется, пути замыкаются, а каждое решение ведёт всё глубже в ловушку. Здесь что-то знает о ней больше, чем должно.",  duration: "10:00",     location: "Парковка",             block: 2, x: 71, y: 50, image: "https://cdn.poehali.dev/projects/59266136-7b6c-414f-a200-d1fd1000076c/bucket/f2468985-71f8-4f91-bcf9-bbb2fff4e737.jpg" },
  { id: 19, title: "Два пути",        author: "Артур Мифтахов",        synopsis: "Два друга детства встречаются спустя годы: один, устав от уличной жизни, пришёл в офис и пытается построить карьеру, а второй так и остался жить по законам улицы. За короткой встречей они пытаются понять, кто из них на самом деле сделал правильный выбор.",  duration: "8:21",     location: "Офис",                 block: 2, x: 59, y: 43, image: "https://cdn.poehali.dev/projects/59266136-7b6c-414f-a200-d1fd1000076c/bucket/db1134b5-4f9d-484b-8caa-f61a2f2ddbea.jpg" },
  { id: 27, title: "8 кухонных метров",author: "Дмитрий Сарычев",      synopsis: "Уставший после работы музыкант возвращается в свою маленькую съёмную квартиру. Что может прийти ему в голову в тишине старой кухни? Планы на завтра? Как пережить кризис среднего возраста? Или всё-таки новая песня?",  duration: "5:30",     location: "Кухня",                block: 2, x: 82, y: 82, image: "https://cdn.poehali.dev/projects/59266136-7b6c-414f-a200-d1fd1000076c/bucket/d9e69eaa-8a60-4cef-abec-38481c7c08f5.jpg" },
]

function MapPin({ film, isActive, onClick }: { film: Film; isActive: boolean; onClick: () => void }) {
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
              fill={isActive ? "#ef4444" : "#dc2626"} />
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

        {film.image && (
          <div className="mb-3 rounded overflow-hidden">
            <img src={film.image} alt={film.title} className="w-full h-32 object-cover" style={film.id === 3 ? { objectPosition: "center 0%" } : undefined} />
          </div>
        )}

        <p className="font-geist text-white/60 text-xs leading-relaxed">
          {film.synopsis}
        </p>


      </div>
    </div>
  )
}

export function FeaturesSection() {
  const [activeFilm, setActiveFilm] = useState<Film | null>(null)
  const handlePin = (film: Film) => {
    setActiveFilm(prev => prev?.id === film.id ? null : film)
  }

  const visibleFilms = films

  return (
    <section id="films" className="py-20 px-4 bg-black relative overflow-hidden">
      <CityMapBackground opacity={0.20} />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-8">
          <h2 className="font-heading text-4xl md:text-6xl text-white">Карта фильмов</h2>
          <p className="font-ui text-white text-sm mt-2 tracking-widest font-bold">
            Нажмите на метку, чтобы узнать о фильме
          </p>
          <p className="font-geist text-white/25 text-xs mt-1">
            *Последовательность фильмов на фестивале может измениться
          </p>
        </div>

        {/* Фильтр */}
        <div className="flex gap-2 justify-center mb-6">
          <button className="font-ui text-xs px-4 py-2 rounded border transition-all tracking-widest bg-red-600 border-red-600 text-white">
            Все фильмы
          </button>
        </div>

        {/* Карта */}
        <div
          className="relative rounded-lg overflow-hidden border border-white/10"
          style={{
            height: "clamp(340px, 55vw, 520px)",
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
          {/* Декоративный SVG — карта города */}
          <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice">
            {/* Концентрические круги по центру */}
            <circle cx="200" cy="200" r="170" stroke="white" strokeWidth="0.5" fill="none" />
            <circle cx="200" cy="200" r="115" stroke="white" strokeWidth="0.5" fill="none" />
            <circle cx="200" cy="200" r="60"  stroke="white" strokeWidth="0.5" fill="none" />
            {/* Главная дорога горизонталь */}
            <line x1="0" y1="230" x2="400" y2="215" stroke="white" strokeWidth="1.2" opacity="0.4" />
            {/* Главная дорога диагональ */}
            <line x1="0" y1="40" x2="400" y2="360" stroke="white" strokeWidth="1" opacity="0.3" />
            {/* Второстепенные дороги */}
            <path d="M80 0 Q90 70 100 140 Q112 210 95 280 Q80 350 85 400" stroke="white" strokeWidth="0.7" fill="none" opacity="0.3" />
            <path d="M310 0 Q300 80 285 150 Q270 220 280 300 Q290 360 300 400" stroke="white" strokeWidth="0.7" fill="none" opacity="0.3" />
            <path d="M0 320 Q80 310 150 295 Q220 278 290 285 Q340 292 400 280" stroke="white" strokeWidth="0.7" fill="none" opacity="0.3" />
            {/* Переулки короткие */}
            <line x1="150" y1="155" x2="180" y2="240" stroke="white" strokeWidth="0.4" opacity="0.25" />
            <line x1="245" y1="150" x2="260" y2="230" stroke="white" strokeWidth="0.4" opacity="0.25" />
            <line x1="110" y1="275" x2="200" y2="265" stroke="white" strokeWidth="0.4" opacity="0.2" />
            <line x1="220" y1="270" x2="310" y2="255" stroke="white" strokeWidth="0.4" opacity="0.2" />
          </svg>

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
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-1.5">
          {films.map(f => (
            <button
              key={f.id}
              onClick={() => setActiveFilm(f)}
              className="w-full flex items-center gap-3 px-3 py-2 rounded border border-white/8 bg-zinc-950/60 hover:border-red-500/30 hover:bg-zinc-900/60 transition-all text-left group"
            >
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
    </section>
  )
}