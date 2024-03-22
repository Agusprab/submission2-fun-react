
import NoteInput from "../components/NoteInput";
import {getArchivedNotes} from '../utils/local-data';
const NewNotePage = () =>{


    // const onAddContactHandler =(note) =>{
    //     addNote(note);
    //     navigate('/');
    //   }
     
    return(
        <section className="add-new-page">
            <NoteInput />       
        </section>
    )
}

export default NewNotePage;