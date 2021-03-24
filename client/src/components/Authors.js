import React, { useEffect, useState } from 'react'
import { Link } from '@reach/router';
import DeleteButton from '../components/DeleteButton';
export default (props) => {
    const [ authorList, setAuthorList ] = useState(null)
    console.log(props.authors)
    const updateOnDelete = (delId) => {
        const filteredAuthors = props.authors.filter((author) => {
            return author._id !== delId
        });
        props.onDelete(filteredAuthors);             
    }
 
    useEffect(() => {
        const updatedAuthorList = props.authors.map((author) =>{
        return(
            <tr key={author._id}>
                <td>{author.name}</td>
                <td>
                    <Link to={`/${author._id}`} className="btn btn-success mx-2">Edit</Link>
                    <DeleteButton authorId={author._id} successCallback={()=>updateOnDelete(author._id)}/>
                </td>
            </tr>
            )   
        })
        setAuthorList(updatedAuthorList);
    }, [props.authors]);

    return(
        <div className="m-3 border-top pt-5 text-center">
            <div className="row">
                <h3>Favorite Authors</h3>
                <table className="table table-striped">
                    <thead>
                        <th>Author Name</th>
                        <th>Available Actions</th>
                    </thead>
                    <tbody>
                        {authorList}
                    </tbody>
                </table>
            </div>

        </div>
    )
}