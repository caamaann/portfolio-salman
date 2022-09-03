import React, { useEffect } from "react"
import { motion } from "framer-motion"
import { BlurEffect } from "src/utils/variants"
import { useRouter } from "next/router"

function Layout({ children }) {
  const router = useRouter()
  // Mobile viewport height workaround
  // prevent quirky behaviour on mobile when cover is set to 100vh
  useEffect(() => {
    const vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty("--vh", `${vh}px`)
  }, [])

  return (
    <>
      <motion.main
        variants={BlurEffect}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ type: "linear" }}
        key={`page-${router.pathname}`}
      >
        {children}
      </motion.main>
    </>
  )
}

export default Layout
