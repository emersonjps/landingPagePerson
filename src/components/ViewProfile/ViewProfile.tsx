import Image from "next/image"
import profile from "@/assets/img/profile.jpg"
import Skills from "../Skills/Skills"

export default function ViewProfile() {
  return (
    <section className="view_profile mt-20 mb-10">
      {/* Cabeçalho: foto + nome + título */}
      <div className="flex items-center gap-5 mb-6">
        <Image
          className="rounded-full shadow-2xl shadow-indigo-200/10 flex-shrink-0 border border-white/10"
          alt="profile"
          src={profile}
          width={80}
          height={80}
        />
        <div>
          <h2 className="profile_name">Emerson José</h2>
          <div className="title_profile mt-2">
            <p>Analista de Sistemas Pleno/Sênior · Node.js / TypeScript · AWS</p>
          </div>
        </div>
      </div>

      {/* Apresentação */}
      <p className="text-sm leading-relaxed text-white/75 text-justify mb-8">
        Especialista no desenvolvimento de <span className="text-pink-300">sistemas transacionais</span> e{" "}
        <span className="text-pink-300">arquitetura de software</span> escalável, com sólida experiência no
        ecossistema <span className="text-teal-300">Node.js / TypeScript</span> e infraestrutura{" "}
        <span className="text-teal-300">AWS</span>. Atuei em contextos de{" "}
        <span className="text-pink-300">Health Tech</span> e como{" "}
        <span className="text-pink-300">Tech Lead</span>, liderando integrações de meios de pagamento
        (Stripe, Mercado Pago, Zoop, PIX), estruturando pipelines de{" "}
        <span className="text-teal-300">CI/CD</span>, observabilidade com{" "}
        <span className="text-teal-300">Datadog</span> e adotando tecnologias modernas como{" "}
        <span className="text-teal-300">tRPC</span> e <span className="text-teal-300">NestJS</span>.
      </p>

      {/* Skills */}
      <Skills />
    </section>
  )
}
