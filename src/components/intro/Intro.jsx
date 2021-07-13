import './intro.scss'
import { init } from 'ityped';
import { useEffect, useRef } from 'react';


export default function Intro() {
    const textRef = useRef();
    useEffect(() => {
        init(textRef.current, { 
            showCursor: true, 
            backDelay: 1500,
            backSpeed: 60,
            strings: ['Disaster', 'Delicious', "Developer!" ] });

    }, [])
    return (
        <div className="intro" id="intro">
            <div className="left">
            <div className="wrapper">
                <h2>Hello You, I'm</h2>
                <h1>Eliana Lopez Bahlcke</h1>
                <h3>Front-end <span ref={textRef}></span></h3>
            </div>
            <a href="#portfolio">
                <img src="assets/down.png" alt=""  />
            </a>

            </div>
            <div className="right">
            <div className="imgContainer">
                <img src="assets/person.png" alt="" />
            </div>
            </div>

        </div>
    )
}
