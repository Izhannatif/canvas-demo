import React from "react"
import Honeycomb from "../../HoneyComb"
import PinnedScaleImage from "../../Demo1"
import ScrollLetterReveal from "../../AnimatedText"
import { CursorTarget } from "@izhann/react-cursor-fx"
import { useNavbar } from "../../NavbarContext"

const Home = () => {
  const { isNavbarOpen } = useNavbar()

  return (
    <>
      <PinnedScaleImage />
      {/* <div className="bg-white h-screen w-screen "></div> */}
      <div>
        <div className="bg-white px-5 h-screen pt-5 min-w-screen border-x">
          <ScrollLetterReveal textClassName="text-2xl md:text-3xl px-5 leading-[2rem] md:leading-[2.5rem] ">
            {/* I’m Izhan, a frontend developer and designer based in Karachi. I build fast, responsive websites with Next JS — focused on clean UI, smooth UX, and performance that scales. */}
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae magni
            perspiciatis praesentium tempora amet voluptas blanditiis veritatis
            omnis minus exercitationem? Obcaecati explicabo eaque quisquam rerum
            quia temporibus soluta commodi doloribus!
          </ScrollLetterReveal>
          <div className="p-5 w-max">
            <CursorTarget variant="button">
              <div className="w-max px-5 py-3 cal font-black text-white bg-black border hover:border-black hover:text-black hover:bg-white transition-all duration-300">
                contact.
              </div>
            </CursorTarget>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
