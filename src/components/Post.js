import './post.css'

export default function Post(){
	return(
		<div className='post'>
			<img className='postImg' src='https://th.bing.com/th/id/OIP.a4lEh0zK2dmghg4nmpoRUAHaEk?rs=1&pid=ImgDetMain' alt='NYC'></img>
			<div className='postInfo'>
				<div className='postCategories'>
					<span className='postCategory'>Travel</span>
					<span className='postCategory'>Food</span>
				</div>
				<span className='postTitle'>My weekend in NYC</span>
				<hr />
				<span className='postDate'>1 hour ago</span>
			</div>
		</div>
	)
}