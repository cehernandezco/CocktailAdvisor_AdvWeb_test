import { useState, useEffect } from "react";
import { useParams } from "react-router";
import {Spinner} from './Spinner';

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
        return <Spinner size={64}/>
    }
    else {
        console.log( place )
        return(
        
            <div className ="row">
                <div className="col-md-6 gauche mt-5">
                    <img className="img-fluid img-thumbnail mb-4" src={place.photo}/>  
                </div>
                <div className="col-md-6 corps mt-5">
                    <h2> <strong> {place.name} </strong></h2>
                    <h4> <em>Address:</em> {place.address}</h4>
                    <h5 className="hours mt-3"> <em >Opening hours:</em> {place.openingHours}</h5>
                    <h6 className="closingDay mt-3"> <em>Closing day:</em> {place.closingDays}</h6>         
                    <h6 className="direction mt-4">Need directions? <a href="https://www.google.com/maps">Google Maps </a> </h6>
                </div>
            </div>
    
        )
    }
}