import React, { useEffect, useState } from 'react';

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
  
    const handleDelete = (filteredAuthors) => {
      setAuthors(filteredAuthors)
    }
  
    return (
      
      <div className="container text-center">
        {authors && <Authors authors={authors} onDelete={handleDelete}/>}
      </div>
    );
  }
  
  export default Main;
  