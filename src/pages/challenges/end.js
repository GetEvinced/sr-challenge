import logo from '../../logo.svg';
import './challenges.css';

function End() {
  return (
    <div className="home">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="" />
        <h1>You Are Awesome! <span aria-hidden="true">&nbsp;&nbsp;&nbsp;🎉</span></h1>
      </header>
      <main>
        <p>
            You have completed successfuly the screen reader challenge!
            <br />
            So, what's next?    
        </p>
        <ul>
            <li>Did you take the challenge on a computer? Try taking it now on mobile</li>
            <li>Too easey? Try <a
                className="App-link"
                href="https://www.smashingmagazine.com/2018/12/voiceover-screen-reader-web-apps/"
                target="_blank"
                rel="noopener noreferrer"
              >using the web for a day using a screen reader</a>
            </li>
            <li>
                Too hard? Practice makes perfect!
            </li>
        </ul>
        </main>
  </div>
  );
}

export default End;
