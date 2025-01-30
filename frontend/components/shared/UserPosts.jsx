"use client"; 

import { useState } from "react";

function Post({ profileImage, name, title, content, postImage }) {
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState(0);
  const [reposts, setReposts] = useState(0);

  const handleLike = () => setLikes(likes + 1);
  const handleComment = () => setComments(comments + 1);
  const handleRepost = () => setReposts(reposts + 1);

  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-2  w-full">
      <div className="flex items-center space-x-4 mb-4">
        <img
          src={profileImage}
          alt="Profile"
          className="w-12 h-12 rounded-full"/>
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
        <button
          onClick={handleLike}
          className="flex items-center hover:text-blue-500 space-x-1"
        >
          <span>👍</span>
          <span>Like</span>
        </button>
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

      

    </div>
  );
}

export default function PostFeed() {
  const posts = [
    {
      id: 1,
      profileImage: "/image/profile1.png",
      name: "John Doe",
      title: "Software Engineer",
      content: "Excited to share my latest project with the community!",
      postImage: "image//project-image1.jpeg",
    },
    {
      id: 2,
      profileImage: "/image//profile1.png",
      name: "Jane Smith",
      title: "Product Manager",
      content: "Grateful for my amazing team. Here's to more success ahead!",
      postImage: "/image/project-image2.jpeg",
    },
    {
      id: 3,
      profileImage: "/image/profilePicture.png",
      name: "Emily Brown",
      title: "Designer",
      content: "Check out this new design concept I've been working on.",
      postImage: "image//project-image3.jpeg",
    },
  ];

  return (
    <div className="w-full">
      {posts.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </div>
  );
}