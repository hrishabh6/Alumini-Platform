import { auth } from "@/auth";
import Navbar from "../../components/shared/Navbar";
import FixedMobileNav from "../../components/shared/FixedMobileNav";
import LeftSideBar from "../../components/shared/LeftSideBar";
export default async function Layout({ children }) {
    const session = await auth()
    return (
        <main className="w-full min-h-screen ">

                {children}
           
            <FixedMobileNav session={session} />
        </main>
    )
}