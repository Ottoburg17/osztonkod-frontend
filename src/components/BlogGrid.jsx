/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Brain } from "lucide-react";

import postsData from "../data/postsData";

export default function BlogGrid() {
  const latestPosts = postsData.slice(0, 4);

  return (
    <section
      className="
        relative
        overflow-hidden

        bg-gradient-to-b
        from-gray-50
        via-emerald-25
        to-white

        px-6

        pt-28
        pb-24

        md:px-16
          "
    >
      {/* Glow */}

      <div
        className="
         absolute
          top-0
          left-1/2
          -translate-x-1/2

          w-[700px]
          h-[700px]

          rounded-full 

          bg-emerald-300/10

          blur-[180px]

          pointer-events-none
        "
      />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* HEADER */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="text-center"
        >
         
         <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-emerald-600">
          <span className="text-slate-900">Tudás</span>{" "}
          központ
        </h2>
                        

          <p
            className="
              mt-6

              max-w-3xl

              mx-auto

              text-lg
              leading-8

              text-slate-600
            "
          >
            Közérthető cikkek pszichológiáról,
            önismeretről, viselkedési mintákról
            és az emberi döntések hátteréről.
          </p>
        </motion.div>

        {/* GRID */}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mt-20">

          {latestPosts.map((post, i) => (

            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: .6,
                delay: i * .08,
              }}
              className="
                group

                rounded-3xl

                border
                border-gray-200

                bg-white/80
                backdrop-blur-xl

                p-7

                shadow-sm

                transition-all
                duration-300

                hover:-translate-y-2
                hover:shadow-xl
              "
            >

              {/* ICON */}

              <div
                className="
                 w-12
                  h-12

                  rounded-2xl

                  bg-gradient-to-br
                  from-emerald-50
                  to-emerald-100

                  border
                  border-emerald-100

                  flex
                  items-center
                  justify-center

                  text-emerald-700

                  mb-6
                "
              >
                <Brain size={24} />
              </div>

              {/* DATE */}

              <p
                className="
                  text-xs

                  uppercase

                  tracking-wider

                  text-emerald-600

                  mb-3
                "
              >
                {new Date(post.date).toLocaleDateString("hu-HU", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>

              {/* TITLE */}

              <h3
                className="
                  text-xl

                  font-bold

                  leading-snug

                  text-slate-900

                  line-clamp-3

                  mb-4
                "
              >
                <Link
                  to={`/blog/${post.slug}`}
                  className="group-hover:text-emerald-700 transition-colors"
                >
                  {post.title}
                </Link>
              </h3>

              {/* DESCRIPTION */}

              <p
                className="
                  text-slate-600

                  leading-7

                  line-clamp-4
                "
              >
                {post.description}
              </p>

              {/* LINK */}

              <Link
                to={`/blog/${post.slug}`}
                className="
                  inline-flex

                  items-center

                  gap-2

                  mt-8

                  font-semibold

                  text-emerald-700

                  group-hover:gap-3

                  transition-all
                "
              >
                Cikk megnyitása →

              </Link>

            </motion.article>

          ))}

        </div>

        {/* CTA */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: .2, duration: .8 }}
          className="text-center mt-24"
        >
          <p
            className="
              max-w-2xl

              mx-auto

              text-lg

              leading-8

              text-slate-600

              mb-8
            "
          >
            Szeretnél mélyebben megérteni,
            hogyan működik az emberi elme,
            és mi alakítja a döntéseidet?
            Tudásközpontunkban folyamatosan
            bővülő cikkeket találsz ezekről a témákról.
          </p>

          <Link
            to="/blog"
            className="
              group
              inline-flex
              items-center
              gap-3

              rounded-2xl

              border border-emerald-200

              bg-white

              px-8
              py-4

              font-semibold

              text-emerald-700

              shadow-sm

              transition-all
              duration-300

              hover:-translate-y-1
              hover:border-emerald-300
              hover:shadow-lg
              hover:text-emerald-800
            "
          >
            Tovább a Tudásközpontba

             <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>

          </Link>

        </motion.div>

      </div>
    </section>
  );
}

