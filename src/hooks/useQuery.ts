export default async function useQuery(category?: string) {
  const fetchPosts = async () => {
    const url = category
      ? `https://newsapi.org/v2/top-headlines/sources?category=${category}&language=en&apiKey=${process.env.API_KEY}`
      : `https://newsapi.org/v2/top-headlines?language=en&apiKey=${process.env.API_KEY}`;

      
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
