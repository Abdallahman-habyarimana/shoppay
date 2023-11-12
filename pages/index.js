import Head from 'next/head'
import { Inter } from 'next/font/google'
import { useSession, signIn, signOut } from "next-auth/react"
import Header from '@/components/header'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { data: session} = useSession()
  console.log(session);
  return (
    <div>
        <Header />
      <h1>Welcome</h1>
      {
        session ? 'You are logged in' : "you are not logged in"
      }
    </div>
  )
}
