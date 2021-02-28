import Link from "next/link";

import Layout from "../components/layout";

/**
 * The landing screen of the site...
 */
function Home({}) {
  return (
    <Layout home pageTitle={"Welcome"}>
      {/* Hello stuff here... */}
      <Link href={"/projects"}>Projects</Link>
    </Layout>
  );
}

export default Home;
