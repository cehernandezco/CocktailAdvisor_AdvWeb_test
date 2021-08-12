import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export function Place ( props ) {
  const [ data, setData ] = useState()
 
  useEffect( () => {
    setData( props.data )
  }, [props.data] )
  

  if( !data ) {
    return(
      <div className="places">
        <h2>Getting data ...</h2>
      </div>
    )
  }
  else {
    const Places = data.map( (item, key) => {
      return(
        <div className="col-md-3 my-2" key={key}>
          <div className="card position-relative">
            <Link 
            className ="position-absolute" 
            to= { "place/" + item.id } 
            style={{top:0, bottom:0, left:0, right:0}}/>
            <img 
            src={item.photo} 
            className="card-img-top border" 
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
  
}