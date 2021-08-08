import { useHistory } from "react-router"

export function Login ( props ) {

const history = useHistory()

    const submitHandler = ( event ) => {
      event.preventDefault()
      const data = new FormData( event.target )
      props.handler( data.get('email'), data.get('password') )
      .then( ( response ) => {
        if( response === true ) {} 
          history.push('/')
      })
      .catch( (error) => {
        console.log( error )
      })
    }
  
    return(
      <form id="login" onSubmit={ submitHandler }>
        <h1>Log into your account</h1>
        <label className="form-label" htmlFor="email">Email</label>
        <input className="form-control" type="email" name="email" id="email" />
        <label className="form-label" htmlFor="password">Password</label>
        <input className="form-control" type="password" name="password" id="password" />
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    )
  }