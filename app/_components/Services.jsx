'use client'
import { Blocks, Code, MessageCircleQuestion, Origami, Server, WandSparkles } from 'lucide-react'
import React, { useState } from 'react'
import { motion } from 'framer-motion'

function Services() {

    const [show , setShow] = useState({})

    const service = [
        {
            title: 'Web Development',
            icon: <Blocks size={40}/>,
            description:'',
            summary:'Building responsive and dynamic websites tailored to your business needs using the latest technologies like React, Node.js, and MongoDB'
            
        },
        {
            title: 'clean code',
            icon: <Code size={30}/>,
            summary:'Writing code that is well-structured, readable, and maintainable, it involves following coding best practices'
        },
        {
            title: 'performance optimization',
            icon: <WandSparkles size={30}/>,
            summary:'Enhancing website performance, speed, and SEO for better rankings and user satisfaction'
        },
        {
            title: 'api development',
            icon: <Server size={30}/>,
            summary:'Designing and integrating robust APIs to ensure seamless data flow between your systems and applications.'
        },
        {
            title: 'UI/UX',
            icon: <Origami size={30}/>,
            summary:' Crafting intuitive and user-friendly interfaces that enhance user experience and engagement.'
        },
        {
            title: 'Technical Support',
            icon: <MessageCircleQuestion size={30}/>,
            summary:'Provide expert advice on the best tools, technologies, and strategies to optimize your digital presence and workflow.'
        },

    ]


  return (
    <div className='w-full h-full flex flex-col items-center justify-center px-10 py-4 '>
        <div className='w-full h-fit py-8 flex flex-col items-center justify-center '>
            <h1 className='text-4xl font-bold text-white'>Services</h1>
            <p>What i can do?</p>
        </div>

        <div className='w-full lg:h-fit h-full  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3   gap-10'>

            {service.map((item, index) => 
                (<div key={item.title} className='w-full h-full lg:h-[200px]  rounded-lg bg-zinc-950 lg:hover:bg-zinc-900 lg:hover:scale-105 lg:hover:cursor-pointer flex flex-col items-center justify-start py-5 '>

                <div onMouseEnter={() => setShow({[index]: true})} onMouseLeave={() => setShow({...show, [index]: false})} className='w-full h-fit py-8 lg:py-0  md:h-full   flex flex-col items-center justify-start gap-2'>
                <motion.div 
                transition={{ duration: 1,
                 ease: 'easeIn'
                 }}
                className='flex flex-col items-center justify-center'>
                {item.icon}
                {item.title}
                </motion.div>
                {!show[index] ?
                <div>

                </div>
                :
                 <motion.div 
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 exit={{ opacity: 0 }}
                 transition={{ duration: 0.5,
                  ease: 'easeIn'
                  }}
                 className='w-full h-fit text-white text-center transition-opacity duration-300 '>
                 {item.summary}
                 </motion.div>
                }
                {show[index] ? '':<div className='md:hidden hover:hidden'>click to know</div>}
                </div>

            </div>))}
        </div>
    </div>
  )
}

export default Services