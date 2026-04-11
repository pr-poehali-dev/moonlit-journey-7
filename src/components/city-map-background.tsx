export function CityMapBackground({ opacity = 0.045 }: { opacity?: number }) {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ opacity }}>
      <svg
        viewBox="0 0 800 600"
        preserveAspectRatio="xMidYMid slice"
        className="w-full h-full"
        fill="none"
        stroke="white"
        strokeWidth="0.8"
      >
        {/* Набережные Челны — стилизованная схема улиц */}
        {/* Проспекты (горизонтальные магистрали) */}
        <line x1="0" y1="120" x2="800" y2="120" strokeWidth="1.4" />
        <line x1="0" y1="200" x2="800" y2="200" strokeWidth="1.4" />
        <line x1="0" y1="280" x2="800" y2="280" strokeWidth="1.4" />
        <line x1="0" y1="360" x2="800" y2="360" strokeWidth="1.4" />
        <line x1="0" y1="440" x2="800" y2="440" strokeWidth="1.4" />
        <line x1="0" y1="520" x2="800" y2="520" strokeWidth="1.2" />

        {/* Поперечные улицы (вертикальные) */}
        <line x1="60" y1="0" x2="60" y2="600" strokeWidth="1.2" />
        <line x1="140" y1="0" x2="140" y2="600" strokeWidth="1.2" />
        <line x1="220" y1="0" x2="220" y2="600" strokeWidth="1.2" />
        <line x1="300" y1="0" x2="300" y2="600" strokeWidth="1.4" />
        <line x1="380" y1="0" x2="380" y2="600" strokeWidth="1.4" />
        <line x1="460" y1="0" x2="460" y2="600" strokeWidth="1.2" />
        <line x1="540" y1="0" x2="540" y2="600" strokeWidth="1.2" />
        <line x1="620" y1="0" x2="620" y2="600" strokeWidth="1.2" />
        <line x1="700" y1="0" x2="700" y2="600" strokeWidth="1.2" />
        <line x1="760" y1="0" x2="760" y2="600" strokeWidth="0.8" />

        {/* Диагональные проспекты — характерно для Челнов */}
        <line x1="0" y1="0" x2="300" y2="280" strokeWidth="0.9" />
        <line x1="100" y1="0" x2="420" y2="300" strokeWidth="0.9" />
        <line x1="800" y1="0" x2="500" y2="280" strokeWidth="0.9" />
        <line x1="700" y1="0" x2="380" y2="310" strokeWidth="0.9" />
        <line x1="0" y1="600" x2="280" y2="320" strokeWidth="0.7" />
        <line x1="800" y1="600" x2="520" y2="320" strokeWidth="0.7" />

        {/* Камский мост / набережная — изогнутые линии */}
        <path d="M0 540 Q200 500 400 520 Q600 540 800 510" strokeWidth="1.6" />
        <path d="M0 560 Q200 520 400 545 Q600 565 800 535" strokeWidth="0.8" />

        {/* Малые переулки (тонкие) */}
        <line x1="0" y1="160" x2="800" y2="160" strokeWidth="0.5" />
        <line x1="0" y1="240" x2="800" y2="240" strokeWidth="0.5" />
        <line x1="0" y1="320" x2="800" y2="320" strokeWidth="0.5" />
        <line x1="0" y1="400" x2="800" y2="400" strokeWidth="0.5" />
        <line x1="0" y1="480" x2="800" y2="480" strokeWidth="0.5" />

        <line x1="100" y1="0" x2="100" y2="600" strokeWidth="0.5" />
        <line x1="180" y1="0" x2="180" y2="600" strokeWidth="0.5" />
        <line x1="260" y1="0" x2="260" y2="600" strokeWidth="0.5" />
        <line x1="340" y1="0" x2="340" y2="600" strokeWidth="0.5" />
        <line x1="420" y1="0" x2="420" y2="600" strokeWidth="0.5" />
        <line x1="500" y1="0" x2="500" y2="600" strokeWidth="0.5" />
        <line x1="580" y1="0" x2="580" y2="600" strokeWidth="0.5" />
        <line x1="660" y1="0" x2="660" y2="600" strokeWidth="0.5" />
        <line x1="740" y1="0" x2="740" y2="600" strokeWidth="0.5" />

        {/* Кварталы — небольшие прямоугольники */}
        <rect x="65" y="205" width="70" height="70" strokeWidth="0.4" />
        <rect x="145" y="205" width="70" height="70" strokeWidth="0.4" />
        <rect x="225" y="205" width="70" height="70" strokeWidth="0.4" />
        <rect x="305" y="205" width="70" height="70" strokeWidth="0.4" />
        <rect x="385" y="205" width="70" height="70" strokeWidth="0.4" />
        <rect x="465" y="205" width="70" height="70" strokeWidth="0.4" />
        <rect x="545" y="205" width="70" height="70" strokeWidth="0.4" />
        <rect x="625" y="205" width="70" height="70" strokeWidth="0.4" />

        <rect x="65" y="285" width="70" height="70" strokeWidth="0.4" />
        <rect x="145" y="285" width="70" height="70" strokeWidth="0.4" />
        <rect x="305" y="285" width="70" height="70" strokeWidth="0.4" />
        <rect x="465" y="285" width="70" height="70" strokeWidth="0.4" />
        <rect x="625" y="285" width="70" height="70" strokeWidth="0.4" />

        <rect x="65" y="365" width="70" height="70" strokeWidth="0.4" />
        <rect x="225" y="365" width="70" height="70" strokeWidth="0.4" />
        <rect x="385" y="365" width="70" height="70" strokeWidth="0.4" />
        <rect x="545" y="365" width="70" height="70" strokeWidth="0.4" />

        {/* Кама — широкая волнистая линия снизу */}
        <path d="M0 580 Q100 565 200 575 Q300 585 400 572 Q500 560 600 572 Q700 584 800 568"
          strokeWidth="2" strokeOpacity="0.6" />

        {/* Точки-перекрёстки */}
        {[[60,120],[140,120],[220,120],[300,120],[380,120],[460,120],[540,120],[620,120],[700,120],
          [60,200],[140,200],[220,200],[300,200],[380,200],[460,200],[540,200],[620,200],[700,200],
          [60,280],[140,280],[300,280],[380,280],[460,280],[620,280],[700,280],
          [60,360],[220,360],[380,360],[460,360],[620,360],
          [300,440],[380,440],[460,440],[540,440],
        ].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="2" fill="white" fillOpacity="0.3" stroke="none" />
        ))}
      </svg>
    </div>
  )
}
