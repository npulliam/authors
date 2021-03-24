import React from 'react';
import { Router } from '@reach/router';
import EditAuthor from './views/EditAuthor'
import Author from './views/Author';
import Main from './views/Main';
import './App.css';

function App() {
  return (
    <div className="App">
     <Router>
        <Main path="/" />
        <Author path="/:authorId" />
        <EditAuthor path="/:authorId/edit"/>
      </Router>
    </div>
  );
}

export default App;
