import SearchBar from '../components/SearchBar';
import NoteList from '../components/NoteList';
import {searchNote,getActiveNotes} from '../utils/local-data';
import { useEffect, useState } from 'react';
import {useSearchParams} from 'react-router-dom';
import AddNewNoteButton from '../components/AddNewNoteButton';

const HomePageWrapper = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get('keyword');
  function changeSearchParams(keyword) {
    setSearchParams({ keyword });
  }
 
  return <HomePage defaultKeyword={keyword} keywordChange={changeSearchParams} />
}
const HomePage = ({keywordChange, defaultKeyword}) =>{
    const [notes, setNotes] = useState([]);
    const [keyword,setKeyword] = useState("");
  
    useEffect(() => {
      setKeyword((defaultKeyword) ? defaultKeyword : "");
      const result = searchNote({keyword});
      const dataNotArchived = result.filter((note) => note.archived === false);    
       setNotes(dataNotArchived);

  }, [keyword]);


  const onKeywordChangeHandler= (keyword) =>{
    setKeyword(keyword);
    keywordChange(keyword);
  }
  
  
    
    return(
        <section className="homepage">
            <h2>Catatan Aktif</h2>
            <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler}/>
            {Object.keys(notes).length > 0 && <NoteList notes={notes} />}
              <AddNewNoteButton/>
            {Object.keys(notes).length === 0 &&<section className="notes-list-empty"><p className="notes-list__empty">Tidak ada catatan</p></section>}
            
        </section>
    )
}

export default HomePageWrapper;