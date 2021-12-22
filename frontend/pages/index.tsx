import Image from "next/image";
import Donut from "../assets/illustration/banner_bonitocat.png";

export default function Home() {
  return (
    <div className="flex flex-col items-center  ">
      {/* <h1 className="text-3xl text-center pb-4">
        Welcome to my{" "}
        <a className="text-yellow-400 font-bold" href="/portfolio/">
          portfolio
        </a>
      </h1> */}

      <div className="">
        <Image src={Donut} alt="3d Donut" quality={100} />
      </div>

      {/* <p className="mt-3 text-2xl">
        Here's some of my work{" "}
        <code className="p-3 font-mono text-lg bg-gray-100 rounded-md">Go</code>
      </p> */}

      {/*  <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
        <a
          href="https://nextjs.org/docs"
          className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
        >
          <h3 className="text-2xl font-bold">Documentation &rarr;</h3>
          <p className="mt-4 text-xl">
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn"
          className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
        >
          <h3 className="text-2xl font-bold">Learn &rarr;</h3>
          <p className="mt-4 text-xl">
            Learn about Next.js in an interactive course with quizzes!
          </p>
        </a>

        <a
          href="https://github.com/vercel/next.js/tree/master/examples"
          className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
        >
          <h3 className="text-2xl font-bold">Examples &rarr;</h3>
          <p className="mt-4 text-xl">
            Discover and deploy boilerplate example Next.js projects.
          </p>
        </a>

        <a
          href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
        >
          <h3 className="text-2xl font-bold">Deploy &rarr;</h3>
          <p className="mt-4 text-xl">
            Instantly deploy your Next.js site to a public URL with Vercel.
          </p>
        </a>
      </div> */}
    </div>
  );
}
