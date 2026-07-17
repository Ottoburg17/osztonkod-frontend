const BRAIN_PATH = `
M241 337
C228 259 261 176 333 138
C392 107 470 114 529 150
C575 116 644 112 701 146
C772 188 805 270 791 344
C784 384 767 421 739 452
C720 473 711 502 712 534
C713 577 688 608 649 620
C613 631 577 622 548 599
C523 621 487 634 448 634
C407 634 369 620 341 595
C311 620 272 629 236 616
C198 603 176 573 178 531
C180 500 171 475 150 452
C118 418 102 379 110 337
C123 266 170 215 241 337
Z
`;

export default function BrainSvg({
  children,
  className = "",
}) {
  return (
    <svg
      viewBox="0 0 900 700"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient
          id="brainFill"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop
            offset="0%"
            stopColor="#173447"
            stopOpacity=".78"
          />

          <stop
            offset="45%"
            stopColor="#0F2233"
            stopOpacity=".55"
          />

          <stop
            offset="100%"
            stopColor="#08131D"
            stopOpacity=".85"
          />
        </linearGradient>

        <radialGradient id="brainLight">
          <stop
            offset="0%"
            stopColor="#6EE7F9"
            stopOpacity=".22"
          />

          <stop
            offset="100%"
            stopColor="#6EE7F9"
            stopOpacity="0"
          />
        </radialGradient>

        <filter
          id="brainGlow"
          x="-50%"
          y="-50%"
          width="200%"
          height="200%"
        >
          <feGaussianBlur
            stdDeviation="14"
            result="blur"
          />

          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <clipPath id="brainClip">
          <path d={BRAIN_PATH} />
        </clipPath>
      </defs>

      {/* külső glow */}
      <path
        d={BRAIN_PATH}
        fill="#3FD7FF"
        opacity=".08"
        filter="url(#brainGlow)"
      />

      {/* fő agy */}
      <path
        d={BRAIN_PATH}
        fill="url(#brainFill)"
        stroke="#53D8FF"
        strokeWidth="2"
      />

      {/* belső fény */}
      <ellipse
        cx="430"
        cy="260"
        rx="210"
        ry="170"
        fill="url(#brainLight)"
      />

      {/* neuronok */}
      <g clipPath="url(#brainClip)">
        {children}
      </g>

      {/* finom highlight */}
      <path
        d={BRAIN_PATH}
        fill="none"
        stroke="#9BEFFF"
        strokeOpacity=".18"
        strokeWidth="1"
      />
    </svg>
  );
}