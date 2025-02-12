import { auth } from "@/auth";
import LeftSideBar from "@/components/shared/LeftSideBar";
import HeroSection from "@/components/HeroSection";
import RightSideBar from "@/components/shared/RightSideBar";
import HomeUI from "@/components/Home/HomeUI";
export default async function Home() {
  const session = await auth()
  return (
    session && session?.user ? (
      <>
        <div className="md:mt-8 grid grid-cols-[25%_50%_25%] gap-6 max-xl:grid-cols-[35%_65%] max-md:grid-cols-1 max-md:gap-0 max-w-7xl mx-auto">
          {
            session ? <LeftSideBar session={session} /> : null
          }
          {
            session ? <HeroSection /> : null
          }
          {
            session ? <RightSideBar /> : null
          }
        </div>
      </>
    ) : (
      <HomeUI/>
    )
  )
}
