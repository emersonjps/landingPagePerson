import Image from "next/image";
import logo from "@/assets/img/laptop.svg";
import git from "@/assets/img/github.svg";

export default function NavComponent() {
  return (
    <nav className="fixed flex items-center justify-center gap-7 top-0 w-screen bg-[#2020239c] p-5">
      <button className="flex gap-1">
        <Image alt="logo" src={logo} width={24} height={24} />
        <p className="font-bold">EMERSON JOSÉ</p>
      </button>
      <button className="font-extralight">Home</button>
      <button className="font-extralight">Competencias</button>
      <button className="font-extralight">Projetos</button>
      <button className="flex gap-1">
        <Image alt="source" src={git} width={24} height={24} />
        <p className="font-extralight">Source</p>
      </button>
    </nav>
  );
}
