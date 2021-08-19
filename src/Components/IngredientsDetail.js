import { useState, useEffect } from "react";
import { useParams } from "react-router";
import {Spinner} from './Spinner';

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
        return <Spinner size={64}/>
    }
    else {
        console.log( ingredient )
        return(
            <div className ="row">
                <div className="col-md-6 gauche">
                    <img className="img-fluid img-thumbnail mb-4" src={ingredient.photo}/>  
                </div>
                <div className="col-md-6 corps mt-4">
                    <h3>{ingredient.name}</h3>
                    <h5>{ingredient.description}</h5>
                    <h6 className="shop mt-4"><em>Best place to buy this product:</em> {ingredient.shop}</h6>
                    {/* not working */}
                    
                </div>
            </div>
        )
    }
}