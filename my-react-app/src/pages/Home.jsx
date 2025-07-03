import { Link } from "react-router-dom"
import Welcome from "../components/home/welcome"
import Patner from "../components/home/patners"

function Home(){
  return (
    <div>
      <Welcome />
      <Patner ></Patner>
    </div>
  )
}
export default Home