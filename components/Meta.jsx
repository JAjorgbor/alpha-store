import Head from "next/head";

export default function Meta({
  titlePrefix,
  titleSuffix = "Alpha Store",
  description = "Veritas university digital marketplace for second hand products built by group Alpha ",
}) {
  return (
    <Head>
      <title>{`${
        titlePrefix ? titlePrefix + " |" : ""
      }  ${titleSuffix}`}</title>
      <meta name="description" content={description} />
      <meta name="theme-color" content="#79C142" />
    </Head>
  );
}
