import React, { useMemo, memo } from "react"
import { motion, AnimatePresence } from "framer-motion"

import shallow from "zustand/shallow"
import { useCursorStore } from "store"
// import { useMousePosition } from "src/hooks/hooks"
import { useMouse } from "rooks"

function MouseCursor() {
  const { hovered, text } = useCursorStore(
    (state) => ({
      hovered: state.hovered,
      text: state.text,
    }),
    shallow
  )

  // const { x, y } = useMousePosition()
  const { x, y } = useMouse()

  const xValue = useMemo(() => x - 16, [x])

  const yValue = useMemo(() => y - (16 + 100), [y])

  return (
    <AnimatePresence>
      <motion.div
        animate={{
          x: xValue,
          y: yValue,
          scale: hovered ? 1.1 : 1,
          opacity: hovered ? 1 : 0,
        }}
        transition={{
          ease: "linear",
          duration: 0.3,
        }}
        initial={{
          x: -500,
          y: -500,
        }}
        className="cursor"
        id="cursor"
      >
        <AnimatePresence>
          {text && (
            <motion.div
              key={text}
              animate={{ opacity: 1 }}
              initial={{ opacity: 0, animationDelay: 2 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {text}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  )
}

export default memo(MouseCursor)
