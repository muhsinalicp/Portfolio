import PixelTrail from "@/components/fancy/pixel-trail";
import Nav from "./_components/Nav";
import { Doto } from "next/font/google";
import Hero from "./_components/Hero";
const doto = Doto({
  variable: "--font-doto",
  subsets: ["latin"],
  weight: "700",
});

export default function Home() {

  return (
    <div className="w-full bg-black font-[doto]  z-2 ">
      <div className="absolute inset-0 z-[0]">
        <PixelTrail
          pixelSize={'15'}
          fadeDuration={500}
          pixelClassName="bg-white z-25"

        />

      </div>

      <div className="z-10">
        <Nav />
        <div className=" h-[84vh] p-2">
          <Hero />
        </div>
      </div>

    </div>
  );
}
