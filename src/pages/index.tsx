import Image from "next/image";
import { Inter } from "next/font/google";
import NavComponent from "./components/NavComponent/NavComponent";
import ThreeCompenent from "./components/ThreeComponent/ThreeComponent.jsx";
import ViewProfile from "./components/ViewProfile/ViewProfile";
import WorkProfile from "./components/WorkProfile/WorkProfile";
import BioProfile from "./components/BioProfile/BioProfile";
import { motion } from "framer-motion";
import LinksProfile from "./components/LinksProfile/LinksProfile";
import { animationVariants } from "./utils/AnimationVariants";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center ${inter.className}`}
    >
      <NavComponent competencia={false} projetos={false} />

      <ThreeCompenent />
      <motion.div
        initial="hidden"
        animate="visible"
        variants={animationVariants}
        transition={{ duration: 0.5 }}
      >
        <article className="pl-96 pr-96">
          <ViewProfile />
          <WorkProfile />
          <BioProfile />
          <LinksProfile />
        </article>
      </motion.div>
      <p className="copyright">© 2023 Emerson José. All Rights Reserved.</p>
    </main>
  );
}
