export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 bg-black city-map-bg">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="font-bebas text-red-500 text-sm tracking-[0.4em] mb-3">О ПРОЕКТЕ</p>
            <h2 className="font-bebas text-5xl md:text-6xl text-white tracking-wide leading-tight mb-6">
              ОКИНО —<br />это про кино<br />рядом с тобой
            </h2>
            <p className="font-geist text-white/60 leading-relaxed mb-4">
              ОКИНО — это пространство для любительского кино. Мы собираем авторов, которые снимают не ради денег, а ради историй. Наш фестиваль — место, где у каждого фильма есть шанс быть увиденным.
            </p>
            <p className="font-geist text-white/60 leading-relaxed">
              Тема «Карта города» — это про маршруты, которые мы выбираем. Про места, которые нас формируют. Про людей, которых мы встречаем на этих улицах.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            {[
              { label: "Участников", value: "—", sub: "авторов фильмов" },
              { label: "Короткометражек", value: "—", sub: "в конкурсной программе" },
              { label: "Дней фестиваля", value: "3", sub: "24, 25, 26 апреля" },
            ].map((stat, i) => (
              <div key={i} className="border border-white/10 rounded-lg p-5 flex items-center gap-5 bg-zinc-950/50">
                <div className="font-bebas text-4xl text-red-500 w-16 text-center">{stat.value}</div>
                <div className="w-px h-10 bg-white/10" />
                <div>
                  <div className="font-bebas text-xl text-white tracking-wide">{stat.label}</div>
                  <div className="font-geist text-white/40 text-xs">{stat.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
