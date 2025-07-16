import React from "react"
import Honeycomb from "../../HoneyComb"
import PinnedScaleImage from "../../Demo1"
import ScrollLetterReveal from "../../AnimatedText"
import { CursorTarget } from "@izhann/react-cursor-fx"
import FlameTrail from "../../FlameTrail"
import Footer from "../../Footer"
import CreativeProcess from "../../CreativeProcess"
import About from "./About"
import Balatro from "../../Balatro"

const Home = () => {
  return (
    <>
      <PinnedScaleImage />
      <About />
      <div></div>

      {/* <FlameTrail /> */}
      <CreativeProcess />
      <Footer />
    </>
  )
}

export default Home

{
  /* I’m Izhan, a frontend developer and designer based in Karachi. I build fast, responsive websites with Next JS — focused on clean UI, smooth UX, and performance that scales. */
}
