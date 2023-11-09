import { motion } from "framer-motion";
import NavComponent from "./components/NavComponent/NavComponent";
import Card from "./components/CardCompetencia/CardCompetencia";
import animationVariants from "@/utils/AnimationVariants";

export default function Projetos() {
  return (
    <section className="flex min-h-screen flex-col items-center">
      <NavComponent competencia={false} projetos={true} />{" "}
      <div className="flex mt-20 justify-center items-center w-96">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={animationVariants}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-10">Projetos</p>

          <div className="flex gap-7 flex-wrap">
            {/* <Card /> */}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
