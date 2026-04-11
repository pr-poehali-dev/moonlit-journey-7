import { useState } from "react"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    ["#okino", "ОКИНО"],
    ["#about", "О проекте"],
    ["#festival", "О фестивале"],
    ["#schedule", "Расписание"],
    ["#films", "Фильмы"],
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-[9999] bg-black/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Логотип */}
          <a href="#" className="flex-shrink-0 group">
            <span
              className="font-heading text-white text-lg tracking-[0.25em] group-hover:text-red-500 transition-colors"
              style={{ fontWeight: 700 }}
            >
              ОКИНО
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6 ml-8">
            {navLinks.map(([href, label]) => (
              <a
                key={href}
                href={href}
                className={`font-ui text-xs transition-colors duration-200 ${
                  label === "ОКИНО"
                    ? "text-red-500 hover:text-red-400"
                    : "text-white/60 hover:text-white"
                }`}
              >
                {label}
              </a>
            ))}
          </div>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-3">
            <a href="https://boosty.to/okino_official" target="_blank" rel="noopener noreferrer"
              className="text-white/40 hover:text-white transition-colors" title="Boosty">
              <Icon name="Heart" size={16} />
            </a>
            <a href="https://vk.com/okino.square" target="_blank" rel="noopener noreferrer"
              className="text-white/40 hover:text-white transition-colors" title="VK">
              <Icon name="Users" size={16} />
            </a>
            <a href="https://t.me/okinosquare" target="_blank" rel="noopener noreferrer"
              className="text-white/40 hover:text-white transition-colors" title="Telegram">
              <Icon name="Send" size={16} />
            </a>
            <a href="https://youtube.com/@okino.square" target="_blank" rel="noopener noreferrer"
              className="text-white/40 hover:text-white transition-colors" title="YouTube">
              <Icon name="Youtube" size={16} />
            </a>
            <Button className="bg-red-600 hover:bg-red-700 text-white font-ui border-0 text-xs ml-2 tracking-widest">
              Купить билеты
            </Button>
          </div>

          {/* Mobile burger */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white/70 hover:text-white transition-colors">
              {isOpen ? <Icon name="X" size={24} /> : <Icon name="Menu" size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-4 space-y-1 bg-black border-t border-white/10">
              {navLinks.map(([href, label]) => (
                <a
                  key={href}
                  href={href}
                  className={`block px-3 py-2 font-ui text-xs tracking-widest transition-colors ${
                    label === "ОКИНО" ? "text-red-500" : "text-white/60 hover:text-white"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {label}
                </a>
              ))}
              <div className="flex gap-4 px-3 py-2">
                {[
                  ["https://boosty.to/okino_official", "Heart", "Boosty"],
                  ["https://vk.com/okino.square", "Users", "VK"],
                  ["https://t.me/okinosquare", "Send", "Telegram"],
                  ["https://youtube.com/@okino.square", "Youtube", "YouTube"],
                ].map(([href, icon, title]) => (
                  <a key={href} href={href} target="_blank" rel="noopener noreferrer"
                    className="text-white/40 hover:text-white transition-colors" title={title}>
                    <Icon name={icon} size={18} />
                  </a>
                ))}
              </div>
              <div className="px-3 py-2">
                <Button className="w-full bg-red-600 hover:bg-red-700 text-white font-ui border-0 text-xs tracking-widest">
                  Купить билеты
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
