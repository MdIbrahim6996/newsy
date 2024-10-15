import Link from "next/link";
import Hero from "../components/Hero/Hero";
import useQuery from "@/hooks/useQuery";
import Card from "@/components/Card/Card";
import { Article } from "@/utils/types";

export default async function Home({ searchParams }: { searchParams: any }) {
  let page = searchParams.page ? searchParams.page : 1;
  const data = await useQuery({ page });
  const totalPages = Math.ceil(data?.totalResults / 21);

  return (
    <main>
      <Hero data={data?.articles[0]} />

      <h2 className="text-3xl mt-5 font-bold capitalize lg:mx-52 mx-4 border-b-4 border-gray-700 w-fit pr-4">
        latest news
      </h2>
      {/* lg:px-52 */}
      {/* NEWS AREA */}
      <div className="py-10 pt-5 px-4 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 lg:w-[80%] mx-auto ">
        {data?.articles?.map((post: Article) => (
          <Card post={post} key={post.url} />
        ))}
      </div>
      {/* END OF NEWS AREA */}

      {/* PAGINATION COMPONENT */}
      <div className="my-10 flex flex-col items-center">
        <p className="text-xl underline font-bold">
          Showing page {page} of {totalPages}
        </p>
        <div className="flex space-x-2">
          <Link href={`/?page=${parseInt(page) - 1}`}>
            <button
              disabled={parseInt(page) === 1}
              className="text-white disabled:cursor-not-allowed disabled:bg-red-500/60 bg-red-500 px-6 py-2 mt-2 rounded-md"
            >
              Previous Page
            </button>
          </Link>
          <Link href={`/?page=${parseInt(page) + 1}`}>
            <button
              className="text-white bg-blue-700 px-6 py-2 mt-2 rounded-md disabled:cursor-not-allowed"
              disabled={parseInt(page) >=totalPages}
            >
              Next Page
            </button>
          </Link>
        </div>
      </div>
      {/* END OF PAGINATION COMPONENT */}
    </main>
  );
}
