export const transition = {
    type: "spring",
    stiffness: 100,
    damping: 20,
};
  
export const fadeIn = (delay: number = 0) => ({
    hidden: { 
      opacity: 0,
      y: 10
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        ...transition,
        delay
      }
    }
});
  
export const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
};

export const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.5,
      duration: 0.8,
      ease: [0.2, 0.65, 0.3, 0.9],
    },
  }),
};