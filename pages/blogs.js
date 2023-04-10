import { createClient } from 'next-sanity'
import React from 'react'
import Link from 'next/link'
import imageUrlBuilder from '@sanity/image-url'
import NavBar from '@/components/NavBar'
import Head from 'next/head'


const Blog = ({blogs,profile}) => {
    
        const client = createClient({
          projectId: "qp32vyme",
          dataset: "production",
          useCdn: true,
        });
        const builder = imageUrlBuilder(client)
        return (
          <div>
            <Head>
        <meta charset="utf-8" />

        <meta content="IE=edge,chrome=1"  />

        <meta
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
          name="viewport"
        />

        <title>Homepage | WorkWithPratik</title>

        <meta property="og:title" content={profile.title} />

        <meta property="og:locale" content="en_US" />

        <link rel="canonical" href="//" />

        <meta property="og:url" content="//" />

        <meta
          name="description"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />

        <link rel="icon" type="image/png" href="/assets/img/favicon.png" />

        <meta name="theme-color" content="#5540af" />

        <meta property="og:site_name" content="Atom Template" />

        <meta property="og:image" content="//assets/img/social.jpg" />

        <meta name="twitter:card" content="summary_large_image" />

        <meta name="twitter:site" content="@tailwindmade" />

        <link
          crossorigin="crossorigin"
          href="https://fonts.gstatic.com"
          rel="preconnect"
        />

        <link
          as="{style}"
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&family=Raleway:wght@400;500;600;700&display=swap"
          rel="preload"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&family=Raleway:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />

        <link
          href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"
          rel="stylesheet"
        />

        <link
          crossorigin="anonymous"
          href="/assets/styles/main.min.css"
          media="screen"
          rel="stylesheet"
        />

        <script
          defer
          src="https://unpkg.com/@alpine-collective/toolkit@1.0.0/dist/cdn.min.js"
        ></script>

        <script
          defer
          src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"
        ></script>
      </Head>
    <NavBar profile={profile}/>
          <div className="bg-grey-50" id="blog">
    <div className="container py-16 mx-auto md:py-20">
      <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
        I also like to write
      </h2>
      <h4 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
        Check out my latest posts!
      </h4>
      <div className="mx-auto grid w-full grid-cols-1 gap-6 pt-12 sm:w-3/4 lg:w-full lg:grid-cols-3 xl:gap-10">
       {blogs.map((item)=>{
          return(
            <Link key={item.slug.current} href={"/blog/" + item.slug} className="shadow">
          <div>
          <div
             style={{ backgroundImage: `url(${builder.image(item.poster).width(200).url() || '/assets/img/post-01.png'})` }}
            className="group relative h-72 bg-cover bg-center bg-no-repeat sm:h-84 lg:h-64 xl:h-72"
          >
            <span className="absolute inset-0 block bg-gradient-to-b from-blog-gradient-from to-blog-gradient-to  bg-cover bg-center bg-no-repeat opacity-10 transition-opacity group-hover:opacity-50"></span>
            <span className="absolute right-0 bottom-0 mr-4 mb-4 block rounded-full border-2 border-purple-700 bg-purple-700 px-6 py-2 text-center font-body text-sm font-bold uppercase text-purple-200 md:text-base">
              Read More
            </span>
          </div>
          <div className="bg-white py-6 px-5 xl:py-8 cursor-pointer">
            <span className="block font-body text-lg font-semibold text-black">
             {item.title}
            </span>
            <span className="block pt-2 font-body text-grey-20">
             {item.metadesc}
            </span>
          </div>  
          </div>
        </Link>
          )
        })
       }
      </div>
    </div>
  </div>
  </div>
  )
}

export default Blog

export async function getServerSideProps(context) {
    const client = createClient({
      projectId: "qp32vyme",
      dataset: "production",
      useCdn: true,
    });
    const blogs = await client.fetch(`*[_type == "blog"]`);
    const profile = await client.fetch(`*[_type == "profile"][0]`);
  
    return {
      props: {
        blogs,profile 
      },
    };
  }
  