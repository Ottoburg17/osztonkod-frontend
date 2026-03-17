// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function FeedbackSuccess() {
  return (
    <div className="w-full min-h-screen bg-white flex items-center justify-center px-6 py-24">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-xl w-full bg-white/90 backdrop-blur-xl border border-green-200 shadow-xl rounded-3xl p-10 text-center space-y-6"
      >
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-3xl font-bold text-green-600"
        >
         Köszönjük – a felismerésed számít
        </motion.h1>

        <p className="text-gray-700 leading-relaxed">
          A felismerések megosztása segít másoknak is megérteni,
          hogy a működési minták nem hibák — hanem értelmezhető struktúrák.
        </p>

        <p className="text-gray-500 text-sm">
          A visszajelzés moderálás után jelenik meg.
        </p>

        <div className="pt-6 space-y-4">

          <Link
            to="/social-proof"
            className="block w-full bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition"
          >
            Vissza a személyes felismerésekhez
          </Link>

          <Link
            to="/"
            className="block text-sm text-gray-500 hover:text-green-600 transition"
          >
            Vissza a főoldalra
          </Link>

        </div>
      </motion.div>

    </div>
  );
}