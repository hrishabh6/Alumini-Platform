import { auth } from "@/auth";
import Navbar from "../../components/shared/Navbar";
import FixedMobileNav from "../../components/shared/FixedMobileNav";
export default async function Layout ({children}) {
    const session = await auth()
    
    return (
        <main>
            <Navbar session={session}/>
            <FixedMobileNav session={session}/>
            {children}
        </main>
    )
}