import Image from "next/image";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function Home() {
  return (
    <div>
      <SpeedInsights />
      <Analytics />
      <h1 className="text-3xl font-bold underline">Home</h1>
    </div>
  );
}
