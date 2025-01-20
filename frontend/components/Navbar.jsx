"use client"
import { auth, signIn, signOut } from '@/auth'
import Link from 'next/link'
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { logOut } from '@/lib/actions/auth'
import { NavContents } from '@/constants'
import Image from 'next/image'

const Navbar = ({ session }) => {

    return (
        <header className='px-5 py-3 bg-white shadow-sm font-work-sans'>
            <nav className={`flex justify-between items-center mx-auto  ${!session?.user && "max-w-7xl"} `}>
                <Link href='/'>
                    <p className='text-black'>Logo Goes here</p>
                </Link>

                <div className='flex items-center gap-5'>
                    <div className='flex items-center gap-5'>
                        {
                            NavContents.map((content, index) => {
                                if ((content.ifSignIn && session?.user) || !content.ifSignIn) {
                                    return (
                                        <Link key={index} href={content.href} className="text-black-100 flex items-center flex-col flex-1 min-w-11 mx-4" >
                                            <Image src={content.icon} alt={content.name} width={20} height={20} />
                                           <p className='font-semibold text-center flex flex-1  '>{content.name}</p> 
                                        </Link>
                                    );
                                }
                                return null;
                            })
                        }

                    </div>

                    {
                        session && session?.user ? (
                            <>
                                <button onClick={logOut} className='LoginBtn'>Log Out</button>
                                <Link href={`/user/${session?.id}`} >
                                    <Avatar>
                                        <AvatarImage src="https://github.com/shadcn.png" />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                </Link>
                            </>
                    )
                    : (
                    <Link className='LoginBtn' href={'/sign-up'}>Log In</Link>
                    )
                    }
                </div>
            </nav>
        </header>
    )
}

export default Navbar
