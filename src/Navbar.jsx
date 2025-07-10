import { Link } from "react-router-dom"
import { useNavbar } from "./NavbarContext"

const Navbar = () => {
  const { isNavbarVisible } = useNavbar()

  return (
    <section
      className={`fixed top-0 left-0 w-full z-50 border-b bg-white px-7 py-3 transition-opacity duration-500 ${
        isNavbarVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="w-full flex justify-between items-center">
        <Link to={"/"}>
          <h1 className="text-2xl font-bold border w-max px-2 tracking-tighter">
            ( . Y . )
          </h1>
        </Link>
        <div className="flex gap-5 uppercase font-black">
          <Link to={'/'}>HOME</Link>
          <Link to={"/about"}>About</Link>
        </div>
      </div>
    </section>
  )
}

export default Navbar
