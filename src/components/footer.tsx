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

          <div className="flex flex-col items-center md:items-end gap-3">
            <p className="font-ui text-white font-bold text-sm tracking-widest">
              18+ · ВХОД ТОЛЬКО ПО БИЛЕТАМ
            </p>
            <p className="font-geist text-white/50 text-sm text-center font-semibold">
              ГЭС 9/02 · Проспект Мусы Джалиля 51 · Этаж 4 · Набережные Челны
            </p>
            <p className="font-ui text-white/30 text-[11px] tracking-widest">
              24–26 АПРЕЛЯ · © ОКИНО 2026
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}