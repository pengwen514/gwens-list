import './home.css'
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import Posts from '../../components/Posts'

export default function Home() {
	return (
		<>
			<Header />
			<div className='home'>
				<Posts />
				<Sidebar />
			</div>
		</>
	)
}