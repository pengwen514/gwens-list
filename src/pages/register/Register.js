import './register.css'

export default function Register(){
	return(
		<div className="register">
			<span className='registerTitle'>Register</span>
			<div className='registerForm'>
				<label>Username</label>
				<input type="text" className="registerInput" placeholder='Username'></input>
				<label>Email</label>
				<input type="text" className="registerInput" placeholder='email@email.com'></input>
				<label>Password</label>
				<input type="password" className="registerInput" placeholder='Create your password'></input>
				<button className='registerButton'>Create Account</button>
				<button className='registerLoginButton'>Login</button>
			</div>
		</div>
	)
}