const Searchbar = () => (
  <section className='searchbar'>
    <div className="searchbar-flex">
      <div className="searchbar-left">
        <div className="search-wrap">
          <img src="./images/search-bar/mag.svg" alt="magnifying glass icon" />
          <input type="text" placeholder='Search course, student or instructor' />
        </div>
      </div>
      <div className="searchbar-right">
        <div className="searchbar-divider"></div>
        <div className="icon-wrap">
          <img src="./images/search-bar/message-icon.svg" alt="Message icon" />
          <img src="./images/search-bar/bell-icon.svg" alt="Notifications icon" />
        </div>
        <div className="student-profile">
          <img src="./images/search-bar/student-photo.png" alt="student profile" />
          <div className="student-name">
            <p className='name'>Mia V</p>
            <p>Student</p>
          </div>
        </div>
      </div>
    </div>
  </section>

);

export default Searchbar
