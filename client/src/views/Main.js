import React, { useEffect, useState } from 'react';
import AuthorForm from '../components/AuthorForm';
import axios from 'axios';
import Authors from '../components/Authors';

function Main() {
    const [ authors, setAuthors ] = useState(null);
    
    useEffect(()=> {
      axios.get("http://localhost:8000/api/authors")
          .then(res=>{
            setAuthors(res.data);
          })
          .catch((err)=> {
            console.log(err);
          })
    },[]);
  
    const addAuthor = (newAuthor) => {
      axios.post("http://localhost:8000/api/authors/new", newAuthor)
        .then((response) => setAuthors([...authors, response.data]))
        .catch((err) => console.log(err))
    }
  
    const handleDelete = (filteredAuthors) => {
      setAuthors(filteredAuthors)
    }
  
    return (
      
      <div className="container text-center">
        <h3>Add New Product</h3>
        <AuthorForm onSubmitProp={addAuthor} initialName=""/>
        {authors && <Authors authors={authors} onDelete={handleDelete}/>}
      </div>
    );
  }
  
  export default Main;
  