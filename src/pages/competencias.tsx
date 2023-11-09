import { motion } from "framer-motion";
import NavComponent from "./components/NavComponent/NavComponent";
import CardCompetencia from "./components/CardCompetencia/CardCompetencia";
import animationVariants from "@/utils/AnimationVariants";
import js from "@/assets/img/js.png";
import ts from "@/assets/img/ts.png";
import react from "@/assets/img/react.png";
import nextjs from "@/assets/img/nextjs.png";
import nestjs from "@/assets/img/nestjs.png";
import db from "@/assets/img/db.png";
import jest from "@/assets/img/jest.png";
import axios from "@/assets/img/axios.png";
import figma from "@/assets/img/figma.png";
import aws from "@/assets/img/aws.png";

export default function Competencias() {
  return (
    <>
      <NavComponent competencia={true} projetos={false} />{" "}
      <section className="flex min-h-screen flex-col items-center">
        <motion.div
          className="flex flex-col mt-20 w-[32rem]"
          initial="hidden"
          animate="visible"
          variants={animationVariants}
          transition={{ duration: 0.5 }}
        >
          <div className="flex  flex-wrap gap-5 justify-center items-center">
            <CardCompetencia
              img={ts}
              desctiption="Lorem ipsum dolor sit amet consectetur adiibus magni corporis sits, ipsum nobis!"
              widht={200}
              height={200}
            />
            <CardCompetencia
              img={js}
              desctiption="Lorem ipsum dolor sit amet consectetur adiibus magni corporis sit, ipsum nobis!"
              widht={200}
              height={200}
            />
            <CardCompetencia
              img={react}
              desctiption="Lorem ipsum dolor sit amet consectetur adiibus magni corporis sit, ipsum nobis!"
              widht={200}
              height={200}
            />
            <CardCompetencia
              img={nextjs}
              desctiption="Lorem ipsum dolor sit amet consectetur adiibus magni corporis sit, ipsum nobis!"
              widht={200}
              height={200}
            />
            <CardCompetencia
              img={nestjs}
              desctiption="Lorem ipsum dolor sit amet consectetur adiibus magni corporis sit, ipsum nobis!"
              widht={200}
              height={200}
            />
            <CardCompetencia
              img={db}
              desctiption="Lorem ipsum dolor sit amet consectetur adiibus magni corporis sit, ipsum nobis!"
              widht={200}
              height={200}
            />
            <CardCompetencia
              img={jest}
              desctiption="Lorem ipsum dolor sit amet consectetur adiibus magni corporis sit, ipsum nobis!"
              widht={200}
              height={200}
            />
            <CardCompetencia
              img={axios}
              desctiption="Lorem ipsum dolor sit amet consectetur adiibus magni corporis sit, ipsum nobis!"
              widht={200}
              height={200}
            />
            <CardCompetencia
              img={figma}
              desctiption="Lorem ipsum dolor sit amet consectetur adiibus magni corporis sit, ipsum nobis!"
              widht={200}
              height={200}
            />
            <CardCompetencia
              img={aws}
              desctiption="Lorem ipsum dolor sit amet consectetur adiibus magni corporis sit, ipsum nobis!"
              widht={200}
              height={200}
            />
          </div>
        </motion.div>
      </section>
    </>
  );
}
