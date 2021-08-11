import './views/viewsCSS/landingManager.css'

import React, {useEffect, useState} from 'react';
import {useHistory, useParams} from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux";

import {setLangEnglish, setLangSpanish} from "../redux/actions/languageActions";

const LandingManager = ({props}) => {

    const history = useHistory();
    const dispatch = useDispatch();
    let {language} = useParams();


    //region store
    const storeLanguage = useSelector(state => state);

    useEffect(() => {
        console.log(storeLanguage);
    }, [storeLanguage]);
    //endregion



    //Language
    const [landingLanguage] = useState(language);


    //Component Labels
    const [landingMessage, setLandingMessage] = useState({
        labelMessage: 'Vienes de elegir el idioma Español en el portafolio Vanilla',
        questionMessage: '¿Deseas mantenerte en español?',
        buttonsLabels: ['si', 'Change to english'],
    });


    function languageSelection(buttonNumber) {
        // buttonNumber 0 (yes) = Stay,
        // buttonNumber 1 = Change,
        console.log(landingLanguage)

        switch (landingLanguage) {
            case 'english':
                console.log('english')
                //if we are in english and want to keep it
                if (buttonNumber === 0) {
                    console.log('staying in english')
                    // dispatch(changeLanguage);
                } else {
                    console.log('changing to spanish')

                    // dispatch(changeLanguage)
                }
                break
            case 'spanish':
                //if we are in english and want to keep it
                console.log('spanish')
                if (buttonNumber === 0) {
                    // dispatch('@turnToSpanish')
                    console.log('staying in spanish')


                } else {
                    // dispatch('@turnToEnglish');
                    console.log('changing to english')

                }
        }
    }

//Landing message depending on language
    useEffect(() => {
        console.log(landingLanguage);
        if (landingMessage) {
            switch (landingLanguage) {
                case 'es':
                    console.log('is in spanish')
                    setLandingMessage({
                        labelMessage: 'Vienes de elegir el idioma Español en el portafolio Vanilla',
                        questionMessage: '¿Deseas mantenerte en español?',
                        buttonsLabels: ['si', 'Change to english'],
                    });
                    break
                case 'en':
                    console.log('is in english')

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
                <button onClick={() => languageSelection(0)}>{landingMessage.buttonsLabels[0]}</button>
                <button onClick={() => languageSelection(1)}>{landingMessage.buttonsLabels[1]}</button>
            </div>}
        </div>
    );
}

export default LandingManager;