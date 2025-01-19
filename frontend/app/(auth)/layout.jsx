import { auth } from '@/auth'
import Image from 'next/image'
import { redirect } from 'next/navigation'
import React from 'react'

const layout = async ({ children }) => {
    const session = await auth()
    if (session) {
        redirect('/')
    }
    return (
        <main className='auth-container'>
            <section className='auth-form'>
                <div className='auth-box'>
                    <div className='flex flex-row gap-3'>
                        {/* {Logo goes here} */}
                    </div>
                    <div>
                        {children}
                    </div>
                </div>
            </section>
            
        </main>
    )
}

export default layout
