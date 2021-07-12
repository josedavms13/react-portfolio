import React, {useEffect, useRef, useState} from 'react';

import './componentsCSS/Assistant.css'


const Assistant = ({props}) => {

    const [clicked, SetClicked] = useState(false)
    const [mousePositionWhileClick, SetMousePositionWhileClick] = useState([0, 0])
    const [position, setPosition] = useState([0, 0])


    let mousePosition = [0, 0];

    function mousePositionWhenClickFunction(e) {
        if (clicked) {
            mousePosition[0] = e.clientX;
            mousePosition[1] = e.clientY;
            SetMousePositionWhileClick(mousePosition)
        }

    }


    useEffect(() => {

        console.log((mousePositionWhileClick))
        setPosition(mousePositionWhileClick)

    }, [mousePositionWhileClick])

    useEffect(() => {
        console.log(clicked);
    }, [clicked])


    return (
        <div className={'assistant'}>
            <div className="assistant-container" onMouseLeave={() => SetClicked(false)}
                 onMouseDownCapture={() => SetClicked(true)} onMouseUp={() => SetClicked(false)}
                 onMouseMoveCapture={(event => mousePositionWhenClickFunction(event))}>

            </div>


        </div>
    );
}

export default Assistant;