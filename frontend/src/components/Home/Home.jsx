import Layout from "../../Layout/Layout";
import Card from "../Card/Card";
import SongBar from "../MasterBar/SongBar";
import { useEffect } from "react";
import Navbar from "../Navbar";
import { useGlobalContext } from "../../states/Contet";
import Footer from "../Footer/Footer";

export const songs = [
  {
    id: Math.random() + Date.now(),
    title: "Tacones Rojos",
    artist: "Sebastián Yatra",
    mp3: new Audio("/assets/mp3/song1.mp3"),
    img: "/assets/song1.jfif",
  },
  {
    id: Math.random() + Date.now(),
    title: "Pompeii",
    artist: "Bastille",
    mp3: new Audio("/assets/mp3/song2.mp3"),
    img: "/assets/song2.jfif",
  },
  {
    id: Math.random() + Date.now(),
    title: "Love Again",
    artist: "Dua Lipa",
    mp3: new Audio("/assets/mp3/song3.mp3"),
    img: "/assets/song3.jfif",
  },
  {
    id: Math.random() + Date.now(),
    title: "Rolling in the Deep",
    artist: "Adele",
    mp3: new Audio("/assets/mp3/song4.mp3"),
    img: "/assets/song4.jfif",
  },
  {
    id: Math.random() + Date.now(),
    title: "Waiting For Love",
    artist: "Avicii",
    mp3: new Audio("/assets/mp3/song5.mp3"),
    img: "/assets/song5.jfif",
  },
  {
    id: Math.random() + Date.now(),
    title: "Freedom",
    artist: "Pharrell Williams",
    mp3: new Audio("/assets/mp3/song6.mp3"),
    img: "/assets/song6.jfif",
  },
  {
    id: Math.random() + Date.now(),
    title: "Seven Nation Army",
    artist: "The White Stripes",
    mp3: new Audio("/assets/mp3/song7.mp3"),
    img: "/assets/song7.jfif",
  },
  {
    id: Math.random() + Date.now(),
    title: "Run Boy Run",
    artist: "Woodkid",
    mp3: new Audio("/assets/mp3/song8.mp3"),
    img: "/assets/song8.jfif",
  },
  {
    id: Math.random() + Date.now(),
    title: "STAY",
    artist: "The Kid LAROI, Justin Bieber",
    mp3: new Audio("/assets/mp3/song9.mp3"),
    img: "/assets/song9.jfif",
  },
];

const Home = () => {
  const { getUser } = useGlobalContext();

  useEffect(() => {
    getUser();
  }, []);
  return (
    <Layout>
      <Navbar />

      <div className="tertiary_bg ml-2 px-4 py-4 home ">
        <div className="flex justify-between mb-4 pt-4 items-center">
          <span className="text-xl font-bold hover:underline cursor-pointer">
            Focus
          </span>
          <span>Show All</span>
        </div>
        <div className="grid  gap-6 grid-cols-5">
          {songs.map((song, i) => {
            return <Card key={song.id} idx={i} song={song} />;
          })}
        </div>
        <div className="flex justify-between my-4 items-center">
          <span className="text-xl font-bold hover:underline cursor-pointer">
            Spotify List
          </span>
          <span>Show All</span>
        </div>
        <div className="grid  gap-6 grid-cols-5">
          {songs.map((song, i) => {
            return <Card key={song.id} idx={i} song={song} />;
          })}
        </div>
      </div>
      <Footer />
      <SongBar />
    </Layout>
  );
};

export default Home;
