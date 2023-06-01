import useQuery from "@/hooks/useQuery";
import { Article } from "@/utils/types";
import React from "react";
import Card from "../Card/Card";

export default async function NewsArea() {
  const data = await useQuery();

  return (
    <div className="py-10 pt-5 grid md:grid-cols-3 grid-cols-1 gap-5 md:px-52 px-4">
      {data?.articles?.map((post: Article) => (
        <Card post={post} key={post.url} />
      ))}
    </div>
  );
}
