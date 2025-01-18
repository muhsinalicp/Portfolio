import PixelTrail from "@/components/fancy/pixel-trail";
import Nav from "./_components/Nav";

export default function Home() {

  return (
    <div className="w-full h-screen bg-black text-blue-900 text-center text-3xl flex flex-col font-azeretMono">
      <div className="absolute inset-0 z-[0]">
        <PixelTrail
          pixelSize={'15'}
          fadeDuration={500}
          pixelClassName="bg-white z-0"

        />
        
      </div>

      <div className="z-10">
      <Nav/>
      </div>

    </div>
  );
}
