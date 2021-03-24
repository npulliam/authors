import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';
import AuthorForm from '../components/AuthorForm';
export default (props) => {
    const [ name, setName ] = useState("");
   
    
    useEffect(()=> {
        axios.get("http://localhost:8000/api/authors/" + props.authorId)
            .then((response) => {
                console.log("author retrieved from db");
                setName(response.data.name);
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);

    const handleSubmit = (updatedAuthor) => {
        console.log(updatedAuthor)
        axios.put(`http://localhost:8000/api/authors/${props.authorId}/update`, updatedAuthor)
            .then((response) => {
                console.log("author added: ", response.data)
                navigate("/"+ props.authorId)               
            })
            .catch((err) => console.log(err))

    }
    return (
        <div>
            <div className="row d-flex text-center justify-content-center">
                <h4>Edit Author</h4>
                {name && <AuthorForm onSubmitProp={handleSubmit} initialName={name}/>}
            </div>

        </div>
    )
}
