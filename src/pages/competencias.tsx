import { motion } from "framer-motion";
import NavComponent from "./components/NavComponent/NavComponent";
import { animationVariants } from "./utils/AnimationVariants";
import Card from "./components/Card/Card";

export default function Competencias() {
  return (
    <>
      <NavComponent competencia={true} projetos={false} />{" "}
      <div className="flex mt-20 justify-center items-center w-96">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={animationVariants}
          transition={{ duration: 0.5 }}
        >
          <p>Competencias</p>

          <Card />
        </motion.div>
      </div>
    </>
  );
}