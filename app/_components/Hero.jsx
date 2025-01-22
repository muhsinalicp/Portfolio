
import VerticalCutReveal from '@/components/fancy/vertical-cut-reveal'
import Image from 'next/image'
import React from 'react'
import Codetyp from './Codetyp'
import {motion} from 'framer-motion'

function Hero() {
    return (
        <div className="w-full h-full  ">

            <div className="w-full h-full text-3xl md:text-5xl lg:text-4xl xs:text-2xl xl:text-4xl flex flex-col items-center p-6 md:justify-center   text-white tracking-wide uppercase">
                <VerticalCutReveal
                    splitBy="characters"
                    staggerDuration={0.05}
                    staggerFrom="first"
                    transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 21,
                        delay: 0.5
                    }}
                >
                    {`Hey, I'm Muhsin Ali 👋`}
                </VerticalCutReveal>
                <VerticalCutReveal
                    splitBy="characters"
                    staggerDuration={0.05}
                    staggerFrom="first"
                    transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 21,
                        delay: 1.5
                    }}
                >
                    {`a Full Stack Web Developer`}
                </VerticalCutReveal>
                <VerticalCutReveal
                    splitBy="characters"
                    staggerDuration={0.05}
                    staggerFrom="first"
                    transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 21,
                        delay: 2.5
                    }}
                >
                    {`based in Kerala,India.`}
                </VerticalCutReveal>


            </div>


            {/* <div className=' text-white flex items-center'>
                <Codetyp/>
            </div> */}
        </div>
    )
}

export default Hero