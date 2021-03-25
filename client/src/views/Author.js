import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {navigate, Link} from '@reach/router';
import DeleteButton from '../components/DeleteButton';

const Author = (props) => {
    const [author, setAuthor] = useState(null);
    useEffect(()=> {
        axios
            .get(`http://localhost:8000/api/authors/${props.authorId}`)
            .then(res=>{
                console.log("get author by id", res)
                setAuthor(res.data);
            })
            .catch(err=>{
                console.log(err)
            });
      },[props.authorId]);

    const handleDelete = (e) => {
        navigate("/");
    }
        

    if (author === null) {
          return "Loading Author from database"
    }

    return (
        <div className="container text-center">
            <div className="row">
                <Link to="/">Home</Link>
            </div>
            <h3>{author.name}</h3>
            <div className="d-flex justify-content-center">
                <DeleteButton authorId={author._id} successCallback={handleDelete}/>
                <Link to={`/${author._id}/edit`} className="btn-sm mx-2 btn-primary text-decoration-none pt-2">Edit</Link>
            </div>
        </div>
    )
}

export default Author;