import { Link } from 'react-router-dom';
import { BiBell, BiMessageRounded } from 'react-icons/bi';

const Searchbar = () => (
	<section className='searchbar'>
		<div className='searchbar-flex'>
			<div className='searchbar-left'>
				<div className='search-wrap'>
					<img
						src='./images/search-bar/mag.svg'
						alt='magnifying glass icon'
					/>
					<input
						type='text'
						placeholder='Search course, student or instructor'
					/>
				</div>
			</div>
			<div className='searchbar-right'>
				<div className='searchbar-divider'></div>
				<div className='icon-wrap'>
					<Link to='/notifications'>
						<BiBell
							style={{
								color: 'white',
								fontSize: '23px',
								backgroundColor: '#5855d6',
								borderRadius: '50%',
								padding: '6px',
							}}
						/>
					</Link>
					<Link to='/messages'>
						<BiMessageRounded
							style={{
								color: 'white',
								fontSize: '23px',
								backgroundColor: '#5855d6',
								borderRadius: '50%',
								padding: '6px',
							}}
						/>
					</Link>
				</div>
				<Link to='/profile'>
					<div className='student-profile'>
						<img
							src='./images/search-bar/student-photo.png'
							alt='student profile'
						/>
						<div className='student-name'>
							<p className='name'>Mia V</p>
							<p>Student</p>
						</div>
					</div>
				</Link>
			</div>
		</div>
	</section>
);

export default Searchbar;
