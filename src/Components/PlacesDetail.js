import { useState, useEffect } from "react";
import { useParams } from "react-router";

export function PlacesDetail(props){
    const [place, setPlace] = useState()

    const { placeId } = useParams()

    useEffect( () => {
    if (!place) {
        props.handler( placeId )
        .then( (placeData) => setPlace(placeData) )
        .catch( (error) => console.log(error) )
        }
    })

    if( !place) {
        return <h3>Loading ingredient...</h3>
    }
    else {
        console.log( place )
        return(
            <div className ="row">
                <div className="col-md-6">
                    <img className="img-fluid img-thumbnail mb-4" src={place.photo}/>  
                </div>
                <div className="col-md-6">
                    <h3> <strong> {place.name} </strong></h3>
                    <h4> <em>Address:</em> {place.address}</h4>
                    <h5> <em>Opening hours:</em> {place.openingHours}</h5>
                    <h6> <em>Closing day:</em> {place.closingDays}</h6>            
                </div>
            </div>
        )
    }
}