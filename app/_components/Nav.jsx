"use client"

import ElasticLine from "@/components/fancy/elastic-line"
import { motion } from "motion/react"
import React from 'react'


function Nav() {
    const textVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.3,
                type: "spring",
                stiffness: 300,
                damping: 50,
            },
        }),
    }
    return (
        <div>
        <ElasticLine
          releaseThreshold={50}
          strokeWidth={2}
          animateInTransition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
            delay: 0.15,
          }}
          className={'text-white'}
        />
        </div>
    )
}

export default Nav