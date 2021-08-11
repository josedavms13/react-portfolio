
import {SET_DIALOG_BLOCK, CLEAN_DIALOG_BLOCK, SPEECH ,TALKING} from "../actions/types";

const INITIAL_STATE = {
    language: '',
    currentDialogBlock: '',
    isTalking : false
}


export default function (state = INITIAL_STATE, action) {
    const { type, payload } = action;

    switch (type) {
        case SET_DIALOG_BLOCK:
            return { currentDialogBlock: payload };

        case CLEAN_DIALOG_BLOCK:
            return { currentDialogBlock: '' };

        case TALKING:
            return {isTalking: true}

        case SPEECH:
            return {isTalking: false}

        default:
            return state;
    }
}
