
import Head from "next/head";

import Navbar from "./NavBars";
const Layout = (props: any) => {
  const { children, ...customMeta } = props;

  const meta = {
    title: "Wavea",
    description: `Wavea is a digital agency`,
    type: "website",
    ...customMeta,
  };
  return (
    <div className="min-w-[350px] overflow-x-hidden">
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <link href="/favicon.ico" rel="shortcut icon" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://wavea.eu`}
        />
          <meta property="og:type" content="website" />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
      </Head>

      <main id="skip" className="bg-white dark:bg-neutral-900">
        <Navbar />
        {children}
    
      </main>
    </div>
  );
};

export default Layout;
