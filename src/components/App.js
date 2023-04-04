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
                  <p className="number">A</p>
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
              <div className="active-item">
                <img src="./images/homepage/brookstone.svg" alt="Brookstone Uni Crest" />
                <div className="uni-name-wrap">
                  <p className="pill-text">UK Politics</p>
                  <p>University of Upstate at Brookstone</p>
                </div>
                <div className="active-assignments-wrap">
                  <p className="number">2</p>
                  <p>Overdue Assignments</p>
                </div>
                <div className="active-assignments-wrap">
                  <p className="number">1</p>
                  <p>Remaining Absenses</p>
                </div>
                <div className="active-assignments-wrap">
                  <p className="number">A</p>
                  <p>Academic Average</p>
                </div>
              </div>
            </div>

            <div className="card card-2">
            <h3>Upcoming Sessions</h3>
              <div className="upcoming-sub-titles">
                <p>Date</p>
                <p>Class</p>
                <p>Time</p>
              </div>
              <div className="upcoming-grid">
                <div className="upcoming-item">
                  <div className="upcoming-date">
                    <p className='upcoming-day'>Tomorrow</p>
                    <p className='upcoming-title-number'>09</p>
                    <p className='upcoming-title-month'>April</p>
                  </div>
                  <div className="upcoming-desc">
                    <p>Database and Information Systems</p>
                    <p>Master of Computer Science</p>
                  </div>
                  <div className="pill-text">08:30-12:00</div>
                </div>
                <div className="upcoming-item">
                  <div className="upcoming-date">
                    <p className='upcoming-day'>Wed</p>
                    <p className='upcoming-title-number'>10</p>
                    <p className='upcoming-title-month'>April</p>
                  </div>
                  <div className="upcoming-desc">
                    <p>AI and Machine Learning</p>
                    <p>Master of Computer Science</p>
                  </div>
                  <div className="pill-text">09:30-12:00</div>
                </div>
                <div className="upcoming-item">
                  <div className="upcoming-date">
                    <p className='upcoming-day'>Wed</p>
                    <p className='upcoming-title-number'>10</p>
                    <p className='upcoming-title-month'>April</p>
                  </div>
                  <div className="upcoming-desc">
                    <p>Definition & Ideation</p>
                    <p>Certificate UX/UI Design</p>
                  </div>
                  <div className="pill-text">15:30-19:00</div>
                </div>
              </div>
              <p className='view-more-sessions'>See All Sessions</p>
            </div>

            <div className="card card-3">
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

            <div className="card card-4">
              <h3>Student Notes</h3>
              <div className="notes-item">
                <div className="notes-date">
                  <p className='notes-day'>Wed</p>
                  <p className='notes-title-number'>10</p>
                  <p className='notes-title-month'>April</p>
                </div>
                <div className="notes-desc">
                  <p>JavaScript - Overview</p>
                  <p>JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2022, 98% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries.</p>
                </div>
                <button className="primary-button">View More</button>
              </div>
              {/* <div className="notes-item">
                <div className="notes-date">
                  <p className='notes-day'>Mon</p>
                  <p className='notes-title-number'>8</p>
                  <p className='notes-title-month'>April</p>
                </div>
                <div className="notes-desc">
                  <p>CSS3 - Grid</p>
                  <p>In Cascading Style Sheets, CSS grid layout or CSS grid creates complex responsive web design grid layouts more easily and consistently across browsers. Historically, there have been other methods for controlling web page layout methods, such as tables, floats, and more recently, CSS Flexible Box Layout.</p>
                </div>
                <button className="primary-button">View More</button>
              </div> */}
              <div className="notes-item">
                <div className="notes-date">
                  <p className='notes-day'>Tues</p>
                  <p className='notes-title-number'>7</p>
                  <p className='notes-title-month'>April</p>
                </div>
                <div className="notes-desc">
                  <p>CSS3 - Flexbox</p>
                  <p>CSS Flexible Box Layout, commonly known as Flexbox, is a CSS 3 web layout model. It is in the W3C's candidate recommendation stage. The flex layout allows responsive elements within a container to be automatically arranged depending on viewport size.</p>
                </div>
                <button className="primary-button">View More</button>
              </div>
              <div className="notes-item">
                <div className="notes-date">
                  <p className='notes-day'>Mon</p>
                  <p className='notes-title-number'>6</p>
                  <p className='notes-title-month'>April</p>
                </div>
                <div className="notes-desc">
                  <p>HTML5 - Overview</p>
                  <p>he term HTML5 is essentially a buzzword that refers to a set of modern web technologies. This includes the HTML Living Standard, along with JavaScript APIs to enhance storage, multimedia, and hardware access.</p>
                </div>
                <button className="primary-button">View More</button>
              </div>

            </div>

          </div>
        </div>
      </main>
    </>
  );
}

export default App;
