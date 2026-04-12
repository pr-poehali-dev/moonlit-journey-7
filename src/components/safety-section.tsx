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
        </div>


      </div>
    </section>
  )
}