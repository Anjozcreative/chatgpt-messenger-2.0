'use client'
import { useSession } from "next-auth/react"


function Message() {

    const { data: session } = useSession();


    return (
        <div className="py-5 text-white">
            <div className="flex space-x-5 px-10 max-w-2xl mx-auto py-5">
                <img src={session?.user?.image!} alt="user-image" className="h-8 w-8 object-conatin" />
                <div className="flex flex-col">
                    <h3 className="chatHead">You</h3>
                    <p className="chatBody">What unseen connections might emerge if every human could instantly share their deepest thoughts, reshaping our understanding of empathy and collective consciousness?</p>
                </div>

            </div>

            <div className="flex space-x-5 px-10 max-w-2xl mx-auto bg-[#434654] py-5">
                <img src="https://links.papareact.com/2i6" alt="user-image" className="h-8 w-8 object-contain" />
                <div className="flex flex-col">
                    <h3 className="chatHead">ChatGPT</h3>
                    <p className="chatBody">
                        If every individual's innermost musings were instantly accessible to all, a tapestry of empathy would unfold, knitting together diverse experiences and perspectives. Such connectivity could revolutionize our comprehension of humanity's shared joys, struggles, and profound vulnerabilities.</p>
                </div>
            </div>
        </div>
    )
}

export default Message;