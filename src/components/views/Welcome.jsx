import  './viewsCSS/welcome.css'
import React, {useContext, useEffect, useState} from 'react';

const Welcome = ({lang})=> {

    console.log(lang);

    return (
        <div className={'welcome'}>
            <h1>Welcome</h1>

            <h4>It is highly recomended to use headphones</h4>

        </div>
    );
}

export default Welcome;