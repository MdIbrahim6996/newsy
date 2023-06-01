import useQuery from "@/hooks/useQuery";

export interface Article {
  source: {
    id?: string;
    name?: string;
  };
  author?: string;
  title?: string;
  description?: string;
  url?: string | undefined;
  urlToImage?: string;
  publishedAt?: string;
  content?: string;
}

export default async function Hero() {
  const data = await useQuery();

  const post = data?.articles[0];  

  return (
    <div className="h-[90vh] max-h-[200vh] md:h-[70vh] mb-10 relative">
      <div className="h-[90vh] max-h-[200vh] md:h-[70vh] min-w-[100vw]">
        <img
          src={post?.urlToImage ? post.urlToImage : `/technology.jpg`}
          className="w-full object-cover h-full relative"
        />
        <div className="bg-gradient-to-r w-full h-full from-black/70 via-black/60 to-black/70 absolute  top-0">
          <div className="md:max-w-xl h-full flex flex-col my-5 md:mx-52 mx-5 ">
            <p className=" md:my-6 my-3 bg-green-600 rounded-xl px-4 py-1 text-xs w-fit uppercase text-white">
              {post?.source?.name}
            </p>
            <h3 className="md:my-4 my-1 text-4xl md:text-5xl text-white font-semibold">
              {post?.title}
            </h3>
            <p className="my-4 text-white text-lg leading-5">
              {post?.description}
            </p>
            <div className="my-10 flex space-x-2 items-center">
              <img
                src="/fruits.jpg"
                alt="fruits"
                className="w-6 h-6 rounded-full object-cover"
              />
              <p className="text-sm text-white capitalize">{post?.author}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Your API key is: 712ed622687d40b2b4b62b1696764c38
