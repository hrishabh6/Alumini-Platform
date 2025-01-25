"use client"
import { NavContents } from '@/constants'
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

const FixedMobileNav = ({session}) => {
    const pathname = usePathname();
    return (
        <section className='fixed bottom-0 flex  left-0 right-0 bg-white shadow-md p-2 md:hidden'>
            {
                NavContents.map((content, index) => {
                    const isActive =
                        (pathname.includes(content.href) && content.href.length > 1) ||
                        pathname === content.href;
                    if (
                        // Check if the content should be visible based on ifSignIn and ifUserExist
                        ((content.ifSignIn && session?.user) || !content.ifSignIn) &&
                        // Check for ifUserExist condition
                        !(content.ifUserExist && session?.user)
                    ) {
                        return (
                            <Link key={index} href={content.href} className={`text-black-100 flex items-center flex-col flex-1 min-w-11 mx-4 max-xl:mx-0 p-3 rounded-xl ${isActive ? "bg-[#00308F80]" : ""}`} >
                                <Image src={content.icon} alt={content.name} width={20} height={20} className={` ${isActive ? "invert" : ""}`} />
                                <p className='font-semibold text-center flex flex-1  max-xl:hidden'>{content.name}</p>
                            </Link>
                        );
                    }

                })}
        </section>
    )
}

export default FixedMobileNav
