import React from "react"
import { Analysis, HeroText, Footer, Main } from "../components/index";

export default function Home() {
  return (
    <div className="main">
      <HeroText />
      <Main />
      <Analysis />
      <Footer />
    </div>
  )
}
