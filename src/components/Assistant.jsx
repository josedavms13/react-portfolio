import React, {useRef, useState} from 'react';

import './componentsCSS/Assistant.css'





const Assistant =({props})=>{

    const [position , setPosition] = useState([0, 0, 0, 0])




    return (
        <div className={'assistant'} >
            <div className="assistant-container">

            </div>
            <div className="circle"></div>


        </div>
    );
}

export default Assistant;