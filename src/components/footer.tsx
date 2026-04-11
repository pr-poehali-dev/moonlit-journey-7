import { CityMapBackground } from "@/components/city-map-background"

export function Footer() {
  return (
    <footer className="py-10 px-4 bg-black border-t border-white/5 relative overflow-hidden">
      <CityMapBackground opacity={0.18} />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <span className="font-heading text-white text-xl tracking-[0.2em]">ОКИНО</span>
            <div className="w-px h-10 bg-white/10" />
            <div>
              <p className="font-heading text-white tracking-widest text-sm">КАРТА ГОРОДА</p>
              <p className="font-geist text-white/30 text-sm">Фестиваль короткометражного кино</p>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end gap-2">
            <div className="flex gap-5 flex-wrap justify-center md:justify-end">
              {[
                ["https://boosty.to/okino_official", "Boosty"],
                ["https://vk.com/okino.square", "vk.com/okino.square"],
                ["https://t.me/okinosquare", "t.me/okinosquare"],
                ["https://youtube.com/@okino.square", "YouTube"],
              ].map(([href, label]) => (
                <a key={href} href={href} target="_blank" rel="noopener noreferrer"
                  className="font-ui text-white/30 hover:text-red-500 transition-colors text-[10px] tracking-widest">
                  {label}
                </a>
              ))}
            </div>
            <p className="font-geist text-white/20 text-xs text-center">
              ГЭС 9/02 · Проспект Мусы Джалиля 51 · Этаж 4 · 420 кабинет · Набережные Челны
            </p>
            <p className="font-ui text-white/15 text-[10px] tracking-widest">
              24–26 АПРЕЛЯ · 18+ · © ОКИНО 2025
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}