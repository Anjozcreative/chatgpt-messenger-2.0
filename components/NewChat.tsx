'use client'
import { db } from "@/firebase";
import { PlusIcon } from "@heroicons/react/24/solid";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

function NewChat() {

  const { data: session } = useSession()

  const router = useRouter()

  //this is the create newchat function
  const createNewChat = async () => {

      const docRef = await addDoc(
      collection(db, 'users', session?.user!.email!, 'chats'),
      {
        messages: [],
        userId: session?.user?.email!,
        createdAt: serverTimestamp(),
      }
    );

    //redirection the user to the chat screen
    router.push(`/chat/${docRef.id}`)

  }

  return (
    <div onClick={createNewChat} className="border border-green-700s chatRow">
      <PlusIcon className="h-8 w-8" />
      <p>New Chat</p>
    </div>
  );
};

export default NewChat;