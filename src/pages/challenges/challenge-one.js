import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import logo from '../../logo.svg';
import './challenges.css';
import Status from '../../components/alert';

function ChallengeOne() {
    const [status, setStatus] = useState('');
    const navigate = useNavigate();
    const answersRef = useRef(null);

    useEffect(() => {
        document.title = "Challenge one, Identify controls";
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
        const isCorrect = (isChecked[0].value === 'one' || isChecked[0].value === 'five') && (isChecked[1].value === 'one' || isChecked[1].value === 'five');
        if(!isCorrect) {
            if(isChecked.length < 2) {
                setMessage('You must check two options.');
            } else {
                setMessage('You got wrong answer. Please try again.');
            }
        } else {
            setMessage('Nice! You are spot on. Please wait for five seconds and you\'ll be moved to the next challenge');

            setTimeout(() => {
                return navigate("/stevie-song");
            }, 5000);
        }
        
    }

    return (
        <div className="App">
            <div className="screener" aria-hidden="true">
                <img src={logo} className="App-logo" />
                <h1>Challenge I <br />Identify controls</h1>
            </div>
            <Status msg={status} />
            <h1>Identify controls</h1>
            <main>
                <section aria-labelledby="insructions_heading">
                    <h2 id="insructions_heading">Instructions for challenge one</h2>
                        <p>
                            In this screen there are five buttons named “click me, one to five”, 
                            only two of them are valid accessible buttons. 
                            Your task is to find and identify the two valid buttons, 
                            then find the “Answers” checkbox group and mark which are the the valid buttons, 
                            then you should find the “Submit your answer” button and press it to move to the next challenge.
                        </p>
                        <p>
                            Remember valid buttons must: 1. Have an accessible name, 2. Have a propper button semantics, 3. Can be reached to and operated with a keyboard
                        </p>
                </section>

                <section className="buttons">
                    <div role="button" aria-label="Click me One" tabIndex="0"onClick={()=> setMessage('This is a valid aria button')}>
                        Click me One
                    </div>
                    <div role="button" onClick={()=> setMessage('This one has a role of a button but doesn\'t have a tab intex attribute')}>
                        Click me Two
                    </div>
                    <div>
                        <span>Click me Three</span>
                        <button onClick={()=> setMessage('This button has no accessible name, the text is comeing from a san next to it')}></button>
                    </div>
                    <div aria-label="Click me Four, button" tabIndex="0" onClick={()=> setMessage('This one has no button semantics')}>
                        Click me Four
                    </div>
                    <button onClick={()=> setMessage('This is a valid semantic button')}>
                        Click me Five
                    </button>
                </section>
                <form>
                    <fieldset ref={answersRef}>
                        <legend>Your answers</legend>
                        <input type="checkbox" name="answers" value="one" aria-label="Click me One" />
                        <input type="checkbox" name="answers" value="two" aria-label="Click me Two" />
                        <input type="checkbox" name="answers" value="three" aria-label="Click me Three" />
                        <input type="checkbox" name="answers" value="four" aria-label="Click me Four" />
                        <input type="checkbox" name="answers" value="five" aria-label="Click me Five" />
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

export default ChallengeOne;