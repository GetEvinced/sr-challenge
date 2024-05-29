import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import logo from '../../logo.svg';
import './challenges.css';
import Status from '../../components/alert';

function ChallengeThree() {
    const [status, setStatus] = useState('');
    const navigate = useNavigate();
    const answersRef = useRef(null);

    useEffect(() => {
        document.title = "";
    }, [])
    
    function setMessage(msg) {
        setStatus(msg)
    }

    function checkAnswers(e) {
        e.preventDefault();
        const a = answersRef.current.querySelectorAll('input')
        const isChecked = [];
        for (let i = 0; i < a.length; i++) {
            if(a[i].checked === true) {
                isChecked.push(a[i]);
            }
        }

        if(isChecked.length < 1) {
            setMessage('You must check one answe.');
        } else if (isChecked[0].value === "four") {
            setMessage('You are WCAG ninja! Please wait for five seconds and you\'ll be moved to the next challenge');

            setTimeout(() => {
                return navigate("/find-information");
            }, 5000);
        } else {
            setMessage('You got wrong answer. Please try again.');
        }
        
    }

    return (
        <div className="App">
            <div className="screener" aria-hidden="true">
                <img src={logo} className="App-logo" />
                <h1>Challenge III <br /> Identify WCAG violations</h1>
            </div>
            <Status msg={status} />
            <h1>Identify WCAG violations</h1>
            <main>
                <section aria-labelledby="insructions_heading">
                    <h2 id="insructions_heading">Instructions for challenge one</h2>
                        <p>
                            This page violates several WCAG success criteria. Your task is to identify how many criteria fail on the page. 
                            Set your answer on the radio group at the end of the page.
                        </p>
                        <p>
                            You can receive bonus points if you identify which criteria are violated.
                        </p>
                        <img src={logo} className="App-logo" />
                        <p>
                            After this paragraph there are five buttons. Click the second button from the right to get the answer. 
                        </p>
                </section>

                <section>
                    <div className="buttons-mixed">
                        <button onClick={()=> setMessage('Sorry. You got it wrong')}>
                            Try Me!
                        </button>
                        <div role="button" onClick={()=> setMessage('Nope. Try again')}>
                            It's me
                        </div>
                        <button onClick={()=> setMessage('There are five WCAG violations on this page')}>
                            I am the one that you are looking for
                        </button>
                        <button onClick={()=> setMessage('Ha, Ha. Fooled you!')}>
                            Click me. You won't regret it.
                        </button>
                        <button onClick={()=> setMessage('Bazinga!')}>
                            It might be me
                        </button>
                    </div>
                    <p>
                        A hint for the bonus question: All the violated criteria are from level A.
                    </p>
                </section>
                <form>
                    <fieldset ref={answersRef}>
                        <legend>Your answers</legend>
                        <input type="radio" name="answers" value="one" aria-label="Two WCAG violations" />
                        <input type="radio" name="answers" value="two" aria-label="Eleven WCAG violations" />
                        <input type="radio" name="answers" value="three" aria-label="No WCAG violations" />
                        <input type="radio" name="answers" value="four" aria-label="Five WCAG violations" />
                        <input type="radio" name="answers" value="five" aria-label="There are so many that I can't count them" />
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

export default ChallengeThree;