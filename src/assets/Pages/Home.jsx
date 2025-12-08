import PinnedScaleImage from "../../Demo1"
import Footer from "../../Footer"
import CreativeProcess from "../../CreativeProcess"
import About from "./About"
import WorkSection from "../../WorkSection"
import CareerTimeline from "../../CareerJourney"
import TextSection from "../../TextSection"

const Home = () => {
  return (
    <div className="w-screen">
      <PinnedScaleImage />
      <About />
      <div></div>
      {/* <CareerTimeline /> */}
      <CreativeProcess />
      <TextSection />
      <WorkSection />
      <Footer />
    </div>
  )
}

export default Home
