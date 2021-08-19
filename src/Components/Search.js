import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState, useEffect } from "react"
import { useHistory, useLocation } from "react-router"

export function Search( props ) {
    const history = useHistory()

    function capitaliseText (event) {
        document.getElementById("query2").value = event.target.value.toUpperCase()
    }
    const submitHandler = (event) => {
        event.preventDefault()
        const formData = new FormData(event.target)
        event.target.reset()
        console.log("search.js")
        console.log(formData.get('query2'))
        history.push({pathname: `/search/${formData.get('query2')}`})

        /*        
        props.searchHandler(formData.get('query2'))
            .then((response) => {
                //history.push( (returnPath) ? '/'+ returnPath : '/' )
                history.push({pathname: `/search/${formData.get('query2')}`})
            } )
            .catch((error) => {
              console.log(error)
            })
            */
        
    }


    return (
        <form className="d-flex" onSubmit={submitHandler}>
            <input type="text" onChange={capitaliseText} className="form-control" name="query" placeholder="Search" id="query" />
            <input type="hidden" style={{textTransform:"uppercase"}} className="form-control" name="query2" id="query2" />
            
            <button className="btn btn-outline-primary" type="submit">Search</button>
        </form>
                                                
        
    )
}
