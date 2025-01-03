import { motion } from "framer-motion";
import { Inter } from "next/font/google";
import BioProfile from "../components/BioProfile/BioProfile";
import LinksProfile from "../components/LinksProfile/LinksProfile";
import NavComponent from "../components/NavComponent/NavComponent";
import ThreeCompenent from "../components/ThreeComponent/ThreeComponent.jsx";
import ViewProfile from "../components/ViewProfile/ViewProfile";
import WorkProfile from "../components/WorkProfile/WorkProfile";
import animationVariants from "../utils/AnimationVariants";
import Copyright from "../components/Copyright/Copyright";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center ${inter.className}`}>
      <NavComponent competencia={false} projetos={false} />
      <motion.div
        initial="hidden"
        animate="visible"
        variants={animationVariants}
        transition={{ duration: 0.5 }}>
        <article id="sumary" className="pl-96 pr-96">
          <ViewProfile />
          <hr className="w-full border-t border-white my-8" />
          <WorkProfile />
          <hr className="w-full border-t border-white my-8" />
          <BioProfile />
          <hr className="w-full border-t border-white my-8" />
          <LinksProfile />
        </article>
      </motion.div>
      <hr className="w-full border-t border-white my-8" />
      <ThreeCompenent />
      <Copyright />
    </main>
  );
}
