import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {useForm} from "react-hook-form";

import {registerDialogs} from "../AssisstantAssets/dialogs/registerDialogs";

function UserRegister(props) {

    const language = useSelector(state => state.languageReducer);

    const {handleSubmit, register } = useForm()

    useEffect(()=>{
        console.log(language);
    },[language])

    
    //region Form Labels

    const [nameLabel, setNameLabel] = useState(null);

    //endregion Form Labels

    return (
        <div className={'user-register'}>
            <form onSubmit={handleSubmit}>
                <div className="name">
                    <label htmlFor="name">Name</label>
                    <input type="text"/>
                </div>
                
            </form>

        </div>
    );
}

export default UserRegister;