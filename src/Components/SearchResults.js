import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import {Spinner} from './Spinner';

export function SearchResults ( props ) {
  
  const [ searchCocktailData, setSearchCocktailData ] = useState()
  const [ searchIngredientData, setSearchIngredientData ] = useState()
  const [ searchPlaceData, setSearchPlaceData ] = useState()
  
  const { query } = useParams()

  const searchCocktailF = () => {
        props.handlerSearchCocktail(query)
        .then((result) => {
          setSearchCocktailData((result))
        })
        .catch((error) => console.log(error))
  }
  const searchIngredientF = () => {
        props.handlerSearchIngredient(query)
        .then((result) => {
          setSearchIngredientData((result))
        })
        .catch((error) => console.log(error))
  }

  const searchPlaceF = () => {
      props.handlerSearchPlace(query)
      .then((result) => {
        setSearchPlaceData((result))
      })
      .catch((error) => console.log(error))
  }
  
  useEffect(() => {
    
    if (!searchCocktailData && !searchIngredientData && !searchPlaceData) {
      
      props.handler(query)
        .then((result) => {
            console.log("SearchResults - Result")
            console.log(result)
            console.log(result[0][0])
            if(result[0].length > 0){
              searchCocktailData = result[0][0]
              setSearchCocktailData((searchCocktailData))
            }
            if(result[1].length > 0){
              searchIngredientData = result[1][0]
              setSearchIngredientData((searchIngredientData))
            }
            if(result[2].length > 0){
              searchPlaceData = result[2][0]
              setSearchPlaceData((searchPlaceData))
            }
            
        }
            
        )
        .catch((error) => console.log(error))

        props.handlerSearchCocktail(query)
        .then((result) => {
          setSearchCocktailData((result))
        })
        .catch((error) => console.log(error))

        props.handlerSearchIngredient(query)
        .then((result) => {
          setSearchIngredientData((result))
        })
        .catch((error) => console.log(error))

        props.handlerSearchPlace(query)
        .then((result) => {
          setSearchPlaceData((result))
        })
        .catch((error) => console.log(error))



    }
    
  },[searchCocktailData, searchIngredientData, searchPlaceData])
  
  
    if( !searchCocktailData ) {
        return <Spinner size={64}/>
    }
    else {
        const Cocktails = searchCocktailData.map( (item, key) => {
        return(
            <div className="col-md-3 my-2" key={key}>
            <div className="card position-relative">
                <Link 
                className ="position-absolute" 
                to= { "/cocktail/" + item.id } 
                style={{top:0, bottom:0, left:0, right:0}}/>
                <img 
                src={item.photo} 
                className="card-img-top border " 
                alt={item.name} 
                style={{width: '100%', height: '300px', objectFit: 'cover', objectPosition: 'center'}}
                />
                <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                
                </div>
                
            </div>
            </div>
        )
        })
        return(
            <div className="cocktails">
                <h2>Cocktails</h2>
                <div className="row">
                { Cocktails }
                </div>
            </div>
            )
        
    }

  
  if( !searchIngredientData ) {
    return <Spinner size={64}/>
  }
  else {
    const Ingredients = searchIngredientData.map( (item, key) => {
      return(
        <div className="col-md-3 my-2" key={key}>
          <div className="card position-relative">
            <Link 
            className ="position-absolute" 
            to= { "ingredient/" + item.id } 
            style={{top:0, bottom:0, left:0, right:0}}/>
            <img 
            src={item.photo} 
            className="card-img-top border " 
            alt={item.name} 
            style={{width: '100%', height: '300px', objectFit: 'cover', objectPosition: 'center'}}
            />
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              
            </div>
            
          </div>
        </div>
      )
    })
    return(
        
      <div className="ingredients">
        <h2>Ingredients</h2>
        <div className="row">
        { Ingredients }
        </div>
      </div>
    )
  }
  if( !searchPlaceData ) {
    return <Spinner size={64}/>
  }
  else {
    const Places = searchPlaceData.map( (item, key) => {
      return(
        <div className="col-md-3 my-2" key={key}>
          <div className="card position-relative">
            <Link 
            className ="position-absolute" 
            to= { "place/" + item.id } 
            style={{top:0, bottom:0, left:0, right:0}}/>
            <img 
            src={item.photo} 
            className="card-img-top border " 
            alt={item.name} 
            style={{width: '100%', height: '300px', objectFit: 'cover', objectPosition: 'center'}}
            />
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              
            </div>
            
          </div>
        </div>
      )
    })
    return(
        
      <div className="places">
        <h2>Places</h2>
        <div className="row">
        { Places }
        </div>
      </div>
    )
  }
  return(
    <div>
      

    </div>
  )
  
}
