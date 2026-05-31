import { Badge } from "@/components/ui/badge"

const softSkills = [
  "Liderança de equipes",
  "Resolução de problemas",
  "Comunicação eficaz",
  "Aprendizado contínuo",
  "Trabalho em equipe",
  "Gestão de tempo",
  "Adaptabilidade",
  "Clean Code",
  "Foco no usuário",
]

const hardSkillGroups = [
  { label: "Linguagens", chips: ["TypeScript", "JavaScript"] },
  { label: "Frameworks", chips: ["NestJS", "Next.js", "React", "Express", "tRPC"] },
  { label: "Banco de Dados", chips: ["PostgreSQL", "MySQL", "MariaDB", "MongoDB"] },
  { label: "Cloud & Infra", chips: ["AWS EC2", "AWS S3", "Vercel", "Heroku", "Datadog"] },
  { label: "Testes & CI/CD", chips: ["Jest", "Cypress", "GitHub Actions"] },
  { label: "Metodologias", chips: ["SCRUM", "Kanban", "REST API", "UML"] },
]

export default function Skills() {
  return (
    <div className="space-y-5 mt-1">
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-2">
          Soft Skills
        </p>
        <div className="flex flex-wrap gap-1.5">
          {softSkills.map((s) => (
            <Badge key={s} variant="soft">{s}</Badge>
          ))}
        </div>
      </div>

      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-3">
          Hard Skills
        </p>
        <div className="space-y-2.5">
          {hardSkillGroups.map((group) => (
            <div key={group.label}>
              <p className="text-[10px] uppercase tracking-wider text-white/25 mb-1.5">
                {group.label}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {group.chips.map((chip) => (
                  <Badge key={chip} variant="hard">{chip}</Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
