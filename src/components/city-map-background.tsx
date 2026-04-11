export function CityMapBackground({ opacity = 1 }: { opacity?: number }) {
  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden"
      style={{ opacity: Math.max(opacity, 0.15) }}
    >
      <svg
        viewBox="0 0 1000 750"
        preserveAspectRatio="xMidYMid slice"
        className="w-full h-full"
        fill="none"
      >
        {/* НАБЕРЕЖНЫЕ ЧЕЛНЫ — прямоугольная сетка улиц, без диагоналей */}

        {/* === КАМА === */}
        <path d="M-10 0 Q40 80 30 180 Q20 260 50 340 Q80 420 60 500 Q45 560 70 650 Q90 720 80 760"
          stroke="white" strokeWidth="3.5" strokeOpacity="0.45" fill="none" />
        <path d="M10 0 Q65 90 58 195 Q52 278 84 358 Q114 438 98 518 Q83 592 108 668 Q124 728 112 760"
          stroke="white" strokeWidth="1.0" strokeOpacity="0.2" fill="none" />

        {/* Мелекеска */}
        <path d="M55 340 Q120 326 162 356 Q192 378 182 412 Q167 442 132 432 Q90 420 78 400 Q63 373 55 340Z"
          stroke="white" strokeWidth="0.9" strokeOpacity="0.22" fill="none" />

        {/* === МОСТ === */}
        <line x1="55" y1="300" x2="210" y2="300" stroke="white" strokeWidth="2.5" strokeOpacity="0.5" />
        <line x1="55" y1="294" x2="210" y2="294" stroke="white" strokeWidth="0.7" strokeOpacity="0.18" />
        <line x1="55" y1="306" x2="210" y2="306" stroke="white" strokeWidth="0.7" strokeOpacity="0.18" />

        {/* === ГОРИЗОНТАЛЬНЫЕ ПРОСПЕКТЫ === */}
        <line x1="150" y1="150" x2="990" y2="150" stroke="white" strokeWidth="1.8" strokeOpacity="0.42" />
        <line x1="130" y1="240" x2="990" y2="240" stroke="white" strokeWidth="2.0" strokeOpacity="0.48" />
        <line x1="120" y1="330" x2="990" y2="330" stroke="white" strokeWidth="1.6" strokeOpacity="0.38" />
        <line x1="115" y1="420" x2="990" y2="420" stroke="white" strokeWidth="1.8" strokeOpacity="0.42" />
        <line x1="118" y1="510" x2="980" y2="510" stroke="white" strokeWidth="1.6" strokeOpacity="0.36" />
        <line x1="128" y1="600" x2="960" y2="600" stroke="white" strokeWidth="1.3" strokeOpacity="0.30" />
        <line x1="142" y1="680" x2="930" y2="680" stroke="white" strokeWidth="1.0" strokeOpacity="0.24" />

        {/* Второстепенные горизонтальные */}
        <line x1="158" y1="195" x2="985" y2="195" stroke="white" strokeWidth="0.7" strokeOpacity="0.18" />
        <line x1="148" y1="285" x2="988" y2="285" stroke="white" strokeWidth="0.7" strokeOpacity="0.18" />
        <line x1="142" y1="375" x2="988" y2="375" stroke="white" strokeWidth="0.7" strokeOpacity="0.18" />
        <line x1="140" y1="465" x2="985" y2="465" stroke="white" strokeWidth="0.7" strokeOpacity="0.18" />
        <line x1="144" y1="555" x2="975" y2="555" stroke="white" strokeWidth="0.6" strokeOpacity="0.15" />
        <line x1="155" y1="640" x2="950" y2="640" stroke="white" strokeWidth="0.6" strokeOpacity="0.14" />

        {/* === ВЕРТИКАЛЬНЫЕ ПРОСПЕКТЫ === */}
        <line x1="240" y1="60"  x2="240" y2="750" stroke="white" strokeWidth="1.8" strokeOpacity="0.42" />
        <line x1="370" y1="40"  x2="370" y2="750" stroke="white" strokeWidth="2.0" strokeOpacity="0.48" />
        <line x1="500" y1="30"  x2="500" y2="750" stroke="white" strokeWidth="1.8" strokeOpacity="0.42" />
        <line x1="630" y1="40"  x2="630" y2="740" stroke="white" strokeWidth="1.6" strokeOpacity="0.36" />
        <line x1="760" y1="55"  x2="760" y2="720" stroke="white" strokeWidth="1.4" strokeOpacity="0.30" />
        <line x1="880" y1="70"  x2="880" y2="700" stroke="white" strokeWidth="1.2" strokeOpacity="0.26" />

        {/* Второстепенные вертикальные */}
        <line x1="305" y1="70"  x2="305" y2="748" stroke="white" strokeWidth="0.7" strokeOpacity="0.18" />
        <line x1="435" y1="50"  x2="435" y2="748" stroke="white" strokeWidth="0.7" strokeOpacity="0.18" />
        <line x1="565" y1="42"  x2="565" y2="742" stroke="white" strokeWidth="0.7" strokeOpacity="0.18" />
        <line x1="695" y1="50"  x2="695" y2="732" stroke="white" strokeWidth="0.6" strokeOpacity="0.15" />
        <line x1="820" y1="62"  x2="820" y2="712" stroke="white" strokeWidth="0.6" strokeOpacity="0.14" />
        <line x1="940" y1="78"  x2="940" y2="692" stroke="white" strokeWidth="0.5" strokeOpacity="0.12" />

        {/* === ОРГАНИЧНЫЕ ДОРОГИ — окраины === */}
        <path d="M88 420 Q108 460 98 502 Q88 544 110 584 Q130 622 118 665"
          stroke="white" strokeWidth="0.9" strokeOpacity="0.26" fill="none" />
        <path d="M68 432 Q84 474 76 516 Q68 558 88 596"
          stroke="white" strokeWidth="0.6" strokeOpacity="0.18" fill="none" />

        {/* === ПЕРЕКРЁСТКИ — главные === */}
        {([
          [240,150],[370,150],[500,150],[630,150],[760,150],[880,150],
          [240,240],[370,240],[500,240],[630,240],[760,240],[880,240],
          [240,330],[370,330],[500,330],[630,330],[760,330],[880,330],
          [240,420],[370,420],[500,420],[630,420],[760,420],[880,420],
          [240,510],[370,510],[500,510],[630,510],[760,510],
          [370,600],[500,600],[630,600],[760,600],
          [370,680],[500,680],[630,680],
        ] as [number,number][]).map(([cx,cy],i) => (
          <circle key={i} cx={cx} cy={cy} r="2.8" fill="white" fillOpacity="0.38" stroke="none" />
        ))}

        {/* Второстепенные перекрёстки */}
        {([
          [305,195],[435,195],[565,195],[695,195],[820,195],
          [305,285],[435,285],[565,285],[695,285],[820,285],
          [305,375],[435,375],[565,375],[695,375],
          [305,465],[435,465],[565,465],
          [305,555],[435,555],
        ] as [number,number][]).map(([cx,cy],i) => (
          <circle key={`s${i}`} cx={cx} cy={cy} r="1.6" fill="white" fillOpacity="0.22" stroke="none" />
        ))}
      </svg>
    </div>
  )
}
