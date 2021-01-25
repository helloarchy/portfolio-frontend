import Link from "next/link";
import Date from "../components/date";
import Head from "next/head";

import Layout, { siteTitle } from "../components/layout";
import { getSortedPostsData } from "../lib/posts";

import utilStyles from "../styles/utils.module.css";
import { GetStaticProps } from "next";

/**
 * Get stuff at BUILD time, ie, before page rendered
 * @returns {Promise<{props: {allPostsData: this}}>}
 */
export const getStaticProps: GetStaticProps = async (context) => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};

/**
 * The landing screen of the site...
 * @param allPostsData
 * @constructor
 */
export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      {/* Hello stuff here... */}
    </Layout>
  );
}
