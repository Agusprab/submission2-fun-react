import { useState } from "react";
import {addNote} from "../utils/local-data";
import { useNavigate } from "react-router-dom";

const NoteInput = () =>{
const [title,setTitle] = useState("");
const [body,setBody] = useState("");
const navigate = useNavigate();
const titleNoteHandler = (event) =>{
    setTitle(event.target.value);
}
const bodyNoteHandler = (event) =>{  
    setBody(event.target.innerHTML)
   
}

const OnSubmitHandler = () =>{
    addNote({title,body});
    navigate('/');
}


    return(
        <>
    <div className="add-new-page__input">
        <input className="add-new-page__input__title" placeholder="Catatan rahasia" value={title} onChange={titleNoteHandler}/>
        <div className="add-new-page__input__body" contentEditable="true" data-placeholder="Sebenarnya saya adalah ...." value={body} onInput={bodyNoteHandler}></div>
    </div>

     <div className="add-new-page__action">
        <button className="action" type="button" title="Simpan" onClick={OnSubmitHandler}>
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path fill="none" d="M0 0h24v24H0V0z"></path><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"></path>
            </svg>
        </button>
    </div>
    </>
    )
}


export default NoteInput;