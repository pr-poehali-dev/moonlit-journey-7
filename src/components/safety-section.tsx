export function SafetySection() {
  return (
    <section id="trailer" className="py-20 px-4 bg-zinc-950">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <p className="font-bebas text-red-500 text-sm tracking-[0.4em] mb-3">ТРЕЙЛЕР</p>
          <h2 className="font-bebas text-5xl md:text-6xl text-white tracking-wide">Трейлер фестиваля</h2>
        </div>

        <div className="relative aspect-video rounded-lg overflow-hidden border border-white/10 bg-black flex items-center justify-center">
          <div className="text-center">
            <div className="w-20 h-20 rounded-full border-2 border-red-500/40 flex items-center justify-center mx-auto mb-4">
              <div className="w-0 h-0 border-t-[14px] border-t-transparent border-b-[14px] border-b-transparent border-l-[22px] border-l-red-500 ml-1" />
            </div>
            <p className="font-bebas text-2xl text-white/30 tracking-wide">Трейлер скоро появится</p>
            <p className="font-geist text-white/20 text-xs mt-2">Вставьте ссылку на YouTube или загрузите видео</p>
          </div>
          <div className="absolute inset-0 pointer-events-none"
            style={{
              background: "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }} />
        </div>

        <p className="font-geist text-white/25 text-xs text-center mt-4">
          * Для добавления трейлера вставьте ссылку на YouTube-видео
        </p>
      </div>
    </section>
  )
}
