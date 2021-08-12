import { useState } from 'react'

export function AddIngredient(props) {
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
      const path = 'ingredients/' + string + name + img_name
      props.imageHandler(path, obj.photo)
        .then((url) => {
          obj.photo = url
          props.handler(obj)
            .then((response) => {
              setMessage('The Ingredient has been added!')
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
      <h2>Add a Ingredients</h2>
      <label htmlFor="title">Ingredient Title</label>
      <input type="text" onChange={capitaliseText} className="form-control" name="name" placeholder="Ingredient title" id="name" />
      <input type="hidden" style={{textTransform:"uppercase"}} className="form-control" placeholder="Ingredient title capitalised" name="name_insensitive" id="name_insensitive" />
      <label htmlFor="tagline">Description</label>
      <textarea className="form-control" name="description" placeholder="Ingredient description" id="description" />
      <label htmlFor="tagline">Type</label>
      <select className="form-select  mb-3" name="type" id="type">
          <option value="Alcoholic">Alcoholic</option>
          <option value="Fruit">Fruit</option>
          <option value="Plant">Plant</option>
          <option value="Non-alcoholic">Non-alcoholic</option>
          <option value="Seed ">Seed</option>
          <option value="Seed ">Condiment</option>
          <option value="Seed ">Vegetable</option>
      </select>
      
      
      <label htmlFor="cover_image">Image</label>
      <input type="file" className="form-control" name="photo" placeholder="Ingredient image" id="photo" />
      <div className="mt-3 buttons d-flex flex-row justify-content-between">
        <button type="reset" className="btn btn-secondary">Reset</button>
        <button type="submit" className="btn btn-primary">Add Ingredient</button>
      </div>
      <div className="my-2">
        <Feedback duration={3000} content={message} />
      </div>
    </form>
  )
}