import React, {useEffect, useRef, useState} from 'react';

import './componentsCSS/Assistant.css'


const Assistant = ({props}) => {

    //region Drag And Drop
    const [clicked, SetClicked] = useState(false)
    const [mousePositionWhileClick, SetMousePositionWhileClick] = useState([0, 0])
    const [cursor, SetCursor] = useState('grab')


    let mousePosition = [0, 0];
    let offset = 85;
    function mousePositionWhenClickFunction(e) {
        if (clicked) {
            mousePosition[0] = e.clientY- offset;
            mousePosition[1] = e.clientX - offset;
            SetMousePositionWhileClick(mousePosition)
        }
    }
    //endregion Drag And Drop

    //region Expand Collapse

    const [isCollapsed, SetIsCollapsed] = useState(false);
    const [assistantCollapseExpand, SetAssistantCollapseExpand] = useState('')
    const [buttonText, SetButtonText] = useState('Collapse');

    const [assistanceWidth, SetAssistanceWidth] = useState(400);
    const [assistanceCoreWidth, SetAssistanceCoreWidth] = useState('50%')

    useEffect(()=>{
        console.log(isCollapsed)
        if(isCollapsed){
            //Is compact
            SetAssistantCollapseExpand('hide');
            SetButtonText('Expand');
            SetAssistanceWidth(200);
            SetAssistanceCoreWidth(`100%`);
        }else{
            // Is full
            SetAssistantCollapseExpand('');
            SetButtonText('Collapse');
            SetAssistanceWidth(400);
            SetAssistanceCoreWidth(`50%`);



        }
    },[isCollapsed])


    //endregion Expand Collapse


    //region test voice

    useEffect(()=>{
        playText('')
    },[])

    function playText(text){
        const  utterance = new SpeechSynthesisUtterance(text);
        const voices = window.speechSynthesis.getVoices();
        utterance.voice = voices[1];
        utterance.rate = 1;
        utterance.lang = 'en-US'
        speechSynthesis.speak(utterance)
    }
    //endregion test voice


    return (
        <div className={'assistant'} style={{
            top : mousePositionWhileClick[0],
            left : mousePositionWhileClick[1],
            width : assistanceWidth
        }
        }>
            <div className="assistant-core" style={{width : assistanceCoreWidth}}>
                <div className="assistant-container-draggable" onMouseLeave={() => {
                    SetClicked(false);
                    SetCursor('grab');
                }}
                     onMouseDownCapture={() => {
                         SetClicked(true);
                         SetCursor('grabbing');

                     }} onMouseUp={() => {
                    SetClicked(false);
                    SetCursor('grab');

                }}
                     onMouseMoveCapture={(event => mousePositionWhenClickFunction(event))}
                     style={{
                         cursor: cursor
                     }}
                >
                </div>
                <button className={'expand-button'} onClick={()=>{SetIsCollapsed(!isCollapsed)}}>{buttonText}</button>
            </div>



            <div className={`assistant-info ${assistantCollapseExpand}`} >
                <div className="controls">
                    <button> || </button>
                    <label htmlFor="assistant-volume">Volume</label>
                    <input type="range"/>
                </div>
                <div className="choises">
                    <button>A</button>
                    <button>B</button>
                    <button>C</button>
                </div>
            </div>


        </div>
    );
}

export default Assistant;