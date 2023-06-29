import Image from 'next/image'
import Nav from "./components/Nav"
import BannerAndStory from "./components/Banner-Story";

export default function Home() {
  return (
    <div className="container">
      <Nav />
      <BannerAndStory />
      <h1>We offer high demand services</h1>
    </div>
  )
}
 