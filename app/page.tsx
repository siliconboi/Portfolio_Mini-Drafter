import Image from 'next/image'
import { Inter } from 'next/font/google'
import Aboutbio from '@/components/aboutbio'
import Skills from '@/components/skills'
import Abouteducation from '@/components/education'
import Achivements from '@/components/achievements'
import Projects from '@/components/projects'
import Footer from '@/components/footer'
import Homecomp from '@/components/home'
import Header from '@/components/header'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
      <Header/>
        <Homecomp/>
        <Aboutbio/>
        <Abouteducation/>
        <Skills/>
        <Achivements/>
        <Projects/>
        <Footer/>
      </div>
    </main>
  )
}
