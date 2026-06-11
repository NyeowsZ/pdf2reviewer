"use client";
import { useEffect, useState } from "react";
import { addPost, getPost } from "@/db";
import { AddPost, Message, Posts } from "@/db/types";
import PostCard from "@/app/components/postCard";

const Page = () => {
  const [title, setTitle] = useState("");
  const [post, setPost] = useState("");
  const [message, setMessage] = useState<Message>();
  const [posts, setPosts] = useState<Posts>();

  const handleSave = async () => {
    const Post: AddPost = {
      title: title,
      post: post,
    };
    const response = await addPost(Post);

    setMessage(response);
    if (response.type == "success") {
      setPost("");
      getPosts();
    }
  };

  const getPosts = async () => {
    setPosts(await getPost());
  };

  useEffect(() => {
    (async () => {
      getPosts();
    })();
  }, []);

  return (
    <>
      {message ? (
        <div
          className={`py-5 
            ${
              {
                success: "text-green-500",
                error: "text-red-500",
                warning: "text-amber-500",
              }[message.type]
            }`}
        >
          <p>{message.message}</p>
          {message.note ? <p className="text-sm">{message.note}</p> : ""}
        </div>
      ) : (
        ""
      )}
      <div className="flex flex-col items-start gap-2.5">
        <h1 className="text-xl font-semibold">Create Posts</h1>
        <input
          type="text"
          placeholder="Title"
          className="px-5 py-2 rounded-xl border border-neutral-300"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Post"
          className="px-5 py-2 rounded-xl border border-neutral-300"
          value={post}
          onChange={(e) => setPost(e.target.value)}
        />
        <button
          className="px-5 py-2 rounded-xl text-white font-semibold bg-green-500 cursor-pointer active:bg-green-700"
          onClick={handleSave}
        >
          Post
        </button>
      </div>
      <div>
        <h1 className="text-xl font-semibold">All Posts</h1>
        <div className="py-5 flex flex-col gap-2.5 items-start">
          {posts && posts.length > 0 ? (
            <>
              {posts.map((val, idx) => {
                return (
                  <PostCard key={val.uuid} index={idx + 1} {...val}></PostCard>
                );
              })}
            </>
          ) : (
            "There are no posts available."
          )}
        </div>
      </div>
    </>
  );
};

export default Page;
