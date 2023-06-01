import useQuery from "@/hooks/useQuery";
import PostCard from "@/components/PostCard/PostCard";
import { Posts } from "@/utils/types";
import {notFound} from 'next/navigation'


export default async function CategoryPage({
  params: { category },
}: {
  params: { category: string };
}) {
  const data = await useQuery(category)
  console.log("data", data);
  

  if(data?.sources.length===0){
    notFound()
  }
  return (
    <div>
      <h2 className="text-3xl font-bold capitalize md:mx-52 mx-4 mt-5 border-b-4 border-gray-700 w-fit pr-4">
        {category} news
      </h2>
      <div className="py-10 pt-5 grid md:grid-cols-3 grid-cols-1 gap-5 md:px-52 px-4">
        {data?.sources?.map((post: Posts) => (
          <PostCard post={post} />
        ))}
      </div>
    </div>
  );
}
