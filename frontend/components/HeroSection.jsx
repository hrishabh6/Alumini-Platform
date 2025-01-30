import React from 'react'
import PostCreator from './shared/Post'
import PostFeed from './shared/UserPosts'

const HeroSection = () => {
  return (
    <div className='flex w-full max-md:mt-5 md:pl-20 lg:px-10 flex-col justify-between gap-4  sm:items-center relative  md:top-24 xl:top-28'>
      <PostCreator/>
      <PostFeed/>
      
    </div>
  )
}

export default HeroSection
