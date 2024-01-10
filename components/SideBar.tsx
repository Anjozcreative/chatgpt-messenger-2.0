'use client'
import { useCollection } from 'react-firebase-hooks/firestore';
import Logout from "./Logout";
import NewChat from "./NewChat";
import { collection, orderBy, query } from 'firebase/firestore';
import { db } from '@/firebase';
import { useSession } from 'next-auth/react';
import ChatRow from './ChatRow';
import SideBarMenu from './SideBarMenu';
import SideBarMenu2 from './SideBarMenu2';


function SideBar() {

    const { data: session } = useSession()

    const [chats, loading, error] = useCollection(
        session && query(
            collection(db, 'users', session.user?.email!, 'chats'),
            orderBy('createdAt', 'asc')
        )
    );

    console.log(chats);

    return (
        <div className="p-2 flex flex-col h-screen">
            <div className="flex-1">
                <div>
                    {/* NewChat */}
                    <NewChat />
                    <div className='flex flex-col space-y-4 py-2 mt-44'>
                        <SideBarMenu />
                        <SideBarMenu2 />
                    </div>

                    {/* Map through the ChatRow */}
                    {chats?.docs.map(chat => (
                        <ChatRow key={chat.id} id={chat.id} />
                    ))}
                </div>
            </div>
            <Logout />
        </div>
    );
}

export default SideBar;