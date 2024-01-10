import Image from "next/image";

function page() {
    return (
        <div className="h-screen flex flex-col justify-center text-white text-center px-8 font-bold text-lg">
            <div>
                <Image
                    src="https://links.papareact.com/2i6"
                    width={150}
                    height={150}
                    alt="ChatGpt Logo"
                    className="mx-auto rounded mb-2 motion-safe:animate-bounce"
                />
            </div >
            <div className="motion-safe:animate-pulse">
                No Api and backend service to make chatGPT-Messenger-2.0 reply
            </div>

        </div>
    )
}

export default page;