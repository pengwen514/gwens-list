import Sidebar from '../../components/Sidebar'
import './settings.css'

export default function Settings(){
	return(
		<div className='settings'>
			<div className='settingsWrapper'>
				<div className='settingsTitle'>
					<span className='settingsUpdateText'>Update Your Account</span>
					<span className='settingsDeleteText'>Delete Account</span>
				</div>
				<form className='settingsForm'>
					<label>Profile Picture</label>
					<div className='settingsPFP'>
						<img src='https://missionblue.org/wp-content/uploads/2013/04/3444822-Chinstrap-Penguin-0.jpg' alt='profile' />
						<label htmlFor='fileInput'><i className="settingsPFPIcon fa-solid fa-circle-user"></i></label>
						<input type="file" id="fileInput" style={{display: "none"}}></input>
					</div>
					<label>Username</label>
					<input type="text" placeholder='User' />
					<label>Email</label>
					<input type="text" placeholder='email@email.com' />
					<label>Password</label>
					<input type="text" />
					<button className='settingsSubmit'>Update</button>
				</form>
			</div>
			<Sidebar />
		</div>
	)
}