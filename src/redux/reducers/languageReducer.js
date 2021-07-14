const INITIAL_STATE = 'spanish';


const languageReducer = (state=INITIAL_STATE, action)=>{

    switch (action.type){

        case '@turnToSpanish':
            return 'spanish'

        case '@turnToEnglish':
            return 'english'

        default:
            return state
    }
}
export default languageReducer