import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import logo from '../../logo.svg';
import './challenges.css';
import Status from '../../components/alert';

function ChallengeFour() {
    const [status, setStatus] = useState('');
    const navigate = useNavigate();
    const answersRef = useRef(null);

    useEffect(() => {
        document.title = "Scan and find information with a screen reader";
    }, [])
    
    function setMessage(msg) {
        setStatus(msg)
    }

    function checkAnswers(e) {
        e.preventDefault();
        const a = answersRef.current.value;

        if(a.trim() === '1986') {
            setMessage('Awesome! 1986, that\'s correct.');

            setTimeout(() => {
                return navigate("/fill-forms");
            }, 5000);
        } else {
            setMessage('Sorry, that\'s not the answer. A hint: George Orwell + 2');
        }
        
    }

    return (
        <div className="App">
            <div className="screener" aria-hidden="true">
                <img src={logo} className="App-logo" />
                <h1>Challenge IV <br /> Scan and find information <br /> with a screen reader</h1>
            </div>
            <Status msg={status} />
            <h1>Scan and find information with a screen reader</h1>
            <main>
                <section aria-labelledby="insructions_heading">
                    <h2 id="insructions_heading">Instructions for challenge four</h2>
                        <p>
                            This challenge is designed to illustrate the difficulties of scanning and finding information with a screen reader. 
                            On this page, there is an article about screen readers; 
                            the article indicates the year the first screen reader was invented. 
                            Find the year and enter it in the "answer" input field. The answer should be in full-year format, i.e., 2024, not 24.
                        </p>
                </section>

                <section>
                   
                    <p>
                        A screen reader is a form of assistive technology that renders text and image content as speech or braille output. 
                        Screen readers are essential to people who are blind, 
                        and are useful to people who are visually impaired, illiterate, 
                        or have a learning disability. 
                        Screen readers are software applications that attempt to convey what people with normal eyesight see on a display to their users via non-visual means, 
                        like text-to-speech, sound icons, or a braille device. 
                        They do this by applying a wide variety of techniques that include, for example, 
                        interacting with dedicated accessibility APIs, 
                        using various operating system features (like inter-process communication and querying user interface properties), 
                        and employing hooking techniques.
                    </p>
                    <p>
                        Screen readers can query the operating system or application for what is currently being displayed and receive updates when the display changes. 
                        For example, a screen reader can be told that the current focus is on a button and the button caption to be communicated to the user. 
                        This approach is considerably easier for the developers of screen readers, 
                        but fails when applications do not comply with the accessibility API: for example, 
                        Microsoft Word does not comply with the MSAA API, 
                        so screen readers must still maintain an off-screen model for Word or find another way to access its contents. 
                        One approach is to use available operating system messages and application object models to supplement accessibility APIs.
                    </p>
                    <p>
                        IBM Researcher and Accessibility Pioneer, Jim Thatcher, 
                        created the first screen reader in 1986. 
                        The IBM Screen Reader worked with the text-based Desktop Operating System (DOS). 
                        It was initially only available within IBM. 
                        Jim and his team continued development and released IBM Screen Reader/2 to work with graphical operating systems such as Windows 95 and IBM OS/2.
                    </p>
                    <p>
                        There is screen reader support for all common operating systems. Most support multiple languages.
                    </p>
                    <p>
                        Each year since 2009, WebAIM surveys the preferences of screen reader users. 
                        The 2019 results show that the predominant screen readers for desktop and laptop usage are NVDA, JAWS, and VoiceOver. 
                        Respondents with disabilities primarily use JAWS and NVDA. 
                        VoiceOver on iOS is the dominant screen reader for mobile.
                    </p>
                    <p>
                        Using a screen reader proficiently requires practice and dedication. 
                        There are many keyboard commands required to navigate web pages quickly and efficiently. 
                        Each screen reader has a different operating structure and set of commands. 
                        All have many configuration options to suit the user’s preferences and needs. 
                        These include voice selection, reading speed, punctuation announcement, 
                        and other verbosity settings. 
                        Each user has different strategies and techniques for navigating the web and controlling their devices.
                    </p>
                </section>
                <form>
                    <fieldset>
                        <legend>Your answer</legend>
                        <input type="text" name="answers" aria-label="On what year screen reader was invented?"  ref={answersRef} />
                        <br />
                        <button onClick={(e) => checkAnswers(e)} type="button">
                            Submit your answer
                        </button>
                    </fieldset>
                </form>
            </main>
        </div>
  );
}

export default ChallengeFour;