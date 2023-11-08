import { cardVariants } from "@/pages/utils/AnimationVariants";
import { motion } from "framer-motion";
import Image from "next/image";
import img from "@/assets/img/profile.jpeg";

export default function Card() {
  return (
    <motion.div
      className="flex flex-col justify-center items-center w-44 h-44 rounded-md"
      variants={cardVariants}
      whileHover="hover"
      transition={{ duration: 0.5 }}
    >
      {/* <Image alt="img" src={img} className="rounded-xl" width={200} height={200}/> */}
      <p>descrição</p>
    </motion.div>
  );
}
