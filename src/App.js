import GlobalStyles from "./components/Globalstyles/Global";
import TopBar from "./components/TopBar/TopBar";
import Home from "./components/pages/Home/Home";
import Single from "./components/single/single";
import Write from "./components/write/Write";
import Settings from "./components/settings/Settings";
import Login from "./components/Login/Login";
import Register from "./components/Register/register";
import {BrowserRouter, Routes, Route,Link} from "react-router-dom";

function App() {
  const user = false ;
  return (
    <div className="App">
       <GlobalStyles/>
          <TopBar/>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/Post/:postId' element={<Single/>} />
                <Route path='/Write' element={ user ? <Write/> : <Register/>} />
                <Route path='/Settings' element={ user ? <Settings/> : <Register/>} />
                <Route path='/Login' element={user ? <Home/> : <Login/>} />
                <Route path='/Register' element={user ? <Home/> : <Register/>} />
            </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
