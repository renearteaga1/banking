import logo from '../bank-2.png';
import {useEffect} from 'react';

function Home() {
  useEffect(() => {
    document.title = 'BadBank';
  })
  return (
    <>
    <div className="py-2 bg-light">
      <h2>Welcome to Bad Bank</h2>
    </div>
    <div className="row mt-4">
    <h3 className="text-white mt-4">For all you needs</h3>
    </div>
    <div className="App-content">
      <img src={logo} className="img-fluid logo mb-3" alt="logo" />
        <p>
          The bank for you.
        </p>
      </div>
    </>
  )
}

export default Home;