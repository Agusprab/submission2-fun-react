import React from "react"
import NoteItem from "./NoteItem";
import PropTypes from 'prop-types';
const NoteList = ({notes}) =>{    
    
    return(
        <section className="notes-list">          
            {
                notes.map((note) => <NoteItem key={note.id} {...note}/>)            
            }
        </section>
    )
}

NoteList.propTypes = {

   notes : PropTypes.array.isRequired
}
export default NoteList;