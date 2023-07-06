"use client"

import React from "react"
import Image from 'next/image'
import ReactCardFlip from 'react-card-flip';
import styles from "./styles.module.css"


type Props = {
  pic: string,
  song: string,
}

export default function Album(props: Props) {
  const [isFlipped, setIsFlipped] = React.useState(false)

  return(
    <div className={styles.flippySquare} onMouseOver={() => setIsFlipped(true)} onMouseOut={() => setIsFlipped(false)}>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        <Image
          src={props.pic}
          alt={props.song}
          className="dark:invert"
          width={200}
          height={200}
          priority
        />
        <div>poop</div>
      </ReactCardFlip>
    </div>
  )
}
