export default function AboutIllustration() {
  const nodes = [
    { top: "12%", left: "50%" },
    { top: "28%", left: "18%" },
    { top: "28%", left: "82%" },
    { top: "52%", left: "10%" },
    { top: "52%", left: "90%" },
    { top: "78%", left: "25%" },
    { top: "78%", left: "75%" },
    { top: "90%", left: "50%" },
  ];

  return (
    <div
      className="
        relative
        mx-auto
        flex
        h-[420px]
        w-full
        max-w-[520px]
        items-center
        justify-center
      "
    >
      {/* Glow */}

      <div
        className="
          absolute
          h-72
          w-72
          rounded-full
          bg-emerald-300/20
          blur-3xl
        "
      />

      {/* Connection Lines */}

      {nodes.map((node, index) => (
        <div
          key={index}
          className="absolute left-1/2 top-1/2 origin-center"
          style={{
            width: "2px",
            height: "130px",
            background:
              "linear-gradient(to top, rgba(16,185,129,.35), transparent)",
            transform: `translate(-50%, -100%) rotate(${index * 45}deg)`,
          }}
        />
      ))}

      {/* Outer Nodes */}

      {nodes.map((node, index) => (
        <div
          key={`node-${index}`}
          className="
            absolute
            h-5
            w-5
            rounded-full
            border-4
            border-white
            bg-emerald-500
            shadow-lg
            animate-pulse
          "
          style={{
            top: node.top,
            left: node.left,
            transform: "translate(-50%, -50%)",
            animationDelay: `${index * 0.2}s`,
          }}
        />
      ))}

      {/* Brain */}

      <div
        className="
          relative
          z-10
          flex
          h-44
          w-44
          items-center
          justify-center
          rounded-full
          border
          border-emerald-200
          bg-white
          shadow-2xl
        "
      >
        <div
          className="
            absolute
            inset-2
            rounded-full
            bg-gradient-to-br
            from-emerald-50
            via-white
            to-cyan-50
          "
        />

        <span className="relative text-7xl">
          🧠
        </span>
      </div>
    </div>
  );
}