import linkGit from "@/assets/img/linkgit.svg";
import linkedin from "@/assets/img/linkedin.svg";
import Image from "next/image";
import Link from "next/link";

export default function LinksProfile() {
  return (
    <section className="links_description mb-10">
      <h3 className="mb-5">On the web</h3>

      <div className="flex flex-col gap-4">
        <div className="flex gap-2">
          <Image alt="github" src={linkGit} width={16} height={16} />
          <Link
            className="link_profile"
            target="_blank"
            href={"https://github.com/emersonjps"}
            about="perfil"
          >
            @GitHub
          </Link>
        </div>
        <div className="flex gap-2">
          <Image alt="linkedin" src={linkedin} width={16} height={16} />
          <Link
            className="link_profile"
            target="_blank"
            href={"https://www.linkedin.com/in/emerson-jos%C3%A9-196095186"}
            about="perfil"
          >
            @LinkedIn
          </Link>
        </div>
        <div className="flex gap-2">
          <Image alt="github" src={linkGit} width={16} height={16} />
          <Link
            className="link_profile"
            target="_blank"
            href={"https://mail.google.com/mail/?view=cm&fs=1&to=emerson20010213@gmail.com"}
            about="perfil"
          >
            @Gmail
          </Link>
        </div>
      </div>
    </section>
  );
}
