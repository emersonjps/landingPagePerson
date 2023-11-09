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
import Copyright from "./components/Copyright/Copyright";

export default function Competencias() {
  return (
    <>
      <NavComponent competencia={true} projetos={false} />{" "}
      <section className="flex min-h-screen flex-col items-center">
        <motion.div
          className="flex flex-col mt-20 w-[32rem] items-center"
          initial="hidden"
          animate="visible"
          variants={animationVariants}
          transition={{ duration: 0.5 }}
        >
          <div className="flex  flex-wrap gap-5 justify-center items-center">
            <CardCompetencia
              img={ts}
              desctiption="Criação de tipo, interface e class, melhorando o paradigma de POO na web, utilizado para sistemas mais robustos onde esta abordagem se torna melhor que JS vanilla."
              widht={200}
              height={200}
            />
            <CardCompetencia
              img={js}
              desctiption="Utilizado para manipulação geral de DOM, logica e regras de negócios para implementação rápida, por não ter tipagem, acelerando muito o desenvolvimento em WEB."
              widht={200}
              height={200}
            />
            <CardCompetencia
              img={react}
              desctiption="Sistemas reativos na WEB diminuem muito o custo de processamento, por fornecer somente o novo componente alterado, podendo ser reutilizado em outros locais. "
              widht={200}
              height={200}
            />
            <CardCompetencia
              img={nextjs}
              desctiption="Frame Work para manipulação React, com múltiplas facilidades inclusas, sistema de SEO, SSR e SSG, acelerando muito o desenvolvimento de aplicações web, com qualidade."
              widht={200}
              height={200}
            />
            <CardCompetencia
              img={nestjs}
              desctiption="Construção de back-end robusto, com segurança de tipo utilizando Typescript como linguagem padrão, Frame Work utilizado para facilitar integração entre sistemas WEB."
              widht={200}
              height={200}
            />
            <CardCompetencia
              img={db}
              desctiption="Construção e manipulação de banco de dados relacionais e não relacionais, com ênfase em SQL, armazenando e obtendo informações com integridade, com planejamento."
              widht={200}
              height={200}
            />
            <CardCompetencia
              img={jest}
              desctiption="Teste unitários e automatizado para manter integridade de sistema e funcionalidade, criação, manipulação e levantamento de requisitos para teste mais eficazes. "
              widht={200}
              height={200}
            />
            <CardCompetencia
              img={axios}
              desctiption="Usado em diversos projetos para requisições HTTP, melhorando muito a manipulação de tratamente de erro e respostas, devido a seu gerenciamento assíncrono."
              widht={200}
              height={200}
            />
            <CardCompetencia
              img={figma}
              desctiption="Layout, ideias, estilos, animações e views, são elementos utilizados no FIGMA para construção de aplicações belas, com boa interface e experiencia do usuário UI/UX."
              widht={200}
              height={200}
            />
            <CardCompetencia
              img={aws}
              desctiption="AWS, seus serviços são utilizados para armazenamento de mídia em BUCKET S3, criação de instância de servidores em E2C com acesso SSH manutenções em sistemas."
              widht={200}
              height={200}
            />
          </div>
          <Copyright />
        </motion.div>
      </section>
    </>
  );
}
