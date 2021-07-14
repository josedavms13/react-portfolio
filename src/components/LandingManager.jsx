import './views/viewsCSS/landingManager.css'

import React, {useEffect, useState} from 'react';
import {useHistory, useParams} from 'react-router-dom'
import {useDispatch} from "react-redux";




const LandingManager = ({props}) => {

    const history = useHistory();
    const dispatch = useDispatch();
    let {language} = useParams();

    //Language
    const [landingLanguage] = useState(language);
    //Component Labels
    const [landingMessage, setLandingMessage] = useState({
        labelMessage: 'Vienes de elegir el idioma Español en el portafolio Vanilla',
        questionMessage: '¿Deseas mantenerte en español?',
        buttonsLabels: ['si', 'Change to english'],
    });



    useEffect(() => {
        console.log(landingLanguage);
        if (landingMessage) {
            switch (landingLanguage) {
                case 'spanish':
                    setLandingMessage({
                        labelMessage: 'Vienes de elegir el idioma Español en el portafolio Vanilla',
                        questionMessage: '¿Deseas mantenerte en español?',
                        buttonsLabels: ['si', 'Change to english'],
                    })
                    break
                case 'english':
                    setLandingMessage({
                        labelMessage: 'You were visiting the portfolio in english',
                        questionMessage: 'Do you want to keep it in english?',
                        buttonsLabels: ['Yes', 'Cambia a Español'],
                    })
                    break

                default:
                    setLandingMessage({
                    labelMessage: 'You were visiting the portfolio in english',
                    questionMessage: 'Do you want to keep it in english?',
                    buttonsLabels: ['Yes', 'Cambia a Español'],
                })
                    break
            }
        }
    }, [landingLanguage])

    return (

        <div className={'landing'}>

            {landingLanguage && <h5>{landingMessage.labelMessage}</h5>}
            {landingLanguage && <h6>{landingMessage.questionMessage}</h6>}
            {landingLanguage && <div className="lang-buttons">
                <button onClick={()=>dispatch()}>{landingMessage.buttonsLabels[0]}</button>
                <button>{landingMessage.buttonsLabels[1]}</button>
            </div>}
        </div>
    );
}

export default LandingManager;