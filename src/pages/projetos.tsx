import animationVariants from "@/utils/AnimationVariants";
import { motion } from "framer-motion";
import CardProjeto from "./components/CardProjeto/CardProjeto";
import NavComponent from "./components/NavComponent/NavComponent";

import p06 from "@/assets/img/p06.jpg";
import relatorio from "@/assets/img/relatorio.png";

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
          <div className="flex h-screen gap-10">
            <CardProjeto
              img={relatorio}
              widht={0}
              height={0}
              desctiption="Aplicação WEB, para gerar relatórios de compras de insumos por semestre. Surgiu da necessidade de facilitar compra dos insumos para a instituição de ensino superior, onde para cada aula prática presencial a um consumo considerável por equipes de insumos gerados, esta aplicação faz o cálculo com base na quantidade de alunos existente naquele período. Foi escolhido no front-end NEXTJS com Typescript para segurança de tipos na parte do cliente sendo potencializado pela gama de ferramentas de desenvolvimento do NEXTJS, no back-end foi escolhido a modelagem de um servidor STRAPI, por sua praticidade e versatilidade, integrado com AWS para armazenamento de mídia, e conectado ao banco de dados MYSQL na hostgator."
              link="https://jogo-empresarial.herokuapp.com/"
            />
            <CardProjeto
              img={p06}
              widht={0}
              height={0}
              desctiption="Simulador de arquitetura - com o intuito de simular uma planta baixa de projeto elétrico de baixa tensão, onde ocorre a distribuição de tomadas e quadro de circuito de acordo com norma NBR, simulador cobre aula práticas que alunos deveriam e deslocar até as imediações, reduzindo custo e aumentando a retenção do aluno por facilidades digitais."
              link="https://practices-lia-stage.herokuapp.com/p06-arquitetura/index.html"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
