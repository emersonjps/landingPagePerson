import Image from "next/image";
import logo from "@/assets/img/laptop.svg";
import git from "@/assets/img/github.svg";
import Link from "next/link";

export default function NavComponent() {
  return (
    <nav className="navbar fixed flex items-center justify-center gap-7 top-0 w-screen bg-[#2020239c] p-5">
      <Link className="flex gap-1" href={"/"}>
        <Image alt="logo" src={logo} width={24} height={24} />
        <p className="font-bold">EMERSON JOSÉ</p>
      </Link>
      <Link className="font-extralight" href={"/"}>Home</Link>
      <Link className="font-extralight" href={"competencias"}>Competencias</Link>
      <Link className="font-extralight" href={"/"}>Projetos</Link>
      <Link className="flex gap-1"  href={"/"} target="_blank">
        <Image alt="source" src={git} width={24} height={24} />
        <p className="font-extralight">Source</p>
      </Link>
    </nav>
  );
}
