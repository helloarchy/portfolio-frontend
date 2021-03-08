import Head from "next/head";
import React from "react";

import TitleBar from "./title-bar";
import Footer from "./footer";
import NavLink from "./NavLink";
import Navigation from "./Navigation";

const name = "Archy";
export const siteTitle = `${name}\'s Portfolio`;

type Props = {
  children: React.ReactNode;
  left?: React.ReactNode;
  right?: React.ReactNode;
  home?: boolean;
  pageTitle?: string;
};

export default function Layout({ children, left, right, pageTitle }: Props) {
  return (
    <React.Fragment>
      {/* Head only */}
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
        <title>{pageTitle || siteTitle}</title>
      </Head>

      {/* Body */}
      <main className={"mx-auto"}>
        <div className={"grid grid-cols-5 gap-4"}>
          {/* Left column */}
          <div className={""}>
            {/* Self plug */}
            <div className={"relative"}>
              <h1 className={"p-4 bottom-0 right-0 text-5xl font-serif"}>
                Archy.dev
              </h1>
            </div>

            {/* Menu */}
            {left}
          </div>

          {/* Main centre column */}
          <main className={"col-span-3"}>
            {/* Title bar */}
            <TitleBar title={pageTitle} />

            {/* Child content here */}
            {children}
          </main>

          {/* Right column */}
          <div className={""}>
            {/* If something provided for right column, use it, else side nav */}
            {right ? <Navigation /> : right}
          </div>
        </div>
      </main>

      <Footer />
    </React.Fragment>
  );
}
