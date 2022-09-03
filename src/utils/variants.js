/* eslint-disable import/prefer-default-export */
export const BlurEffect = {
  initial: {
    filter: [`blur(1.5rem)`, `blur(0rem)`],
    transition: {
      duration: 0.5,
    },
  },
  animate: {
    filter: [`blur(1.5rem)`, `blur(0rem)`],
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    filter: [`blur(0rem)`, `blur(1.5rem)`],
    transition: {
      duration: 0.5,
    },
  },
}
