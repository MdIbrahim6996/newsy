export default async function useQuery({
  category,
  page,
}: {
  category?: string;
  page: number;
}) {
  const fetchPosts = async () => {
    const url = category
      ? `https://newsapi.org/v2/top-headlines/sources?pageSize=21&category=${category}&language=en&apiKey=${process.env.API_KEY}`
      : `https://newsapi.org/v2/top-headlines?page=${page}&pageSize=21&language=en&apiKey=${process.env.API_KEY}`;

    const res = await fetch(url, {
      next: {
        revalidate: 10,
      },
    });
    const data = await res.json();
    return data;
  };

  return await fetchPosts();
}
