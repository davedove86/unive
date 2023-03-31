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
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem iusto hic numquam, veniam corrupti veritatis tempora possimus ipsam beatae atque sint, tenetur mollitia ea repellendus temporibus harum voluptates dignissimos ratione eius similique quasi! Nihil sit debitis, dolore ut alias facere dolores cum ex quasi, nobis quisquam ipsa quaerat, vero tempora?</p>

              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem iusto hic numquam, veniam corrupti veritatis tempora possimus ipsam beatae atque sint, tenetur mollitia ea repellendus temporibus harum voluptates dignissimos ratione eius similique quasi! Nihil sit debitis, dolore ut alias facere dolores cum ex quasi, nobis quisquam ipsa quaerat, vero tempora?</p>

              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem iusto hic numquam, veniam corrupti veritatis tempora possimus ipsam beatae atque sint, tenetur mollitia ea repellendus temporibus harum voluptates dignissimos ratione eius similique quasi! Nihil sit debitis, dolore ut alias facere dolores cum ex quasi, nobis quisquam ipsa quaerat, vero tempora?</p>
            </div>

            <div className="card card-2">
              <h3>UX Research - Week 3</h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem iusto hic numquam, veniam corrupti veritatis tempora possimus ipsam beatae atque sint, tenetur mollitia ea repellendus temporibus harum voluptates dignissimos ratione eius similique quasi! Nihil sit debitis, dolore ut alias facere dolores cum ex quasi, nobis quisquam ipsa quaerat, vero tempora?</p>
            </div>

            <div className="card card-3">
            <h3>Upcoming Sessions</h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem iusto hic numquam, veniam corrupti veritatis tempora possimus ipsam beatae atque sint, tenetur mollitia ea repellendus temporibus harum voluptates dignissimos ratione eius similique quasi! Nihil sit debitis, dolore ut alias facere dolores cum ex quasi, nobis quisquam ipsa quaerat, vero tempora?</p>
            </div>

            <div className="card card-4">
              <h3>Messages</h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem iusto hic numquam, veniam corrupti veritatis tempora possimus ipsam beatae atque sint, tenetur mollitia ea repellendus temporibus harum voluptates dignissimos ratione eius similique quasi! Nihil sit debitis, dolore ut alias facere dolores cum ex quasi, nobis quisquam ipsa quaerat, vero tempora?</p>

              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem iusto hic numquam, veniam corrupti veritatis tempora possimus ipsam beatae atque sint, tenetur mollitia ea repellendus temporibus harum voluptates dignissimos ratione eius similique quasi! Nihil sit debitis, dolore ut alias facere dolores cum ex quasi, nobis quisquam ipsa quaerat, vero tempora?</p>

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
