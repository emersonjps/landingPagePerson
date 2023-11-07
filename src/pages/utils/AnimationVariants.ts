export const animationVariants = {
  hidden: {
    opacity: 0,
    y: 50, // A posição inicial, abaixo do elemento
  },
  visible: {
    opacity: 1,
    y: 0, // A posição final, no lugar original
  },
};

export const cardVariants = {
  rest: {
    scale: 1, // Escala normal
  },
  hover: {
    scale: 1.05, // Escala quando o mouse está sobre o card
  },
};
