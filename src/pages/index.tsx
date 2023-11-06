import Image from "next/image";
import { Inter } from "next/font/google";
import NavComponent from "./components/NavComponent/NavComponent";
import ThreeCompenent from "./components/ThreeComponent/ThreeComponent.jsx";
import ViewProfile from "./components/ViewProfile/ViewProfile";
import WorkProfile from "./components/WorkProfile/WorkProfile";
import BioProfile from "./components/BioProfile/BioProfile";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center ${inter.className}`}
    >
      <NavComponent />
      <ThreeCompenent />

      <article className="pl-96 pr-96">
        <ViewProfile />
        <WorkProfile />
        <BioProfile />
      </article>
    </main>
  );
}
