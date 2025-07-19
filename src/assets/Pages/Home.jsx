import PinnedScaleImage from "../../Demo1"
import Footer from "../../Footer"
import CreativeProcess from "../../CreativeProcess"
import About from "./About"
import InfiniteGrid from "../../projectgrid/InifiniteGrid"
import InfiniteGridGSAP from "../../projectgrid/InfiniteGridGSAP"
import WorkSection from "../../WorkSection"
import CareerJourney from "../../CareerJourney"

const Home = () => {
  return (
    <div className="w-screen">
      <PinnedScaleImage />
      <About />
      <div></div>

      {/* <FlameTrail /> */}
      <CreativeProcess />
      {/* <CareerJourney /> */}
      {/* <InfiniteGridGSAP /> */}
      <WorkSection />
      <Footer />
    </div>
  )
}

export default Home

{
  /* I’m Izhan, a frontend developer and designer based in Karachi. I build fast, responsive websites with Next JS — focused on clean UI, smooth UX, and performance that scales. */
}
