import Head from "next/head";
import Link from "next/link";
import React from "react";

const name = "Archy";
export const siteTitle = `${name}\'s Portfolio`;

export default function Layout({
  children,
  home,
}: {
  children: React.ReactNode;
  home?: boolean;
}) {
  return (
    <div className={"container mx-auto"}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="A portfolio website made using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <title>{siteTitle}</title>
      </Head>

      {/* Grid container */}
      <div className={"grid grid-cols-6 gap-4"}>
        <div className={"col-start-2 col-span-5"}>
          Title Bar
          {/* Header... */}
          <header className={""}>
            {home ? (
              <>
                <h1>Landing Page...</h1>
              </>
            ) : (
              <>
                <h1>Some Other Page...</h1>
              </>
            )}
          </header>
        </div>
        <div className={"col-start-1 row-start-1 row-span-5"}>Side Nav</div>
        <div className={"col-start-2 col-span-3"}>
          Main
          {/* Load all child items */}
          <main>{children}</main>
        </div>
        <div className={"col-start-5"}>Right</div>
        <div className={"col-start-2 col-span-4"}>
          Footer
          {/* Include all on non-home sites */}
          {!home && (
            <div className={""}>
              <Link href="/">
                <a>← Back to home</a>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
