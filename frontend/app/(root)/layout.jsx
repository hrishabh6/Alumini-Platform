import { auth } from "@/auth";
import Navbar from "../../components/Navbar";

export default async function Layout ({children}) {
    const session = await auth()
    
    return (
        <main>
            <Navbar session={session}/>
            {children}
        </main>
    )
}