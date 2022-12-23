import Head from "next/head";
import HomeComponent from "components/HomeComponent";

export default function Home() {
  return (
    <>
      <Head>
        <title>The People Versus</title>
        <meta
          name="description"
          content="The People Versus official website."
        />
        <link rel="icon" href="/fav.ico" />
      </Head>

      <main>
        <HomeComponent />
      </main>
    </>
  );
}
