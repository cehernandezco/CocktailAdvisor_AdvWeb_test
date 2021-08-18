import { useState, useEffect } from "react";
import ReactStars from "react-rating-stars-component";
export function Reviews(props) {
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    setReviews(props.items)
  }, [props.items])



  if (reviews) {
    console.log(reviews)
    const ReviewItems = reviews.map((item, key) => {
      return (
        <div className="review card my-2" key={key}>
          <div className="card-body">
            <h6>{((item.username === "undefined") || (item.username === ""))? "unknown" : item.username}</h6>
            <ReactStars
                  count={5}
                  value={item.stars}
                  edit = {false}
                  size={20}
                  isHalf={true}
                  emptyIcon={<i className="far fa-star"></i>}
                  halfIcon={<i className="fa fa-star-half-alt"></i>}
                  fullIcon={<i className="fa fa-star"></i>}
                  activeColor="#ffd700"

                />
                <h6 className="card-title">{item.comment}</h6>
          </div>
        </div>
      )
    })
    return (
      <div className="reviews mt-4">
        <h5>Reviews ({reviews.length})</h5>
        {ReviewItems}
      </div>
    )
  }
  else {
    return (
      <div className="reviews mt-4">
        <h5>Reviews (0)</h5>
        <p>No reviews yet. Be the first to review this book!</p>
      </div>
    )
  }
}