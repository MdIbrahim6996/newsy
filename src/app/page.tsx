import Hero from "../components/Hero/Hero";
import NewsArea from "../components/NewsArea/NewsArea";

export default async function Home() {

  return (
    <main>
      {/* @ts-expect-error Server Component */}
      <Hero />
      <h2 className="text-3xl font-bold capitalize md:mx-52 mx-4 border-b-4 border-gray-700 w-fit pr-4">
        latest news
      </h2>
      {/* @ts-expect-error Server Component */}
      <NewsArea />
    </main>
  );
}
