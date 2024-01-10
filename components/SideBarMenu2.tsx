import { ChatBubbleLeftIcon } from "@heroicons/react/24/solid"
import { useRouter } from "next/navigation"
import { Tooltip } from "react-tooltip"
import 'react-tooltip/dist/react-tooltip.css'

function SideBarMenu2() {

    const router = useRouter()


    function chatPage() {
        router.push('/chat')
    }

    return (
        <div onClick={chatPage} className="flex justify-center align-middle hover:bg-gray-700 py-2 rounded cursor-pointer items-center bg-black/30 transition-all duration-500 ease-out group" data-tooltip-id="my-tooltip" data-tooltip-content="Chats">
             <Tooltip id="my-tooltip" place="left" className="md:hidden" />
            <ChatBubbleLeftIcon className="h-4 w-4 text-white group-hover:animate-bounce"/>
            <p className="menuCss">Chats</p>
        </div>
    )
}

export default SideBarMenu2