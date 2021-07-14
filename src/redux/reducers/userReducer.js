

const INITIAL_STATE = {
    name: '',
    city: '',
    assistantPreferences: 0
}

const userReducer =(state = INITIAL_STATE, action)=>{

    switch (action.type){
        case '@setUserData':
            const tempState = state;
            tempState.name = action.payload.name;
            tempState.city = action.payload.city;
            tempState.assistantPreferences = action.payload.assistantPreferences

            return tempState


        default:
            return state


    }
}

export default userReducer