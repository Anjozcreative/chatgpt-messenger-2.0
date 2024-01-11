import ChatInput from "@/components/ChatInput";
import Message from "@/components/Message";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";

function chat() {
  return (
    <div className="flex flex-col h-screen relative">
      <div className="flex-1">
        <Message />
      </div>
      <div className="bg-gray-700/50 text-gray-400 rounded-lg text-sm bottom-0">
          <form action="" className="p-5 space-x-5 flex">
            <input
              className="focus:outline-none bg-transparent flex-1 disabled:cursor-not-allowed disabled:text-gray-300"
              type="text"
              placeholder="Type your message here..."
            />

            <button
              type="submit"
              className="bg-[#11A37F] hover:opacity-50 text-white font-bold px-4 py-2 rounded justify-center items-center disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              <PaperAirplaneIcon className="h-4 w-4 -rotate-45" />

            </button>
          </form>
        </div>
    </div>

  )
}

export default chat;