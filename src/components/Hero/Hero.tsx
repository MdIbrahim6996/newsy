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

const Hero = ({ data: post }: { data: Article }) => {
  const src = post?.urlToImage ? post.urlToImage : `/technology.jpg`;

  return (
    <div className="h-[70vh]">
      <div className=" relative">
        <div className="h-[70vh] overflow-hidden">
          <img
            src={src}
            alt="hero-image"
            className=" w-full h-full object-cover"
          />
        </div>

        <div className="bg-gradient-to-t from-black/70 via-black/60 to-black/70 absolute  z-0 top-0 left-0 h-full w-full">
          <div className="md:w-[75%] w-[90%] my-5 mx-auto text-white">
            <p className=" md:my-6 my-3 bg-green-600 rounded-xl px-4 py-1 text-xs w-fit uppercase text-white">
              {post?.source?.name}
            </p>

            <h3 className="md:my-4 my-1 text-4xl md:text-5xl text-white font-semibold">
              {post?.title}
            </h3>
            <p className="my-4 text-white text-lg leading-5">
              {post?.description?.substring(0, 150)}...
            </p>

            <div className="my-5 flex space-x-2 items-center">
              <img
                src="/technology.jpg"
                alt="technology"
                className="w-6 h-6 rounded-full object-cover"
              />
              <p className="text-sm text-white capitalize">{post?.author}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
