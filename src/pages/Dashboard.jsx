import { Link } from 'react-router-dom';
import notes from '../data/notesData';
import courses from '../data/coursesData';
import user from '../data/userData';

const today = new Date();
const curHr = today.getHours();
let time = '';

if (curHr < 12) {
	time = 'Good morning';
} else if (curHr < 18) {
	time = 'Good afternoon';
} else {
	time = 'Good evening';
}

const Dashboard = () => {
	return (
		<div className='container'>
			<>
				{user.map((user) => (
					<p className='welcome-message'>
						{time} {user.firstname}!
					</p>
				))}
			</>
			<div className='card-grid'>
				<div className='card card-1'>
					<h3>Active Courses</h3>

					<div>
						{courses.map((courses) => (
							<div className='active-item'>
								<img
									src={courses.crest}
									alt='Brookstone Uni Crest'
								/>
								<div className='uni-name-wrap'>
									<p className='pill-text'>{courses.name}</p>
									<p>{courses.uni}</p>
								</div>
								<div className='active-assignments-wrap'>
									<p className='number'>{courses.overdue}</p>
									<p>Overdue Assignments</p>
								</div>
								<div className='active-assignments-wrap'>
									<p className='number'>{courses.absenses}</p>
									<p>Remaining Absenses</p>
								</div>
								<div className='active-assignments-wrap'>
									<p className='number'>{courses.averageGrade}</p>
									<p>Academic Average</p>
								</div>
							</div>
						))}
						;
					</div>
				</div>

				<div className='card card-2'>
					<h3>Upcoming Sessions</h3>
					<div className='upcoming-sub-titles'>
						<p>Date</p>
						<p>Class</p>
						<p>Time</p>
					</div>
					<div className='upcoming-grid'>
						<div className='upcoming-item'>
							<div className='upcoming-date'>
								<p className='upcoming-day'>Tomorrow</p>
								<p className='upcoming-title-number'>09</p>
								<p className='upcoming-title-month'>April</p>
							</div>
							<div className='upcoming-desc'>
								<p>Database and Information Systems</p>
								<p>Master of Computer Science</p>
							</div>
							<div className='pill-text'>08:30-12:00</div>
						</div>
						<div className='upcoming-item'>
							<div className='upcoming-date'>
								<p className='upcoming-day'>Wed</p>
								<p className='upcoming-title-number'>10</p>
								<p className='upcoming-title-month'>April</p>
							</div>
							<div className='upcoming-desc'>
								<p>AI and Machine Learning</p>
								<p>Master of Computer Science</p>
							</div>
							<div className='pill-text'>09:30-12:00</div>
						</div>
						<div className='upcoming-item'>
							<div className='upcoming-date'>
								<p className='upcoming-day'>Wed</p>
								<p className='upcoming-title-number'>10</p>
								<p className='upcoming-title-month'>April</p>
							</div>
							<div className='upcoming-desc'>
								<p>Definition & Ideation</p>
								<p>Certificate UX/UI Design</p>
							</div>
							<div className='pill-text'>15:30-19:00</div>
						</div>
					</div>
					<Link
						to='./courses'
						className='view-more-sessions'>
						See All Courses
					</Link>
				</div>

				<div className='card card-3'>
					<div className='week-image-wrap'>
						<img
							className='week-image'
							src='./images/homepage/ux-research.jpg'
							alt='man with post-it notes'
						/>
						<div className='week-banner'>
							<img
								src='./images/homepage/green-tick.svg'
								alt='Green tick icon'
							/>
							Checked In
						</div>
					</div>
					<div className='week-title-wrap'>
						<div className='week-title-text'>
							<h3>UX Research - Week 3</h3>
							<p>CERTIFICATE UX/UI design</p>
						</div>
						<div className='week-title-date'>
							<p className='week-title-number'>08</p>
							<p className='week-title-month'>April</p>
						</div>
					</div>
					<div className='week-status-wrap'>
						<div className='status-item'>
							<img
								src='./images/homepage/red-clock.svg'
								alt='red clock icon'
							/>
							<p>In progress</p>
						</div>
						<p>Join Now</p>
					</div>
				</div>

				<div className='card card-4'>
					<h3>Student Notes</h3>
					{/* TODO filter only 3 recent items */}
					{notes.map((notes) => (
						<div className='notes-item'>
							<div className='notes-date'>
								<p className='notes-day'>{notes.day}</p>
								<p className='notes-title-number'>{notes.date}</p>
								<p className='notes-title-month'>{notes.month}</p>
							</div>
							<div className='notes-desc'>
								<p>{notes.title}</p>
								<p>{notes.body}</p>
							</div>
							<Link
								to='./notes'
								className='primary-button'>
								View More
							</Link>
						</div>
					))}
					;
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
