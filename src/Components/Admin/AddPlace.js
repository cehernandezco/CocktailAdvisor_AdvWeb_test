import { useState } from 'react'

export function AddPlace(props) {
  const [message,setMessage] = useState()
  const [error,setError] = useState( false )

  const submitHandler = (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    event.target.reset()
    const obj = new Object()
    formData.forEach((value, key) => {
      obj[key] = value
    })
    // upload image to get the url
    if (obj.photo) {
      const string = Math.random().toString(36).substr(2, 5)
      const img_name = obj.photo.name
      const name = obj.name
      // const title = obj.title.split(' ').join('')
      const path = 'places/' + string + name + img_name
      props.imageHandler(path, obj.photo)
        .then((url) => {
          obj.photo = url
          props.handler(obj)
            .then((response) => {
              setMessage('Your Place has been added!')
              setError( false)
            } )
            .catch((error) => {
              setMessage('There has been an error!')
              setError(true)
            })
        })
        .catch((error) => console.log(error))
    }
    else {
      console.log('need image')
    }
  }

  const Feedback = ( props ) => {
    setTimeout( () => {
      setMessage(null)
      setError(false)
    }, props.duration )
    return(
      <div className={ (error) ? "alert alert-danger" : "alert alert-success" }
      style={{ display: (message) ? "block" : "none" }}>
        {props.content}
      </div>
    )
  }
  function capitaliseText (event) {
    const { value } = event.target.value
    document.getElementById("name_insensitive").value = event.target.value.toUpperCase()
    
  }


  return (
    <form id="add-data" onSubmit={submitHandler}>
      <h2>Add a Place</h2>
      <label htmlFor="title">Place Title</label>
      <input type="text" onChange={capitaliseText} className="form-control" name="name" placeholder="Place title" id="name" />
      <input type="hidden" style={{textTransform:"uppercase"}} className="form-control" placeholder="Place title capitalised" name="name_insensitive" id="name_insensitive" />
      <label htmlFor="tagline">Adress</label>
      <textarea className="form-control" name="address" placeholder="Adress of the place" id="address" />
      <label htmlFor="tagline">Opening Hours</label>
      <textarea className="form-control" name="openingHours" placeholder="Opening Hours" id="openingHours" />
      <label htmlFor="tagline">Closing Days</label>

      <select className="form-select  mb-3" name="closingDays" id="closingDays" multiple>
          <option value="Monday">Monday</option>
          <option value="Tuesday">Tuesday</option>
          <option value="Wensday">Wensday</option>
          <option value="Thursday">Thursday</option>
          <option value="Friday ">Friday</option>
          <option value="Saturday ">Saturday</option>
          <option value="Sunday ">Sunday</option>
          <option value="Allways Open ">Always Open</option>
      </select>


          
      
      
      <label htmlFor="cover_image">Image</label>
      <input type="file" className="form-control" name="photo" placeholder="Ingredient image" id="photo" />
      <div className="mt-3 buttons d-flex flex-row justify-content-between">
        <button type="reset" className="btn btn-secondary">Reset</button>
        <button type="submit" className="btn btn-primary">Add Place</button>
      </div>
      <div className="my-2">
        <Feedback duration={3000} content={message} />
      </div>
    </form>
  )
}