import { arrayBuffer } from "stream/consumers"
import Album from "./components/Album"

const albumInfo = [
  {
    pic: "/album_art/djboring_img.webp",
    song: "Like Water - DJ Boring",
    link: "https://open.spotify.com/embed/track/5spCGhval9pvD8Iq9Z3FFi?utm_source=generator&theme=0"
  },
  {
    pic: "/album_art/1975_img1.jpg",
    song: "Chocolate - The 1975",
    link: "https://open.spotify.com/embed/track/73jr4K3kGitibWouEgJzgq?utm_source=generator&theme=0"
  },
  {
    pic: "/album_art/aevion_img.jpeg",
    song: "Keep on Rockin' - Aevion",
    link: "https://open.spotify.com/embed/track/70evNQ0TBiks6HMNxUAgtD?utm_source=generator&theme=0" 
  },
  {
    pic: "/album_art/ahmad_img.jpeg",
    song: "Lament - Ahmad Jamal",
    link: "https://open.spotify.com/embed/track/4rJJLMW9ORJrGaOz7jv2O7?utm_source=generator&theme=0"
  },
  {
    pic: "/album_art/amberNavvan_img1.jpeg",
    song: "",
    link: "" 
  },
  {
    pic: "/album_art/aTribeCalledQuest_img.jpeg",
    song: "",
    link: "" 
  },
  {
    pic: "/album_art/babes_img.jpeg",
    song: "",
    link: "" 
  },
  {
    pic: "/album_art/basi_img.jpeg",
    song: "",
    link: "" 
  },
  {
    pic: "/album_art/beatles_img1.jpeg",
    song: "",
    link: "" 
  },
  {
    pic: "/album_art/beatles_img2.jpeg",
    song: "",
    link: "" 
  },
  {
    pic: "/album_art/bellBivDeVoe_img.jpeg",
    song: "",
    link: "" 
  },
  {
    pic: "/album_art/benjiFlow_img.jpeg",
    song: "",
    link: "" 
  },
  {
    pic: "/album_art/billWithers_img.jpeg",
    song: "",
    link: "" 
  },
  {
    pic: "/album_art/boobie_img.jpeg",
    song: "",
    link: "" 
  },
  {
    pic: "/album_art/cailin_img1.jpeg",
    song: "",
    link: "" 
  },
  {
    pic: "/album_art/cailin_img2.jpeg",
    song: "",
    link: "" 
  },
  {
    pic: "/album_art/chic_img.jpeg",
    song: "",
    link: "" 
  },
  {
    pic: "/album_art/childishGambino_img.png",
    song: "",
    link: "" 
  },
  {
    pic: "/album_art/childishGambino_img2.jpeg",
    song: "",
    link: "" 
  },
  {
    pic: "/album_art/cranberries_img.jpeg",
    song: "",
    link: "" 
  },
  {
    pic: "/album_art/daftpunk_img1.jpeg",
    song: "",
    link: "" 
  },
  {
    pic: "/album_art/daftpunk_img2.jpeg",
    song: "",
    link: "" 
  },
  {
    pic: "/album_art/damSwindel_img1.webp",
    song: "",
    link: "" 
  },
  {
    pic: "/album_art/dangelo_img.jpeg",
    song: "",
    link: "" 
  },
  {
    pic: "/album_art/darius_img.jpeg",
    song: "",
    link: "" 
  },
  {
    pic: "/album_art/dave_img1.jpeg",
    song: "",
    link: "" 
  },
  {
    pic: "/album_art/depencheMode_img1.jpeg",
    song: "",
    link: "" 
  },
  {
    pic: "/album_art/digablePlanets_img.jpeg",
    song: "",
    link: "" 
  },
  {
    pic: "/album_art/diMelo_img.jpeg",
    song: "",
    link: "" 
  },
  {
    pic: "/album_art/djboring_img.webp",
    song: "",
    link: "" 
  },
  {
    pic: "/album_art/dongrizu_img1.jpeg",
    song: "",
    link: "" 
  },
  {
    pic: "/album_art/dongrizu_img2.jpeg",
    song: "",
    link: "" 
  },
  {
    pic: "/album_art/drumagick_img.jpeg",
    song: "",
    link: "" 
  },
  {
    pic: "/album_art/elMichelsAffair_img1.jpeg",
    song: "",
    link: "" 
  },
  {
    pic: "/album_art/estelle_img.jpeg",
    song: "",
    link: "" 
  },
  {
    pic: "/album_art/familyStand_img.jpeg",
    song: "",
    link: "" 
  },
  {
    pic: "/album_art/fatherJohnMisty_img.jpg",
    song: "",
    link: "" 
  },
  {
    pic: "/album_art/fourtet_img1.webp",
    song: "",
    link: "" 
  },
  {
    pic: "/album_art/genesis_img1.jpeg",
    song: "",
    link: "" 
  },
  {
    pic: "/album_art/gotye_img.jpeg",
    song: "",
    link: "" 
  },
  {
    pic: "/album_art/grover_img1.jpeg",
    song: "",
    link: "" 
  },
  {
    pic: "/album_art/haitus_img1.jpeg",
    song: "",
    link: "" 
  },
  {
    pic: "/album_art/harbie_img1.jpeg",
    song: "",
    link: "" 
  },
  {
    pic: "/album_art/hiatus_img2.jpeg",
    song: "",
    link: "" 
  },
  {
    pic: "/album_art/honne_img1.jpeg",
    song: "",
    link: "" 
  },
  {
    pic: "/album_art/hyukoh_img.jpeg",
    song: "",
    link: "" 
  },
  {
    pic: "/album_art/idrisMuhammad_img.jpeg",
    song: "",
    link: "" 
  },
  {
    pic: "/album_art/incognito_img.jpeg",
    song: "",
    link: "" 
  },
  {
    pic: "/album_art/jamiroquai_img.png",
    song: "",
    link: "" 
  },
  {
    pic: "/album_art/jamiroquai_img1.jpeg",
    song: "",
    link: "" 
  },
  {
    pic: "/album_art/jamiroquai_img2.jpeg",
    song: "",
    link: "" 
  },
  {
    pic: "/album_art/jamiroquai_img3.webp",
    song: "",
    link: "" 
  },
  {
    pic: "/album_art/jazzbois_img.jpeg",
    song: "",
    link: "" 
  },
  {
    pic: "/album_art/jitwam_img1.jpeg",
    song: "",
    link: "" 
  },
  {
    pic: "/album_art/jitwam_img2.webp",
    song: "",
    link: "" 
  },
  {
    pic: "/album_art/jlamotta_img.jpeg",
    song: "",
    link: "" 
  },
  {
    pic: "/album_art/johnMayer_img1.jpeg",
    song: "",
    link: "" 
  },
  {
    pic: "/album_art/joni_img1.jpg",
    song: "",
    link: "" 
  },
  {
    pic: "/album_art/joni_img3.jpeg",
    song: "",
    link: "" 
  },
  {
    pic: "/album_art/joni_img4.jpg",
    song: "",
    link: "" 
  },
  {
    pic: "/album_art/joni_img5.jpeg",
    song: "",
    link: "" 
  },
  {
    pic: "/album_art/kansano_img1.jpeg",
    song: "",
    link: "" 
  },
  {
    pic: "/album_art/keita_img1.jpeg",
    song: "",
    link: "" 
  },
  {
    pic: "/album_art/kenichiro_img.jpeg",
    song: "",
    link: "" 
  },
  {
    pic: "/album_art/kiefer_img1.jpeg",
    song: "",
    link: "" 
  },
  {
    pic: "/album_art/kiki_img.jpeg",
    song: "",
    link: "" 
  },
  {
    pic: "/album_art/kingsOfConvinience_img1.jpeg",
    song: "",
    link: "" 
  },
  {
    pic: "/album_art/kutiman_img.webp",
    song: "",
    link: "" 
  },
  {
    pic: "/album_art/lalaland_img.jpeg",
    song: "",
    link: "" 
  },
  {
    pic: "/album_art/latinProject_img1.jpeg",
    song: "",
    link: "" 
  },
  {
    pic: "/album_art/laureceGuy_img.jpeg",
    song: "",
    link: "" 
  },
  {
    pic: "/album_art/lilSilva_img.jpeg",
    song: "",
    link: "" 
  },
  {
    pic: "/album_art/loyle_img.jpeg",
    song: "",
    link: "" 
  },
  {
    pic: "/album_art/luther_img.jpeg",
    song: "",
    link: "" 
  },
  {
    pic: "/album_art/machinegun_img1.jpeg",
    song: "",
    link: "" 
  },
  {
    pic: "/album_art/madcat_img1.jpeg",
    song: "",
    link: "" 
  },
  {
    pic: "/album_art/madcat_img2.jpeg",
    song: "",
    link: "" 
  },
  {
    pic: "/album_art/manor_img.jpeg",
    song: "",
    link: "" 
  },
  {
    pic: "/album_art/mansionz_img.jpeg",
    song: "",
    link: "" 
  },
  {
    pic: "/album_art/marcE_img.jpg",
    song: "",
    link: "" 
  },
  {
    pic: "/album_art/mariaTakeuchi_img.jpeg",
    song: "",
    link: "" 
  },
  {
    pic: "/album_art/mattMartins_img.jpeg",
    song: "",
    link: "" 
  },
  {
    pic: "/album_art/metronomy_img1.png",
    song: "",
    link: "" 
  },
  {
    pic: "/album_art/michealJackson_img1.jpeg",
    song: "",
    link: "" 
  },
  {
    pic: "/album_art/middleeast_img.jpeg",
    song: "",
    link: "" 
  },
  {
    pic: "/album_art/modjo_img1.jpeg",
    song: "",
    link: "" 
  },
  {
    pic: "/album_art/moodymann_img.jpeg",
    song: "",
    link: "" 
  },
  {
    pic: "/album_art/moonchild_img1.jpeg",
    song: "",
    link: "" 
  },
  {
    pic: "/album_art/moonchild_img2.jpg",
    song: "",
    link: "" 
  },
  {
    pic: "/album_art/moonchild_img3.jpg",
    song: "",
    link: "" 
  },
  {
    pic: "/album_art/mrJukes_img.webp",
    song: "",
    link: "" 
  },
  {
    pic: "/album_art/mstrkrft_img.jpeg",
    song: "",
    link: "" 
  },
  {
    pic: "/album_art/nujabes_img1.jpeg",
    song: "",
    link: "" 
  },
  {
    pic: "/album_art/nujabes_img2.jpeg",
    song: "",
    link: "" 
  },
  {
    pic: "/album_art/outkast_img1.jpeg",
    song: "",
    link: "" 
  },
  {
    pic: "/album_art/palmaria_img1.jpeg",
    song: "",
    link: "" 
  },
  {
    pic: "/album_art/parkHyeJin_img1.jpeg",
    song: "",
    link: "" 
  },
  {
    pic: "/album_art/parkHyeJin_img2.jpeg",
    song: "",
    link: "" 
  },
  {
    pic: "/album_art/paulAnthonee_img.jpeg",
    song: "",
    link: "" 
  },
  {
    pic: "/album_art/paulSimon_img1.jpeg",
    song: "",
    link: "" 
  },
  {
    pic: "/album_art/peggy_img1.webp",
    song: "",
    link: "" 
  },
  {
    pic: "/album_art/peggy_img2.jpeg",
    song: "",
    link: "" 
  },
  {
    pic: "/album_art/peggy_img3.jpeg",
    song: "",
    link: "" 
  },
  {
    pic: "/album_art/peggy_img4.jpeg",
    song: "",
    link: "" 
  },
  {
    pic: "/album_art/peterBjorn_img.jpeg",
    song: "",
    link: "" 
  },
  {
    pic: "/album_art/pinkFloyd_img1.jpeg",
    song: "",
    link: "" 
  },
  {
    pic: "/album_art/pinkFloyd_img2.jpeg",
    song: "",
    link: "" 
  },
  {
    pic: "/album_art/punchBrothers_img1.jpeg",
    song: "",
    link: "" 
  },
  {
    pic: "/album_art/radiohead_img.jpg",
    song: "",
    link: "" 
  },
  {
    pic: "/album_art/rayana_img.jpg",
    song: "",
    link: "" 
  },
  {
    pic: "/album_art/rollingBlackouts_img.webp",
    song: "",
    link: "" 
  },
  {
    pic: "/album_art/rone_img1.jpg",
    song: "",
    link: "" 
  },
  {
    pic: "/album_art/rone_img2.jpeg",
    song: "",
    link: "" 
  },
  {
    pic: "/album_art/saib.jpeg",
    song: "",
    link: "" 
  },
  {
    pic: "/album_art/samuelSao_img.jpeg",
    song: "",
    link: "" 
  },
  {
    pic: "/album_art/sinjin_img.jpeg",
    song: "",
    link: "" 
  },
  {
    pic: "/album_art/soulsOfMischief_img.jpeg",
    song: "",
    link: "" 
  },
  {
    pic: "/album_art/stardust_img1.jpeg",
    song: "",
    link: "" 
  },
  {
    pic: "/album_art/steveLacy_img.jpeg",
    song: "",
    link: "" 
  },
  {
    pic: "/album_art/stroke_img1.jpeg",
    song: "",
    link: "" 
  },

  {
    pic: "/album_art/stroke_img2.jpeg",
    song: "",
    link: "" 
  },
  {
    pic: "/album_art/stroke_img3.jpeg",
    song: "",
    link: "" 
  },
  {
    pic: "/album_art/sukisha_img1.jpeg",
    song: "",
    link: "" 
  },
  {
    pic: "/album_art/sukisha_img2.jpeg",
    song: "",
    link: "" 
  },
  {
    pic: "/album_art/tallestman_img1.jpeg",
    song: "",
    link: "" 
  },
  {
    pic: "/album_art/thePharcyde_img.jpeg",
    song: "",
    link: "" 
  },

  {
    pic: "/album_art/tomMisch_img1.jpeg",
    song: "",
    link: "" 
  },
  {
    pic: "/album_art/tomMisch_img2.jpeg",
    song: "",
    link: "" 
  },
  {
    pic: "/album_art/tomMisch_img3.webp",
    song: "",
    link: "" 
  },
  {
    pic: "/album_art/tracy_img.jpeg",
    song: "",
    link: "" 
  },
  {
    pic: "/album_art/traxman_img.jpeg",
    song: "",
    link: "" 
  },
  {
    pic: "/album_art/tyler_img.png",
    song: "",
    link: "" 
  },
  {
    pic: "/album_art/u2_img1.png",
    song: "",
    link: "" 
  },
  {
    pic: "/album_art/vanceJoy_img1.jpeg",
    song: "",
    link: "" 
  },
  {
    pic: "/album_art/vanceJoy_img2.png",
    song: "",
    link: "" 
  },
  {
    pic: "/album_art/vaundy_img.jpeg",
    song: "",
    link: "" 
  },
  {
    pic: "/album_art/whiteDenim.jpeg",
    song: "",
    link: "" 
  },
  {
    pic: "/album_art/whitestBoyAlive_img1.jpeg",
    song: "",
    link: "" 
  },
  {
    pic: "/album_art/wonk_img1.jpeg",
    song: "",
    link: "" 
  },
  {
    pic: "/album_art/wonk_img2.jpeg",
    song: "",
    link: "" 
  },
  {
    pic: "/album_art/xx_img1.jpeg",
    song: "",
    link: "" 
  },
  {
    pic: "/album_art/yaeji_img1.jpg",
    song: "",
    link: "" 
  },
  {
    pic: "/album_art/yaeji_img2.webp",
    song: "",
    link: "" 
  },
  {
    pic: "/album_art/yonawo_img.jpeg",
    song: "",
    link: "" 
  },
  {
    pic: "/album_art/yuksek_img.jpeg",
    song: "",
    link: "" 
  },
  {
    pic: "/album_art/zo!_img.jpeg",
    song: "",
    link: "" 
  }
]


export default function Home() {
  return (
    <main>
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