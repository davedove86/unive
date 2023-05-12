import { Link } from 'react-router-dom';
import {
	BiGridAlt,
	BiBookAlt,
	BiDetail,
	BiCalendar,
	BiUserCheck,
	BiCog,
	BiStar,
} from 'react-icons/bi';

const Header = () => (
	<header>
		<div className='header-container'>
			<div className='logo-wrap'>
				<img
					src='./images/header/unive-logo.svg'
					alt='Unive Logo'
				/>
				<p>Unive</p>
			</div>
			<nav>
				<ul>
					<li className='link'>
						<BiGridAlt />
						<Link to='/'>Dashboard</Link>
					</li>
					<li className='link'>
						<BiBookAlt />
						<Link to='/courses'>Courses</Link>
					</li>
					<li className='link'>
						<BiCalendar />
						<Link to='/calendar'>Calendar</Link>
					</li>
					<li className='link'>
						<BiDetail />
						<Link to='/notes'>Notes</Link>
					</li>
					<li className='link'>
						<BiStar />
						<Link to='/grades'>Grades</Link>
					</li>
					<li className='link'>
						<BiUserCheck />
						<Link to='/attendance'>Attendance</Link>
					</li>
					<li className='link'>
						<BiCog />
						<Link to='/Settings'>Settings</Link>
					</li>
				</ul>
			</nav>
		</div>
	</header>
);

export default Header;
