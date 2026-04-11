// opacity prop оставлен для совместимости, но теперь управляет лишь тонкой подстройкой.
// Основная видимость задана прямо в stroke/strokeOpacity элементов.
export function CityMapBackground({ opacity = 1 }: { opacity?: number }) {
  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden"
      style={{ opacity: Math.max(opacity, 0.18) }}
    >
      <svg
        viewBox="0 0 1000 750"
        preserveAspectRatio="xMidYMid slice"
        className="w-full h-full"
        fill="none"
      >
        {/* =====================================================
            НАБЕРЕЖНЫЕ ЧЕЛНЫ — стилизованная векторная карта
            По структуре города: диагональная сетка Нового города,
            Кама слева, Старый город внизу.
            ===================================================== */}

        {/* === КАМА — широкая река, левый край === */}
        <path
          d="M-10 0 Q40 80 30 180 Q20 260 50 340 Q80 420 60 500 Q45 560 70 650 Q90 720 80 760"
          stroke="white" strokeWidth="4" strokeOpacity="0.55" fill="none"
        />
        <path
          d="M-10 20 Q60 100 55 200 Q50 280 80 360 Q110 440 95 520 Q80 590 105 670 Q120 730 110 760"
          stroke="white" strokeWidth="1.5" strokeOpacity="0.3" fill="none"
        />

        {/* Мелекеска — залив */}
        <path
          d="M55 340 Q120 330 160 360 Q190 380 180 410 Q165 440 130 430 Q90 420 80 400 Q65 375 55 340Z"
          stroke="white" strokeWidth="1.2" strokeOpacity="0.35" fill="none"
        />

        {/* === МОСТ ЧЕРЕЗ КАМУ === */}
        <line x1="55" y1="300" x2="210" y2="300" stroke="white" strokeWidth="3" strokeOpacity="0.7" />
        <line x1="55" y1="294" x2="210" y2="294" stroke="white" strokeWidth="1" strokeOpacity="0.3" />
        <line x1="55" y1="306" x2="210" y2="306" stroke="white" strokeWidth="1" strokeOpacity="0.3" />

        {/* === НОВЫЙ ГОРОД — диагональная сетка ~45° ===
            Главные проспекты NW→SE */}
        <line x1="180" y1="170" x2="720" y2="590" stroke="white" strokeWidth="2.4" strokeOpacity="0.85" />
        <line x1="220" y1="140" x2="760" y2="560" stroke="white" strokeWidth="1.8" strokeOpacity="0.65" />
        <line x1="260" y1="110" x2="800" y2="530" stroke="white" strokeWidth="1.4" strokeOpacity="0.50" />
        <line x1="140" y1="200" x2="680" y2="620" stroke="white" strokeWidth="1.4" strokeOpacity="0.50" />
        <line x1="100" y1="230" x2="640" y2="650" stroke="white" strokeWidth="0.9" strokeOpacity="0.35" />
        <line x1="300" y1="80"  x2="840" y2="500" stroke="white" strokeWidth="0.9" strokeOpacity="0.35" />
        <line x1="340" y1="50"  x2="880" y2="470" stroke="white" strokeWidth="0.7" strokeOpacity="0.28" />
        <line x1="60"  y1="260" x2="600" y2="680" stroke="white" strokeWidth="0.7" strokeOpacity="0.28" />
        <line x1="380" y1="30"  x2="920" y2="450" stroke="white" strokeWidth="0.5" strokeOpacity="0.2"  />
        <line x1="30"  y1="290" x2="570" y2="710" stroke="white" strokeWidth="0.5" strokeOpacity="0.2"  />

        {/* Главные проспекты SW→NE */}
        <line x1="155" y1="590" x2="695" y2="170" stroke="white" strokeWidth="2.4" strokeOpacity="0.85" />
        <line x1="115" y1="570" x2="655" y2="150" stroke="white" strokeWidth="1.8" strokeOpacity="0.65" />
        <line x1="75"  y1="550" x2="615" y2="130" stroke="white" strokeWidth="1.4" strokeOpacity="0.50" />
        <line x1="195" y1="610" x2="735" y2="190" stroke="white" strokeWidth="1.4" strokeOpacity="0.50" />
        <line x1="235" y1="630" x2="775" y2="210" stroke="white" strokeWidth="0.9" strokeOpacity="0.35" />
        <line x1="35"  y1="530" x2="575" y2="110" stroke="white" strokeWidth="0.9" strokeOpacity="0.35" />
        <line x1="275" y1="650" x2="815" y2="230" stroke="white" strokeWidth="0.7" strokeOpacity="0.28" />
        <line x1="315" y1="670" x2="855" y2="250" stroke="white" strokeWidth="0.7" strokeOpacity="0.28" />
        <line x1="355" y1="690" x2="895" y2="270" stroke="white" strokeWidth="0.5" strokeOpacity="0.2"  />

        {/* Промежуточные переулки внутри блоков */}
        <line x1="200" y1="185" x2="500" y2="485" stroke="white" strokeWidth="0.6" strokeOpacity="0.25" />
        <line x1="240" y1="155" x2="540" y2="455" stroke="white" strokeWidth="0.6" strokeOpacity="0.25" />
        <line x1="280" y1="125" x2="580" y2="425" stroke="white" strokeWidth="0.6" strokeOpacity="0.25" />
        <line x1="320" y1="95"  x2="620" y2="395" stroke="white" strokeWidth="0.6" strokeOpacity="0.25" />
        <line x1="360" y1="65"  x2="660" y2="365" stroke="white" strokeWidth="0.6" strokeOpacity="0.25" />

        <line x1="135" y1="515" x2="435" y2="215" stroke="white" strokeWidth="0.6" strokeOpacity="0.25" />
        <line x1="175" y1="535" x2="475" y2="235" stroke="white" strokeWidth="0.6" strokeOpacity="0.25" />
        <line x1="215" y1="555" x2="515" y2="255" stroke="white" strokeWidth="0.6" strokeOpacity="0.25" />
        <line x1="255" y1="575" x2="555" y2="275" stroke="white" strokeWidth="0.6" strokeOpacity="0.25" />
        <line x1="295" y1="595" x2="595" y2="295" stroke="white" strokeWidth="0.6" strokeOpacity="0.25" />

        {/* === СТАРЫЙ ГОРОД — нижняя часть, органичная сетка === */}
        <line x1="60"  y1="445" x2="370" y2="445" stroke="white" strokeWidth="1.2" strokeOpacity="0.50" />
        <line x1="55"  y1="485" x2="340" y2="485" stroke="white" strokeWidth="0.9" strokeOpacity="0.40" />
        <line x1="60"  y1="525" x2="320" y2="525" stroke="white" strokeWidth="0.8" strokeOpacity="0.35" />
        <line x1="68"  y1="565" x2="305" y2="565" stroke="white" strokeWidth="0.7" strokeOpacity="0.30" />
        <line x1="76"  y1="605" x2="290" y2="605" stroke="white" strokeWidth="0.6" strokeOpacity="0.25" />
        <line x1="85"  y1="645" x2="275" y2="645" stroke="white" strokeWidth="0.5" strokeOpacity="0.22" />
        <line x1="95"  y1="685" x2="260" y2="685" stroke="white" strokeWidth="0.5" strokeOpacity="0.18" />

        <line x1="128" y1="420" x2="128" y2="730" stroke="white" strokeWidth="0.9" strokeOpacity="0.40" />
        <line x1="168" y1="425" x2="163" y2="710" stroke="white" strokeWidth="0.7" strokeOpacity="0.32" />
        <line x1="208" y1="432" x2="198" y2="695" stroke="white" strokeWidth="0.7" strokeOpacity="0.30" />
        <line x1="248" y1="440" x2="233" y2="678" stroke="white" strokeWidth="0.6" strokeOpacity="0.27" />
        <line x1="288" y1="448" x2="268" y2="662" stroke="white" strokeWidth="0.5" strokeOpacity="0.22" />
        <line x1="328" y1="456" x2="303" y2="648" stroke="white" strokeWidth="0.5" strokeOpacity="0.18" />

        {/* Органичные кривые дороги в Старом городе */}
        <path d="M88 420 Q108 460 98 502 Q88 542 108 582 Q128 622 118 662" stroke="white" strokeWidth="0.9" strokeOpacity="0.38" fill="none" />
        <path d="M68 432 Q84 472 76 514 Q68 554 86 592" stroke="white" strokeWidth="0.7" strokeOpacity="0.28" fill="none" />

        {/* === ВОСТОК ГОРОДА — промзона, частный сектор === */}
        <line x1="700" y1="195" x2="1010" y2="195" stroke="white" strokeWidth="1.0" strokeOpacity="0.38" />
        <line x1="718" y1="255" x2="1010" y2="255" stroke="white" strokeWidth="0.8" strokeOpacity="0.30" />
        <line x1="736" y1="315" x2="1010" y2="315" stroke="white" strokeWidth="0.7" strokeOpacity="0.28" />
        <line x1="754" y1="375" x2="1010" y2="375" stroke="white" strokeWidth="0.6" strokeOpacity="0.24" />
        <line x1="772" y1="435" x2="1010" y2="435" stroke="white" strokeWidth="0.5" strokeOpacity="0.20" />
        <line x1="790" y1="495" x2="1010" y2="495" stroke="white" strokeWidth="0.5" strokeOpacity="0.18" />

        <line x1="820" y1="155" x2="820" y2="610" stroke="white" strokeWidth="0.7" strokeOpacity="0.28" />
        <line x1="880" y1="175" x2="880" y2="565" stroke="white" strokeWidth="0.6" strokeOpacity="0.24" />
        <line x1="940" y1="195" x2="940" y2="520" stroke="white" strokeWidth="0.5" strokeOpacity="0.20" />

        <path d="M700 305 Q755 318 810 308 Q860 298 915 315 Q960 332 1010 325" stroke="white" strokeWidth="0.6" strokeOpacity="0.22" fill="none" />

        {/* === КЛЮЧЕВЫЕ ПЕРЕКРЁСТКИ === */}
        {([
          [420,380],[340,300],[500,460],[260,220],[580,540],
          [380,340],[460,420],[300,260],[540,500],[440,360],
          [360,280],[520,480],[400,320],[480,440],[320,240],
          [560,520],[280,200],[600,560],[420,300],[480,400],
        ] as [number,number][]).map(([cx,cy],i) => (
          <circle key={i} cx={cx} cy={cy} r="3.5" fill="white" fillOpacity="0.55" stroke="none" />
        ))}

        {/* Мелкие перекрёстки */}
        {([
          [190,190],[230,160],[270,130],[310,100],[350,70],
          [155,510],[195,530],[235,550],[275,570],[315,590],
          [640,190],[680,210],[720,230],[760,250],
          [160,475],[200,495],[240,515],[280,535],
        ] as [number,number][]).map(([cx,cy],i) => (
          <circle key={`s${i}`} cx={cx} cy={cy} r="2" fill="white" fillOpacity="0.38" stroke="none" />
        ))}

        {/* === ГРАНИЦА ГОРОДА === */}
        <path
          d="M90 50 Q200 30 350 40 Q500 50 650 80 Q800 110 950 130
             Q980 200 990 350 Q995 500 970 620
             Q900 700 750 730 Q600 750 450 740
             Q300 730 180 700 Q100 670 80 600
             Q60 520 70 420 Q75 320 60 240 Q45 160 90 50Z"
          stroke="white" strokeWidth="0.8" strokeOpacity="0.15" fill="none"
          strokeDasharray="10 7"
        />
      </svg>
    </div>
  )
}
