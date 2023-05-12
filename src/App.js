import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Searchbar from './components/Searchbar';
import Dashboard from './pages/Dashboard';
import Courses from './pages/Courses';
import Calendar from './pages/Calendar';
import Notes from './pages/Notes';
import Grades from './pages/Grades';
import Attendance from './pages/Attendance';
import Settings from './pages/Settings';
import Notifications from './pages/Notifications';
import Messages from './pages/Messages';
import Profile from './pages/Profile';

function App() {
	return (
		<>
			<Router>
				<Header />
				<Searchbar />
				<main>
					<Routes>
						<Route
							path='/'
							element={<Dashboard />}></Route>
						<Route
							path='/courses'
							element={<Courses />}></Route>
						<Route
							path='/calendar'
							element={<Calendar />}></Route>
						<Route
							path='/notes'
							element={<Notes />}></Route>
						<Route
							path='/grades'
							element={<Grades />}></Route>
						<Route
							path='/attendance'
							element={<Attendance />}></Route>
						<Route
							path='/settings'
							element={<Settings />}></Route>
						<Route
							path='/notifications'
							element={<Notifications />}></Route>
						<Route
							path='/messages'
							element={<Messages />}></Route>
						<Route
							path='/profile'
							element={<Profile />}></Route>
					</Routes>
				</main>
			</Router>
		</>
	);
}

export default App;
