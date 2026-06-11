"use server";
import "dotenv/config";
import { drizzle } from "drizzle-orm/mysql2";
import { posts } from "./schema";
import { AddPost, Message } from "./types";
import { eq } from "drizzle-orm";

const db = drizzle({ connection: { uri: process.env.DATABASE_URL } });

export const addPost = async ({ title, post }: AddPost) => {
  let message: Message;

  try {
    await db.insert(posts).values({ title: title, post: post });
    message = {
      message: "Posted Successfully",
      type: "success",
    };
    return message;
  } catch (error) {
    console.error(error);

    message = {
      message: "Failed to post",
      note: "If the issue persists please contact the admin",
      type: "error",
    };
    return message;
  }
};

export const getPost = async () => {
  return await db
    .select({
      uuid: posts.uuid,
      title: posts.title,
      post: posts.post,
    })
    .from(posts);
};

export const deletePost = async (uuid: string) => {
  try {
    console.log(uuid);
    await db.delete(posts).where(eq(posts.uuid, uuid));
    const message: Message = {
      message: "Successfully deleted the post",
      type: "success",
    };
    return message;
  } catch (error) {
    console.error(error);
    const message: Message = {
      message: "Failed to delete the post",
      note: "If the issue persist please call the admin.",
      type: "error",
    };
    return message;
  }
};
