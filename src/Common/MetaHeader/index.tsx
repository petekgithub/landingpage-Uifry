import Head from "next/head";

type Props = {
  title?: string,
  description?: string,
};


const MetaHeader: React.FC<Props> = ({ title="UiFry", description="Make the best financial decisions"  }) => {
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="../../../public/favicon.png" />
      <meta name="description" content={description} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      <meta name="og:type" property="og:type" content="website" />
      <meta name="og:title" property="og:title" content={title} />
      <meta name="og:description" property="og:description" content={description} />
    </Head>
  );
};

export default MetaHeader;