import { useState, useEffect } from "react";
import { useParams } from "react-router";

export function IngredientsDetail(props){
    const [ingredient, setIngredient] = useState()

    const { ingredientId } = useParams()

    useEffect( () => {
    if (!ingredient) {
        props.handler( ingredientId )
        .then( (ingredientData) => setIngredient(ingredientData) )
        .catch( (error) => console.log(error) )
        }
    })

    if( !ingredient) {
        return <h3>Loading ingredient...</h3>
    }
    else {
        console.log( ingredient )
        return(
            <div className ="row">
                <div className="col-md-6">
                    <img className="img-fluid img-thumbnail mb-4" src={ingredient.photo}/>  
                </div>
                <div className="col-md-6">
                    <h3>{ingredient.name}</h3>
                    <h5>{ingredient.description}</h5>
                   
                    {/* not working */}
                    
                </div>
            </div>
        )
    }
}