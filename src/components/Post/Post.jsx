import "./Post.css"

function Post() {
  return (
    <div className='Post'>
        <img src="https://media.istockphoto.com/photos/casablanca-mosque-picture-id544676786?k=20&m=544676786&s=612x612&w=0&h=yxMfcOWTxIDJy98vfLl57g8kYcC_GwagrPzCxXI5fC0="  alt="" className="img" />
        <div className='postInfo'>
            <div className='Postcats'>
                <span className='postcat'>Life</span>
                <span className='postcat'>Music</span>
            </div>
            <span className='PostTilte'>Grafana & power BI</span>
            <hr/>
            <span className='postdate'>1 hour ago</span>
            <p className="para">This is me Abdelmounaim hmamed Engineering student I'm a web developer and i'm engineering student in the national school of applied sciences in morocco i'm engineering student in the national school of applied sciences in morocco i'm engineering student in the national school of applied sciences in morocco i'm engineering student in the national school of applied sciences in morocco </p>
        </div>
    </div>
  )
}

export default Post