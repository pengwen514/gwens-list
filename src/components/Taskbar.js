import './taskbar.css'
export default function Taskbar() {
	return (
		<div className='taskbar'>
			<div className='leftTaskbar'>
				<i className="topIcon fa-brands fa-square-github"></i>
				<i className="topIcon fa-brands fa-linkedin"></i></div>
			<div className='centerTaskbar'>
				<ul className='taskbarList'>
					<li className='taskbarListItem'>HOME</li>
					<li className='taskbarListItem'>ABOUT</li>
					<li className='taskbarListItem'>WRITE</li>
					<li className='taskbarListItem'>LOGOUT</li>
				</ul>
			</div>
			<div className='rightTaskbar'>
				<img className='topImage' src="https://missionblue.org/wp-content/uploads/2013/04/3444822-Chinstrap-Penguin-0.jpg" alt="penguin pfp"/>
				<i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
			</div>
		</div>
	)
}