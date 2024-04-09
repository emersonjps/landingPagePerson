import animationVariants from "@/utils/AnimationVariants";
import { motion } from "framer-motion";
import CardProjeto from "../components/CardProjeto/CardProjeto";
import NavComponent from "../components/NavComponent/NavComponent";

import p06 from "@/assets/img/p06.jpg";
import p14 from "@/assets/img/p14.jpg";
import p15 from "@/assets/img/p15.jpg";
import relatorio from "@/assets/img/relatorio.png";
import Copyright from "../components/Copyright/Copyright";
import Link from "next/link";

export default function Projetos() {
  return (
    <section className="flex min-h-screen flex-col items-center">
      <div id="nav-projetos" className="flex w-full">
        <NavComponent competencia={false} projetos={true} />{" "}
      </div>
      <div className="flex mt-20 justify-center items-center w-96">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={animationVariants}
          transition={{ duration: 0.5 }}
        >
          <p id="titulo-competencia" className="text-center">
            Projetos em funcionamento
          </p>
          <div className="flex flex-wrap h-screen gap-16">
            <CardProjeto
              img={relatorio}
              widht={0}
              height={0}
              desctiption="Aplicação WEB, para gerar relatórios de compras de insumos por semestre. Surgiu da necessidade de facilitar compra dos insumos para a instituição de ensino superior, onde para cada aula prática presencial a um consumo considerável por equipes de insumos gerados, esta aplicação faz o cálculo com base na quantidade de alunos existente naquele período. Foi escolhido no front-end NEXTJS com Typescript para segurança de tipos na parte do cliente sendo potencializado pela gama de ferramentas de desenvolvimento do NEXTJS, no back-end foi escolhido a modelagem de um servidor STRAPI, por sua praticidade e versatilidade, integrado com AWS para armazenamento de mídia, e conectado ao banco de dados MYSQL na hostgator."
              link="https://relatorios-paps-ec4aa45d40b4.herokuapp.com/"
            />
            <CardProjeto
              img={p06}
              widht={0}
              height={0}
              desctiption="Simulador de Arquitetura Elétrica de Baixa Tensão: Projetado para simular plantas baixas de sistemas elétricos, este simulador replica de forma precisa a distribuição de tomadas e quadros de circuito conforme as normas da NBR. Focado em proporcionar aulas práticas, o simulador elimina a necessidade de deslocamento físico, reduzindo custos enquanto maximiza a retenção do aluno por meio de uma abordagem digital acessível e eficiente."
              link="https://practices-lia-stage.herokuapp.com/p06-arquitetura/index.html"
            />
            <CardProjeto
              img={p14}
              widht={0}
              height={0}
              desctiption="Simulador Avançado de Arquitetura: Uma ferramenta educacional projetada para orientar estudantes de ensino superior na análise de projetos residenciais. Este simulador abrange cálculos essenciais, incluindo a refrigeração, a distribuição estratégica de pontos de ar-condicionados e cálculo preciso da carga de BTUS. Oferecendo uma experiência prática, auxilia no desenvolvimento de habilidades críticas para a concepção de ambientes residenciais bem refrigerados."
              link="https://practices-lia-stage.herokuapp.com/p14-arquitetura-ar-condicionado/index.html"
            />
            <CardProjeto
              img={p15}
              widht={0}
              height={0}
              desctiption="Simulador Avançado de Arquitetura: Uma ferramenta educacional projetada para orientar estudantes de ensino superior na análise de projetos residenciais. Este simulador abrange cálculos essenciais, incluindo o índice de luminância, a distribuição estratégica de pontos luminosos e o cálculo preciso da carga de circuito. Oferecendo uma experiência prática, auxilia no desenvolvimento de habilidades críticas para a concepção de ambientes residenciais bem iluminados e funcionalmente elétricos."
              link="https://practices-lia-stage.herokuapp.com/p15-arquitetura-indice-de-luminancia/index.html"
            />
            <Link
              href={"/"}
              className="m-auto p-2 rounded-lg bg-orange-900 hover:bg-orange-950 duration-300"
            >
              Voltar para Home
            </Link>
            <Copyright />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
