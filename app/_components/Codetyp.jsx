import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
import React from 'react'
import { motion } from 'framer-motion'
import { Fira_Code } from 'next/font/google';

const fira = Fira_Code({ subsets: ['latin'], weight: ['400', '700'] })

function Codetyp() {
    const words = `<html>\n <head> \n <title> <portfolio/> </title> \n</head> \n<body> \n <h1> muhsin ali </h1> \n</body> \n</html>`;
  return (
   <div      
   className='w-full  text-white text-sm'>
    <TextGenerateEffect  className={'text-white font-[fira]'} words={words} />
   </div>
  )
}

export default Codetyp