/* eslint-disable */
"use client";
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { NavContents } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavContent = () => {
    const pathname = usePathname();
    return (
        <section className="flex h-full flex-col gap-6 pt-16 ">
            {NavContents.map((item) => {
                const isActive =
                    (pathname.includes(item.href) && item.href.length > 1) ||
                    pathname === item.href;
                return (
                    <SheetClose asChild key={item.href}>
                        <Link
                            href={item.href}
                            className={`${isActive
                                    ? "bg-[#00308F] rounded-lg text-white"
                                    : "text-black-100"
                                } flex items-center justify-start gap-4 bg-transparent p-4`}>
                            <Image
                                src={item.icon}
                                alt={item.icon}
                                width={20}
                                height={20}
                                className={`${isActive ? "invert" : ""}`}
                            />
                            <p className={`${isActive ? "base-bold" : "base-medium"}`}>
                                {item.name}
                            </p>
                        </Link>
                    </SheetClose>
                );
            })}
        </section>
    );
};

const MobileNav = ({ session }) => {
    return (
        <Sheet className=" bg-white-100"> 
            <SheetTrigger asChild>
                <Image
                    src="/icons/grid.svg"
                    width={36}
                    height={36}
                    alt="Menu"
                    className="invert-colors md:hidden ml-4"
                />
            </SheetTrigger>
            <SheetContent
                side="left"
                className="bg-white border-none overflow-y-auto">
                    <SheetTitle className="hidden">Menu</SheetTitle>
                <Link href="/" className="flex items-center gap-2">
                    <Image
                        src="/icons/logo.svg"
                        width={23}
                        height={23}
                        alt="AluConnect"
                    />
                    <p className="font-bold text-2xl  text-[#00308F] font-spaceGrotesk">
                        AluConnect
                    </p>
                </Link>
                <div className="flex flex-col">
                    <SheetClose asChild>
                        <NavContent />
                    </SheetClose>
                    { !session?.user &&
                        <div className="flex flex-col gap-3">
                            <SheetClose asChild>
                                <Link href="sign-in">
                                    <Button className="small-medium btn-secondary text-black min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
                                        <span className="primary-text-gradient">Login</span>
                                    </Button>
                                </Link>
                            </SheetClose>
                            <SheetClose asChild>
                                <Link href="sign-up">
                                    <Button className="small-medium light-border-2 btn-tertiary text-black min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
                                        Sign Up
                                    </Button>
                                </Link>
                            </SheetClose>
                        </div>

                    }

                </div>
            </SheetContent>
        </Sheet>
    );
};

export default MobileNav;
