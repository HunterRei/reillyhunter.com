import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import { getPosts } from "@/lib/posts";

import { POSTS_LIMIT } from "@/utils/const";

import { About } from "@/sections/about";
import { Experience } from "@/sections/experience";
import { Posts } from "@/sections/posts";

export const generateMetadata = async (): Promise<Metadata> => {
  const t = await getTranslations();

  return {
    title: t("metadata.title"),
  };
};

const Home = async () => {
  const posts = getPosts(POSTS_LIMIT);

  return (
    <>
      <About />
      <Experience />
      <Posts posts={posts} />
    </>
  );
};

export default Home;
