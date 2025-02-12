import React from 'react'
import PostCreator from './shared/Post'
import PostFeed from './shared/UserPosts'

const HeroSection = () => {
  return (
    <main className="col-span-1 w-full space-y-4 max-md:space-y-0 max-md:mt-8">
      <PostCreator />
      <PostFeed />
    </main>
  )
}

export default HeroSection
