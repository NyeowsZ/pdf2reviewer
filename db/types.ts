export interface Post {
  id: number;
  uuid: string;
  title: string;
  post: string;
}

export type Posts = Pick<Post, "uuid" | "title" | "post">[];

export type AddPost = Pick<Post, "title" | "post">;
export type PostCard = Pick<Post, "title" | "post" | "uuid"> & {
  index: number;
};

export interface Message {
  message: string;
  note?: string;
  type: "warning" | "success" | "error";
}
