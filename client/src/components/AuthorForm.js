import React, { useState } from 'react'

export default (props) => {
    const { initialName, onSubmitProp } = props
    const [ name, setName ] = useState(initialName);
   
    
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmitProp({name});
        setName("");
    }

    return (
        <div>
            <div className="row d-flex text-center justify-content-center">
                <form className="w-50" onSubmit={handleSubmit}>
                    <label>Name:</label>
                    <input 
                        type="text" className="form-control"
                        name="name" value={name} 
                        onChange={(e)=>setName(e.target.value)}/>

                    <button type="submit" className="btn btn-dark my-3">Save Author</button>
                </form>
            </div>

        </div>
    )
}
