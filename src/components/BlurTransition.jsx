import { AnimatePresence, motion } from "framer-motion"
import { useRouter } from "next/router"
import React from "react"
import { BlurEffect } from "src/utils/variants"
import { useGeneralStore } from "store"
import shallow from "zustand/shallow"

function BlurTransition({ children }) {
  const router = useRouter()

  const { transition } = useGeneralStore(
    (state) => ({
      transition: state.transition,
    }),
    shallow
  )

  return (
    <AnimatePresence mode="wait">
      {!transition && (
        <motion.div
          key={`key-${router.pathname}`}
          variants={BlurEffect}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ type: "linear" }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default BlurTransition
