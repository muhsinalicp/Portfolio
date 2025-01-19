"use client"

import ElasticLine from "@/components/fancy/elastic-line"
import PixelTrail from "@/components/fancy/pixel-trail"
import React from 'react'




function Nav() {

    return (
        <div className="w-full relative ">

        
        <div className="relative top-[-4] z-20">
        <PixelTrail
          pixelSize={'15'}
          fadeDuration={500}
          pixelClassName="bg-white z-25"

        />
        <ElasticLine
          releaseThreshold={60}
          strokeWidth={1}
          animateInTransition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
            delay: 0.15,
          }}
          className={'text-white z-0'}
        />
        </div>
        
        <div className="flex w-full absolute top-2 py-2 px-4 justify-between">

            <div className="text-white  text-2xl font-bold cursor-pointer hover:text-3xl">
            &lt;muhsinali/&gt;
            </div>
        </div>
        </div>
    )
}

export default Nav