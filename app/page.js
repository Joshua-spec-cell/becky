import Backdrop from "@/components/Backdrop";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import Timeline from "@/components/Timeline";
import Messages from "@/components/Messages";
import Finale from "@/components/Finale";
import MusicPlayer from "@/components/MusicPlayer";

export default function Page() {
  return (
    <>
      <a className="skip" href="#memories">
        Skip to the photos
      </a>

      <Backdrop />
      <Nav />

      <main>
        <Hero />
        <Gallery />
        <Timeline />
        <Messages />
        <Finale />
      </main>

      <MusicPlayer />
    </>
  );
}
