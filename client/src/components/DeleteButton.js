import React from 'react';
import axios from 'axios';

export default (props) => {
    const { authorId, successCallback } = props;

    const deleteAuthor = (e) => {
        axios.delete(`http://localhost:8000/api/authors/${authorId}/delete`)
            .then((response) => {
                console.log(`author with id: ${authorId} removed from database`)
                successCallback();                
            })
            .catch((err) => console.log(err))
        }

    return (
        <button className="btn btn-danger" onClick={deleteAuthor}>Delete</button>
    )
}