import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import {Spinner} from './Spinner';


export function CocktailsDetail(props) {
  const [cocktail, setCocktail] = useState()
  const [reviewsData, setReviewsData] = useState()
  const [showReview, setShowReview] = useState(false)

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
  })

  useEffect(() => {
    if (!cocktail) {
      props.handlerReviews(cocktailId)
        .then((reviewsData) => setReviewsData(reviewsData))
        .catch((error) => console.log(error))
    }
  })

  const addReview = () => {
    if (props.auth === true) {
      setShowReview(true)
    } else {
      history.push('/login')
    }
  }

  const Reviews = () => {
    if (!reviewsData) {
      return (
        <div className="reviews">
          <h2>Getting data ...</h2>
        </div>
      )
    }
    else {
      const ReviewsCocktails = reviewsData.map((item, key) => {
        return (
          <div className="col-md-3 my-2" key={key}>
            <div className="card position-relative">
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
              </div>

              <Link
                className="position-absolute"
                to={"cocktail/" + item.cocktail}
                style={{ top: 0, bottom: 0, left: 0, right: 0 }} />
              <img
                src={item.photo}
                className="card-img-top border "
                alt={item.name}
                style={{ width: '100%', height: '300px', objectFit: 'cover', objectPosition: 'center' }}
              />
              <div className="card-body">
                <p className="card-title">{item.comment}</p>

              </div>
            </div>
          </div>
        )
      })
      return (
        <div className="Reviews">
          <h2>Reviews</h2>
          <div className="row">
            {ReviewsCocktails}
          </div>
        </div>
      )
    }
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
          <h5>{cocktail.name}</h5>
          <h6 className="text-dark">{cocktail.description}</h6>
          <br></br>
          <h4>Ingredients:</h4>
          <Ingredients items={cocktail.ingredients} />
          <br></br>
          <h6> Steps: {cocktail.steps}</h6>
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
          <div className="mt-4" style={{ display: (showReview === true) ? "block" : "none" }}>
            <form id="review">
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


              {/* <select className="form-select  mb-3" name="stars" id="stars">
                                <option value="1">1 Star</option>
                                <option value="2">2 Stars</option>
                                <option value="3">3 Stars</option>
                                <option value="4">4 Stars</option>
                                <option value="5">5 Stars</option>
                            </select> */}
              <label>Say something about the cocktail</label>
              <textarea name="comment" cols="30" rows="3" className="form-control" placeholder="..."></textarea>
              <button type="submit" className="btn btn-primary mb-2">Save</button>
            </form>
          </div>
        </div>
        {Reviews}

      </div>

    )
  }
}