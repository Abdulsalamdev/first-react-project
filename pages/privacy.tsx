import { Header, Maquee } from "@/component/home/header";
import { HeroSection } from "@/component/home/hero";
import { Private } from "@/component/home/private";
import { SecHeader } from "@/component/home/secHeader";


export default function Home() {
  return (
    <>
    <div className='flex items-center border border-b-[#A0AEC0] '>
      <Header />
      <Maquee />
    </div>
    <div className='bg-[#F9FAFB] py-[20px]'>
      <SecHeader />
    </div>
    <Private />
    <HeroSection />
    
    </>
  )
}