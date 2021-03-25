import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { navigate, Link } from '@reach/router';
import AuthorForm from '../components/AuthorForm';
const EditAuthor = (props) => {
    const [ author, setAuthor ] = useState(null);
    const [ badGet, setBadGet ] = useState(false); 
    const [ errors, setErrors ] = useState([]);
    useEffect(()=> {
        axios.get("http://localhost:8000/api/authors/" + props.authorId)
            .then((response) => {
                console.log("author retrieved from db");
                setAuthor(response.data);
            })
            .catch((err) => {
                console.log("this is the error:" + err)
                setBadGet(true)
            })
    }, [props.authorId]);

    const handleSubmit = (updatedAuthor) => {
        console.log(updatedAuthor)
        axios.put(`http://localhost:8000/api/authors/${props.authorId}/update`, updatedAuthor)
            .then((response) => {
                console.log("author added: ", response.data)
                navigate("/"+ props.authorId)               
            })
            .catch((err) => {
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
                console.log(errors)
            })

    }
    return (
        <div>
            <div className="row">
                <Link to="/">Home</Link>
            </div>
            {!badGet && 
            <div className="row">
                <p>Edit this author:</p>
            </div>
            }
            {author?.name && <AuthorForm onSubmitProp={handleSubmit} initialName={author.name}/>}
            {errors?.length > 0 && errors.map((errorMsg, i)=><p key={i} className="text-danger">{errorMsg}</p>)}
            {badGet &&
                <div> 
                    <p>Author was not found, would you like to add to the database?</p>
                    <Link to="/new" className="btn btn-success">Add Author</Link>
                </div>
            }
        </div>
    )
}

export default EditAuthor;