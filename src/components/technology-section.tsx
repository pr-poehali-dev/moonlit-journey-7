export function TechnologySection() {
  return (
    <section id="festival" className="py-20 px-4 bg-zinc-950">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="font-bebas text-red-500 text-sm tracking-[0.4em] mb-3">О ФЕСТИВАЛЕ</p>
          <h2 className="font-bebas text-5xl md:text-7xl text-white tracking-wide">Тема: Карта города</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: "🗺️",
              title: "Маршруты",
              desc: "Каждый фильм — маршрут через город. Через память, через отношения, через себя.",
            },
            {
              icon: "📍",
              title: "Точки на карте",
              desc: "Места, которые остаются в нас. Дворы, остановки, переулки — герои твоего фильма.",
            },
            {
              icon: "🎬",
              title: "Короткий метр",
              desc: "До 20 минут хронометража. Без ограничений по жанру и технике съёмки.",
            },
          ].map((item, i) => (
            <div key={i} className="border border-white/10 rounded-lg p-6 bg-black/40 hover:border-red-500/30 transition-colors">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="font-bebas text-2xl text-white tracking-wide mb-2">{item.title}</h3>
              <p className="font-geist text-white/50 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>


      </div>
    </section>
  )
}