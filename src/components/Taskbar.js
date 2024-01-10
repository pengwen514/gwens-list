import './taskbar.css'
import { Link } from 'react-router-dom'
export default function Taskbar() {
	return (
		<div className='taskbar'>
			<div className='leftTaskbar'>
				<Link to='https://github.com/pengwen514'><i className="topIcon fa-brands fa-square-github"></i></Link>
				<Link to='https://www.linkedin.com/in/penelope-huff-b0a189193/'><i className="topIcon fa-brands fa-linkedin"></i></Link></div>
			<div className='centerTaskbar'>
				<ul className='taskbarList'>
					<li className='taskbarListItem'>
						<Link to="/" style={{textDecoration:"none", color:"inherit"}}>HOME</Link>
					</li>
					<li className='taskbarListItem'>
						<Link to='/write' style={{textDecoration:'none', color:'inherit'}}>WRITE</Link>
					</li>
					<li className='taskbarListItem'>
						LOGOUT
					</li>
				</ul>
			</div>
			<div className='rightTaskbar'>
				<Link to='/settings'><img className='topImage' src="https://missionblue.org/wp-content/uploads/2013/04/3444822-Chinstrap-Penguin-0.jpg" alt="penguin pfp"/></Link>
				<i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
			</div>
		</div>
	)
}