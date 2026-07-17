import React from "react";
import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import postsData from "../data/postsData";

export default function BlogGrid() {
  const latestPosts = postsData.slice(0, 4);

  return (
    <section className="pt-28 pb-32 px-6 md:px-16 max-w-6xl mx-auto ">
      <h2 className="text-4xl md:text-5xl font-bold text-green-600 mb-10 text-center">
        Legfrissebb cikkek
      </h2>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {latestPosts.map((post, i) => (
          <motion.div
            key={post.slug}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="
              bg-white border border-green-200
              rounded-3xl p-6 shadow-lg
              hover:shadow-xl transition-all duration-300
              hover:-translate-y-1
            "
          >
            <h3 className="text-lg font-bold leading-snug line-clamp-3 text-green-700 mb-2">
              <Link to={`/blog/${post.slug}`}>{post.title}</Link>
            </h3>

            <p className="text-xs text-gray-400 mb-3">
              {new Date(post.date).toLocaleDateString("hu-HU", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>

            <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
              {post.description}
            </p>

            <Link
              to={`/blog/${post.slug}`}
              className="inline-flex items-center gap-1 mt-4 text-green-600 font-semibold hover:underline"
            >
              Olvasd tovább <span>→</span>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
