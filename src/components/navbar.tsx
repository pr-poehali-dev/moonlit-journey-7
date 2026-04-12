import { useState } from "react"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

const TICKET_URL = "https://okino-event.timepad.ru/event/3922667/"
const TICKET_PRICE = 400

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [cartCount, setCartCount] = useState(0)
  const [cartOpen, setCartOpen] = useState(false)

  const navLinks = [
    ["#okino", "ОКИНО"],
    ["#about", "О проекте"],
    ["#festival", "О фестивале"],
    ["#schedule", "Расписание"],
    ["#films", "Фильмы"],
  ]

  const addTicket = () => {
    setCartCount(c => c + 1)
    setCartOpen(true)
  }

  const removeTicket = () => {
    setCartCount(c => Math.max(0, c - 1))
  }

  const handlePay = () => {
    window.open(TICKET_URL, "_blank", "noopener,noreferrer")
  }

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
                className="font-ui text-xs transition-colors duration-200 text-white/60 hover:text-white"
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

            {/* Корзина */}
            <div className="relative ml-2">
              <button
                onClick={() => setCartOpen(o => !o)}
                className="relative text-white/70 hover:text-white transition-colors p-1"
                title="Корзина"
              >
                <Icon name="ShoppingCart" size={20} />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Дропдаун корзины */}
              {cartOpen && (
                <div className="absolute right-0 top-10 w-72 bg-zinc-900 border border-white/10 rounded-lg shadow-2xl p-4 z-50">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-geist text-white font-bold text-sm">Корзина</span>
                    <button onClick={() => setCartOpen(false)} className="text-white/30 hover:text-white transition-colors">
                      <Icon name="X" size={14} />
                    </button>
                  </div>

                  <div className="flex items-center justify-between bg-white/5 rounded-lg px-3 py-2 mb-3">
                    <div>
                      <p className="font-geist text-white text-sm">Билет на фестиваль</p>
                      <p className="font-geist text-white/40 text-xs">{TICKET_PRICE} ₽ / шт.</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={removeTicket}
                        className="w-6 h-6 rounded-full border border-white/20 text-white/60 hover:text-white hover:border-white/60 flex items-center justify-center transition-colors text-sm"
                      >
                        −
                      </button>
                      <span className="font-geist text-white text-sm w-4 text-center">{cartCount}</span>
                      <button
                        onClick={addTicket}
                        className="w-6 h-6 rounded-full border border-white/20 text-white/60 hover:text-white hover:border-white/60 flex items-center justify-center transition-colors text-sm"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {cartCount > 0 ? (
                    <>
                      <div className="flex items-center justify-between mb-3 font-geist text-sm">
                        <span className="text-white/60">Итого:</span>
                        <span className="text-white font-bold">{cartCount * TICKET_PRICE} ₽</span>
                      </div>
                      <Button
                        onClick={handlePay}
                        className="w-full bg-red-600 hover:bg-red-700 text-white font-ui text-xs border-0 tracking-widest"
                      >
                        <Icon name="CreditCard" size={14} className="mr-2" />
                        Оплатить
                      </Button>
                    </>
                  ) : (
                    <p className="font-geist text-white/30 text-xs text-center py-1">Добавьте билеты</p>
                  )}
                </div>
              )}
            </div>

            <a href={TICKET_URL} target="_blank" rel="noopener noreferrer">
              <Button className="bg-red-600 hover:bg-red-700 text-white font-ui border-0 text-xs ml-1 tracking-widest">
                Купить билет
              </Button>
            </a>
          </div>

          {/* Mobile right */}
          <div className="md:hidden flex items-center gap-3">
            {/* Корзина мобайл */}
            <button
              onClick={() => setCartOpen(o => !o)}
              className="relative text-white/70 hover:text-white transition-colors p-1"
            >
              <Icon name="ShoppingCart" size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            <button onClick={() => setIsOpen(!isOpen)} className="text-white/70 hover:text-white transition-colors">
              {isOpen ? <Icon name="X" size={24} /> : <Icon name="Menu" size={24} />}
            </button>
          </div>
        </div>

        {/* Мобильная корзина */}
        {cartOpen && (
          <div className="md:hidden bg-zinc-900 border-t border-white/10 px-4 py-4">
            <div className="flex items-center justify-between mb-3">
              <span className="font-geist text-white font-bold text-sm">Корзина</span>
              <button onClick={() => setCartOpen(false)} className="text-white/30 hover:text-white">
                <Icon name="X" size={14} />
              </button>
            </div>
            <div className="flex items-center justify-between bg-white/5 rounded-lg px-3 py-2 mb-3">
              <div>
                <p className="font-geist text-white text-sm">Билет на фестиваль</p>
                <p className="font-geist text-white/40 text-xs">{TICKET_PRICE} ₽ / шт.</p>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={removeTicket} className="w-6 h-6 rounded-full border border-white/20 text-white/60 hover:text-white flex items-center justify-center text-sm">−</button>
                <span className="font-geist text-white text-sm w-4 text-center">{cartCount}</span>
                <button onClick={addTicket} className="w-6 h-6 rounded-full border border-white/20 text-white/60 hover:text-white flex items-center justify-center text-sm">+</button>
              </div>
            </div>
            {cartCount > 0 ? (
              <>
                <div className="flex items-center justify-between mb-3 font-geist text-sm">
                  <span className="text-white/60">Итого:</span>
                  <span className="text-white font-bold">{cartCount * TICKET_PRICE} ₽</span>
                </div>
                <Button onClick={handlePay} className="w-full bg-red-600 hover:bg-red-700 text-white font-ui text-xs border-0 tracking-widest">
                  <Icon name="CreditCard" size={14} className="mr-2" />
                  Оплатить
                </Button>
              </>
            ) : (
              <p className="font-geist text-white/30 text-xs text-center py-1">Добавьте билеты</p>
            )}
          </div>
        )}

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-4 space-y-1 bg-black border-t border-white/10">
              {navLinks.map(([href, label]) => (
                <a
                  key={href}
                  href={href}
                  className="block px-3 py-2 font-ui text-xs tracking-widest transition-colors text-white/60 hover:text-white"
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
                <a href={TICKET_URL} target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white font-ui border-0 text-xs tracking-widest">
                    Купить билет
                  </Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
