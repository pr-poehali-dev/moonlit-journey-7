import { useState } from "react"
import Icon from "@/components/ui/icon"

const faqs = [
  { q: "Кто может участвовать в фестивале?", a: "Любой желающий — профессиональные режиссёры, студенты киношкол и полные любители. Главное требование — фильм должен соответствовать теме «Карта города»." },
  { q: "Какова максимальная длина фильма?", a: "До 20 минут включительно. Короткий метр — наш формат." },
  { q: "Нужно ли покупать билеты на все дни?", a: "Нет, билеты продаются на каждый день отдельно. Вы можете посетить один, два или все три дня." },
  { q: "Где купить билеты?", a: "Билеты можно купить онлайн на этом сайте, либо на месте у организаторов перед показом." },
  { q: "Можно ли прийти с детьми?", a: "Фестиваль имеет возрастное ограничение 18+. Дети до 18 лет не допускаются." },
  { q: "Будет ли запись показов?", a: "Записи показов не предусмотрены. Все фильмы можно увидеть только на самом фестивале." },
]

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="py-20 px-4 bg-zinc-950">
      <div className="max-w-3xl mx-auto">
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
                <span className="font-geist text-white font-medium text-sm pr-4">{item.q}</span>
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
