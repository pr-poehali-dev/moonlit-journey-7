export function Footer() {
  return (
    <footer className="py-10 px-4 bg-black border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="text-right leading-none">
              <div className="font-bebas text-red-500 text-xs tracking-widest">ОКИНО</div>
              <div className="font-bebas text-red-500 text-xs tracking-widest">ОКИНО</div>
              <div className="font-bebas text-red-500 text-xs tracking-widest">ОКИНО</div>
            </div>
            <div className="w-px h-8 bg-white/10" />
            <div>
              <p className="font-bebas text-white tracking-widest text-sm">КАРТА ГОРОДА</p>
              <p className="font-geist text-white/30 text-xs">Фестиваль короткометражного кино</p>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end gap-2">
            <div className="flex gap-4">
              <a href="https://vk.com/okino.square" target="_blank" rel="noopener noreferrer"
                className="font-geist text-white/40 hover:text-red-500 transition-colors text-xs">
                vk.com/okino.square
              </a>
              <span className="text-white/10">·</span>
              <a href="https://t.me/okinosquare" target="_blank" rel="noopener noreferrer"
                className="font-geist text-white/40 hover:text-red-500 transition-colors text-xs">
                t.me/okinosquare
              </a>
            </div>
            <p className="font-geist text-white/20 text-xs text-center">
              ГЭС 9/02 · Проспект Мусы Джалиля 51 · Этаж 4 · 420 кабинет
            </p>
            <p className="font-geist text-white/15 text-xs">
              24–26 апреля · 18+ · © ОКИНО 2025
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
