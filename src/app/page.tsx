import { arrayBuffer } from "stream/consumers"
import Album from "./components/Album"

const albumInfo = [
  {
    pic: "/album_art/djboring_img.webp",
    song: "DJ Boring - Like Water"
  },
  {
    pic: "/album_art/djboring_img.webp",
    song: "DJ Boring - Like Water"
  },
  {
    pic: "/album_art/djboring_img.webp",
    song: "DJ Boring - Like Water"
  }
]


export default function Home() {
  return (
    <main>
      {albumInfo.map((album) => (
        <Album
          pic={album.pic}
          song={album.song}
        />
      ))}
    </main>
  )
}
