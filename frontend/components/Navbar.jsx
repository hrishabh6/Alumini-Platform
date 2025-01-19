import { auth, signIn, signOut } from '@/auth'
import Link from 'next/link'
import React from 'react'

const Navbar = async () => {
    const session = await auth()
  return (
    <header className='px-5 py-3 bg-white shadow-sm font-work-sans'>
      <nav className='flex justify-between items-center'>
        <Link href='/'>
            <p className='text-black'>Logo Goes here</p>
        </Link>

        <div className='flex items-center gap-5'>
            {
                session && session?.user ? (
                    <>
                        <Link  href='/search'>
                            <p className='text-black'>Search for aluminis</p>
                        </Link>
                        <form action={async () => {
                            "use server"
                            await signOut(
                                {
                                    redirectTo : "/"
                                }
                            )
                        }} className='text-black'>
                            <button type='submit' className='text-black'>Log Out</button>
                        </form>
                        <Link href={`/user/${session?.id}`}>
                            <span className='text-black '>{session?.user?.name}</span>
                        </Link>
                    </>
                ) : 
                ( 
                    
                        <Link  className='text-black' href={'/sign-up'}>Log In</Link>
                    
                )
            }
        </div>

      </nav>
    </header>
  )
}

export default Navbar
