import "./write.css"

function Write() {
  return (
    <div className='write'>
        <img src="https://media.istockphoto.com/photos/casablanca-mosque-picture-id544676786?k=20&m=544676786&s=612x612&w=0&h=yxMfcOWTxIDJy98vfLl57g8kYcC_GwagrPzCxXI5fC0="
        className="custum"
        alt="image"/>
        <form className='writeForm'>
        <div className='add'>
            <label htmlFor='file'><i class="icon fa-solid fa-plus"></i></label>
            <input type="file" name='file' id="file" style={{display:"none"}}/>
            <input type="text" name="text" id="text" placeholder='Title' className="inpute" autoFocus={true} />
        </div>
        <div className="writeForm">
            <textarea type="text" placeholder='Tell your story ...' className='writeText' ></textarea>
        </div>
        <button type='submit' className='btn'>Publish</button>
        </form>
    </div>
  )
}

export default Write