import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import {Spinner} from './Spinner';
import {Reviews} from './Reviews'


export function CocktailsDetail(props) {
  const [cocktail, setCocktail] = useState()
  const [reviewsData, setReviewsData] = useState()
  const [cocktailReviews, setCocktailReviews] = useState()
  const [showReview, setShowReview] = useState(false)
// disable review button if user has reviewed the cocktail
  const [disableReview, setDisableReview] = useState( false )

  const { cocktailId } = useParams()
  const history = useHistory()

  const ratingChanged = (newRating) => {
    console.log(newRating);
    document.getElementById("stars").value = newRating;
  }

  useEffect(() => {
    if (!cocktail) {
      props.handler(cocktailId)
        .then((cocktailData) => setCocktail(cocktailData))
        .catch((error) => console.log(error))
    }
    if( !cocktailReviews ) {
      getReviews()
    }
  })

  useEffect( () => {
    if( cocktailReviews && props.user ) {
      cocktailReviews.forEach( (review) => {
        if( review.userId == props.user.uid ) {
          setDisableReview( true )
        }
      })
    }
    // check if user has this cocktail in favourites, disable fav button if yes
  }, [cocktailReviews])

  const getReviews = () => {
    props.getReviews( cocktailId )
      .then( (result) => {
        console.log( ...result )
        setCocktailReviews( result )
      })
      .catch( (error) => console.log(error) )
  }

  const addReview = () => {
    if (props.auth === true) {
      setShowReview(true)
    } else {
      // if user is not logged in take them to login page and set this page as a return path,
      // so user can be taken back here after login/ register
      history.push(`/login?returnPath=cocktail/${cocktailId}&msg=${escape("Log in to review "+cocktail.name)}`)
      
    }
  }

  const handleReview = ( event ) => {
    event.preventDefault()
    const data = new FormData( event.target )
    let review = {}
    data.forEach( (value,key) => review[key] = value )
    props.reviewHandler( review )
      .then( () => {
        setDisableReview(true)
        setShowReview(false)
        getReviews()
      } )
      .catch( error => console.log(error) )
  }

  


  /* const addToFavourites = () => {

  }  */

  if (!cocktail) {
    return <Spinner size={64}/>
  }
  else {
    console.log(cocktail)
    const Ingredients = (props) => {
      if (props.items.length === 0) {
        return (
          <p>No ingredients listed</p>
        )
      }
      else {
        const Items = props.items.map((item, key) => {
          return (
            <li key={key}>
              {item.quantity} {item.measure} {item.name} {(item.is_garnish) ? "for garnish" : ""}
            </li>
          )
        })
        return (
          <ul>
            {Items}
          </ul>
        )
      }
    }
    return (
      <div className="row">
        <div className="col-md-6">
          <img className="img-fluid img-thumbnail mb-4" src={cocktail.photo} />
        </div>
        <div className="col-md-6">
          <h1>{cocktail.name}</h1>
          <br></br>
          <h6 className="text-dark">{cocktail.description}</h6>
          <br></br>
          <h4>Ingredients:</h4>
          <Ingredients items={cocktail.ingredients} />
          <br></br>
          <h6> Steps: {cocktail.steps}</h6>
          <div className="d-flex">

            <button type="button"
              className="btn btn-outline-primary mt-2"
              onClick={addReview}
              disabled={ (disableReview) ? true : false }
            >
              Review Cocktail
            </button>

            {/* I don't know if we need a favourite button
                        <button type="nutton" 
                        className="btn btn-primary ms-2">
                            Add to favourite
                        </button> */}
          </div>
          <div className="mt-4" style={{ display: (showReview === true) ? "block" : "none" }}>
          <h5>Review {cocktail.name}</h5>
            <form id="review" onSubmit={handleReview}>
              <div className="d-flex">

                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={30}
                  isHalf={true}
                  emptyIcon={<i className="far fa-star"></i>}
                  halfIcon={<i className="fa fa-star-half-alt"></i>}
                  fullIcon={<i className="fa fa-star"></i>}
                  activeColor="#ffd700"
                />
              </div>
              <input type="hidden" name="stars" id="stars" />

              <label>Say something about the cocktail</label>
              <textarea name="comment" cols="30" rows="3" className="form-control" placeholder="..."></textarea>
              <input type="hidden" name="cocktail" value={cocktailId} />
              <input type="hidden" name="userId" value={(props.user) ? props.user.uid: ""} />
              <input type="hidden" name="username" value={(props.user) ? props.user.displayName : ""} />
              <button type="submit" className="btn btn-primary mb-2">Save</button>
            </form>
          </div>
          <Reviews items={cocktailReviews}/>
        </div>
      </div>

    )
  }
}