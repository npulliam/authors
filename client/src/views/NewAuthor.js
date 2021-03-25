import React, { useState } from 'react'
import axios from 'axios';
import { navigate, Link } from '@reach/router';
import AuthorForm from '../components/AuthorForm';
const NewAuthor = (props) => {
    const [ errors, setErrors ] = useState([]);

    const addAuthor = (newAuthor) => {
        axios.post("http://localhost:8000/api/authors/new", newAuthor)
          .then((response) => navigate('/'))
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
            <div className="row">
                <p>Add a new author:</p>
            </div>
            <AuthorForm onSubmitProp={addAuthor} initialName=""/>
            {errors?.length > 0 && errors.map((errorMsg, i)=><p key={i} className="text-danger">{errorMsg}</p>)}

        </div>
    )
}
export default NewAuthor;