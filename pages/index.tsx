import Link from "next/link";
import Head from "next/head";
import dbConnect from "../utils/dbConnect";

import Layout, { siteTitle } from "../components/layout";

/* Retrieve data from mongodb database */
export async function getServerSideProps() {
  await dbConnect();
  return { props: {} };
}

/**
 * The landing screen of the site...
 */
function Home({}) {
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

export default Home;
