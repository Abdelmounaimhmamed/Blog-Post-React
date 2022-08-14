import "./Home.css";
import Header from "./../../Header/Header";
import Posts from "./../../posts/Posts";
import Sidebar from "../../sidebar/Sidebar";
function Home() {
  return (
    <>
        <Header/>
        <div className="containeree">
          <Posts/>
          <Sidebar/>
        </div>
    </>
  )
}

export default Home