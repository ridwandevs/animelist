import Head from "next/head";
import TopAnimeCard from "../src/components/home/TopAnimeCard";
import Navbar from "../src/components/layouts/NavBar";
import { useTopAnime } from "../src/hooks/useTopAnime";

export default function Home() {

  const {topAnime} = useTopAnime();

  return (
    <div className={"bg-gray-200 px-4 py-7 min-w-full min-h-full"}>
      <Head>
        <title>Anime</title>
      </Head>
      <Navbar/>
      <TopAnimeCard/>
    </div>
  )
}
