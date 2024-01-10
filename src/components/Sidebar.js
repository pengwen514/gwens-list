import './sidebar.css'

export default function Sidebar() {
	return (
		<div className='sidebar'>
			<div className='sidebarItem'>
				<span className='sidebarTitle'>ABOUT ME</span>
				<img className='sidebarImg' src='https://ca.slack-edge.com/T035D3AE74L-U050PR5CMBL-9eac6e6f64de-512' alt='me' />
				<p className='sidebarAbout'>Lorem</p>
			</div>
			<div className='sidebarItem'>
				<span className='sidebarTitle'>CATEGORIES</span>
				<ul className='sidebarList'>
					<li className='sidebarListItem'>Travel</li>
					<li className='sidebarListItem'>Food</li>
					<li className='sidebarListItem'>Style</li>
					<li className='sidebarListItem'>Music</li>
				</ul>
			</div>
			<div className='sidebarItem'>
				<span className='sidebarTitle'>FOLLOW ME</span>
				<div className='sidebarSocials'>
					<i className="sidebarIcon fa-brands fa-square-github"></i>
					<i className="sidebarIcon fa-brands fa-linkedin"></i>
				</div>
			</div>
		</div>
	)
}