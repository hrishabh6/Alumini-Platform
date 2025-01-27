import { auth } from "@/auth";
import Navbar from "../../components/shared/Navbar";
import FixedMobileNav from "../../components/shared/FixedMobileNav";
import LeftSideBar from "../../components/shared/LeftSideBar";
export default async function Layout({ children }) {
    const session = await auth()
    return (
        <>
        <Navbar session={session} />
            <main className="min-h-screen min-w-full max-md:px-10">
                {
                    session ? <LeftSideBar session={session} /> : null
                }

                {children}
            </main>

        <FixedMobileNav session={session} />
        </>
    )
}