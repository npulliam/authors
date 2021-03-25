import React, { useEffect, useState } from 'react'
import { Link } from '@reach/router';
import DeleteButton from '../components/DeleteButton';
const Authors = (props) => {
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
                <td>
                    <Link to={`/${author._id}`}>{author.name}</Link>    
                </td>
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
        <div className="m-3 pt-5 text-center">
            <div className="row">
                <Link to="/new">Add an Author</Link>
            </div>
            <div className="row">
                <p>We have quotes by:</p>
            </div>
            
            <table className="table table-secondary table-striped border">
                <thead>
                    <tr>
                        <th>Author Name</th>
                        <th>Available Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {authorList}
                </tbody>
            </table>
        

        </div>
    )
}

export default Authors;