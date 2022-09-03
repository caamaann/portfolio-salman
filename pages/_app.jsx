import "assets/scss/main.scss"
import { Helmet } from "react-helmet"
import SEO from "@components/SEO"
import { AnimatePresence } from "framer-motion"
import { useGeneralStore } from "store"
import shallow from "zustand/shallow"
import MouseCursor from "@components/common/mouse-cursor"

function MyApp({
  Component,
  pageProps = { seo: { title: "Home" }, page: "default" },
}) {
  const { transition } = useGeneralStore(
    (state) => ({
      transition: state.transition,
    }),
    shallow
  )

  return (
    <>
      <SEO title={pageProps?.seo?.title} />

      <MouseCursor />

      <Helmet async>
        <body className={`bd-${pageProps?.page}`} />
      </Helmet>

      <AnimatePresence mode="wait">
        {!transition && <Component {...pageProps} />}
      </AnimatePresence>
    </>
  )
}

export default MyApp
