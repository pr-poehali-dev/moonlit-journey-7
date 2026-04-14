import { CityMapBackground } from "@/components/city-map-background"

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 bg-black relative overflow-hidden">
      <CityMapBackground opacity={0.22} />
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="font-ui text-red-500 text-xs tracking-[0.4em] mb-4">О ПРОЕКТЕ</p>
            <h2 className="font-heading text-5xl md:text-6xl text-white leading-tight mb-6">
              ОКИНО
            </h2>
            <p className="font-geist text-white text-xl leading-relaxed mb-4 font-semibold">
              Андеграундное АРТ-пространство для кино, искусства и творческих мероприятий от местных авторов.
            </p>
            <p className="font-geist text-white leading-relaxed mb-4 border-b border-white/25 pb-4">
              <span className="font-semibold">«Карта Города»</span> — это сборник из короткометражных фильмов, в котором каждый автор строит свою историю вокруг определённой локации. Это попытка почувствовать город через отдельные места, состояния и истории — через локации, которые становятся не просто фоном, а частью самого высказывания.
            </p>
            <p className="font-geist text-red-400 leading-relaxed mb-4 font-semibold">
              Обратите внимание на расписание: в дни фестиваля один и тот же сборник будет показан дважды — в 14:00 и в 18:00. Вы можете выбрать удобное для себя время!
            </p>
            <div className="inline-block border border-red-400 rounded px-4 py-2 mb-8">
              <p className="font-geist text-white/80 text-sm font-bold">
                Советуем взять билеты заранее — места ограничены!
              </p>
            </div>
            <div className="flex gap-4 flex-wrap">
              {[
                { href: "https://boosty.to/okino_official", label: "Boosty" },
                { href: "https://vk.com/okino.square", label: "VK" },
                { href: "https://youtube.com/@okino.square", label: "YouTube" },
                { href: "https://t.me/okinosquare", label: "Telegram" },
              ].map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-ui text-xs text-white/40 hover:text-red-500 transition-colors tracking-widest border-b border-white/10 hover:border-red-500/40 pb-0.5"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {[
              { label: "Авторов", value: "14", sub: "участвующих в фестивале" },
              { label: "Дня показов", value: "3", sub: "24, 25, 26 апреля" },
              { label: "Фильмов", value: "14", sub: "по одной картине от каждого автора" },
            ].map((stat, i) => (
              <div key={i} className="border border-white/8 rounded-lg p-5 flex items-center gap-5 bg-zinc-950/60">
                <div className="font-heading text-4xl text-red-500 w-16 text-center">{stat.value}</div>
                <div className="w-px h-10 bg-white/10" />
                <div>
                  <div className="font-heading text-lg text-white">{stat.label}</div>
                  <div className="font-geist text-white/40 text-sm">{stat.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}