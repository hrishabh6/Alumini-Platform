"use client"
import { auth, signIn, signOut } from '@/auth'
import Link from 'next/link'
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { logOut } from '@/lib/actions/auth'
import { NavContents } from '@/constants'
import Image from 'next/image'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import MobileNav from './MobileNav'
const Navbar = ({ session }) => {

    return (
        <header className='max-md:px-5 max-md:py-3 py-2 px-3  bg-white shadow-sm font-work-sans z-50 fixed w-full'>
            <nav className={`flex justify-between items-center mx-auto max-w-7xl  `}>
                <Link href='/' className='flex items-center gap-2'>
                    <Image src='/icons/logo.svg' alt='logo' width={30} height={30} />
                    <p className='text-[#00308F] font-bold font-work-sans text-xl max-xl:hidden'>AluConnect</p>
                    <p className='text-[#00308F] font-bold font-work-sans text-2xl md:hidden max-sm:hidden'>AluConnect</p>
                </Link>

                <div className='flex items-center gap-5'>
                    <div className='flex items-center gap-5 max-xl:gap-8 max-md:hidden'>
                        {
                            NavContents.map((content, index) => {
                                if (
                                  // Check if the content should be visible based on ifSignIn and ifUserExist
                                  ((content.ifSignIn && session?.user) || !content.ifSignIn) &&
                                  // Check for ifUserExist condition
                                  !(content.ifUserExist && session?.user)
                                ) {
                                  return (
                                    <Link
                                      key={index}
                                      href={content.href}
                                      className="text-black-100 flex items-center flex-col flex-1 min-w-11 mx-4 max-xl:mx-0"
                                    >
                                      <Image
                                        src={content.icon}
                                        alt={content.name}
                                        width={20}
                                        height={20}
                                        className="max-xl:w-6"
                                      />
                                      <p className="font-semibold text-center flex flex-1 max-xl:hidden">
                                        {content.name}
                                      </p>
                                    </Link>
                                  );
                                }
                                return null;
                              })
                        }

                    </div>
                    <div className='flex items-center gap-5'>
                        {
                            session && session?.user ? (
                                <>
                                    <Popover >
                                        <PopoverTrigger>
                                            <Avatar>
                                                <AvatarImage src="https://github.com/shadcn.png" />
                                                <AvatarFallback>HJ</AvatarFallback>
                                            </Avatar>

                                        </PopoverTrigger>
                                        <PopoverContent className='flex gap-5 flex-col bg-white justify-between items-center w-fit mr-4'>
                                            <Link href='/profile' className='flex items-center gap-2'>
                                                <Image
                                                    src={'/icons/profile.svg'}
                                                    alt='profile'
                                                    width={20}
                                                    height={20}
                                                />
                                                <span>Profile</span>
                                            </Link>
                                            <button onClick={logOut} className='LoginBtn'>Log Out</button>
                                        </PopoverContent>
                                    </Popover>

                                </>
                            )
                                : (
                                    <>
                                        <Link className='text-[0.75rem] LoginBtn ' href={'/sign-in'}>Log In</Link>
                                        <Link className='LoginBtn' href={'/sign-up'}>Sign Up</Link>
                                    </>
                                )
                        }

                    </div>
                    
                </div>
            </nav>

        </header>
    )
}

export default Navbar
