import {useParams,useNavigate} from 'react-router-dom';
import {getNote,deleteNote,archiveNote,unarchiveNote} from '../utils/local-data';
import { useEffect, useState } from 'react';

import {showFormattedDate} from "../utils/";
import ActionButtonArchive from '../components/ActionButtonArchive';
import ActionButtonDelete from '../components/ActionButtonDelete';
import ErrorPage from './ErrorPage';

const DetailNotes = () => {

    const {id} = useParams();
    const [notes, setNotes] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        setNotes(getNote(id));

        
    });

   const onDeleteHandler= (id) => {
        deleteNote(id);
        const isArchive = notes.archived;
        
        {(isArchive === false) ? navigate("/") : navigate("/archives")}

   }

   const OnArchiveAndUnarchiveHandler = (id) =>{
    const isArchive = notes.archived;

    if(isArchive === false){
        archiveNote(id);
        navigate("/");
    }else{
        unarchiveNote(id);
        navigate("/archives");
    }
   }
   let makeObject
   if(notes){
     makeObject = Object.keys(notes);
   }else{
     makeObject = Object.keys({});
   }


    return(
        <>
        {makeObject.length > 0 &&
        <section className="detail-page">
            <h3 className="detail-page__title">{notes.title}</h3>
            <p className="detail-page__createdAt">{showFormattedDate(notes.createdAt)}</p>
            <div className="detail-page__body">{notes.body}</div>
            <div className="detail-page__action">
                <ActionButtonArchive onArchive={OnArchiveAndUnarchiveHandler} id={notes.id} isArchive={notes.archived}/>
                <ActionButtonDelete onDelete={onDeleteHandler} id={notes.id} isArchived={notes.archived}/>                
            </div>            
        </section>}
        {makeObject.length === 0 && <ErrorPage/>}
        </>
    )
}

export default DetailNotes;