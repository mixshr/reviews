import React, {useState} from 'react';
import people from './data'
import {FaChevronLeft, FaChevronRight, FaQuoteRight} from "react-icons/fa";

function App() {
    const [index, setIndex] = useState(0);
    const {name, job, image, text} = people[index];

    const prevPerson = () => {
        setIndex((currentIndex) => {
            return (currentIndex - 1 + people.length) % people.length;
        })
    }
    const nextPerson = () => {
        setIndex((currentIndex) => {
            return (currentIndex + 1) % people.length;
        })
    }

    const randomPerson = () => {
        let randomNumber = Math.floor(Math.random() * people.length);
        if (randomNumber === index) {
            randomNumber = index + 1;
        }
        setIndex(randomNumber % people.length)
    }

    return <main>
        <article className='review'>
            <div className='img-container'>
                <img src={image} alt={name} className='person-img'/>
                <span className='quote-icon'>
                    <FaQuoteRight />
                </span>
            </div>
            <h4 className='author'>{name}</h4>
            <p className='job'>{job}</p>
            <p className='info'>{text}</p>
            <div className="btn-container">
                <button type='button' className='prev-btn' onClick={prevPerson}>
                    <FaChevronLeft />
                </button>
                <button type='button' className='next-btn' onClick={nextPerson}>
                    <FaChevronRight />
                </button>
            </div>
            <button className='btn random-btn' onClick={randomPerson}>
                Surprise me
            </button>
        </article>
    </main>;
}

export default App;
