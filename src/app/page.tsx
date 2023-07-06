import { albumInfo } from "./constants"
import Album from "./components/Album"
import styles from "./styles.module.css"



export default function Home() {
  return (
    <main className={styles.bigSquare}>
      {albumInfo.map((album) => (
        <Album
          pic={album.pic}
          song={album.song}
          link={album.link}
        />
      ))}
    </main>
  )
}