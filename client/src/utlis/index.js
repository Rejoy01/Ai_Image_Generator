import { surpriseMePrompts } from "../constants";
import FileSaver from 'file-saver'

export function getRandomPrompt(prompt){
    const randomIndex = Math.floor(Math.random() *  surpriseMePrompts.length);
    const randomPrompt = surpriseMePrompts[randomIndex];
    //so same prompt won't occur twice
    if(randomPrompt === prompt) return getRandomPrompt(Prompt); 



    return randomPrompt;
}

export async function downloadImage(_id,photo){
    FileSaver.saveAs(photo,`download-${_id}.jpg`)
}