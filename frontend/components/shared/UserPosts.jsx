"use client";

import { useState } from "react";
import { Button } from "../ui/button";

function Post({ profileImage, name, title, content, postImage }) {
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState(0);
  const [reposts, setReposts] = useState(0);

  const handleLike = () => setLikes(likes + 1);
  const handleComment = () => setComments(comments + 1);
  const handleRepost = () => setReposts(reposts + 1);

  return (
    <article className="w-full bg-white shadow-sm p-4 max-md:rounded-none relative">
      <div className="flex items-center space-x-4 mb-4">
        <img
          src={profileImage}
          alt="Profile"
          className="w-12 h-12 rounded-full" />
        <div>
          <h3 className="text-lg font-medium">{name}</h3>
          <p className="text-gray-500 text-sm">{title}</p>
        </div>
      </div>

      <p className="text-gray-800 mb-4">{content}</p>
      {postImage && (
        <img
          src={postImage}
          alt="Post Content"
          className="w-full h-auto rounded-lg mb-4"
        />
      )}

      {/* Action Buttons */}
      <div className="flex justify-between items-center border-t border-b py-2 text-gray-500 text-sm">
        <Button
          onClick={handleLike}
          className="flex items-center hover:text-blue-500 space-x-1"
        >
          <span>👍</span>
          <span>Like</span>
        </Button>
        <button
          onClick={handleComment}
          className="flex items-center hover:text-blue-500 space-x-1"
        >
          <span>💬</span>
          <span>Comment</span>
        </button>
        <button
          onClick={handleRepost}
          className="flex items-center hover:text-blue-500 space-x-1"
        >
          <span>🔁</span>
          <span>Repost</span>
        </button>
        <button className="flex items-center hover:text-blue-500 space-x-1">
          <span>✉️</span>
          <span>Send</span>
        </button>
      </div>

      <div className="flex justify-between items-center py-2 text-gray-600 text-sm">
        <p>{likes} Likes</p>
        <p>{comments} Comments</p>
        <p>{reposts} Reposts</p>
      </div>


      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gray-200 max-md:block hidden" />
    </article>
  );
}

export default function PostFeed() {
  const posts = [
    {
      id: 1,
      profileImage: "/image/profile1.webp",
      name: "John Doe",
      title: "Software Engineer",
      content: "Excited to share my latest project with the community!",
      postImage: "image//project-image1.webp",
    },
    {
      id: 2,
      profileImage: "/image//profile1.webp",
      name: "Jane Smith",
      title: "Product Manager",
      content: "Grateful for my amazing team. Here's to more success ahead!",
      postImage: "/image/project-image2.webp",
    },
    {
      id: 3,
      profileImage: "/image/profilePicture.webp",
      name: "Emily Brown",
      title: "Designer",
      content: "Check out this new design concept I've been working on.",
      postImage: "image//project-image3.webp",
    },
  ];

  return (
    <div className="w-full divide-y divide-gray-200 max-md:space-y-0 max-md:divide-y">
      {posts.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </div>
  );
}