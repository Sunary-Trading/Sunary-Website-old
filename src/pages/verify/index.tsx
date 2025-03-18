// import Button from "@/components/Button/Button";
import React, { useState, ChangeEvent } from "react";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { InformationCircleIcon, UserPlusIcon } from "@heroicons/react/20/solid";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/navigation";
import SEO from "@/config/SEO.json";
import data from "@/config/session.json";
import Image from "next/image";

const Verify: React.FC = () => {
  const [email, setEmail] = useState("");
  const onChange = ({ target }: ChangeEvent<HTMLInputElement>) =>
    setEmail(target.value);
  return (
    <>
      <Head>
        <title>{SEO.Index.title}</title>
        <meta name="description" content={SEO.Index.description} />
        <meta property="og:title" content={SEO.Index.title} />
        <meta property="og:description" content={SEO.Index.description} />
        <meta property="og:image" content={SEO.Index.image} />
        {/* <meta property="og:url" content={`https://yourdomain.com/post/${post.frontMatter.id}`} /> */}
        <meta property="og:type" content={SEO.Index.type} />
        {/* <meta name="twitter:card" content="summary_large_image" /> */}
        <meta name="twitter:title" content={SEO.Index.title} />
        <meta name="twitter:description" content={SEO.Index.description} />
        <meta name="twitter:image" content={SEO.Index.image} />
      </Head>
      <section className="relative z-10 pb-8 pt-10 lg:pb-32 lg:pt-28">
        <Image
          src="https://cdn.sunary.tw/Sunary.png"
          width={120}
          height={120}
          alt="SunaryIcon"
          className="flex self-center justify-center mx-auto mb-4 border-spacing-4"
        ></Image>
        <div className="text-[#d58655] text-[2.5em] font-bold text-center mb-20">
          官方認證渠道
          <div>
            <input type="text" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Verify;
