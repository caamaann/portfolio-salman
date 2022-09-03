// ========================================================================================================================================
// Hooks
// ========================================================================================================================================

import { useState, useEffect, useCallback, useLayoutEffect } from "react"
import { useInView } from "react-intersection-observer"

// ==========================================================================
// Scroll Anim
// ==========================================================================

/**
 *
 * @param {*} animation
 * @returns
 *
 * e.g .fadeInUp, .fadeInDown, etc.
 * Please check base/animations.scss for complete list of animations
 */

export const useScrollAnim = (animation = "fadeInUp") => {
  const [ref, inView] = useInView({
    threshold: [0.125, 0.5, 0.75],
    triggerOnce: true,
  })

  const [animate, setAnimate] = useState(() => ({
    text: `scroll-${animation}`,
    hasSet: false,
  }))

  const anim = useCallback(
    (delay, replaceAnim = null) => {
      if (replaceAnim) {
        return animate.hasSet
          ? `scroll-${replaceAnim} ${replaceAnim} d${delay}`
          : `scroll-${replaceAnim}`
      }
      return animate.hasSet
        ? `${animate.text} ${animation} d${delay}`
        : animate.text
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [animate]
  )

  useEffect(() => {
    if (inView) {
      setAnimate((prevState) => ({
        ...prevState,
        hasSet: true,
      }))
    }
  }, [inView])

  return [ref, anim]
}

export const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect

export const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: null, y: null })

  useEffect(() => {
    function handlePosition(e) {
      setMousePosition({ x: e.pageX, y: e.pageY })
    }

    window.addEventListener("mousemove", handlePosition)
    return () => window.removeEventListener("mousemove", handlePosition)
  }, [])

  return mousePosition
}
