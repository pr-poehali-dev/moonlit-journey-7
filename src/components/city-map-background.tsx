export function CityMapBackground({ opacity = 0.045 }: { opacity?: number }) {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ opacity }}>
      <svg
        viewBox="0 0 1000 750"
        preserveAspectRatio="xMidYMid slice"
        className="w-full h-full"
        fill="none"
        stroke="white"
      >
        {/* =====================================================
            НАБЕРЕЖНЫЕ ЧЕЛНЫ — точная стилизованная карта
            По референсу: Кама слева-сверху, диагональная сетка
            кварталов в центре (New City), Старый город снизу-слева
            ===================================================== */}

        {/* === КАМА — широкая река, левый край === */}
        <path
          d="M-10 0 Q40 80 30 180 Q20 260 50 340 Q80 420 60 500 Q45 560 70 650 Q90 720 80 760"
          stroke="white" strokeWidth="3.5" strokeOpacity="0.5" fill="none"
        />
        {/* Берег Камы */}
        <path
          d="M-10 20 Q60 100 55 200 Q50 280 80 360 Q110 440 95 520 Q80 590 105 670 Q120 730 110 760"
          stroke="white" strokeWidth="1.2" strokeOpacity="0.3" fill="none"
        />
        {/* Мелекеска (залив) */}
        <path
          d="M55 340 Q120 330 160 360 Q190 380 180 410 Q165 440 130 430 Q90 420 80 400 Q65 375 55 340Z"
          stroke="white" strokeWidth="0.8" strokeOpacity="0.35" fill="none"
        />

        {/* === НОВЫЙ ГОРОД — диагональная сетка кварталов ===
            Характерная черта Набережных Челнов: кварталы повёрнуты ~45°
            Центр сетки примерно в 420,380 */}

        {/* Главные проспекты — диагональные, NW→SE */}
        <line x1="180" y1="180" x2="700" y2="580" stroke="white" strokeWidth="2.2" strokeOpacity="0.9" />
        <line x1="220" y1="150" x2="740" y2="550" stroke="white" strokeWidth="1.6" strokeOpacity="0.7" />
        <line x1="260" y1="120" x2="780" y2="520" stroke="white" strokeWidth="1.2" strokeOpacity="0.5" />
        <line x1="140" y1="210" x2="660" y2="610" stroke="white" strokeWidth="1.2" strokeOpacity="0.5" />
        <line x1="100" y1="240" x2="620" y2="640" stroke="white" strokeWidth="0.8" strokeOpacity="0.35" />
        <line x1="300" y1="90"  x2="820" y2="490" stroke="white" strokeWidth="0.8" strokeOpacity="0.35" />
        <line x1="340" y1="60"  x2="860" y2="460" stroke="white" strokeWidth="0.6" strokeOpacity="0.25" />
        <line x1="60"  y1="270" x2="580" y2="670" stroke="white" strokeWidth="0.6" strokeOpacity="0.25" />

        {/* Главные проспекты — диагональные, SW→NE */}
        <line x1="160" y1="580" x2="680" y2="180" stroke="white" strokeWidth="2.2" strokeOpacity="0.9" />
        <line x1="120" y1="560" x2="640" y2="160" stroke="white" strokeWidth="1.6" strokeOpacity="0.7" />
        <line x1="80"  y1="540" x2="600" y2="140" stroke="white" strokeWidth="1.2" strokeOpacity="0.5" />
        <line x1="200" y1="600" x2="720" y2="200" stroke="white" strokeWidth="1.2" strokeOpacity="0.5" />
        <line x1="240" y1="620" x2="760" y2="220" stroke="white" strokeWidth="0.8" strokeOpacity="0.35" />
        <line x1="40"  y1="520" x2="560" y2="120" stroke="white" strokeWidth="0.8" strokeOpacity="0.35" />
        <line x1="280" y1="640" x2="800" y2="240" stroke="white" strokeWidth="0.6" strokeOpacity="0.25" />
        <line x1="320" y1="660" x2="840" y2="260" stroke="white" strokeWidth="0.6" strokeOpacity="0.25" />

        {/* Второстепенные переулки внутри диагональных блоков */}
        <line x1="190" y1="200" x2="480" y2="490" stroke="white" strokeWidth="0.5" strokeOpacity="0.2" />
        <line x1="230" y1="170" x2="520" y2="460" stroke="white" strokeWidth="0.5" strokeOpacity="0.2" />
        <line x1="270" y1="140" x2="560" y2="430" stroke="white" strokeWidth="0.5" strokeOpacity="0.2" />
        <line x1="310" y1="110" x2="600" y2="400" stroke="white" strokeWidth="0.5" strokeOpacity="0.2" />
        <line x1="350" y1="80"  x2="640" y2="370" stroke="white" strokeWidth="0.5" strokeOpacity="0.2" />

        <line x1="150" y1="500" x2="440" y2="210" stroke="white" strokeWidth="0.5" strokeOpacity="0.2" />
        <line x1="190" y1="520" x2="480" y2="230" stroke="white" strokeWidth="0.5" strokeOpacity="0.2" />
        <line x1="230" y1="540" x2="520" y2="250" stroke="white" strokeWidth="0.5" strokeOpacity="0.2" />
        <line x1="270" y1="560" x2="560" y2="270" stroke="white" strokeWidth="0.5" strokeOpacity="0.2" />
        <line x1="310" y1="580" x2="600" y2="290" stroke="white" strokeWidth="0.5" strokeOpacity="0.2" />

        {/* === СТАРЫЙ ГОРОД — нижняя часть, более хаотичная сетка === */}
        {/* Горизонтальные улицы старого города */}
        <line x1="60"  y1="480" x2="340" y2="480" stroke="white" strokeWidth="1.0" strokeOpacity="0.5" />
        <line x1="50"  y1="520" x2="320" y2="520" stroke="white" strokeWidth="0.8" strokeOpacity="0.4" />
        <line x1="65"  y1="560" x2="300" y2="560" stroke="white" strokeWidth="0.7" strokeOpacity="0.35" />
        <line x1="75"  y1="600" x2="280" y2="600" stroke="white" strokeWidth="0.6" strokeOpacity="0.3" />
        <line x1="85"  y1="640" x2="260" y2="640" stroke="white" strokeWidth="0.5" strokeOpacity="0.25" />
        <line x1="100" y1="680" x2="250" y2="680" stroke="white" strokeWidth="0.5" strokeOpacity="0.2" />
        <line x1="60"  y1="440" x2="380" y2="440" stroke="white" strokeWidth="1.0" strokeOpacity="0.5" />

        {/* Вертикальные улицы старого города */}
        <line x1="130" y1="420" x2="130" y2="720" stroke="white" strokeWidth="0.8" strokeOpacity="0.4" />
        <line x1="170" y1="420" x2="165" y2="700" stroke="white" strokeWidth="0.7" strokeOpacity="0.35" />
        <line x1="210" y1="430" x2="200" y2="690" stroke="white" strokeWidth="0.6" strokeOpacity="0.3" />
        <line x1="250" y1="440" x2="235" y2="680" stroke="white" strokeWidth="0.6" strokeOpacity="0.3" />
        <line x1="290" y1="450" x2="270" y2="660" stroke="white" strokeWidth="0.5" strokeOpacity="0.25" />

        {/* Изогнутые дороги старого города (органика) */}
        <path d="M90 420 Q110 460 100 500 Q90 540 110 580 Q130 620 120 660" stroke="white" strokeWidth="0.8" strokeOpacity="0.4" fill="none" />
        <path d="M70 430 Q85 470 78 510 Q70 550 88 590" stroke="white" strokeWidth="0.6" strokeOpacity="0.3" fill="none" />

        {/* === ВОСТОК ГОРОДА — правая часть, промзона и частный сектор === */}
        <line x1="700" y1="200" x2="1000" y2="200" stroke="white" strokeWidth="0.9" strokeOpacity="0.4" />
        <line x1="720" y1="260" x2="1000" y2="260" stroke="white" strokeWidth="0.7" strokeOpacity="0.3" />
        <line x1="740" y1="320" x2="1000" y2="320" stroke="white" strokeWidth="0.7" strokeOpacity="0.3" />
        <line x1="760" y1="380" x2="1000" y2="380" stroke="white" strokeWidth="0.6" strokeOpacity="0.25" />
        <line x1="780" y1="440" x2="1000" y2="440" stroke="white" strokeWidth="0.5" strokeOpacity="0.2" />
        <line x1="800" y1="500" x2="1000" y2="500" stroke="white" strokeWidth="0.5" strokeOpacity="0.2" />

        <line x1="820" y1="160" x2="820" y2="600" stroke="white" strokeWidth="0.7" strokeOpacity="0.3" />
        <line x1="880" y1="180" x2="880" y2="560" stroke="white" strokeWidth="0.6" strokeOpacity="0.25" />
        <line x1="940" y1="200" x2="940" y2="520" stroke="white" strokeWidth="0.5" strokeOpacity="0.2" />

        {/* Хаотичные дороги восточной части */}
        <path d="M700 300 Q750 320 800 310 Q850 300 900 320 Q950 340 1000 330" stroke="white" strokeWidth="0.6" strokeOpacity="0.25" fill="none" />
        <path d="M720 420 Q770 400 820 415 Q870 430 920 410" stroke="white" strokeWidth="0.5" strokeOpacity="0.2" fill="none" />

        {/* === МОСТ ЧЕРЕЗ КАМУ — горизонтальная линия === */}
        <line x1="55" y1="300" x2="200" y2="300" stroke="white" strokeWidth="2.5" strokeOpacity="0.7" />
        <line x1="55" y1="295" x2="200" y2="295" stroke="white" strokeWidth="0.8" strokeOpacity="0.3" />
        <line x1="55" y1="305" x2="200" y2="305" stroke="white" strokeWidth="0.8" strokeOpacity="0.3" />

        {/* === КЛЮЧЕВЫЕ ПЕРЕКРЁСТКИ (кружки) === */}
        {[
          [420, 380], [340, 300], [500, 460], [260, 220],
          [580, 540], [380, 340], [460, 420], [300, 260],
          [540, 500], [440, 360], [360, 280], [520, 480],
          [400, 320], [480, 440], [320, 240],
        ].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="3" fill="white" fillOpacity="0.45" stroke="none" />
        ))}

        {/* Мелкие перекрёстки */}
        {[
          [190, 195], [230, 165], [270, 135], [310, 105],
          [155, 505], [195, 525], [235, 545], [275, 565],
          [640, 195], [680, 215], [720, 235], [760, 255],
        ].map(([cx, cy], i) => (
          <circle key={`s${i}`} cx={cx} cy={cy} r="1.8" fill="white" fillOpacity="0.3" stroke="none" />
        ))}

        {/* === ГРАНИЦА ГОРОДА — еле видный контур === */}
        <path
          d="M90 50 Q200 30 350 40 Q500 50 650 80 Q800 110 950 130
             Q980 200 990 350 Q995 500 970 620
             Q900 700 750 730 Q600 750 450 740
             Q300 730 180 700 Q100 670 80 600
             Q60 520 70 420 Q75 320 60 240 Q45 160 90 50Z"
          stroke="white" strokeWidth="0.6" strokeOpacity="0.12" fill="none"
          strokeDasharray="8 6"
        />
      </svg>
    </div>
  )
}
