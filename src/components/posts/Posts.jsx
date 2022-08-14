import "./Posts.css"
import Post from "../Post/Post";

function Posts() {
  return (
    <div className='Posts'>
      <div className="Postconatiner">
       <Post/>
        <Post/>
        <Post/>
        <Post/>
      </div>
        
    </div>
  )
}

export default Posts