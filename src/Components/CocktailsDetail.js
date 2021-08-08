import { useState, useEffect } from "react";
import { useParams } from "react-router";

export function CocktailsDetail(props){
    const [cocktail, setCocktail] = useState()

    const { cocktailId } = useParams()

    useEffect( () => {
    if (!cocktail) {
        props.handler( cocktailId )
        .then( (cocktailData) => setCocktail(cocktailData) )
        .catch( (error) => console.log(error) )
        }
    })

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
                    <h6> Steps: {cocktail.steps}</h6>
                    {/* not working */}
                    <h4>{cocktail.ingredients}</h4>
                </div>
            </div>
        )
    }
}