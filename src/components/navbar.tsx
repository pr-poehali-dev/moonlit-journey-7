import { useState } from "react"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-[9999] bg-black/95 backdrop-blur-md border-b border-red-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center gap-3">
            <div className="text-right leading-none">
              <div className="font-bebas text-red-500 text-xs tracking-widest">ОКИНО</div>
              <div className="font-bebas text-red-500 text-xs tracking-widest">ОКИНО</div>
              <div className="font-bebas text-red-500 text-xs tracking-widest">ОКИНО</div>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#about" className="font-geist text-white/80 hover:text-red-500 transition-colors duration-200 text-sm tracking-wide">
                О проекте
              </a>
              <a href="#festival" className="font-geist text-white/80 hover:text-red-500 transition-colors duration-200 text-sm tracking-wide">
                О фестивале
              </a>
              <a href="#schedule" className="font-geist text-white/80 hover:text-red-500 transition-colors duration-200 text-sm tracking-wide">
                Расписание
              </a>
              <a href="#films" className="font-geist text-white/80 hover:text-red-500 transition-colors duration-200 text-sm tracking-wide">
                Фильмы
              </a>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a href="https://vk.com/okino.square" target="_blank" rel="noopener noreferrer"
              className="text-white/60 hover:text-red-500 transition-colors">
              <Icon name="Users" size={18} />
            </a>
            <a href="https://t.me/okinosquare" target="_blank" rel="noopener noreferrer"
              className="text-white/60 hover:text-red-500 transition-colors">
              <Icon name="Send" size={18} />
            </a>
            <Button className="bg-red-600 hover:bg-red-700 text-white font-geist border-0 text-sm ml-2">
              Купить билеты
            </Button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-red-500 transition-colors duration-200">
              {isOpen ? <Icon name="X" size={24} /> : <Icon name="Menu" size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-4 space-y-1 bg-black/98 border-t border-red-500/20">
              {[["#about", "О проекте"], ["#festival", "О фестивале"], ["#schedule", "Расписание"], ["#films", "Фильмы"]].map(([href, label]) => (
                <a key={href} href={href}
                  className="block px-3 py-2 font-geist text-white hover:text-red-500 transition-colors duration-200"
                  onClick={() => setIsOpen(false)}>
                  {label}
                </a>
              ))}
              <div className="flex gap-4 px-3 py-2">
                <a href="https://vk.com/okino.square" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-red-500">
                  <Icon name="Users" size={20} />
                </a>
                <a href="https://t.me/okinosquare" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-red-500">
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
