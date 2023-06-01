import Link from "next/link";

const NotFound = () => {
  return (
    <div className="h-[70vh] flex flex-col space-y-4 justify-center items-center">
      <h1 className="capitalize text-4xl font-bold text-center">404 error: not Found :(</h1>
      <Link href={`/`}>
        <p className="capitalize text-3xl bg-blue-500 px-5 py-3 rounded-lg text-white cursor-pointer">
          home
        </p>
      </Link>
    </div>
  );
};

export default NotFound;
