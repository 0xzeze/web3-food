"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import type { NextPage } from "next";

const Home: NextPage = () => {
  const router = useRouter();
  const handleButtonClick = () => {
    router.push("/menu");
  };

  return (
    <>
      <section className="relative isolate overflow-hidden bg-white dark:bg-gray-900 px-6 py-24 sm:py-32 lg:px-8 h-screen">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] dark:bg-[radial-gradient(45rem_50rem_at_top,theme(colors.gray.800),theme(colors.gray.900))] opacity-20" />
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white dark:bg-gray-900 shadow-xl shadow-indigo-600/10 dark:shadow-indigo-700/10 ring-1 ring-indigo-50 dark:ring-indigo-900 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <Image alt="a" height={200} width={200} src="/logoFood.png" className="mx-auto" />
          <figure className="mt-10">
            <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 dark:text-white sm:text-2xl sm:leading-9">
              <p>
                “Experience a culinary adventure where each dish is meticulously crafted to create unforgettable
                moments. Our kitchen transforms every meal into a celebration of flavor and artistry.”
              </p>
            </blockquote>
            <figcaption className="mt-10 flex flex-col items-center">
              <div className="avatar">
                <div className="w-20 rounded-full mx-auto">
                  <Image alt="myPhoto" src="/myPhoto.jpg" height={200} width={200} />
                </div>
              </div>
              <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                <div className="font-semibold text-gray-900 dark:text-white">Nezez</div>
                <svg
                  width={3}
                  height={3}
                  viewBox="0 0 2 2"
                  aria-hidden="true"
                  className="fill-gray-900 dark:fill-white"
                >
                  <circle r={1} cx={1} cy={1} />
                </svg>
                <div className="text-gray-600 dark:text-gray-400">CEO of Decentralized Delights</div>
              </div>
            </figcaption>
          </figure>
        </div>
        <div className="my-16 mx-auto flex items-center justify-center">
          <button
            className="btn flex items-center justify-center bg-indigo-600 dark:bg-indigo-500 hover:bg-indigo-700 dark:hover:bg-indigo-400 text-white"
            onClick={handleButtonClick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            Explore Our Tastes
          </button>
        </div>
      </section>
    </>
  );
};

export default Home;
