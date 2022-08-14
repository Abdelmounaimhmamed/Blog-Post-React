import"./settings.css";
import Sidebar from "./../sidebar/Sidebar";

function Settings() {
  return (
    <div className="Settings">
        <div className="SettingsParams">
            <div className="SettingsTitles">
            <span className="updateAccount">Update Account</span>
            <span className="DeleteAccount">Delete Account</span>
            </div>
            <span className="ProfilePic">Profile picture</span>
            <div className="container">
                <img src="https://media.istockphoto.com/photos/casablanca-mosque-picture-id544676786?k=20&m=544676786&s=612x612&w=0&h=yxMfcOWTxIDJy98vfLl57g8kYcC_GwagrPzCxXI5fC0="
                className="custum design"
                alt="image"/>
                <div className="input">
                    <label htmlFor="username">username</label>
                    <input className="inpute" type="text" placeholder="Username" id="username" name="username"/>
                </div>
                <div className="input">
                   <label htmlFor="username">email</label>
                   <input className="inpute" type="email" placeholder="email@...." id="email" name="email"/>
                </div>
                <div className="input">
                    <label htmlFor="username">password</label>
                    <input className="inpute" type="passwprd" placeholder="password" id="password" name="password"/>
                </div>
                <button type="submit" className="btn">Update</button>
            </div>
        </div>
        <Sidebar/>
    </div>
  )
}

export default Settings;