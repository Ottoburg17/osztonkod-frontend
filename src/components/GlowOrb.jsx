// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function GlowOrb({ id, rotate, originX, originY, className }) {
  return (
    <motion.svg
      className={`${className} pointer-events-none`}
      width="360"
      height="360"
      viewBox="0 0 500 500"
      style={{ transformBox: "fill-box", originX, originY }}
      animate={{ rotate }}
      transition={{ repeat: Infinity, duration: 22, ease: "linear" }}
    >
      <defs>
        <radialGradient id={id} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(84, 221, 134, 1)" />
          <stop offset="60%" stopColor="rgba(74, 222, 128, 0.4)" />
          <stop offset="20%" stopColor="transparent" />
        </radialGradient>
      </defs>

      <circle cx="250" cy="250" r="200" fill={`url(#${id})`} />
    </motion.svg>
  );
}

