import { Article } from "@/utils/types";
import dayjs from "dayjs";
import Link from "next/link";

const Card = ({ post }: { post: Article }) => {
  return (
    <Link href={post?.url}>
      <article className="lg:w-[25rem] lg:min-h-[32rem] shadow-lg rounded-md relative flex flex-col bg-white cursor-pointer overflow-hidden">
        <p className="absolute bg-red-600 rounded-xl uppercase text-white p-1 px-3 text-xs md:top-6 top-3 left-3 md:left-6">
          {post?.source?.name}
        </p>
        <img
          src={post?.urlToImage ? post.urlToImage : "/technology.jpg"}
          alt="fruits"
          className="w-full flex-1 object-cover"
        />
        <div className="md:py-5 md:px-8 p-3 flex-1 space-y-4">
          <p className="text-2xl font-semibold hover:text-blue-500 cursor-pointer">
            {post?.title}
          </p>
          <div className="cursor-pointer flex space-x-2 text-sm items-center">
            <img
              src="/technology.jpg"
              alt="technology"
              className="w-6 h-6 object-cover rounded-full"
            />
            <p className="capitalize text-gray-400 hover:text-black">
              {post?.author}
            </p>
            <p className=" text-gray-400">
              {dayjs(post?.publishedAt).format("D MMM YYYY")}
            </p>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default Card;
