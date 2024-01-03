import React from 'react'
import Taskbar from './components/Taskbar';
import Home from './pages/home/Home';
import Single from './pages/single/Single';
import Write from './pages/write/Write';
import Settings from './pages/settings/Settings';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom"

function App() {
	return (
		<Router>
			<Taskbar />
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path='/register' element={<Register />} />
				<Route path='/login' element={<Login />} />
				<Route path='/write' element={<Write />} />
				<Route path='/settings' element={<Settings />} />
				<Route path='/post' element={<Single />} />
			</Routes>
		</Router>
	);
}

export default App;
