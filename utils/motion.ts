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