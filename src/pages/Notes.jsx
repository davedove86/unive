import data from '../sampleData';
import studentName from './Dashboard';

const Notes = () => {
	return (
		<div className='container'>
			<h1>{studentName}'s Notes</h1>
			<br />
			<div className='card-grid'>
				{data.map((data) => (
					<div className='card'>
						<p className='notes-day'>{data.day}</p>
						<p className='notes-title-number'>{data.date}</p>
						<p className='notes-title-month'>{data.month}</p>
						<div className='notes-desc'>
							<p>{data.title}</p>
							<p>{data.body}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Notes;
