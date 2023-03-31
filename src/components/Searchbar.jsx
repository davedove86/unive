const Searchbar = () => (
  <section className='searchbar'>
    <div className="searchbar-flex">
      <div className="searchbar-left">
        <div className="search-wrap">
          <img src="./images/search-bar/mag.svg" alt="" />
          <input type="text" placeholder='Search course, student or instructor' />
        </div>
      </div>
      <div className="searchbar-right">
        <div className="searchbar-divider"></div>
        <div className="icon-wrap">
          <img src="./images/search-bar/message-icon.svg" alt="" />
          <img src="./images/search-bar/bell-icon.svg" alt="" />
        </div>
        <div className="student-profile">
          <img src="./images/search-bar/student-photo.png" alt="" />
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
