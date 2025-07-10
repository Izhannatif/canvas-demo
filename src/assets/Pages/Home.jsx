import React from "react"
import Honeycomb from "../../HoneyComb"
import PinnedScaleImage from "../../Demo1"
import ScrollLetterReveal from "../../AnimatedText"

const Home = () => {
  return (
    <>
      <PinnedScaleImage />
      {/* <div className="bg-white h-screen w-screen "></div> */}
       <div className="bg-white px-5 h-[130vh] pt-5 min-w-screen border-x" >
        <ScrollLetterReveal textClassName="text-2xl md:text-3xl px-5 leading-[2rem] md:leading-[2.5rem] ">
          I’m Izhan, a frontend developer and designer based in Karachi. I build fast, responsive websites with Next JS — focused on clean UI, smooth UX, and performance that scales.
        </ScrollLetterReveal>
      </div>
      {/* <Honeycomb /> */}
    </>
  )
}

export default Home
