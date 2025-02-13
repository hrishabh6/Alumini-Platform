import Users from '@/database/user.schema'
import connectToDatabase from '@/lib/actions/db'
import Image from 'next/image'
import React from 'react'

const LeftSideBar = async ({ session }) => {
  await connectToDatabase()
  const user = await Users.findOne({ _id: session.user.id })
  console.log(user)

    return (
      <aside className="col-span-1 space-y-4 h-fit max-md:space-y-0">
      <section className="bg-white shadow-sm max-md:rounded-none">
        <div className="flex flex-col h-[160px] relative">
          {/* Background Image */}
          <div className="w-full h-[70px] rounded-tl-md rounded-tr-md bg-cover bg-center relative">
            <Image
              src="/image/cover-image.webp"
              alt="cover image"
              layout="fill"
              objectFit="cover"
              className="rounded-tl-md rounded-tr-md"
            />
          </div>

          {/* Profile Image */}
          <div className="w-20 h-20 rounded-full bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Image
              src={user?.profilePicture || '/default-profile.webp'}
              alt="avatar"
              width={66}   // Smaller size for the profile image
              height={66}  // Smaller size for the profile image
              className="rounded-full"
              layout="intrinsic" // Keeps the aspect ratio intact
            />
          </div>
        </div>
        <div className="flex flex-col px-10">
          <h1 className='text-black-200 font-semibold text-xl font-work-sans text-center'>{user.fullName}</h1>
          <p className='text-black-200 font-semibold text-sm font-work-sans text-center'>{user?.bio || "Software Developer | Java & Kotlin | Spring Boot | NextJs | Building Scalable and Efficient Backend Systems"}</p>
        </div>

        <hr className='my-4 mx-3' />
        <div>
          <div className='flex justify-between px-10'>
            <h3 className='font-semibold font-work-sans text-[#696969] text-md'>Connections</h3>
            <p className='text-[#6CB4EE]'>269</p>
          </div>
        </div>
      </section>
      </aside>
    )
}

export default LeftSideBar
