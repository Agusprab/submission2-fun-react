import SearchBar from '../components/SearchBar';
import NoteList from '../components/NoteList';
import {searchNote,getArchivedNotes} from '../utils/local-data';
import { useEffect, useState } from 'react';
import AddNewNoteButton from '../components/AddNewNoteButton';
import {useSearchParams} from 'react-router-dom';

const ArchivePageWrapper = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get('keyword');
  function changeSearchParams(keyword) {
    setSearchParams({ keyword });
  }
 
  return <ArchivePage defaultKeyword={keyword} keywordChange={changeSearchParams} />
}
const ArchivePage = ({defaultKeyword,keywordChange}) =>{
    const [notes, setNotes] = useState([]);
    const [keyword,setKeyword] = useState("");

    useEffect(() => {
      setNotes(getArchivedNotes());
      
    }, []);  
    const onKeywordChangeHandler= (keyword) =>{
      setKeyword(keyword);
      keywordChange(keyword);
    }
    useEffect(() => {
      setKeyword((defaultKeyword) ? defaultKeyword : "");
      const result = searchNote({keyword});
      const dataNotArchived = result.filter((note) => note.archived === true);    
       setNotes(dataNotArchived);

  }, [keyword]);

    
    
      
      return(
          <section className="homepage">
              <h2>Catatan Arsip</h2>
              <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler}/>
              {Object.keys(notes).length > 0 && <NoteList notes={notes} />}              
              {Object.keys(notes).length === 0 &&<section className="notes-list-empty"><p className="notes-list__empty">Tidak ada catatan</p></section>}
          </section>
      )
}

export default ArchivePageWrapper;