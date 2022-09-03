import React from "react"
import Layout from "@components/Layout"
import HomePageComponents from "@components/pages/home"

function Home({ ...props }) {
  return (
    <Layout>
      <HomePageComponents {...props} />
    </Layout>
  )
}

export default Home

export async function getStaticProps() {
  return {
    props: {
      seo: {
        title: "Home",
      },
      page: "home",
    },
  }
}
