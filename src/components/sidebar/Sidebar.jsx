import "./sidebar.css";

function Sidebar() {
  return (
    <div className='sideBar'>
        <div className="SideBarItems">
          <span className="sideBarTitle">About Me</span>
          <img src="https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg" alt ="" className="img"/>
          <p>This is me Abdelmounaim hmamed Engineering student I'm a web developer and i'm engineering student in the national school of applied sciences in morocco </p>
        </div>
        <div className="SideBarItems">
          <span className="sideBarTitle">Categories</span>
              <ul className="sideBarlist">
                  <li className="sidebarlistitem">life</li>
                  <li className="sidebarlistitem">sport</li>
                  <li className="sidebarlistitem">gaming</li>
                  <li className="sidebarlistitem">shoping</li>
                  <li className="sidebarlistitem">Style</li>
                  <li className="sidebarlistitem">Cinema</li>
              </ul>
        </div>
        <div className="SideBarItems">
          <span className="sideBarTitle">Follow us</span>
            <div className="sidebarsocial">
                <i className="sidebaricon icons fa-brands fa-square-facebook"></i>
                <i className="sidebaricon icons fa-brands fa-linkedin"></i>
                <i className="sidebaricon icons fa-brands fa-square-whatsapp"></i>
                <i className="sidebaricon icons fa-solid fa-link"></i>
            </div>
        </div>
      </div>
  )
}

export default Sidebar