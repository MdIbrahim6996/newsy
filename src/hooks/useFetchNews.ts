export const useFetchNews = async ({
  query,
  page,
}: {
  query: string;
  page: string;
}) => {
  const fetchPosts = async () => {
    const newUrl = `https://newsapi.org/v2/everything?q=${query}&page=${page}&pageSize=21&apiKey=${process.env.API_KEY}`;

    const res = await fetch(newUrl, {
      next: {
        revalidate: 10,
      },
    });
    const data = await res.json();
    return data;
  };

  return await fetchPosts();
};
