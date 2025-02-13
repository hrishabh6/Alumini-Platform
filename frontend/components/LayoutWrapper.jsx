"use client";
import { usePathname } from "next/navigation";
import Navbar from "./shared/Navbar";

export default function LayoutWrapper({ session, children }) {
  const pathname = usePathname();
  const hideNavbarRoutes = ["/sign-up", "/sign-in", "/onboarding", "/college"];
  const shouldShowNavbar = !hideNavbarRoutes.includes(pathname);

  return (
    <div className="min-h-screen">
      {shouldShowNavbar && <Navbar session={session} />}
      <div className={`${shouldShowNavbar ? "pt-[60px]" : ""} w-full`}>
        <div className="max-md:px-0">{children}</div>
      </div>
    </div>
  );
}
