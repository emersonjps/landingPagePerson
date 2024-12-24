import Image from "next/image";

import profile from "@/assets/img/profile.jpg";
import Skills from "../Skills/Skills";

export default function ViewProfile() {
  return (
    <section className="flex flex-col justify-center items-center view_profile mt-20 mb-10">
      <div className="profile_description flex justify-between gap-9 mt-10 mb-10">
        <div>
          <Image
            className="rounded shadow-2xl shadow-indigo-50"
            alt="profile"
            src={profile}
            width={200}
            height={200}
            />
        </div>
        <div>
          <h2 className="profile_name mb-4">Emerson José</h2>
          <Skills />
        </div>
      </div>
      <div className="title_profile mt-4">
        <p>Olá, sou um desenvolvedor full-time no Brasil!</p>
      </div>

      <div className="profile_description flex justify-between items-center mt-10 text-justify">
        <p>
          Sou um desenvolvedor full-time, com experiência em desenvolvimento
          web, Back-end, UX e UI. Atualmente, estou focado em desenvolvimento de
          aplicações web, utilizando tecnologias como React, Next.js,
          Node.js, TypeScript, entre outras. Também tenho experiência com
          ferramenta de design Figma.
        </p>
      </div>


    </section>
  );
}
