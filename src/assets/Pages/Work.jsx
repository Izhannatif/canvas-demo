import React, { useEffect } from "react"
import InfiniteGridGSAP from "../../projectgrid/InfiniteGridGSAP"
import { useNavbar } from "../../NavbarContext"
import { CursorTarget } from "@izhann/react-cursor-fx"

const Work = () => {
  const { setIsNavbarVisible } = useNavbar()

  useEffect(() => {
    setIsNavbarVisible(true)
  }, [])

  return (
    <div className="h-screen w-screen ">
      <h1 className="text-white pl-2 pr-5 text-7xl md:text-9xl font-black py-2 absolute top-0 z-50 bg-black border-r border-b border-white">
        MY WORK
      </h1>
      <CursorTarget variant="dragText">
        <InfiniteGridGSAP />
      </CursorTarget>
    </div>
  )
}

export default Work
