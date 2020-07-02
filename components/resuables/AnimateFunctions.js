const easing = [0.6, -0.05, 0.01, 0.99];

const fadeInUp = (delay = 0.3) => ({
  hidden: {
    y: 60,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      delay: delay,
      ease: easing,
    },
  },
});

const fadeInDown = function (delay = 0.3) {
  return {
    hidden: {
      y: -60,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        delay: delay,
        ease: easing,
      },
    },
  };
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 3,
    },
  },
};

const fadeInLeft = (delay = 0.3) => ({
  hidden: {
    x: -200,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      delay: delay,
    },
  },
});

const fadeInRight = (delay = 0.3) => ({
  hidden: {
    x: 200,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      delay: delay,
    },
  },
});

export { fadeInUp, stagger, fadeInLeft, fadeInRight, fadeInDown };
