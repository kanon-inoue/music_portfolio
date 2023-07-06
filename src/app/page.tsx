import { arrayBuffer } from "stream/consumers"
import Album from "./components/Album"

const albumInfo = [
  {
    pic: "/album_art/1975_img1.jpg",
    song: "Chocolate - The 1975",
    link: "https://open.spotify.com/embed/track/73jr4K3kGitibWouEgJzgq?utm_source=generator&theme=0"
  },
  {
    pic: "/album_art/aevion_img.jpeg",
    song: "Keep on Rockin' - Aevion",
    link: "https://open.spotify.com/embed/track/70evNQ0TBiks6HMNxUAgtD?utm_source=generator"
  },
  {
    pic: "/album_art/ahmad_img.jpeg",
    song: "Lament - Ahmad Jamal",
    link: "https://open.spotify.com/embed/track/4rJJLMW9ORJrGaOz7jv2O7?utm_source=generator"
  },
  {
    pic: "/album_art/amberNavvan_img1.jpeg",
    song: "",
    link: "https://open.spotify.com/embed/track/22jIxY1qPMSjUWlV4CUHU5?utm_source=generator" 
  },
  {
    pic: "/album_art/aTribeCalledQuest_img.jpeg",
    song: "",
    link: "https://open.spotify.com/embed/track/4hozY0uWh4hxvH2mP6EmSL?utm_source=generator" 
  },
  {
    pic: "/album_art/babes_img.jpeg",
    song: "",
    link: "https://open.spotify.com/embed/track/6wpHyTAQ84IZrx3C2yaot4?utm_source=generator"
  },
  {
    pic: "/album_art/basi_img.jpeg",
    song: "",
    link: "https://open.spotify.com/embed/track/3Z3ldilmAxJccTZv0GeUfq?utm_source=generator" 
  },
  {
    pic: "/album_art/beatles_img1.jpeg",
    song: "",
    link: "https://open.spotify.com/embed/track/1swmf4hFMJYRNA8Rq9PVaW?utm_source=generator"
  },
  {
    pic: "/album_art/beatles_img2.jpeg",
    song: "",
    link: "https://open.spotify.com/embed/track/5jgFfDIR6FR0gvlA56Nakr?utm_source=generator"
  },
  {
    pic: "/album_art/bellBivDeVoe_img.jpeg",
    song: "",
    link: "https://open.spotify.com/embed/track/50DAHcCqneoupFyh96P2GP?utm_source=generator" 
  },
  {
    pic: "/album_art/benjiFlow_img.jpeg",
    song: "",
    link: "https://open.spotify.com/embed/track/0Vu2g87vcF3Q0dUO3jUteP?utm_source=generator"
  },
  {
    pic: "/album_art/billWithers_img.jpeg",
    song: "",
    link: "https://open.spotify.com/embed/track/0bRXwKfigvpKZUurwqAlEh?utm_source=generator" 
  },
  {
    pic: "/album_art/boobie_img.jpeg",
    song: "",
    link: "https://open.spotify.com/embed/track/1t7oHLPj8X5qZdbfn72gKf?utm_source=generator"
  },
  {
    pic: "/album_art/cailin_img1.jpeg",
    song: "",
    link: "https://open.spotify.com/embed/track/7xgyHMFWayafh1Da3ptQDE?utm_source=generator" 
  },
  {
    pic: "/album_art/cailin_img2.jpeg",
    song: "",
    link: "https://open.spotify.com/embed/track/1yka5XpwTBV951mp2OVYcn?utm_source=generator" 
  },
  {
    pic: "/album_art/chic_img.jpeg",
    song: "",
    link: "https://open.spotify.com/embed/track/0CN5EUJIeknN2QIUp0kS5W?utm_source=generator" 
  },
  {
    pic: "/album_art/childishGambino_img.png",
    song: "",
    link: "https://open.spotify.com/embed/track/0wXuerDYiBnERgIpbb3JBR?utm_source=generator" 
  },
  {
    pic: "/album_art/childishGambino_img2.jpeg",
    song: "",
    link: "https://open.spotify.com/embed/track/7p4vHnYXkxlzvfePJVpcTr?utm_source=generator" 
  },
  {
    pic: "/album_art/cranberries_img.jpeg",
    song: "",
    link: "https://open.spotify.com/embed/track/1ayRJ4dlr48VJ3FK6uPq2i?utm_source=generator" 
  },
  {
    pic: "/album_art/daftpunk_img1.jpeg",
    song: "",
    link: "https://open.spotify.com/embed/track/1NeLwFETswx8Fzxl2AFl91?utm_source=generator" 
  },
  {
    pic: "/album_art/daftpunk_img2.jpeg",
    song: "",
    link: "https://open.spotify.com/embed/track/2cGxRwrMyEAp8dEbuZaVv6?utm_source=generator" 
  },
  {
    pic: "/album_art/damSwindel_img1.webp",
    song: "",
    link: "https://open.spotify.com/embed/track/7Jg80rSKiEVhmGE8sVEYf2?utm_source=generator" 
  },
  {
    pic: "/album_art/dangelo_img.jpeg",
    song: "",
    link: "https://open.spotify.com/embed/track/7Jg80rSKiEVhmGE8sVEYf2?utm_source=generator" 
  },
  {
    pic: "/album_art/darius_img.jpeg",
    song: "",
    link: "https://open.spotify.com/embed/track/7zc0EXwVyhwsWmZgFaSOTl?utm_source=generator" 
  },
  {
    pic: "/album_art/dave_img1.jpeg",
    song: "",
    link: "https://open.spotify.com/embed/track/3z4CGd63tpUn9a6oQSG0CI?utm_source=generator" 
  },
  {
    pic: "/album_art/depencheMode_img1.jpeg",
    song: "",
    link: "https://open.spotify.com/embed/track/6WK9dVrRABMkUXFLNlgWFh?utm_source=generator" 
  },
  {
    pic: "/album_art/digablePlanets_img.jpeg",
    song: "",
    link: "https://open.spotify.com/embed/track/26q6YTrXt9l8qshIveiTX9?utm_source=generator" 
  },
  {
    pic: "/album_art/diMelo_img.jpeg",
    song: "",
    link: "https://open.spotify.com/embed/track/3SmPAYgr8V7avYYuoJ0AfE?utm_source=generator" 
  },
  {
    pic: "/album_art/djboring_img.webp",
    song: "",
    link: "https://open.spotify.com/embed/track/5spCGhval9pvD8Iq9Z3FFi?utm_source=generator"
  },
  {
    pic: "/album_art/dongrizu_img1.jpeg",
    song: "",
    link: "https://open.spotify.com/embed/track/41IJNo56JJxS3IfbzfvB09?utm_source=generator"
  },
  {
    pic: "/album_art/dongrizu_img2.jpeg",
    song: "",
    link: "https://open.spotify.com/embed/track/4puV3FbDtGq23ymo6Ashya?utm_source=generator"
  },
  {
    pic: "/album_art/drumagick_img.jpeg",
    song: "",
    link: "https://open.spotify.com/embed/track/3l9Bg8TxrMFF8sAhaOMmPd?utm_source=generator"
  },
  {
    pic: "/album_art/elMichelsAffair_img1.jpeg",
    song: "",
    link: "https://open.spotify.com/embed/track/0FLmR0blAIztjE7YsQpoYc?utm_source=generator"
  },
  {
    pic: "/album_art/estelle_img.jpeg",
    song: "",
    link: "https://open.spotify.com/embed/track/22UDw8rSfLbUsaAGTXQ4Z8?utm_source=generator"
  },
  {
    pic: "/album_art/familyStand_img.jpeg",
    song: "",
    link: "https://open.spotify.com/embed/track/74uljJhGv6otcU8kFKtg7R?utm_source=generator"
  },
  {
    pic: "/album_art/fatherJohnMisty_img.jpg",
    song: "",
    link: "https://open.spotify.com/embed/track/0IFIJrJhp4UlMde4OYCPxb?utm_source=generator"
  },
  {
    pic: "/album_art/fourtet_img1.webp",
    song: "",
    link: "https://open.spotify.com/embed/track/4waVSC9eSkrt6RxJK3DhwW?utm_source=generator"
  },
  {
    pic: "/album_art/genesis_img1.jpeg",
    song: "",
    link: "https://open.spotify.com/embed/track/2eKEv8zs7WrhDwOkTziSgg?utm_source=generator"
  },
  {
    pic: "/album_art/gotye_img.jpeg",
    song: "",
    link: "https://open.spotify.com/embed/track/3NJSkm99ve5cfsQN9GNies?utm_source=generator"
  },
  {
    pic: "/album_art/grover_img1.jpeg",
    song: "",
    link: "https://open.spotify.com/embed/track/5fdNHVZHbWB1AaXk4RBGVD?utm_source=generator"
  },
  {
    pic: "/album_art/harbie_img1.jpeg",
    song: "",
    link: "https://open.spotify.com/embed/track/4Ce66JznW8QbeyTdSzdGwR?utm_source=generator"
  },
  {
    pic: "/album_art/haitus_img1.jpeg",
    song: "",
    link: "https://open.spotify.com/embed/track/0pGnSHGMUpp2Wg0iTZWEoY?utm_source=generator"
  },
  {
    pic: "/album_art/hiatus_img2.jpeg",
    song: "",
    link: "https://open.spotify.com/embed/track/1WCbWyu8mRrOk5Su9yPnkO?utm_source=generator"
  },
  {
    pic: "/album_art/honne_img1.jpeg",
    song: "",
    link: "https://open.spotify.com/embed/track/1yraET52i6ZkrvvrmKNyn6?utm_source=generator"
  },
  {
    pic: "/album_art/hyukoh_img.jpeg",
    song: "",
    link: "https://open.spotify.com/embed/track/0Nld5ohgWfoPueMEtYNbgE?utm_source=generator"
  },
  {
    pic: "/album_art/idrisMuhammad_img.jpeg",
    song: "",
    link: "https://open.spotify.com/embed/track/1nrPiwJtgY5363ZKABeqOX?utm_source=generator"
  },
  {
    pic: "/album_art/incognito_img.jpeg",
    song: "",
    link: "https://open.spotify.com/embed/track/3xNBa5CkUxvxdwf8GGl58F?utm_source=generator"
  },
  {
    pic: "/album_art/jamiroquai_img.png",
    song: "",
    link: "https://open.spotify.com/embed/track/5sS4g0adkAUXvLJHQ1i2kj?utm_source=generator"
  },
  {
    pic: "/album_art/jamiroquai_img1.jpeg",
    song: "",
    link: "https://open.spotify.com/embed/track/50UTxh3b3tjzenOSu1lJYH?utm_source=generator"
  },
  {
    pic: "/album_art/jamiroquai_img2.jpeg",
    song: "",
    link: "https://open.spotify.com/embed/track/47W6YR93MPCGLEUReLMyDm?utm_source=generator"
  },
  {
    pic: "/album_art/jamiroquai_img3.webp",
    song: "",
    link: "https://open.spotify.com/embed/track/2bwxqGKS5GPXfNanAIRe2p?utm_source=generator"
  },
  {
    pic: "/album_art/jazzbois_img.jpeg",
    song: "",
    link: "https://open.spotify.com/embed/track/3Ibv1rM9KND9KlM5SmpFa4?utm_source=generator"
  },
  {
    pic: "/album_art/jitwam_img1.jpeg",
    song: "",
    link: "https://open.spotify.com/embed/track/4P0fG5wJWte6IVtwPiGFZP?utm_source=generator"
  },
  {
    pic: "/album_art/jitwam_img2.webp",
    song: "",
    link: "https://open.spotify.com/embed/track/7Jg80rSKiEVhmGE8sVEYf2?utm_source=generator"
  },
  {
    pic: "/album_art/jlamotta_img.jpeg",
    song: "",
    link: "https://open.spotify.com/embed/track/5YpTZGoVPHQAA3z7R0yTSk?utm_source=generator"
  },
  {
    pic: "/album_art/johnMayer_img1.jpeg",
    song: "",
    link: "https://open.spotify.com/embed/track/2Knlcf82LF6hp6Bf0gldtN?utm_source=generator"
  },
  {
    pic: "/album_art/joni_img1.jpg",
    song: "",
    link: "https://open.spotify.com/embed/track/1wcbiRER4ChnikvcLc2OE6?utm_source=generator"
  },
  {
    pic: "/album_art/joni_img3.jpeg",
    song: "",
    link: "https://open.spotify.com/embed/track/7shVwhUdVbHpykOfbzvDc1?utm_source=generator"
  },
  {
    pic: "/album_art/joni_img4.jpg",
    song: "",
    link: "https://open.spotify.com/embed/track/5fdjxHzBILxMXRrbbOVupJ?utm_source=generator"
  },
  {
    pic: "/album_art/kansano_img1.jpeg",
    song: "",
    link: "https://open.spotify.com/embed/track/6FxyEWq8LSMQugpGypLiiH?utm_source=generator"
  },
  {
    pic: "/album_art/keita_img1.jpeg",
    song: "",
    link: "https://open.spotify.com/embed/track/7yLCMQPvoMepTGkOvo9xNY?utm_source=generator"
  },
  {
    pic: "/album_art/kenichiro_img.jpeg",
    song: "",
    link: "https://open.spotify.com/embed/track/6b6D94SnWcbNYYcw7ky7YL?utm_source=generator"
  },
  {
    pic: "/album_art/kiefer_img1.jpeg",
    song: "",
    link: "https://open.spotify.com/embed/track/2BYNnzTc5otmcdmwz8xECw?utm_source=generator"
  },
  {
    pic: "/album_art/kiki_img.jpeg",
    song: "",
    link: "https://open.spotify.com/embed/track/1o6wXCzuU5etmkH9wydT06?utm_source=generator"
  },
  {
    pic: "/album_art/kingsOfConvinience_img1.jpeg",
    song: "",
    link: "https://open.spotify.com/embed/track/4hGOhC87bn7JBdYykOJJvJ?utm_source=generator"
  },
  {
    pic: "/album_art/kutiman_img.webp",
    song: "",
    link: "https://open.spotify.com/embed/track/0gGslfeZ5GjK19VcS82Sqa?utm_source=generator"
  },
  {
    pic: "/album_art/lalaland_img.jpeg",
    song: "",
    link: "https://open.spotify.com/embed/track/1xk2Z84gbcn4tPXiiutxzS?utm_source=generator"
  },
  {
    pic: "/album_art/latinProject_img1.jpeg",
    song: "",
    link: "https://open.spotify.com/embed/track/7JVjwzUGHZ3yPQZx7qCs66?utm_source=generator"
  },
  {
    pic: "/album_art/laureceGuy_img.jpeg",
    song: "",
    link: "https://open.spotify.com/embed/track/3lrNU0pvwTaXsgDqa55A8j?utm_source=generator"
  },
  {
    pic: "/album_art/lilSilva_img.jpeg",
    song: "",
    link: "https://open.spotify.com/embed/track/4Z6XWYYWSHPvSupNqmbzzE?utm_source=generator"
  },
  {
    pic: "/album_art/loyle_img.jpeg",
    song: "",
    link: "https://open.spotify.com/embed/track/64I9byMYBlS1ARsC3vtpgW?utm_source=generator"
  },
  {
    pic: "/album_art/luther_img.jpeg",
    song: "",
    link: "https://open.spotify.com/embed/track/1QtxGA8cWVJPLEslj9CrL3?utm_source=generator"
  },
  {
    pic: "/album_art/machinegun_img1.jpeg",
    song: "",
    link: "https://open.spotify.com/embed/track/7kDUspsoYfLkWnZR7qwHZl?utm_source=generator"
  },
  {
    pic: "/album_art/madcat_img1.jpeg",
    song: "",
    link: "https://open.spotify.com/embed/track/4Rb43ZlNMC7EOp7cmN2SI6?utm_source=generator"
  },
  {
    pic: "/album_art/madcat_img2.jpeg",
    song: "",
    link: "https://open.spotify.com/embed/track/2g5bJ0yu0d5GmH7VDHgdT6?utm_source=generator"
  },
  {
    pic: "/album_art/manor_img.jpeg",
    song: "",
    link: "https://open.spotify.com/embed/track/1Bu5uolFvfiwJjFrcSlzQj?utm_source=generator"
  },
  {
    pic: "/album_art/mansionz_img.jpeg",
    song: "",
    link: "https://open.spotify.com/embed/track/75Q69chmd8CEZbVsA4CDMm?utm_source=generator"
  },
  {
    pic: "/album_art/marcE_img.jpg",
    song: "",
    link: "https://open.spotify.com/embed/track/1buT1LWUddQg5sSNHdnzwV?utm_source=generator"
  },
  {
    pic: "/album_art/mariaTakeuchi_img.jpeg",
    song: "",
    link: "https://open.spotify.com/embed/track/3lq6i23fC6j1v1AR0GeNg8?utm_source=generator"
  },
  {
    pic: "/album_art/mattMartins_img.jpeg",
    song: "",
    link: "https://open.spotify.com/embed/track/2Lj9UQsdvaN9bIfiKWidS8?utm_source=generator"
  },
  {
    pic: "/album_art/metronomy_img1.png",
    song: "",
    link: "https://open.spotify.com/embed/track/7oOOI85fVQvVnK5ynNMdW7?utm_source=generator"
  },
  {
    pic: "/album_art/michealJackson_img1.jpeg",
    song: "",
    link: "https://open.spotify.com/embed/track/7oOOI85fVQvVnK5ynNMdW7?utm_source=generator"
  },
  {
    pic: "/album_art/middleeast_img.jpeg",
    song: "",
    link: "https://open.spotify.com/embed/track/13yuX1iqobZtQtq5lr8UoC?utm_source=generator"
  },
  {
    pic: "/album_art/modjo_img1.jpeg",
    song: "",
    link: "https://open.spotify.com/embed/track/49X0LAl6faAusYq02PRAY6?utm_source=generator"
  },
  {
    pic: "/album_art/moodymann_img.jpeg",
    song: "",
    link: "https://open.spotify.com/embed/album/61sGO58ljdDgD4Mn6Bcj3P?utm_source=generator"
  },
  {
    pic: "/album_art/moonchild_img1.jpeg",
    song: "",
    link: "https://open.spotify.com/embed/track/3M0KY9HvY5RGnX9b6FimVd?utm_source=generator"
  },
  {
    pic: "/album_art/moonchild_img2.jpg",
    song: "",
    link: "https://open.spotify.com/embed/track/1jng1O2NbWUOClRlRxIvJu?utm_source=generator"
  },
  {
    pic: "/album_art/moonchild_img3.jpg",
    song: "",
    link: "https://open.spotify.com/embed/track/0GoFG8DmZJGdEJE9bysl8d?utm_source=generator"
  },
  {
    pic: "/album_art/mrJukes_img.webp",
    song: "",
    link: "https://open.spotify.com/embed/track/75RjfwNH2VJD3JaBYD0pYx?utm_source=generator"
  },
  {
    pic: "/album_art/mstrkrft_img.jpeg",
    song: "",
    link: "https://open.spotify.com/embed/track/3xwm0faDUX5DQxvNVpawjB?utm_source=generator"
  },
  {
    pic: "/album_art/nujabes_img1.jpeg",
    song: "",
    link: "https://open.spotify.com/embed/track/0JL9TZip7mL7iwC5EOkALS?utm_source=generator"
  },
  {
    pic: "/album_art/nujabes_img2.jpeg",
    song: "",
    link: "https://open.spotify.com/embed/track/6SNGzhVrisdq63Ndz58ovT?utm_source=generator"
  },
  {
    pic: "/album_art/outkast_img1.jpeg",
    song: "",
    link: "https://open.spotify.com/embed/track/6bUNEbXT7HovLW6BgPCBsb?utm_source=generator"
  },
  {
    pic: "/album_art/palmaria_img1.jpeg",
    song: "",
    link: "https://open.spotify.com/embed/track/0tP77aePlNWlJXsgLJgTgO?utm_source=generator"
  },
  {
    pic: "/album_art/parkHyeJin_img1.jpeg",
    song: "",
    link: "https://open.spotify.com/embed/track/1mazAW31oI50KA3YLB6UTZ?utm_source=generator"
  },
  {
    pic: "/album_art/parkHyeJin_img2.jpeg",
    song: "",
    link: "https://open.spotify.com/embed/track/1paOXtSfaeFcZfzt9msquZ?utm_source=generator"
  },
  {
    pic: "/album_art/paulAnthonee_img.jpeg",
    song: "",
    link: "https://open.spotify.com/embed/track/5VUqqN0S9Y6qQJ1PFWH3g1?utm_source=generator"
  },
  {
    pic: "/album_art/paulSimon_img1.jpeg",
    song: "",
    link: "https://open.spotify.com/embed/track/6Qb7gtV6Q4MnUjSbkFcopl?utm_source=generator"
  },
  {
    pic: "/album_art/peggy_img1.webp",
    song: "",
    link: "https://open.spotify.com/embed/track/5HPGApiRm2TW6LdFBL2QxJ?utm_source=generator"
  },
  {
    pic: "/album_art/peggy_img2.jpeg",
    song: "",
    link: "https://open.spotify.com/embed/track/5xwzmfxNAxZwMjznQ0eVXL?utm_source=generator"
  },
  {
    pic: "/album_art/peggy_img3.jpeg",
    song: "",
    link: "https://open.spotify.com/embed/track/1S3wM42IWR5DDukmZo8GwV?utm_source=generator"
  },
  {
    pic: "/album_art/peggy_img4.jpeg",
    song: "",
    link: "https://open.spotify.com/embed/track/3Bb6SjhcywQ4euKYT2jxmp?utm_source=generator"
  },
  {
    pic: "/album_art/peterBjorn_img.jpeg",
    song: "",
    link: "https://open.spotify.com/embed/track/4dyx5SzxPPaD8xQIid5Wjj?utm_source=generator"
  },
  {
    pic: "/album_art/pinkFloyd_img1.jpeg",
    song: "",
    link: "https://open.spotify.com/embed/track/5HNCy40Ni5BZJFw1TKzRsC?utm_source=generator"
  },
  {
    pic: "/album_art/pinkFloyd_img2.jpeg",
    song: "",
    link: "https://open.spotify.com/embed/track/3TO7bbrUKrOSPGRTB5MeCz?utm_source=generator"
  },
  {
    pic: "/album_art/punchBrothers_img1.jpeg",
    song: "",
    link: "https://open.spotify.com/embed/track/3lS0DcJDzDiaqAje0LViWe?utm_source=generator"
  },
  {
    pic: "/album_art/radiohead_img.jpg",
    song: "",
    link: "https://open.spotify.com/embed/track/6PbeGqzGdjookqESRgm1AS?utm_source=generator"
  },
  {
    pic: "/album_art/rayana_img.jpg",
    song: "",
    link: "https://open.spotify.com/embed/track/5FFUDCkMjxuK6XQZNumN55?utm_source=generator"
  },
  {
    pic: "/album_art/rollingBlackouts_img.webp",
    song: "",
    link: "https://open.spotify.com/embed/track/5jn29LE4vLfnk8FRpzj2IY?utm_source=generator"
  },
  {
    pic: "/album_art/rone_img1.jpg",
    song: "",
    link: "https://open.spotify.com/embed/track/2jKhAkKrtSPVNkmz5BT3Ft?utm_source=generator"
  },
  {
    pic: "/album_art/rone_img2.jpeg",
    song: "",
    link: "https://open.spotify.com/embed/track/4OAUeGPgD3yAk9W4hvjyMj?utm_source=generator"
  },
  {
    pic: "/album_art/saib.jpeg",
    song: "",
    link: "https://open.spotify.com/embed/track/0vTJP35J4M1PY9iAA8UmbV?utm_source=generator"
  },
  {
    pic: "/album_art/samuelSao_img.jpeg",
    song: "",
    link: "https://open.spotify.com/embed/track/2UtOb1aJlJpnXabPUO276v?utm_source=generator"
  },
  {
    pic: "/album_art/sinjin_img.jpeg",
    song: "",
    link: "https://open.spotify.com/embed/track/6mRAzkBFJIxfvXorppBlKr?utm_source=generator"
  },
  {
    pic: "/album_art/soulsOfMischief_img.jpeg",
    song: "",
    link: "https://open.spotify.com/embed/track/0PV1TFUMTBrDETzW6KQulB?utm_source=generator"
  },
  {
    pic: "/album_art/stardust_img1.jpeg",
    song: "",
    link: "https://open.spotify.com/embed/track/303ccTay2FiDTZ9fZ2AdBt?utm_source=generator"
  },
  {
    pic: "/album_art/steveLacy_img.jpeg",
    song: "",
    link: "https://open.spotify.com/embed/track/37y7iDayfwm3WXn5BiAoRk?utm_source=generator" 
  },
  {
    pic: "/album_art/stroke_img1.jpeg",
    song: "",
    link: "https://open.spotify.com/embed/track/5ruzrDWcT0vuJIOMW7gMnW?utm_source=generator"
  },
  {
    pic: "/album_art/stroke_img2.jpeg",
    song: "",
    link: "https://open.spotify.com/embed/track/57Xjny5yNzAcsxnusKmAfA?utm_source=generator"
  },
  {
    pic: "/album_art/stroke_img3.jpeg",
    song: "",
    link: "https://open.spotify.com/embed/track/7kzKAuUzOITUauHAhoMoxA?utm_source=generator"
  },
  {
    pic: "/album_art/sukisha_img1.jpeg",
    song: "",
    link: "https://open.spotify.com/embed/track/6EiGHN6OX3rPyPdqymU3V7?utm_source=generator"
  },
  {
    pic: "/album_art/sukisha_img2.jpeg",
    song: "",
    link: "https://open.spotify.com/embed/track/1G3WLEbgr9cMpQlnNSRdG8?utm_source=generator"
  },
  {
    pic: "/album_art/tallestman_img1.jpeg",
    song: "",
    link: "https://open.spotify.com/embed/track/0uSAlUbsfQEneSeTSJcbfm?utm_source=generator"
  },
  {
    pic: "/album_art/thePharcyde_img.jpeg",
    song: "",
    link: "https://open.spotify.com/embed/track/4G3dZN9o3o2X4VKwt4CLts?utm_source=generator"
  },

  {
    pic: "/album_art/tomMisch_img1.jpeg",
    song: "",
    link: "https://open.spotify.com/embed/track/5MChi9fdCbTIWDJPPUuuW6?utm_source=generator"
  },
  {
    pic: "/album_art/tomMisch_img2.jpeg",
    song: "",
    link: "https://open.spotify.com/embed/track/1eCf3kMSUXWAv5W75bQ0oO?utm_source=generator"
  },
  {
    pic: "/album_art/tomMisch_img3.webp",
    song: "",
    link: "https://open.spotify.com/embed/album/2g49Kw03cpc5HQygEw450P?utm_source=generator" 
  },
  {
    pic: "/album_art/tracy_img.jpeg",
    song: "",
    link: "https://open.spotify.com/embed/track/2M9ro2krNb7nr7HSprkEgo?utm_source=generator" 
  },
  {
    pic: "/album_art/traxman_img.jpeg",
    song: "",
    link: "https://open.spotify.com/embed/track/5gqKLO4Y6mp2cLqmuYX6Gx?utm_source=generator"
  },
  {
    pic: "/album_art/tyler_img.png",
    song: "",
    link: "https://open.spotify.com/embed/track/6Xw3iWrQKgArwlRhVuU9CK?utm_source=generator"
  },
  {
    pic: "/album_art/u2_img1.png",
    song: "",
    link: "https://open.spotify.com/embed/track/6qa36OkEeQqGaWlOcpjlGD?utm_source=generator"
  },
  {
    pic: "/album_art/vanceJoy_img1.jpeg",
    song: "",
    link: "https://open.spotify.com/embed/track/2RiBogNRfulkNf7fVbPOrJ?utm_source=generator" 
  },
  {
    pic: "/album_art/vanceJoy_img2.png",
    song: "",
    link: "https://open.spotify.com/embed/track/7yq4Qj7cqayVTp3FF9CWbm?utm_source=generator"
  },
  {
    pic: "/album_art/vaundy_img.jpeg",
    song: "",
    link: "https://open.spotify.com/embed/track/1CmP16cGnlRGMcL0S7q50s?utm_source=generator"
  },
  {
    pic: "/album_art/whiteDenim.jpeg",
    song: "",
    link: "https://open.spotify.com/embed/track/03pRnmoWR9IVKkIR73iGIG?utm_source=generator"
  },
  {
    pic: "/album_art/whitestBoyAlive_img1.jpeg",
    song: "",
    link: "https://open.spotify.com/embed/track/5hNqD8yyT3TTqp7mhh3pp3?utm_source=generator"
  },
  {
    pic: "/album_art/wonk_img1.jpeg",
    song: "",
    link: "https://open.spotify.com/embed/track/7Mk7cr7WOf7FgjSNtbJGqe?utm_source=generator"
  },
  {
    pic: "/album_art/wonk_img2.jpeg",
    song: "",
    link: "https://open.spotify.com/embed/track/4wgQEnG93yd36xEHBeGBhC?utm_source=generator"
  },
  {
    pic: "/album_art/xx_img1.jpeg",
    song: "",
    link: "https://open.spotify.com/embed/track/2SMn57cBVxoD4TArscpovk?utm_source=generator"
  },
  {
    pic: "/album_art/yaeji_img1.jpg",
    song: "",
    link: "https://open.spotify.com/embed/track/4XXfQ8fBHMIgcygY4hV6RC?utm_source=generator"
  },
  {
    pic: "/album_art/yaeji_img2.webp",
    song: "",
    link: "https://open.spotify.com/embed/track/5ZieiUIwDcPyUy8CIq0bGf?utm_source=generator"
  },
  {
    pic: "/album_art/yonawo_img.jpeg",
    song: "",
    link: "https://open.spotify.com/embed/track/3CwlaMpxgsPcLmm9o0Kvur?utm_source=generator"
  },
  {
    pic: "/album_art/yuksek_img.jpeg",
    song: "",
    link: "https://open.spotify.com/embed/track/10e7D2zxoamqizmQ03C1RK?utm_source=generator&theme=0" 
  },
  {
    pic: "/album_art/zo!_img.jpeg",
    song: "",
    link: "https://open.spotify.com/embed/track/6iMeiLpoD5YomwLbAXqYe2?utm_source=generator" 
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