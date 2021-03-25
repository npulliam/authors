import React from 'react';
import { Router } from '@reach/router';
import EditAuthor from './views/EditAuthor'
import Author from './views/Author';
import Main from './views/Main';
import NewAuthor from './views/NewAuthor';
import './App.css';

function App() {
  return (
    <div className="App container">
      <div className="row">
        <h3>Favorite Authors</h3>
      </div>
        <Router>
          <Main path="/" />
          <Author path="/:authorId" />
          <NewAuthor path="/new"/>
          <EditAuthor path="/:authorId/edit"/>
        </Router>
    </div>
  );
}

export default App;
