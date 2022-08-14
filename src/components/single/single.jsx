import React from 'react'
import Sidebar from "../sidebar/Sidebar";
import SinglePost from "../SinglePost/SinglePost";
import "./single.css";

function Single() {
  return (
    <div className='singlePost'>
        <SinglePost></SinglePost>
        <Sidebar/>
    </div>  
    )
}

export default Single