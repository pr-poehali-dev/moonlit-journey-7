import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

const organizers = [
  { name: "Имя Организатора", role: "Куратор фестиваля", placeholder: true },
  { name: "Имя Организатора", role: "Программный директор", placeholder: true },
  { name: "Имя Организатора", role: "Технический директор", placeholder: true },
]

export function CTASection() {
  return (
    <>
      <section id="organizers" className="py-20 px-4 bg-black">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-bebas text-red-500 text-sm tracking-[0.4em] mb-3">КОМАНДА</p>
            <h2 className="font-bebas text-5xl md:text-6xl text-white tracking-wide">Организаторы</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {organizers.map((org, i) => (
              <div key={i} className="border border-white/10 rounded-lg p-6 text-center bg-zinc-950/50 hover:border-red-500/30 transition-colors">
                <div className="w-20 h-20 rounded-full bg-zinc-800 border border-white/10 mx-auto mb-4 flex items-center justify-center">
                  <Icon name="User" size={32} className="text-white/20" />
                </div>
                <h3 className="font-bebas text-xl text-white tracking-wide">{org.name}</h3>
                <p className="font-geist text-red-400 text-sm mt-1">{org.role}</p>
                {org.placeholder && (
                  <p className="font-geist text-white/20 text-xs mt-2">* Фото добавится позже</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-red-600 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{
            background: "linear-gradient(rgba(0,0,0,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.08) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }} />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <p className="font-bebas text-white/60 text-sm tracking-[0.4em] mb-4">24–26 АПРЕЛЯ · ГЭС 9/02</p>
          <h2 className="font-bebas text-6xl md:text-8xl text-white leading-none mb-6">
            НАЙДИ<br />СВОЁ МЕСТО<br />НА КАРТЕ
          </h2>
          <p className="font-geist text-white/80 text-lg mb-8 max-w-xl mx-auto leading-relaxed">
            Приходи смотреть кино, снятое такими же людьми как ты. Любительское — значит настоящее.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-red-600 hover:bg-white/90 font-geist font-bold px-8 py-3 text-base border-0">
              <Icon name="Ticket" size={18} className="mr-2" />
              Купить билеты
            </Button>
            <a href="https://vk.com/okino.square" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="border-white text-white bg-transparent hover:bg-white/10 font-geist px-8 py-3 w-full sm:w-auto">
                <Icon name="Users" size={18} className="mr-2" />
                VK
              </Button>
            </a>
            <a href="https://t.me/okinosquare" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="border-white text-white bg-transparent hover:bg-white/10 font-geist px-8 py-3 w-full sm:w-auto">
                <Icon name="Send" size={18} className="mr-2" />
                Telegram
              </Button>
            </a>
          </div>
          <p className="font-geist text-white/40 text-xs mt-6">18+ · Вход только по билетам</p>
        </div>
      </section>
    </>
  )
}
