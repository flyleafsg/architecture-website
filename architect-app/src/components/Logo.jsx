import { motion } from "framer-motion";

export default function Logo() {
  return (
    <motion.div
      whileHover={{
        scale: 1.1,
        boxShadow: "0px 0px 20px rgba(255, 215, 0, 0.8)"
      }}
      transition={{ type: "spring", stiffness: 200, damping: 10 }}
      className="inline-block"
    >
      <img
        src="/assets/logo.svg"
        alt="ArchiVision Logo"
        className="w-32 h-auto"
      />
    </motion.div>
  );
}
