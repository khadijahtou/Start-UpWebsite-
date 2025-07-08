import { Link } from "react-router-dom"
import Welcome from "../components/home/welcome"
import Patner from "../components/home/patners"
import Socials from "../components/home/social"
import Team from "../components/home/team"
import Support from "../components/home/support"

function Home(){
  return (
    <div>
      <Welcome />
      <Patner ></Patner>
      <Socials ></Socials>
      <Support ></Support>
      <Team ></Team>

    </div>
  )
}
export default Home