import React from 'react';
import { Route, Routes ,Link} from 'react-router-dom';
import Navigation from './Navigation';
import HomePage from '../pages/HomePage';
import DetailNotes from '../pages/DetailNotes';
import ArchivePage from '../pages/ArchivePage';
import NewNotePage from '../pages/NewNotePage';
import ErrorPage from '../pages/ErrorPage';

const NoteApp = () =>{
    return(
        <div className='app-container'>
            <header>
                <h1><Link to="/">Aplikasi Catatan</Link></h1>
                <Navigation/>
            </header>
            <main>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/notes/:id" element={<DetailNotes/>}  />
                <Route path="/archives" element={<ArchivePage />}/>
                <Route path="/notes/new" element={<NewNotePage/>}  />
                <Route path="*" element={<ErrorPage/>} />
                
            </Routes>
            </main>
        </div>
    )
}

export default NoteApp;