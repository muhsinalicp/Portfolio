import { ArrowBigUpDash, Code, MessageCircleQuestion, Origami, Server, WandSparkles } from 'lucide-react'
import React from 'react'

function Services() {

    const service = [
        {
            title: 'clean code',
            icon: <Code size={30}/>
        },
        {
            title: 'performance optimization',
            icon: <WandSparkles size={30}/>
        },
        {
            title: 'api development',
            icon: <Server size={30}/>
        },
        {
            title: 'UI/UX',
            icon: <Origami size={30}/>
        },
        {
            title: 'problem solving',
            icon: <MessageCircleQuestion size={30}/>
        },
        {
            title: 'Technical Feedback',
            icon: <ArrowBigUpDash size={40}/>
            
        }
    ]


  return (
    <div className='w-full h-full flex flex-col items-center justify-center px-10 py-4 '>
        <div className='w-full h-fit py-8 flex flex-col items-center justify-center '>
            <h1 className='text-4xl font-bold text-white'>Services</h1>
            <p>What i can do?</p>
        </div>

        <div className='w-full lg:h-1/2 h-full  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3   gap-10'>

            {service.map((item, index) => 
                (<div key={item.title} className='w-full h-full  rounded-lg bg-zinc-950 lg:hover:bg-zinc-900 lg:hover:scale-105 lg:hover:cursor-pointer transition-all duration-300 '>

                <div className='w-full h-fit  md:h-full  flex flex-col items-center justify-center gap-2'>
                {item.icon}
                {item.title}
                </div>

            </div>))}
        </div>
    </div>
  )
}

export default Services