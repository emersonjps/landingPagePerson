import Image from "next/image";
import logo from "@/assets/img/laptop.svg";
import git from "@/assets/img/github.svg";
import Link from "next/link";

type option = {
  competencia: boolean;
  projetos: boolean;
};

export default function NavComponent({ projetos, competencia }: option) {
  return (
    <nav
      id="navbar"
      className="navbar fixed flex items-center justify-center gap-7 top-0 w-screen bg-[#2020239c] p-5"
    >
      <Link id="logo_name" className="flex gap-1" href={"/"}>
        <Image alt="logo" src={logo} width={24} height={24} />
        <p id="logo-name" className="font-bold">
          EMERSON JOSÉ
        </p>
      </Link>
      <Link
        className={`${
          competencia ? "bg-[#88CCCA] " : ""
        } font-extralight p-1 rounded`}
        href={"competencias"}
      >
        Competências
      </Link>
      <Link
        className={`${
          projetos ? "bg-[#88CCCA]" : ""
        } font-extralight p-1 rounded`}
        href={"/projetos"}
      >
        Projetos
      </Link>
      <Link
        className="flex gap-1"
        href={"https://github.com/emersonjps/landingPagePerson"}
        target="_blank"
      >
        <Image alt="source" src={git} width={24} height={24} />
        <p className="font-extralight">Source</p>
      </Link>
    </nav>
  );
}
