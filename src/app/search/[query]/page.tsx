import Card from "@/components/Card/Card";
import { useFetchNews } from "@/hooks/useFetchNews";
import { Article } from "@/utils/types";
import Link from "next/link";

const SearchResults = async ({
  params,
  searchParams,
}: {
  params: any;
  searchParams: any;
}) => {
  const data = await useFetchNews({
    query: params.query,
    page: searchParams.page,
  });

  const totalPages = Math.ceil(data?.totalResults / 21);
  const page = parseInt(searchParams.page);

  return (
    <div>
      <h1 className="md:mx-52 mx-5 mt-10 text-2xl font-bold underline">
        Search results for {params?.query}
      </h1>
      {/* NEWS AREA */}
      <div className="py-10 pt-5 px-4 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 lg:w-[80%] mx-auto ">
        {data?.articles?.map((post: Article) => (
          <Card post={post} key={post.url} />
        ))}
      </div>
      {/* END OF NEWS AREA */}

      {/* PAGINATION */}
      <div className="md:mx-52 mx-5 my-10">
        <p className="text-xl underline font-bold">
          Showing page {searchParams.page} of {totalPages}
        </p>
        <div className="flex space-x-2">
          <Link href={`/search/${params.query}?page=${page - 1}`}>
            <button
              disabled={page === 1}
              className="text-white disabled:cursor-not-allowed disabled:bg-red-500/60 bg-red-500 px-6 py-2 mt-2 rounded-md"
            >
              Previous Page
            </button>
          </Link>
          <Link href={`/search/${params.query}?page=${page + 1}`}>
            <button className="text-white bg-blue-700 px-6 py-2 mt-2 rounded-md">
              Next Page
            </button>
          </Link>
        </div>
      </div>
      {/* END OF PAGINATION */}
    </div>
  );
};

export default SearchResults;
