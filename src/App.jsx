import React, {useState} from 'react';
import Review from './Review';
import people from './data'
import {FaBeer} from "react-icons/fa";

function App() {
    const [index, setIndex] = useState(0);
    const {name, job, image, text} = people[index];
    return <div>
        <h2>
            reviews project setup
        </h2>
        <FaBeer className='beer'/>
    </div>;
}

export default App;
