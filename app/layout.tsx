import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import SideBar from '@/components/SideBar'
import Login from '@/components/Login'
import { auth } from '@/auth'
import { SessionProvider } from '@/components/SessionProvider'
import ClientProvider from '@/components/ClientProvider'

const inter = Inter({ subsets: ['latin'] })

//this is the metadata
export const metadata: Metadata = {
  title: 'Chatgpt Messenager 2.0',
  description: 'This is another version of chatgpt that delivers same result as the real one',
}

//this is the layout
export default async function RootLayout({

  children,
}: {
  children: React.ReactNode
}) {

  const session = await auth();



  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>
          {!session ? (
            <Login />
          ) : (
            <div className='flex'>
              <div className='bg-[#202123] md:max-w-5x max-w-28 h-screen overflow-y-auto md:min-w-[20rem]'>
                <SideBar />
              </div>

              <ClientProvider />

              <div className='bg-[#343541] flex-1'>{children}</div>
            </div>
          )}

        </SessionProvider>
      </body>
    </html>
  );
}
