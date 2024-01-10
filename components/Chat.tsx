import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import Message from "./Message";

type Props = {
    chatId: string;
}

function chat({ chatId }: Props ) {
  return (
    <div className="flex-1">
      <Message />

     
    </div>

    
  )
}

export default chat