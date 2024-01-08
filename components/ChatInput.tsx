'use client'
import { db } from "@/firebase";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { FormEvent, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

type Props = {
    chatId: string;
}

function ChatInput({ chatId }: Props) {
    const [prompt, setPrompt] = useState('');
    const { data: session } = useSession();

    //useSWR to get model
    const model = 'davinci';

    const sendMessage = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!prompt) return;

        const input = prompt.trim()
        setPrompt('');

        const message: Message = {
            text: input,
            createdAt: serverTimestamp(),
            user: {
                _id: session?.user?.email!,
                name: session?.user?.name!,
                avatar: session?.user?.image! || `https://ui-avatars.com/api/?name=${session?.user?.name}`,
            }

        }

        await addDoc(
            collection(
                db,
                'users',
                session?.user?.email!,
                'chats',
                chatId,
                'message'
            ),

            message
        )

        //toast notification to say Loading
        const notify = () => toast.loading('ChatGPT is thinking');

        const openaiApiKey = process.env.OPENAI_API_KEY

        await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer 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',
            },
            body: JSON.stringify({
                input,
                chatId,
                model,
                session,
            }),
        }).then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error))
        .then(() => {
            //Toast notification to say successful;
            toast.success('ChatGPT has responded', {
                id: notify(),
            });
        });
    };


    return (
        <div className="bg-gray-700/50 text-gray-400 rounded-lg text-sm">
            <form onSubmit={sendMessage} action="" className="p-5 space-x-5 flex">
                <input
                    className="focus:outline-none bg-transparent flex-1 disabled:cursor-not-allowed disabled:text-gray-300"
                    type="text"
                    placeholder="Type your message here..."
                    value={prompt}
                    onChange={e => setPrompt(e.target.value)}
                    disabled={!session}
                />

                <button
                    disabled={!prompt || !session}
                    type="submit"
                    className="bg-[#11A37F] hover:opacity-50 text-white font-bold px-4 py-2 rounded justify-center items-center disabled:bg-gray-300 disabled:cursor-not-allowed"
                >
                    <PaperAirplaneIcon className="h-4 w-4 -rotate-45" />
                </button>
            </form>

            <div>
                {/**model selection */}
            </div>
        </div>
    )
}

export default ChatInput;