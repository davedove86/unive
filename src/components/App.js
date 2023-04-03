import Header from './Header';
import Searchbar from './Searchbar';

const studentName = 'Mia'

function App() {
  return (
    <>
      <Header />
      <Searchbar />
      <main>
        <div className="container">
          <p className='welcome-message'>Hello, {studentName}!</p>
          <div className="card-grid">
            <div className="card card-1">
              <h3>Active Programs</h3>

              <div className="active-item">
                <img src="./images/homepage/brookstone.svg" alt="Brookstone Uni Crest" />
                <div className="uni-name-wrap">
                  <p className="pill-text">Master of Computer Science</p>
                  <p>University of Upstate at Brookstone</p>
                </div>
                <div className="active-assignments-wrap">
                  <p className="number">1</p>
                  <p>Overdue Assignments</p>
                </div>
                <div className="active-assignments-wrap">
                  <p className="number">5</p>
                  <p>Remaining Absenses</p>
                </div>
                <div className="active-assignments-wrap">
                  <p className="number">A-</p>
                  <p>Academic Average</p>
                </div>
              </div>
              <div className="active-item">
                <img src="./images/homepage/dursburg.svg" alt="Dursburg Uni Crest" />
                <div className="uni-name-wrap">
                  <p className="pill-text">CERTIFICATE UX/UI design</p>
                  <p>Academy of Art and Technology at Dursburg</p>
                </div>
                <div className="active-assignments-wrap">
                  <p className="number">0</p>
                  <p>Overdue Assignments</p>
                </div>
                <div className="active-assignments-wrap">
                  <p className="number">6</p>
                  <p>Remaining Absenses</p>
                </div>
                <div className="active-assignments-wrap">
                  <p className="number">B</p>
                  <p>Academic Average</p>
                </div>
              </div>
            </div>

            <div className="card card-2">
              <div className="week-image-wrap">
                <img class="week-image" src="./images/homepage/ux-research.jpg" alt="man with post-it notes" />
                <div className="week-banner">
                  <img src="./images/homepage/green-tick.svg" alt="Green tick icon" />
                  Checked In
              </div>

              </div>
              <div className="week-title-wrap">
                <div className="week-title-text">
                  <h3>UX Research - Week 3</h3>
                  <p>CERTIFICATE UX/UI design</p>
                </div>
                <div className="week-title-date">
                  <p className='week-title-number'>08</p>
                  <p className='week-title-month'>April</p>
                </div>
              </div>
              <div className="week-status-wrap">
                <div className="status-item">
                  <img src="./images/homepage/red-clock.svg" alt="red clock icon" />
                  <p>In progress</p>
                </div>
                <p>Join Now</p>
              </div>
            </div>

            <div className="card card-3">
            <h3>Upcoming Sessions</h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem iusto hic numquam, veniam corrupti veritatis tempora possimus ipsam beatae atque sint, tenetur mollitia ea repellendus temporibus harum voluptates dignissimos ratione eius similique quasi! Nihil sit debitis, dolore ut alias facere dolores cum ex quasi, nobis quisquam ipsa quaerat, vero tempora?</p>
            </div>

            <div className="card card-4">
              <h3>Messages</h3>

              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem iusto hic numquam, veniam corrupti veritatis tempora possimus ipsam beatae atque sint, tenetur mollitia ea repellendus temporibus harum voluptates dignissimos ratione eius similique quasi! Nihil sit debitis, dolore ut alias facere dolores cum ex quasi, nobis quisquam ipsa quaerat, vero tempora?</p>

              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem iusto hic numquam, veniam corrupti veritatis tempora possimus ipsam beatae atque sint, tenetur mollitia ea repellendus temporibus harum voluptates dignissimos ratione eius similique quasi! Nihil sit debitis, dolore ut alias facere dolores cum ex quasi, nobis quisquam ipsa quaerat, vero tempora?</p>
            </div>

          </div>
        </div>
      </main>
    </>
  );
}

export default App;
