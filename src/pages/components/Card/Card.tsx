import { cardVariants } from "@/pages/utils/AnimationVariants";
import { motion } from "framer-motion";

export default function Card() {


  return (
    <motion.div
      className="flex justify-center items-center w-44 h-44 bg-gray-600 rounded-md"
      variants={cardVariants}
      whileHover="hover"
      transition={{ duration: 0.5 }}
    >
      <h1>teste</h1>
    </motion.div>
  );
}
