import { motion } from "framer-motion";
import NavComponent from "./components/NavComponent/NavComponent";

export default function Competencias() {
  const animationVariants = {
    hidden: {
      opacity: 0,
      y: 50, // A posição inicial, abaixo do elemento
    },
    visible: {
      opacity: 1,
      y: 0, // A posição final, no lugar original
    },
  };

  return (
    <>
      <NavComponent />
      <div className="flex mt-20 justify-center items-center w-96">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={animationVariants}
          transition={{ duration: 0.5 }}
        >
          <p>teste</p>
        </motion.div>
      </div>
    </>
  );
}
