import notesData from '../data/notesData';
import user from '../data/userData';

const Notes = () => {
	return (
		<div className='container'>
			<>
				{user.map((user) => (
					<h1>{user.firstname}'s Notes!</h1>
				))}
			</>
			<br />
			<div className='card-grid'>
				{notesData.map((notesData) => (
					<div className='card'>
						<p className='notes-day'>{notesData.day}</p>
						<p className='notes-title-number'>{notesData.date}</p>
						<p className='notes-title-month'>{notesData.month}</p>
						<div className='notes-desc'>
							<p>{notesData.title}</p>
							<p>{notesData.body}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Notes;
