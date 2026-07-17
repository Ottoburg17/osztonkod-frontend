/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

export default function AboutFeatureCard({
  icon,
  title,
  description,
  color = "emerald",
  delay = 0,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay,
      }}
      whileHover={{
        y: -6,
        scale: 1.02,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-3xl

        border border-white/70

        bg-white/70
        backdrop-blur-xl

        shadow-[0_20px_60px_rgba(0,0,0,.08)]

        transition-all
        duration-500
      "
    >
      {/* Glow */}

      <div
        className={`
          absolute
          inset-0

          opacity-0

          transition-opacity
          duration-500

          group-hover:opacity-100

          ${
            color === "emerald"
              ? "bg-gradient-to-br from-emerald-400/10 via-transparent to-cyan-300/10"
              : color === "rose"
              ? "bg-gradient-to-br from-rose-400/10 via-transparent to-orange-300/10"
              : "bg-gradient-to-br from-sky-400/10 via-transparent to-indigo-300/10"
          }
        `}
      />

      <div className="relative p-7">

        <div
          className={`
            mb-6

            flex
            h-14
            w-14

            items-center
            justify-center

            rounded-2xl

            ${
              color === "emerald"
                ? "bg-emerald-100 text-emerald-600"
                : color === "rose"
                ? "bg-rose-100 text-rose-600"
                : "bg-sky-100 text-sky-600"
            }
          `}
        >
          {icon}
        </div>

        <h3 className="text-xl font-semibold text-gray-900">
          {title}
        </h3>

        <p className="mt-3 leading-7 text-gray-600">
          {description}
        </p>

      </div>
    </motion.div>
  );
}