import { motion } from "framer-motion";
import NavComponent from "./components/NavComponent/NavComponent";
import { animationVariants } from "./utils/AnimationVariants";

export default function Projetos() {
  return (
    <>
      <NavComponent competencia={false} projetos={true} />
      <div className="flex mt-20 justify-center items-center w-96">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={animationVariants}
          transition={{ duration: 0.5 }}
        >
          <p>Projetos</p>
        </motion.div>
      </div>
    </>
  );
}
