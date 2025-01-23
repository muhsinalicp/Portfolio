import PixelTrail from '@/components/fancy/pixel-trail'
import React from 'react'

function Aboutme() {
    return (
        <div className="w-full h-full flex  flex-col md:flex-row ">
            <div className="absolute inset-0 z-[10]">
                <PixelTrail
                    pixelSize={'15'}
                    fadeDuration={500}
                    pixelClassName="bg-white z-25"

                />

            </div>

            <div className='p-5 h-fit w-full flex flex-col gap-2 justify-center items-center md:h-full text-white'>
                <h1 className=" text-4xl font-bold  ">About Me</h1>
                <p>A brief description of who i am</p>
            </div>

            <div className='px-9 h-fit w-full flex justify-center items-center md:h-full'>
                <p className="text-white md:text-lg text-base font-semibold ">
                    My name is Muhsin Ali, and I am a passionate Full Stack Web Developer with a deep love for creating dynamic and user-friendly web applications. Specializing in the MERN stack (MongoDB, Express.js, React, Node.js), I thrive at the intersection of design and technology, transforming creative ideas into functional, efficient, and visually appealing digital experiences.
                    With a strong foundation in both front-end and back-end development, I excel at building scalable and responsive web applications. My curiosity and problem-solving mindset drive me to stay updated with the latest web technologies and trends, ensuring that my work is not only innovative but also optimized for performance.

                </p>
            </div>
        </div>
    )
}

export default Aboutme