"use client"

import React from "react"
import Image from 'next/image'
import ReactCardFlip from 'react-card-flip';
import styles from "./styles.module.css"


type Props = {
  pic: string,
  song: string,
  link: string
}

export default function Album(props: Props) {
  const [isFlipped, setIsFlipped] = React.useState(false)

  return(
    
    <div className={styles.flippySquare} onMouseOver={() => setIsFlipped(true)} onMouseOut={() => setIsFlipped(false)}>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        <Image
          src={props.pic}
          alt={props.song || ""}
          className="dark:invert"
          width={250}
          height={250}
          priority
        />
        <div className={styles.playerWrapper}>
          <iframe style={{borderRadius: "12px"}} 
            src={props.link}
            width="100%" height="152" frameBorder="0" 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy">
          </iframe>
        </div>
      </ReactCardFlip>
    </div>
  )
}
