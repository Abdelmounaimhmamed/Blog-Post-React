import "./SinglePost.css";

export default function SinglePost() {
  return (
    <div className="SinglePost">
         <img src="https://media.istockphoto.com/photos/casablanca-mosque-picture-id544676786?k=20&m=544676786&s=612x612&w=0&h=yxMfcOWTxIDJy98vfLl57g8kYcC_GwagrPzCxXI5fC0="  alt="" className=" custum" />
        <div className='postInfo'>
            <div className='Postcats'>
                <span className='postcat'>Life</span>
                <span className='postcat'>Music</span>
            </div>
            <span className='PostTilte'>Grafana & power BI</span>
            <hr/>
            <span className='postdate'>1 hour ago</span>
            <p className="para par">This is me Abdelmounaim hmamed Engineering student I'm a web developer and i'm engineering student in the national school of applied sciences in morocco i'm engineering student in the national school of applied sciences in morocco i'm engineering student in the national school of applied sciences in morocco i'm engineering student in the national school of applied sciences in morocco </p>
          <div className="icons" >
          <i class="fa-solid fa-trash"></i>
          <i class="fa-solid fa-pen-to-square"></i>
          <span className="author">author : <b>Abdelmounaim hmamed</b></span>
          </div>
        </div>
        </div>
  )
}
