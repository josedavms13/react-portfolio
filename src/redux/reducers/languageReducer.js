import {SET_LANG_ENGLISH, SET_LANG_SPANISH} from '../actions/types'

const INITIAL_STATE = 'english';

const languageReducer = (state=INITIAL_STATE, action)=>{

    switch (action.type){

        case SET_LANG_SPANISH:
            return 'spanish'

        case SET_LANG_ENGLISH:
            return 'english'

        default:
            return state
    }
}
export default languageReducer