import React, { useState } from 'react';
import {Link} from '@reach/router';

const AuthorForm = (props) => {
    const { initialName, onSubmitProp } = props
    const [ name, setName ] = useState(initialName);
    
   
    
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmitProp({name});
    }

    return (
        <div>
            <div className="card w-75 p-3">
                <form className="form text-dark" onSubmit={handleSubmit}>
                    <label>Name:</label>
                    <input 
                        type="text" className="form-control"
                        name="name" value={name} 
                        onChange={(e)=>setName(e.target.value)}/>
                    <Link to="/" className="btn btn-primary mx-2">Cancel</Link>
                    <button type="submit" className="btn btn-primary my-3">Save Author</button>
                </form>
            </div>

        </div>
    )
}

export default AuthorForm;