
'use client'

import "@/app/Components/Style/sidebar.module.css";

import Image from "next/image";
import Link from "next/link";

export default function Sidebar() {

    function handleClick() {
     var sidebar = document.getElementById('sidebar');
      sidebar.classList.toggle('hidden');
      }

  return (<>
   <div className=" fixed top-0 left-0 z-[1000]  w-[30%]">
    <div className="px-6 py-4  "><button onClick={handleClick}>
    <Image
      src="/menu-line.png"
      width={32}
      height={24}
      alt="Menu " 
    />

        </button></div>
   
        <div className="side_container fixed hidden top-0 left-0 z-[-50] w-[30%] "  id="sidebar">
<div className="flex h-screen flex-col justify-between border-e bg-white">
  <div className="px-4 py-6 mt-10">

    


    <span className="grid h-10 place-content-center rounded-lg bg-gray-100 text-xs text-gray-600 font-semibold">
     Kuldeep Dev
    </span>

    <ul className="mt-6 space-y-1">
      <li>
        <Link
          href="/"
          className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
        >
          Home
        </Link>
      </li>

   

      <li>
        <Link
          href="/#about"
          className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
        >
          About
        </Link>
      </li>

      <li>
        <Link
          href="/#contact"
          className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
        >
          Contact
        </Link>
      </li>

      <li>
        <details className="group [&_summary::-webkit-details-marker]:hidden">
          <summary
            className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
          >
            <span className="text-sm font-medium"> Projects </span>

            <span className="shrink-0 transition duration-300 group-open:-rotate-180">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <ul className="mt-2 space-y-1 px-4">
            <li>
              <Link
                href="webdevelopment"
                className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                Web Development
              </Link>
            </li>

            <li>
              <Link
                href="graphics"
                className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                Graphic Design
              </Link>
            </li>

            <li>
              <Link
                href="blogs"
                className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
               Blogs
              </Link>
            </li>

          </ul>
        </details>
      </li>
    </ul>
  </div>

 
</div>
    </div>
    </div>

    </>
  );
}
