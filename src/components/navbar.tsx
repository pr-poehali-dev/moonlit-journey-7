import { useState } from "react"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

function OkinoLogo({ size = 48 }: { size?: number }) {
  const s = size
  const fontSize = s * 0.18
  return (
    <svg width={s} height={s} viewBox="0 0 48 48" fill="none">
      {/* Верхняя надпись */}
      <text x="24" y="9" textAnchor="middle" fill="white" fontSize="7" fontFamily="'Bebas Neue', sans-serif" letterSpacing="1.5">ОКИНО</text>
      {/* Нижняя надпись */}
      <text x="24" y="45" textAnchor="middle" fill="white" fontSize="7" fontFamily="'Bebas Neue', sans-serif" letterSpacing="1.5">ОКИНО</text>
      {/* Левая надпись — повёрнута */}
      <text x="-24" y="9" textAnchor="middle" fill="white" fontSize="7" fontFamily="'Bebas Neue', sans-serif" letterSpacing="1.5"
        transform="rotate(-90) translate(-24, 0)">ОКИНО</text>
      {/* Правая надпись — повёрнута */}
      <text x="24" y="-39" textAnchor="middle" fill="white" fontSize="7" fontFamily="'Bebas Neue', sans-serif" letterSpacing="1.5"
        transform="rotate(90) translate(24, 0)">ОКИНО</text>
      {/* Рамка квадрата */}
      <rect x="1" y="1" width="46" height="46" stroke="white" strokeWidth="0.5" strokeOpacity="0.2" fill="none" />
    </svg>
  )
}

export { OkinoLogo }

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-[9999] bg-black/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <OkinoLogo size={44} />
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {[["#about","О проекте"],["#festival","О фестивале"],["#schedule","Расписание"],["#films","Фильмы"]].map(([href, label]) => (
                <a key={href} href={href}
                  className="font-geist text-white/70 hover:text-red-500 transition-colors duration-200 text-sm">
                  {label}
                </a>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a href="https://vk.com/okino.square" target="_blank" rel="noopener noreferrer"
              className="text-white/50 hover:text-white transition-colors">
              <Icon name="Users" size={17} />
            </a>
            <a href="https://t.me/okinosquare" target="_blank" rel="noopener noreferrer"
              className="text-white/50 hover:text-white transition-colors">
              <Icon name="Send" size={17} />
            </a>
            <Button className="bg-red-600 hover:bg-red-700 text-white font-geist border-0 text-sm ml-2">
              Купить билеты
            </Button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white/70 hover:text-white transition-colors">
              {isOpen ? <Icon name="X" size={24} /> : <Icon name="Menu" size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-4 space-y-1 bg-black border-t border-white/10">
              {[["#about","О проекте"],["#festival","О фестивале"],["#schedule","Расписание"],["#films","Фильмы"]].map(([href, label]) => (
                <a key={href} href={href}
                  className="block px-3 py-2 font-geist text-white/70 hover:text-red-500 transition-colors"
                  onClick={() => setIsOpen(false)}>{label}</a>
              ))}
              <div className="flex gap-4 px-3 py-2">
                <a href="https://vk.com/okino.square" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white">
                  <Icon name="Users" size={20} />
                </a>
                <a href="https://t.me/okinosquare" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white">
                  <Icon name="Send" size={20} />
                </a>
              </div>
              <div className="px-3 py-2">
                <Button className="w-full bg-red-600 hover:bg-red-700 text-white font-geist border-0">Купить билеты</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
