import { Posts } from "@/utils/types";
import Link from "next/link";

const PostCard = ({ post }: { post: Posts }) => {
  return (
    <Link href={post?.url}>
      <article className="md:w-[25rem] max-h-fit md:min-h-[22rem] shadow-lg rounded-md relative bg-white cursor-pointer overflow-hidden">
        <p className="absolute bg-red-600 rounded-xl uppercase text-white p-1 px-3 text-xs md:top-6 top-3 left-3 md:left-6">
          {post?.id}
        </p>

        <div className="md:py-5 md:px-8 p-3 mt-10 space-y-4">
          <p className="text-2xl font-semibold hover:text-blue-500">
            {post?.name}
          </p>
          <p className="text-lg font-semibold">{post?.description}</p>
        </div>
      </article>
    </Link>
  );
};

export default PostCard;
