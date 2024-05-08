import logo from '../../logo.svg';
import './App.css';

function Home() {
  return (
    <div className="home">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="" />
        <h1>Welcome to Evinced's GAAD 2024 <br /> Screen Reader Challenge</h1>

        
      </header>
      <main>
      <p>
          instructions here
        </p>
        <div>
          <h2>Useful links</h2>
          <div>
          <ul>
            <li>
            <a
          className="App-link"
          href="https://get-evinced.com/blog/screen-readers-101-for-front-end-developers-windows/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Screen Readers 101 For Front-End Developers (Windows)
        </a>
            </li>
            <li>
            <a
          className="App-link"
          href="https://get-evinced.com/blog/screen-readers-101-for-front-end-developers-mac/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Screen Readers 101 For Front-End Developers (Mac)
        </a>
            </li>
          </ul>
        Start your screen reader now, and <a href="/button-semantics">let's start</a>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
