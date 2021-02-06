import Link from "next/link";
import Head from "next/head";

import Layout, { siteTitle } from "../components/layout";

/**
 * The landing screen of the site...
 */
export default function Home({}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      {/* Hello stuff here... */}
      <Link href={"/projects"}>Projects</Link>
    </Layout>
  );
}
