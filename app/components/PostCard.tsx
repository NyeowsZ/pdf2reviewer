import { Post } from "@/db/types";

const postCard = ({ id, author, post }: Post) => {
  return (
    <div>
      {id} {author} {post}
    </div>
  );
};

export default postCard;
