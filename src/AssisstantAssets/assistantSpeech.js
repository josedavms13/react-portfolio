
async function assistantSpeech(block){
    console.log(block)


    const utterance = new SpeechSynthesisUtterance(block)
    utterance.rate = 1;
    await speechSynthesis.speak(utterance);
    return utterance.addEventListener('end',()=>{
        console.log('played');
        return false
    })


}

export default assistantSpeech