import './login.css'

export default function Login(){
	return(
		<div className="login">
			<span className='loginTitle'>Login</span>
			<div className='loginForm'>
				<label>Email</label>
				<input type="text" className="loginInput" placeholder='email@email.com'></input>
				<label>Password</label>
				<input type="password" className="loginInput" placeholder='Enter your password'></input>
				<button className='loginButton'>Login</button>
				<button className='loginRegisterButton'>Register</button>
			</div>
		</div>
	)
}