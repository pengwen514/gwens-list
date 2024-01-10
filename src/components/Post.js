import './post.css'
import { Link } from 'react-router-dom'

export default function Post(){
	return(
		<>
		<div className='post'>
			<img className='postImg' src='https://th.bing.com/th/id/OIP.a4lEh0zK2dmghg4nmpoRUAHaEk?rs=1&pid=ImgDetMain' alt=''></img>
			<div className='postInfo'>
				<div className='postCategories'>
					<span className='postCategory'>Travel</span>
					<span className='postCategory'>Food</span>
				</div>
				<Link to='/post/post:id' style={{textDecoration:'none', color:'inherit'}}><span className='postTitle'>My weekend in NYC</span></Link>
				<hr />
				<span className='postDate'>1 hour ago</span>
			</div>
			<p className='postDesc'>
				wordswordswordswordswordswordswordswordswordswordswords
				wordswordswordswordswordswordswordswordswordswordswords
				wordswordswordswordswordswordswordswordswordswordswords
				wordswordswordswords.
			</p>
		</div>
		<div className='post'>
		<img className='postImg' src='https://th.bing.com/th/id/OIP.a4lEh0zK2dmghg4nmpoRUAHaEk?rs=1&pid=ImgDetMain' alt='NYC'></img>
		<div className='postInfo'>
			<div className='postCategories'>
				<span className='postCategory'>Travel</span>
				<span className='postCategory'>Food</span>
			</div>
			<Link to='/post/post:id' style={{textDecoration:'none', color:'inherit'}}><span className='postTitle'>My weekend in NYC</span></Link>
			<hr />
			<span className='postDate'>1 hour ago</span>
		</div>
		<p className='postDesc'>
			wordswordswordswordswordswordswordswordswordswordswords
			wordswordswordswordswordswordswordswordswordswordswords
			wordswordswordswordswordswordswordswordswordswordswords
			wordswordswordswords.
		</p>
	</div>
	<div className='post'>
		<img className='postImg' src='https://th.bing.com/th/id/OIP.a4lEh0zK2dmghg4nmpoRUAHaEk?rs=1&pid=ImgDetMain' alt=''></img>
		<div className='postInfo'>
			<div className='postCategories'>
				<span className='postCategory'>Travel</span>
				<span className='postCategory'>Food</span>
			</div>
			<Link to='/post/post:id' style={{textDecoration:'none', color:'inherit'}}><span className='postTitle'>My weekend in NYC</span></Link>
			<hr />
			<span className='postDate'>1 hour ago</span>
		</div>
		<p className='postDesc'>
			wordswordswordswordswordswordswordswordswordswordswords
			wordswordswordswordswordswordswordswordswordswordswords
			wordswordswordswordswordswordswordswordswordswordswords
			wordswordswordswords.
		</p>
	</div>
	</>
	)
}