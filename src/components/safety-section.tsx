import { CityMapBackground } from "@/components/city-map-background"

export function SafetySection() {
  return (
    <section id="trailer" className="py-20 px-4 bg-zinc-950 relative overflow-hidden">
      <CityMapBackground opacity={0.18} />
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-10">
          <p className="font-bebas text-red-500 text-sm tracking-[0.4em] mb-3">ТРЕЙЛЕР</p>
          <h2 className="font-bebas text-5xl md:text-6xl text-white tracking-wide">Трейлер фестиваля</h2>
        </div>

        <div className="relative aspect-video rounded-lg overflow-hidden border border-white/10 bg-black">
          <iframe
            src="https://www.youtube.com/embed/KEpPcKBbeMs?rel=0&modestbranding=1"
            title="Трейлер фестиваля"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
          {/* Фолбэк для случаев, когда YouTube недоступен */}
          <a
            href="https://www.youtube.com/watch?v=KEpPcKBbeMs"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 flex flex-col items-center justify-center bg-black/0 hover:bg-black/60 transition-colors group opacity-0 hover:opacity-100"
          >
            <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center mb-3">
              <div className="w-0 h-0 border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent border-l-[20px] border-l-white ml-1" />
            </div>
            <span className="font-bebas text-white text-lg tracking-wide">Смотреть на YouTube</span>
          </a>
        </div>
        <p className="font-geist text-white/20 text-xs text-center mt-3">
          * Если видео не загружается — откройте трейлер на{" "}
          <a href="https://www.youtube.com/watch?v=KEpPcKBbeMs" target="_blank" rel="noopener noreferrer" className="text-red-500/60 hover:text-red-400 transition-colors underline underline-offset-2">
            YouTube
          </a>
        </p>


      </div>
    </section>
  )
}