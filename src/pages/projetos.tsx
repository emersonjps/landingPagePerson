import animationVariants from "@/utils/AnimationVariants"
import { motion } from "framer-motion"
import CardProjeto from "../components/CardProjeto/CardProjeto"
import NavComponent from "../components/NavComponent/NavComponent"
import Copyright from "../components/Copyright/Copyright"
import Link from "next/link"

import p06 from "@/assets/img/p06.jpg"
import p14 from "@/assets/img/p14.jpg"
import p15 from "@/assets/img/p15.jpg"
import relatorio from "@/assets/img/relatorio.png"

const projects = [
  {
    title: "Relatório PAPS",
    img: relatorio,
    description:
      "Aplicação web para gerar relatórios de compras de insumos por semestre. Calcula quantidades com base no número de alunos, facilitando o processo de compra para instituições de ensino superior.",
    stack: ["Next.js", "TypeScript", "Strapi", "MySQL", "AWS S3", "Hostgator"],
    link: "https://relatorios-paps-ec4aa45d40b4.herokuapp.com/",
  },
  {
    title: "P06 — Arquitetura Elétrica",
    img: p06,
    description:
      "Simulador de arquitetura elétrica de baixa tensão. Replica a distribuição de tomadas e quadros de circuito conforme normas NBR, eliminando a necessidade de deslocamento físico em aulas práticas.",
    stack: ["JavaScript", "HTML", "CSS"],
    link: "https://practices-lia-stage.herokuapp.com/p06-arquitetura/index.html",
  },
  {
    title: "P14 — Ar-Condicionado",
    img: p14,
    description:
      "Simulador educacional para análise de projetos residenciais de climatização. Abrange cálculo de BTUS, distribuição de pontos de ar-condicionado e dimensionamento de carga.",
    stack: ["JavaScript", "HTML", "CSS"],
    link: "https://practices-lia-stage.herokuapp.com/p14-arquitetura-ar-condicionado/index.html",
  },
  {
    title: "P15 — Índice de Luminância",
    img: p15,
    description:
      "Simulador de projeto luminotécnico residencial. Calcula o índice de luminância, distribuição de pontos de luz e carga de circuito para ambientes bem iluminados.",
    stack: ["JavaScript", "HTML", "CSS"],
    link: "https://practices-lia-stage.herokuapp.com/p15-arquitetura-indice-de-luminancia/index.html",
  },
]

export default function Projetos() {
  return (
    <section className="flex min-h-screen flex-col items-center">
      <NavComponent competencia={false} projetos={true} />

      <div className="w-full max-w-4xl mx-auto px-6 mt-24 pb-16">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={animationVariants}
          transition={{ duration: 0.5 }}
        >
          <p id="titulo-competencia" className="text-lg font-semibold mb-8 text-white/80">
            Projetos em funcionamento
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {projects.map((p) => (
              <CardProjeto key={p.title} {...p} />
            ))}
          </div>

          <div className="flex justify-center mt-10">
            <Link
              href="/"
              className="px-4 py-2 rounded-lg border border-white/10 text-sm text-white/60 hover:text-white/90 hover:border-white/20 transition-colors"
            >
              ← Voltar para Home
            </Link>
          </div>
        </motion.div>

        <Copyright />
      </div>
    </section>
  )
}
