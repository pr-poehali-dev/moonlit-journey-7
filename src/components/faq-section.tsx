import { useState } from "react"
import Icon from "@/components/ui/icon"
import { CityMapBackground } from "@/components/city-map-background"

const faqs = [
  { q: "Кто участвует в фестивале?", a: "Участники фестиваля — авторы из Набережных Челнов и других городов Татарстана и России. Все фильмы сняты специально в рамках темы фестиваля короткометражного кино «Карта города»." },
  { q: "Как участники (авторы фестиваля) получили свои локации для съёмок?", a: "В конце предыдущего фестиваля каждый участник тянул локацию вслепую — случайным образом. Так за каждым автором закрепилось своё место в городе, вокруг которого и строится его фильм." },
  { q: "Можно ли прийти с детьми?", a: "Фестиваль имеет возрастное ограничение 18+. Дети до 18 лет не допускаются." },
  { q: "Где купить билеты?", a: "Билеты продаются онлайн на сайте — можете перейти по любой кнопке «Купить билет» на сайте. Один билет на фестиваль стоит 400 рублей." },

]

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="py-20 px-4 bg-zinc-950 relative overflow-hidden">
      <CityMapBackground opacity={0.18} />
      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <p className="font-bebas text-red-500 text-sm tracking-[0.4em] mb-3">ВОПРОСЫ И ОТВЕТЫ</p>
          <h2 className="font-bebas text-5xl md:text-6xl text-white tracking-wide">FAQ</h2>
        </div>

        <div className="space-y-2">
          {faqs.map((item, i) => (
            <div key={i} className="border border-white/10 rounded-lg overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-white/5 transition-colors"
              >
                <span className="font-geist text-white font-bold text-base pr-4">{item.q}</span>
                <Icon
                  name={open === i ? "ChevronUp" : "ChevronDown"}
                  size={18}
                  className={`flex-shrink-0 transition-colors ${open === i ? "text-red-500" : "text-white/30"}`}
                />
              </button>
              {open === i && (
                <div className="px-5 pb-4 border-t border-white/5">
                  <p className="font-geist text-white/60 text-sm leading-relaxed pt-3">{item.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}