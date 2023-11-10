import Image from "next/image";

import profile from "@/assets/img/profile.jpeg";

export default function ViewProfile() {
  return (
    <section className="flex flex-col justify-center items-center view_profile mb-10">
      <div className="title_profile">
        <p>Olá, sou um desenvolvedor full-time no Brasil!</p>
      </div>

      <div className="profile_description flex justify-between items-center mt-10">
        <div>
          <h2 className="profile_name">Emerson José</h2>
          <h3 className="profile_softskill">
            Soft Skills: ( Resolução de
            Problemas / Comunicação )
          </h3>
          <h3 className="profile_skill">
            Hard Skills: ( Desenvolvedor / UX / UI )
          </h3>
        </div>
        <Image
          className="img_profile"
          alt="profile"
          src={profile}
          width={100}
          height={100}
        />
      </div>
    </section>
  );
}
