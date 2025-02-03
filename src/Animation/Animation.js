export const animateLeft = {
  initial: { opacity: 0, x: -200 },
  whileInView: { opacity: 1, x: 0 },
  transition: {
    duration: 2,
    ease: "easeInOut",
    stiffness: 260,
  },
  viewport: { once: true },
};

export const animateRight = {
  initial: { opacity: 0, x: 200 },
  whileInView: { opacity: 1, x: 0 },
  transition: {
    duration: 2,
    ease: "easeInOut",
    stiffness: 260,
  },
  viewport: { once: true },
};

export const animateTop = {
  initial: { opacity: 0, y: -50 },
  whileInView: { opacity: 1, y: 0 },
  transition: {
    duration: 2,
    ease: "easeInOut",
    stiffness: 260,
  },
  viewport: { once: true },
};

export const animateBottom = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  transition: {
    duration: 2,
    ease: "easeInOut",
    stiffness: 260,
  },
  viewport: { once: true },
};

export const animateUpDown = {
  initial: { y: 0 },
  animate: { y: [-10, 0, -10] },
  transition: {
    duration: 8,
    repeat: Infinity,
    ease: "easeInOut",
    times: [0, 0.5, 1],
  },
};


