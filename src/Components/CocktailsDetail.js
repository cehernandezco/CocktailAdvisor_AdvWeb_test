import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router";

export function CocktailsDetail(props){
    const [cocktail, setCocktail] = useState()
    const [showReview, setShowReview] = useState( false ) 

    const { cocktailId } = useParams()
    const history = useHistory()

    useEffect( () => {
    if (!cocktail) {
        props.handler( cocktailId )
        .then( (cocktailData) => setCocktail(cocktailData) )
        .catch( (error) => console.log(error) )
        }
    })

    const addReview = () => {
        if ( props.auth === true){
            setShowReview( true )
        } else {
            history.push('/login')
        }
    }
    

    /* const addToFavourites = () => {

    }  */

    if( !cocktail) {
        return <h3>Loading cocktails...</h3>
    }
    else {
        console.log( cocktail )
        return(
            <div className ="row">
                <div className="col-md-6">
                    <img className="img-fluid img-thumbnail mb-4" src={cocktail.photo}/>  
                </div>
                <div className="col-md-6">
                    <h3>{cocktail.name}</h3>
                    <h6 className="text-dark">{cocktail.description}</h6>
                    <br></br>
                    
                    <br></br>
                    <h6> Steps: {cocktail.steps}</h6>
                    {/* not working */}
                    {/* <h4>{cocktail.ingredients}</h4> */}
                    <div className="d-flex">

                        <button type="button" 
                        className="btn btn-outline-primary mt-2"
                        onClick={addReview}>
                            Review Cocktail
                        </button>

                        {/* I don't know if we need a favourite button
                        <button type="nutton" 
                        className="btn btn-primary ms-2">
                            Add to favourite
                        </button> */}
                    </div>
                    <div className="mt-4" style={{display: (showReview === true) ? "block" : "none"}}>
                        <form id="review">
                            <label htmlFor="stars"> Stars </label>
                            <select className="form-select  mb-3" name="stars" id="stars">
                                <option value="1">1 Star</option>
                                <option value="2">2 Stars</option>
                                <option value="3">3 Stars</option>
                                <option value="4">4 Stars</option>
                                <option value="5">5 Stars</option>
                            </select>
                            <label>Say something about the cocktail</label>
                            <textarea name="comment" cols="30" rows="3" className="form-control" placeholder="..."></textarea>
                            <button type="submit" className="btn btn-primary mb-2">Save</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}