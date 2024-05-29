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
        You are now starting the screen reader challenge, in the next five pages you will have to complete tasks using only a screen reader. 
        <br />
        You can progress between the pages only when you have completed the challenge of the page you are on. 
        <br />
        Try to experiment with the different browsing methods we talked about and which appear in the documents in the links below. 
        <br />
        From the moment you click on the "let's get started" link, the only prompt you will receive will be a voice.
        <br />
        <strong>Note:</strong> You must not open the dev-tools to get hints!
        <br/><br/>
        <strong>Good luck!</strong>
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
              <li>
                <a 
                  className="App-link"
                  href="https://docs.google.com/presentation/d/1oNhi3o_M489Lxmj_SxlGquw1eLQxk03bKdQOzPLyxt8/edit?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Android TalkBack Fundamentals (slides)
                </a>
              </li>
              <li>
                <a 
                  className="App-link"
                  href="https://docs.google.com/presentation/d/1Ps0WJ1agjKwGwYxgElNxFpC4Y6cocKCOjKRVeJGoCIU/edit?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  VoiceOver for iOS Fundamentals (slides)
                </a>
              </li>
              <li>
                <a target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.nvaccess.org/files/nvdaTracAttachments/455/keycommands%20with%20laptop%20keyboard%20layout.html"
                >
                  NVDA command key quick reference
                </a>
              </li>
            <li>
              <a target="_blank"
                rel="noopener noreferrer"
                href="https://support.apple.com/en-il/guide/voiceover/cpvokys01/mac"
              >
                VoiceOver general commands on Mac
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
