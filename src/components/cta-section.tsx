import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

export function CTASection() {
  return (
    <section className="py-24 px-4 bg-red-600 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(rgba(0,0,0,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.07) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <p className="font-ui text-white/60 text-xs tracking-[0.4em] mb-4">24–26 АПРЕЛЯ · НАБЕРЕЖНЫЕ ЧЕЛНЫ</p>
        <h2 className="font-heading text-6xl md:text-8xl text-white leading-none mb-6">
          НАЙДИ<br />СВОЁ МЕСТО<br />НА КАРТЕ
        </h2>
        <p className="font-geist text-white/80 text-xl mb-10 max-w-xl mx-auto leading-relaxed">
          Приходи смотреть кино, снятое такими же людьми как ты. Любительское — значит настоящее.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button className="bg-white text-red-600 hover:bg-white/90 font-ui text-xs px-8 py-3 border-0 tracking-widest">
            <Icon name="Ticket" size={16} className="mr-2" />
            Купить билеты
          </Button>
          <a href="https://boosty.to/okino_official" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="border-white/60 text-white bg-transparent hover:bg-white/10 font-ui text-xs px-6 py-3 tracking-widest w-full sm:w-auto">
              <Icon name="Heart" size={15} className="mr-2" />
              Boosty
            </Button>
          </a>
          <a href="https://vk.com/okino.square" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="border-white/60 text-white bg-transparent hover:bg-white/10 font-ui text-xs px-6 py-3 tracking-widest w-full sm:w-auto">
              <Icon name="Users" size={15} className="mr-2" />
              VK
            </Button>
          </a>
          <a href="https://youtube.com/@okino.square" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="border-white/60 text-white bg-transparent hover:bg-white/10 font-ui text-xs px-6 py-3 tracking-widest w-full sm:w-auto">
              <Icon name="Youtube" size={15} className="mr-2" />
              YouTube
            </Button>
          </a>
        </div>
        <p className="font-geist text-white/40 text-sm mt-8">18+ · Вход только по билетам</p>
      </div>
    </section>
  )
}
