export function TestimonialsSection() {
  return (
    <section id="venue-map" className="py-20 px-4 bg-black">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <p className="font-bebas text-red-500 text-sm tracking-[0.4em] mb-3">КАК ДОБРАТЬСЯ</p>
          <h2 className="font-bebas text-5xl md:text-6xl text-white tracking-wide">Место проведения</h2>
          <p className="font-geist text-white/40 text-sm mt-3">
            ГЭС 9/02 · Проспект Мусы Джалиля 51 · Этаж 4 · 420 кабинет
          </p>
        </div>

        <div className="rounded-lg overflow-hidden border border-white/10" style={{ height: "400px" }}>
          <iframe
            src="https://yandex.ru/map-widget/v1/?ll=37.655&z=14&pt=37.655,55.660,pm2rdl&text=%D0%9F%D1%80%D0%BE%D1%81%D0%BF%D0%B5%D0%BA%D1%82%20%D0%9C%D1%83%D1%81%D1%8B%20%D0%94%D0%B6%D0%B0%D0%BB%D0%B8%D0%BB%D1%8F%2051"
            width="100%"
            height="100%"
            frameBorder="0"
            title="Карта места проведения фестиваля"
            allowFullScreen
          />
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { icon: "🚇", title: "Метро", desc: "Станция «Печатники» или «Кожуховская» — 10 мин. пешком" },
            { icon: "🚌", title: "Автобус", desc: "Остановка «Проспект Мусы Джалиля» — маршруты 7, 154, 641" },
            { icon: "🚗", title: "На машине", desc: "Парковка рядом с ТЦ доступна вечером бесплатно" },
          ].map((item, i) => (
            <div key={i} className="border border-white/10 rounded-lg p-4 bg-zinc-950/50">
              <div className="text-2xl mb-2">{item.icon}</div>
              <h4 className="font-bebas text-lg text-white">{item.title}</h4>
              <p className="font-geist text-white/40 text-xs mt-1 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
