import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import logo from '../../logo.svg';
import './challenges.css';
import Status from '../../components/alert';

function ChallengeFive() {
    const [status, setStatus] = useState('');
    const [activeForm, setActiveForm] = useState('1');
    const navigate = useNavigate();
    const formRef = useRef(null);
    const formTwoRef = useRef(null);
    const selectRef = useRef(null);
    const buttonRef = useRef(null);

    useEffect(() => {
        document.title = "Fillig out forms";
        selectRef.current.disabled = true;
        buttonRef.current.disabled = true;

        console.log(selectRef.current);
    }, [])
    
    function setMessage(msg) {
        setStatus(msg)
    }

    const isRadioChecked = (radios) => {
            for (let i = 0; i < radios.length; i++) {
                if(radios[i].checked) { return true }
            }
    }

    function checkForm(e) {
        e.preventDefault();
        const form = activeForm === '1' ? formRef : formTwoRef;
        const last = form.current.querySelector('[name="last"]').value;
        const tel = form.current.querySelector('[name="tel"]').value;

        const validName = form.current.querySelector('[name="name"]').value.match(/^[a-zA-Z]{3,16}$/);
        const validEmail = form.current.querySelector('[name="email"]').value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
        const radios = form.current.querySelectorAll('[name="gender"]');

        if(last || tel) {
            setMessage('Please fill out only the required fileds')
        } else if (!validName) {
            setMessage('Please follow the name instructions')
        } else if (!validEmail) {
            setMessage('Please provide a valid email')
        } else if (!isRadioChecked(radios)) {
            setMessage('You must check at least one gender option')
        } else {
            if(activeForm === '1') {
                setActiveForm('2');
                setMessage('Great! Now please confirm your details. Remember, you should only fill out the requiered fields')
                formTwoRef.current.focus()
            } else {
                setMessage('You are the best! Now go to the "Which success criterion" select field and choose the violated success criterion. To complete the challenge press the "I\'m done" button.')
                selectRef.current.disabled = false;
                buttonRef.current.disabled = false;
            }
        }
    }

    function checkAnswers(e) {
        const answer = selectRef.current.value;
        switch (answer) {
            case "1":
                setMessage('Hmmmm..... No, try again')
                return;
            case "2":
                setMessage('Did you drag something? Don\'t guess please.')
                return;
            case "3":
                setMessage('Close, but no.')
                return;
            case "4":
                setMessage('Two thumbs up and fireworks in the sky. You did it!');
                setTimeout(() => {
                    return navigate("/end");
                }, 5000);
                break;
            case "5":
                setMessage('Good thinking, but not accurate')
                return;
        }
        
    }

    return (
        <div className="App">
            <div className="screener" aria-hidden="true">
                <img src={logo} className="App-logo" />
                <h1>Challenge V <br /> Fillig out forms</h1>
            </div>
            <Status msg={status} />
            <h1>Fillig out forms</h1>
            <main>
                <section aria-labelledby="insructions_heading">
                    <h2 id="insructions_heading">Instructions for challenge five</h2>
                        <p>
                            This page contains a form. On the first step you should fill out only the required fields. 
                            After submitting the form there will be a violation of a new WCAG 2.2 success criterion. 
                            Complete all the rest of the process, this will make the "Which success criterion?" select element enabled.
                            Choose the success criterion violated on the select element and click the "I'm done" button to complete the challenge.
                        </p>
                </section>

                <section>
                   
                </section>
                <form ref={formRef}>
                    <fieldset>
                        <legend>Your details</legend>
                        <input type="text" name="name" aria-label="First name" pattern="[a-zA-Z]{3,16}" required aria-describedby="name_instructions" />
                        <div id="name_instructions" aria-hidden="true">Name should be three to sixteen characters. Numbers and symbols are not allowed</div>
                        <br />
                        <input type="text" name="last" aria-label="Last name" />
                        <br />
                        <input type="email" name="email" aria-label="Email address" required />
                        <br />
                        <input type="tel" name="tel" aria-label="Telephone number" />
                        <br />
                    </fieldset>
                    <fieldset>
                        <legend>Gender</legend>
                        <input type="radio" name="gender" aria-label="male" required />
                        <input type="radio" name="gender" aria-label="female" required />
                        <input type="radio" name="gender" aria-label="I prefer not to answer" required />
                    </fieldset>
                    <button type="submit" onClick={(e)=> checkForm(e, 1)}>
                        Submit your details
                    </button>
                </form>
                <form ref={formTwoRef} style={{display: activeForm === '1' ? 'none' : 'block' }} tabIndex="-1">
                    <fieldset>
                        <legend>Confirm details</legend>
                        <input type="text" name="name" aria-label="First name" pattern="[a-zA-Z]{3,16}" required aria-describedby="name_instructions" />
                        <div id="name_instructions" aria-hidden="true">Name should be three to sixteen characters. Numbers and symbols are not allowed</div>
                        <br />
                        <input type="text" name="last" aria-label="Last name" />
                        <br />
                        <input type="email" name="email" aria-label="Email address" required />
                        <br />
                        <input type="tel" name="tel" aria-label="Telephone number" />
                        <br />
                    </fieldset>
                    <fieldset>
                        <legend>Gender</legend>
                        <input type="radio" name="gender" aria-label="male" required />
                        <input type="radio" name="gender" aria-label="female" required />
                        <input type="radio" name="gender" aria-label="I preffer not to answer" required />
                    </fieldset>
                    <button type="submit" onClick={(e)=> checkForm(e)}>
                        Confirm your details
                    </button>
                </form>
                <select ref={selectRef}>
                    <option value="" selected disabled>Select the violated success criterion</option>
                    <option value="1">
                        2.4.11 Focus Not Obscured (Minimum)
                    </option>
                    <option value="2">
                        2.5.7 Dragging Movements
                    </option>
                    <option value="3">
                        3.2.6 Consistent Help
                    </option>
                    <option value="4">
                        3.3.7 Redundant Entry
                    </option>
                    <option value="5">
                        3.3.8 Accessible Authentication (Minimum)
                    </option>
                </select>
                <button ref={buttonRef} onClick={()=>checkAnswers()}>I'm done</button>
            </main>
        </div>
  );
}

export default ChallengeFive;