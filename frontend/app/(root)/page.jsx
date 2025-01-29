import { auth } from "@/auth";
import LeftSideBar from "@/components/shared/LeftSideBar";
import HeroSection from "@/components/HeroSection";

export default async function Home() {
  const session = await auth()
  return (
    <>
      <main className="grid grid-cols-[25%_50%_25%] max-xl:grid-cols-[35%_65%] max-md:flex max-md:flex-col max-md:items-center md:mx-auto md:max-w-[85%] max-md:w-full">

        {
          session ? <LeftSideBar session={session} /> : null
        }
        {
          session ? <HeroSection /> : null
        }
      </main>

    </>
  );
}
