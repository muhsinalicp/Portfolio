import VerticalCutReveal from '@/components/fancy/vertical-cut-reveal'
import React from 'react'

const Test = () => {
  return (
    <div>
      <VerticalCutReveal
        splitBy="characters"
        staggerDuration={0.025}
        staggerFrom="first"
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 21,
        }}>{`HI 👋, FRIEND!`}</VerticalCutReveal>
    </div>
  )
}

export default Test