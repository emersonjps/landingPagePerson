import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

const education = [
  {
    year: "2026",
    title: "Análise e Desenvolvimento de Sistemas",
    institution: "Uninassau",
    detail: "Concluído em 03/2026",
  },
  {
    year: "2024",
    title: "Redes de Computadores",
    institution: "Unibra",
    detail: "Concluído em 05/2024",
  },
]

const certifications = [
  { title: "JavaScript/TypeScript do Básico ao Avançado", issuer: "Udemy" },
  { title: "Arquitetura e Segurança de APIs REST (Spring Security, Swagger)", issuer: "Santander 2024" },
  { title: "Banco de Dados SQL e NoSQL para Desenvolvedores Back-end", issuer: "Santander 2024" },
  { title: "Testes Unitários e Gerenciamento de Dependências (JUnit)", issuer: "Santander 2024" },
]

export default function BioProfile() {
  return (
    <section className="bio_description mb-10">
      <h3 className="mb-5">Formação &amp; Certificações</h3>

      <Card>
        <CardContent className="pt-5 space-y-3">
          {education.map((edu, i) => (
            <div key={edu.year}>
              <div className="flex gap-4 items-start">
                <span className="text-teal-400 font-mono text-sm font-bold w-10 flex-shrink-0 mt-0.5">
                  {edu.year}
                </span>
                <div>
                  <p className="text-sm text-white/85 font-medium">{edu.title}</p>
                  <p className="text-xs text-white/45 mt-0.5">{edu.institution} · {edu.detail}</p>
                </div>
              </div>
              {i < education.length - 1 && <Separator className="mt-3" />}
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="mt-4">
        <CardContent className="pt-5 space-y-3">
          {certifications.map((cert, i) => (
            <div key={cert.title}>
              <div className="flex gap-4 items-start">
                <span className="text-pink-400 flex-shrink-0 mt-1 text-xs">◆</span>
                <div>
                  <p className="text-sm text-white/85">{cert.title}</p>
                  <p className="text-xs text-white/45 mt-0.5">{cert.issuer}</p>
                </div>
              </div>
              {i < certifications.length - 1 && <Separator className="mt-3" />}
            </div>
          ))}
        </CardContent>
      </Card>
    </section>
  )
}
