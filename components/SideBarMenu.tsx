'use client'
import { HomeIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'


function SideBarMenu () {

    const router = useRouter()


    function homePage() {
        router.push('/')
    }

  return (
    <div onClick={homePage} className="flex justify-center align-middle hover:bg-gray-700 py-2 rounded cursor-pointer items-center bg-black/30 transition-all duration-500 ease-out group"
    data-tooltip-id="my-tooltip" data-tooltip-content="Home">
        <Tooltip id="my-tooltip" place="left" className="md:hidden z-50" />
        <HomeIcon className="h-4 w-4 text-white group-hover:animate-bounce"/>
        <p className="menuCss">Home</p>
    </div>
  )
}

export default SideBarMenu;