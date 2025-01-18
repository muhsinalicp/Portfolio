import Image from "next/image";
import { Analytics } from "@vercel/analytics/react"

export default function Home() {
  return (
    <div>
      <Analytics />
      <h1 className="text-3xl font-bold underline">Home</h1>
    </div>
  );
}
