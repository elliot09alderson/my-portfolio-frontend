import React from "react";
import { createClient } from "next-sanity";

export default function NavBar({ profile }) {
function OpenSidebar(){
  let list = document.getElementById('open')
  list.classList.remove('pointer-events-none')
  list.classList.remove('opacity-0')
}
function closeSideBar(){
  let close = document.getElementById('open')
  close.classList.add('pointer-events-none')
  close.classList.add('opacity-0')
}

  return (
    <div id="main" className="relative">
      <div className="w-full z-40 top-0 py-4 static sm:py-5  bg-primary ">
        <div className="container flex items-center static justify-between mx-auto">
          <div>
            <a href="/">
              <h2 className="text-white text-2xl font-bold">{profile.title}</h2>
            </a>
          </div>
          <div className="hidden lg:block">
            <ul className="flex items-center">
              <li className="group pl-6">
                <a
                  href="/#about"
                  className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                >
                  About
                </a>

                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>

              <li className="group pl-6">
                <a
                  href="/#services"
                  className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                >
                  Services
                </a>

                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>

              <li className="group pl-6">
                <a
                  href="/#portfolio"
                  className="cursor-pointe pt-0.5 font-header font-semibold uppercase text-white"
                >
                  Portfolio
                </a>

                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>

              <li className="group pl-6">
                <a
                  href="/#clients"
                  className="cursor-pointe pt-0.5 font-header font-semibold uppercase text-white"
                >
                  Clients
                </a>

                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>

              <li className="group pl-6">
                <a
                  href="/#work"
                  className="cursor-pointe pt-0.5 font-header font-semibold uppercase text-white"
                >
                  Work
                </a>

                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>

              <li className="group pl-6">
                <a
                  href="/#statistics"
                  className="cursor-pointe pt-0.5 font-header font-semibold uppercase text-white"
                >
                  Statistics
                </a>

                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>

              <li className="group pl-6">
                <a
                  href="/#blog"
                  className="cursor-pointe pt-0.5 font-header font-semibold uppercase text-white"
                >
                  Blog
                </a>

                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>

              <li className="group pl-6">
                <a
                  href="/#contact"
                  className="cursor-pointe pt-0.5 font-header font-semibold uppercase text-white"
                >
                  Contact
                </a>

                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>
            </ul>
          </div>
          <div className="block lg:hidden">
            <button onClick={OpenSidebar} >
              <i className="bx bx-menu text-4xl text-white"></i>
            </button>
          </div>
        </div>
      </div>

      <div id="open"  onClick={closeSideBar} className=" fixed z-[999] inset-0 min-h-screen bg-black bg-opacity-70  opacity-0 pointer-events-none transition-opacity lg:hidden">
        <div className="absolute right-0 min-h-screen w-2/3 bg-primary py-4 px-8 shadow md:w-1/3  ">
          <button onClick={closeSideBar} className="absolute top-0 right-0 mt-4 mr-4  ">
            <img
              src="./assets/img/icon-close.svg"
              className="h-10 w-auto"
              alt="" 
            />
          </button>

          <ul className="mt-8 flex flex-col">
            <li className="py-2">
              <a
                href="/#about"
                className="pt-0.5 font-header font-semibold uppercase text-white"
              >
                About
              </a>
            </li>

            <li className="py-2">
              <a
                href="/#services"
                className="pt-0.5 font-header font-semibold uppercase text-white"
              >
                Services
              </a>
            </li>

            <li className="py-2">
              <a
                href="/#portfolio"
                className="pt-0.5 font-header font-semibold uppercase text-white"
              >
                Portfolio
              </a>
            </li>

            <li className="py-2">
              <a
                href="/#clients"
                className="pt-0.5 font-header font-semibold uppercase text-white"
              >
                Clients
              </a>
            </li>

            <li className="py-2">
              <a
                href="/#work"
                className="pt-0.5 font-header font-semibold uppercase text-white"
              >
                Work
              </a>
            </li>

            <li className="py-2">
              <a
                href="/#statistics"
                className="pt-0.5 font-header font-semibold uppercase text-white"
              >
                Statistics
              </a>
            </li>

            <li className="py-2">
              <a
                href="/#blog"
                className="pt-0.5 font-header font-semibold uppercase text-white"
              >
                Blog
              </a>
            </li>

            <li className="py-2">
              <a
                href="/#contact"
                className="pt-0.5 font-header font-semibold uppercase text-white"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

{
  /* 
export async function getServerSideProps(context) {
  const client = createClient({
    projectId: "qp32vyme",
    dataset: "production",
    useCdn: true,
  });
  const blogs = await client.fetch(`*[_type == "blog"][0..2]`);
  const profile = await client.fetch(`*[_type == "profile"][0]`);
  const project = await client.fetch(`*[_type == "project"][0..3]`);
  const experience = await client.fetch(`*[_type == "experience"]`);
  const skills = await client.fetch(`*[_type == "skills"]`);

  return {
    props: {
      blogs,
      profile,
      project,
      skills,
      experience,
    },
  };
} */
}
