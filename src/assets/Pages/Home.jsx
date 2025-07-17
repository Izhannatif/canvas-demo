import PinnedScaleImage from "../../Demo1";
import Footer from "../../Footer";
import CreativeProcess from "../../CreativeProcess";
import About from "./About";
import InfiniteGrid from "../../projectgrid/InifiniteGrid";
import InfiniteGridGSAP from "../../projectgrid/InfiniteGridGSAP";

const Home = () => {
  return (
    <>
      <PinnedScaleImage />
      <About />
      <div></div>

      {/* <FlameTrail /> */}
      <CreativeProcess />
      <h1 className="text-white px-2 text-9xl font-black">MY WORK</h1>

      <InfiniteGridGSAP />
      <Footer />
    </>
  );
};

export default Home;

{
  /* I’m Izhan, a frontend developer and designer based in Karachi. I build fast, responsive websites with Next JS — focused on clean UI, smooth UX, and performance that scales. */
}
