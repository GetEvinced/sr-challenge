import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import logo from '../../logo.svg';
import './challenges.css';
import Status from '../../components/alert';

function ChallengeTwo() {
    const [status, setStatus] = useState('');
    const navigate = useNavigate();
    const answersRef = useRef(null);

    useEffect(() => {
        document.title = "Challenge two, Which Stevie Wonder song?";
    }, [])
    
    function setMessage(msg) {
        setStatus(msg)
    }

    function checkAnswers(e) {
        e.preventDefault();
        const a = answersRef.current.value

        if(a === "") {
            setMessage('You must select an options.');
 
        } else if (a !== "3") {
            setMessage('You got a wrong answer. Please try again.');
        } else {
            setMessage('That\'s correct. You rock! Please wait for five seconds and you\'ll be moved to the next challenge');

            setTimeout(() => {
                return navigate("/challenge-three");
            }, 5000);
        }
        
    }

    return (
        <div className="App">
            <div className="screener" aria-hidden="true">
                <img src={logo} className="App-logo" />
                Challenge II <br />Which Stevie Wonder song?
            </div>
            <Status msg={status} />
            <h1>Which Stevie Wonder song?</h1>
            <main>
                <section aria-labelledby="insructions_heading">
                    <h2 id="insructions_heading">Instructions for challenge two</h2>
                        <p>
                            The level three headings on this page make up the first verse and chorus of a well-known Stevie Wonder song. 
                            Your task is to identify the song and mark it in the selection element on the page. 
                            Please note the page also hides a bonus challenge. 
                            If you were born after 1980, you can use Google to identify the song.
                        </p>
                </section>

                <section>
                    <h3>And the rosebuds know to bloom in early May</h3> 
                    <p>
                        In an interview with Larry King, Stevie Wonder stated that he wasn’t born blind. A major cause of Wonder’s blindness was an overabundance of oxygen he experienced as an infant in a hospital incubator. This was an accident on the part of the hospital, which coupled with being six weeks premature resulted in Wonder becoming permanently blind.
                    </p>
                    <h3>Just as hate knows love's the cure</h3> 
                    <p>
                        On August 6, 1973, Stevie Wonder was in a car accident. The crash left Wonder in a coma for four days and ultimately resulted in him losing both his sense of smell and taste for a short time. In a twist of fate, exactly 15 years later on to the date, Wonder was gifted with a son named Kwame.
                    </p>
                    <h3>You can rest your mind assure</h3> 
                    <p>
                        In the 59 years since, no one has come close to the record Stevie Wonder achieved when he was only 13. As Little Stevie Wonder, his song, “Fingertips – Part 2”, reached  number 1 on the Billboard Top 100, making him the youngest artist to do so. The track simultaneously became the number 1 R and B song in the country.
                    </p>
                    <h3>That I'll be loving you always</h3> 
                    <p>
                        Around the time of Channel Orange, many music critics and fans were comparing Frank Ocean to Wonder, as they were both R and B proteges that sought to change the world through music. When the two met at a party, Wonder sang “No Church in the Wild” back to Ocean. The song was a collaboration off the album Watch the Throne, where Ocean provided a stellar hook for hip-hop’s current titans, Jay-Z and Kanye West.
                    </p>
                    <h3>As now can't reveal the mystery of tomorrow</h3> 
                    <p>
                        Synthesizers have become the norm in popular music over the past 50 years. If you’re listening to the latest pop or EDM hit, chances are there are a variety of synths at work. However, the synthesizer wasn’t always regarded as a legitimate instrument. In a 1972 interview from Rock’s Backpages, Wonder had to defend his own use of the new technology stating, “A lot of people don’t consider the Moog an instrument, in a sense, and they feel it’s gonna take a lot of work away from musicians and all that. But I feel it is an instrument and is a way to directly express what comes from your mind. It gives you so much of a sound in the broader sense.”
                    </p>
                    <h3>But in passing, will grow older every day</h3> 
                    <p>
                        “Superstition” is one of Wonder’s best and most popular songs. For that reason, it’s not a surprise he performed the track on Sesame Street. However, what is surprising is how intact Wonder keeps the original composition. The intensity of the song isn’t dialed down for a child audience, and is even improved upon. Stevie and his band go on a 3-minute jam session, and the energy from the kids dancing is palpable. If you’re a fan of Wonder, then this performance is one to watch.
                    </p>
                    <h3>Just as all is born is new</h3> 
                    <p>
                        There must be a better way to do this. I mean, Stevie Wonder facts are fun, but are you sure it is the most efficient way?
                    </p>
                    <h3>Do know what I say is true</h3> 
                    <p>
                        According to Lil Wayne, Stevie Wonder once told the New Orleans rapper to shut up at a party. Allegedly, Stevie was in the middle of a performance at a club when Wayne came in. Lil’ Wayne didn’t know Stevie was performing at the time, but that didn’t stop the singer from yelling at the former Best Rapper Alive to be quiet while he was playing.
                    </p>
                    <h3>That I'll be loving you always</h3> 
                    <p>
                        Stevie Wonder’s 1968 easy-listening album, Eivets Rednow, saw the legendary artist play harmonica, drums, piano, and clavinet, though he does not sing. Marking his ninth studio album, Eivets Rednow was actually his first album with songs credited solely to Wonder alone. However, the name of the album comes from spelling “Stevie Wonder” backwards, something that many fans missed initially, causing several reissues to have “How do you spell Stevie Wonder backwards?” to be printed on the album sleeve.
                    </p>
                    <h3>Until the rainbow burns the stars out in the sky (Always)</h3>
                    <p>
                        Are you still here? Let me give you a hint. The elements list shows all the page's headings.
                    </p> 
                    <h3>Until the ocean covers every mountain high (Always)</h3>
                    <p>
                        Stevie Wonder’s single, “Happy Birthday,” is a big reason why Martin Luther King Jr’s birthday is a National Holiday.
                        In 1981, Wonder, along with many other supporters, were rallying for the government to recognize Martin Luther King Jr.’s birthday as a national holiday. 
                        “Happy Birthday” was Wonder’s way of spreading the word. He even helped organize the Rally for Peace Conference in 1981. President Ronald Reagan would ultimately approve the holiday thanks to these efforts two years later.
                    </p>   
                    <h3>Until the dolphin flies and parrots live at sea (Always)</h3>
                    <p>
                        Stevie Wonder has won a total of 25 Grammy Awards.
                        Stevie Wonder’s extraordinary talent has been recognized with numerous Grammy Awards throughout his career, making him one of the most decorated artists in history.
                    </p>
                    <h3>Until we dream of life and life becomes a dream</h3>
                    <p>
                        Someone more interested in generating sales would have named this song “Always.” But Stevie already mastered the charts, so he named this song “As”, after the first word in the lyrics. And sure enough, it became his thirty-fourth single to crack the Top 40.
                    </p>
                    <h3>As around the sun, the earth knows she's revolving</h3>
                    <p>
                        That was the last line of the chorus, do you recognize the song?
                    </p>
                    <h3>
                        Before answering you can get some bonus points. Right after this text there is an embeded YouTube player with the song. Try starting it.
                    </h3>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/eLbmdG8U60E?si=FaxK7WIUCojHJ6No" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </section>
                <form>
                    <fieldset>
                        <legend>Your answer</legend>
                        <select aria-label="Steivie Wonder songs" ref={answersRef}>
                            <option value="" selected disabled>Select one song</option>
                            <option value="1">Master Blaster</option>
                            <option value="2">Happy Birthday</option>
                            <option value="3">As</option>
                            <option value="4">Superstition</option>
                            <option value="5">I wish</option>
                        </select>
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

export default ChallengeTwo;