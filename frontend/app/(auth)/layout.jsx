import { auth } from '@/auth'
import { redirect } from 'next/navigation'
import React from 'react'
import Image from 'next/image'

const AuthLayout = async ({ children }) => {
    const session = await auth()
    
    
    return (
        <main className="h-screen w-full flex">
            {/* Left Section - Background Image */}
            <section className="hidden lg:relative lg:flex w-1/2">
                <Image
                    src="/image/stock-image.webp    "
                    alt="Background"
                    fill
                    className="object-cover"
                    priority
                />
                {/* Darker overlay for better text readability */}
                <div className="absolute inset-0 bg-black/70" />
                
                {/* Content - Repositioned and Resized */}
                <div className="relative z-10 flex flex-col justify-center text-white w-full h-full px-16">
                    <div className="max-w-2xl">
                        <h1 className="text-6xl font-bold mb-6 leading-tight">
                            Connect With Your 
                            College Community
                        </h1>
                        <p className="text-xl text-gray-200 max-w-xl">
                            Bridge the gap between alumni and their alma mater. 
                            Create meaningful connections, share experiences, and 
                            build a stronger college network together.
                        </p>
                    </div>
                </div>
            </section>

            {/* Right Section - Auth Form */}
            <section className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white">
                <div className="w-full">
                    {children}
                </div>
            </section>
        </main>
    )
}

export default AuthLayout
