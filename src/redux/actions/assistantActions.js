import {SET_DIALOG_BLOCK, CLEAN_DIALOG_BLOCK, SPEECH, TALKING} from './types'
import assistantSpeech from "../../AssisstantAssets/assistantSpeech";

export const setDialogBlock =(dialogBlock)=> ({
    type : SET_DIALOG_BLOCK,
    payload : dialogBlock
})

export const cleanDialogBlock ={
    type : CLEAN_DIALOG_BLOCK,
}

export const speech = (block)=>{
    return async (dispatch)=>{
        dispatch(isTalking(true));
        const isFinished = await assistantSpeech(block);
        dispatch({
            type: SPEECH,
            payload : isFinished
        })

    }
}

export const isTalking =(isTalking)=>({
    type: TALKING,
    payload: isTalking
})