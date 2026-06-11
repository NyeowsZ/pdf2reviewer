import { deletePost } from "@/db";
import { PostCard as PostCardType } from "@/db/types";

const PostCard = ({ index, uuid, title, post }: PostCardType) => {
  const del = async () => {
    await deletePost(uuid);
  };
  return (
    <div>
      <div className="flex items-center gap-2.5">
        <p className="font-semibold text-neutral-400">
          <span className="text-sm p-1 bg-neutral-800">{index}</span> {title}
        </p>
        <button
          className="text-sm border-b cursor-pointer active:text-neutral-500"
          onClick={del}
        >
          Delete
        </button>
      </div>
      <p className="">{post}</p>
    </div>
  );
};

export default PostCard;
