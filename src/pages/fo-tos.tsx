import MarkdownViewer from "@/components/Reader/MarkdownViewer";

import Button from "@/components/Button/Button";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { InformationCircleIcon, UserPlusIcon } from "@heroicons/react/20/solid";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/navigation";
import SEO from "@/config/SEO.json";

const Home = () => {
  const router = useRouter();

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
      <style
        dangerouslySetInnerHTML={{
          __html: `
          #tos > h1 {
              font-size: 32px;
          }

          #tos > h2 {
              font-size: 28px;
          }

          #tos > h3 {
              font-size: 24px;
          }

          #tos > h4 {
              font-size: 20px;
          }

          #tos > h5 {
              font-size: 18px;
          }

          #tos h1,
          #tos h2,
          #tos h3,
          #tos h4,
          #tos h5,
          #tos h6 {
              margin-top: 30px;
              color: #fff;
              margin-bottom: 10px;
              
          }

          #tos p,
          #tos ul,
          #tos ol,
          #tos li {
              margin: 0;
              margin-top: 5px;
              margin-bottom: 5px;
              /* color: #f1f1f1; */
              line-height: 30px;
          }

          #tos {
              color: #f5f5f5;
          }
      `,
        }}
      />
      <section
        id="home"
        className="relative z-10 overflow-hidden pb-16 pt-[80px] md:pb-[120px] md:pt-[80px] xl:pb-[160px] xl:pt-[70px] 2xl:pb-[200px] 2xl:pt-[100px]"
      >
        <div className="text-center text-[2.2rem] font-bold">《逐日跟單免責聲明》</div>
        <div
          id="tos"
          className="mx-[10px] md:mx-[300px] xl:mx-[350px] 2xl:mx-[400px]"
        >
          <MarkdownViewer file="/md/tos1.md" />
        </div>
      </section>
    </>
  );
};

export default Home;
