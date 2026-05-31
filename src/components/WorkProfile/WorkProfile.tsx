import Link from "next/link"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    company: "Cardaprime",
    role: "Tech Lead / Desenvolvedor Full Stack",
    type: "Prestação de Serviços",
    period: "08/2025 – Atual",
    bullets: [
      "Liderança técnica de 3 desenvolvedores: requisitos, arquitetura e modelagem de banco de dados.",
      "Pipelines de CI/CD automáticos (teste → build → deploy) com ambientes dev, preview e prod.",
      "Fluxos de assinaturas recorrentes com Stripe e Mercado Pago.",
      "Cache, WebSockets e SSE para comunicação em tempo real e otimização de custos.",
      "tRPC para otimização do tráfego de dados com observabilidade completa (logs e tracers).",
    ],
    stack: ["TypeScript", "NestJS", "Next.js", "tRPC", "T3 Stack", "AWS S3", "Vercel"],
  },
  {
    company: "Amigotech",
    role: "Analista de Sistemas Pleno",
    type: "CLT",
    period: "06/2024 – Atual",
    bullets: [
      "Squad financeiro de ERP Health Tech com integrações Dock, Zoop, PIX e TED.",
      "Liquidação de cartões, criação de lotes e conciliação financeira seguindo normativas do Bacen.",
      "Testes automatizados e pipelines no GitHub Actions garantindo segurança nos deploys.",
      "Monitoramento avançado com Datadog e Watchdog em infraestrutura AWS.",
    ],
    stack: ["Node.js", "NestJS", "React", "AngularJS", "TypeScript", "AWS", "Datadog"],
  },
  {
    company: "Ser Educacional",
    role: "Desenvolvedor de Software",
    type: "",
    period: "01/2022 – 06/2024",
    bullets: [
      "Simuladores web e laboratórios virtuais para plataforma EAD.",
      "APIs REST robustas integrando SQL e NoSQL com deploy em produção.",
      "Estabilidade garantida com Clean Code e testes automatizados.",
    ],
    stack: ["APIs REST", "SQL", "NoSQL"],
  },
]

export default function WorkProfile() {
  return (
    <section className="work_description mb-10">
      <h3 className="mb-5">Work</h3>
      <div className="space-y-4">
        {experiences.map((exp) => (
          <Card key={exp.company}>
            <CardHeader>
              <CardTitle className="text-white/90">{exp.company}</CardTitle>
              <CardDescription className="flex flex-wrap items-center gap-x-2 mt-0.5">
                <span>{exp.role}{exp.type ? ` · ${exp.type}` : ""}</span>
                <span className="text-white/30">·</span>
                <span className="text-white/40">{exp.period}</span>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-1 mb-4">
                {exp.bullets.map((b, i) => (
                  <li key={i} className="text-sm text-white/70 flex gap-2">
                    <span className="text-teal-400 mt-0.5 flex-shrink-0">›</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-1.5">
                {exp.stack.map((s) => (
                  <Badge key={s} variant="hard" className="text-[10px]">{s}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="flex justify-center mt-7">
        <Link href="projetos" className="btn_portifolio">
          Meu Portfolio {">"}
        </Link>
      </div>
    </section>
  )
}
