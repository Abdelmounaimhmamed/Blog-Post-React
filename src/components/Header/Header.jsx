import "./Header.css";
import pex from "./pex.jpg";
function Header() {
  return (
    <div className="header"> 
      <div className="headerTiltles">
          <span className="headertilteSm">React & Node</span>
          <span className="headertitleLg">Blog</span>
      </div>
        <img src={pex} alt = "image" className="image"/>
    </div>
  )
}

export default Header