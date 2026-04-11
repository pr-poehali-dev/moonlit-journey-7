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
        {/* Крупные клетки сетки */}
        {[100,200,300,400,500,600,700,800,900].map(x => (
          <line key={`v${x}`} x1={x} y1="0" x2={x} y2="750"
            stroke="white" strokeWidth="0.6" strokeOpacity="0.13" />
        ))}
        {[75,150,225,300,375,450,525,600,675].map(y => (
          <line key={`h${y}`} x1="0" y1={y} x2="1000" y2={y}
            stroke="white" strokeWidth="0.6" strokeOpacity="0.13" />
        ))}

        {/* Мелкие промежуточные линии */}
        {[50,150,250,350,450,550,650,750,850,950].map(x => (
          <line key={`vs${x}`} x1={x} y1="0" x2={x} y2="750"
            stroke="white" strokeWidth="0.3" strokeOpacity="0.05" />
        ))}
        {[37,112,187,262,337,412,487,562,637,712].map(y => (
          <line key={`hs${y}`} x1="0" y1={y} x2="1000" y2={y}
            stroke="white" strokeWidth="0.3" strokeOpacity="0.05" />
        ))}

        {/* Точки на пересечениях */}
        {[100,200,300,400,500,600,700,800,900].flatMap(x =>
          [75,150,225,300,375,450,525,600,675].map(y => (
            <circle key={`d${x}${y}`} cx={x} cy={y} r="1.2"
              fill="white" fillOpacity="0.15" stroke="none" />
          ))
        )}
      </svg>
    </div>
  )
}
