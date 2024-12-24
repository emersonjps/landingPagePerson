import { motion } from "framer-motion";
import NavComponent from "../components/NavComponent/NavComponent";
import CardCompetencia from "../components/CardCompetencia/CardCompetencia";
import animationVariants from "@/utils/AnimationVariants";
import Copyright from "../components/Copyright/Copyright";
import data from '@/utils/dataCompentece'
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Competencias() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center ${inter.className}`}
    >
      <NavComponent competencia={true} projetos={false} />{" "}
      <section className="flex items-center mt-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={animationVariants}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-wrap gap-5 justify-center items-center">
            {data.map((item, index) => (
              <CardCompetencia
                key={index}
                img={item.img}
                desctiption={item.description}
                widht={item.width}
                height={item.height}
              />
            ))}
          </div>
          <Copyright />
        </motion.div>
      </section>
    </main> 
  );
}
