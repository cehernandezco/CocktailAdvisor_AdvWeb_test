import { useState, useEffect } from "react"
import { useHistory, useLocation } from "react-router"
import {Link} from 'react-router-dom'

import { emailValidator} from "./Validators"

// custom hook to access URL parameters such as login?returnPath=book/abcd
// so we can return the user to the cocktail they wanted to review
const useQuery = () => {
  return new URLSearchParams( useLocation().search )
}

export function Login ( props ) {

  const [returnPath,setReturnPath] = useState()
  const [validEmail,setValidEmail] = useState()
  const [emailErrors,setEmailErrors] = useState()
  const [validPassword,setValidPassword] = useState()
  const [passwordErrors,setPasswordErrors] = useState()
  const [validForm,setValidForm] = useState(false)
  const [show,setShow] = useState(false)
  const [message,setMessage] = useState()

  const history = useHistory()
  const query = useQuery()

  useEffect( () => {
    const path = query.get('returnPath')
    const msg = query.get('msg')
    if( path !== undefined ) {
      setReturnPath( path )
    }
    if( msg !== undefined ) {
      setMessage( unescape(msg) )
      setShow(true)
    }
    else{
      setMessage(null)
    }
  }, [query] )

  useEffect( () => {
    if( validEmail && validPassword ) {
      setValidForm( true )
    }
    else {
      setValidForm( false )
    }
  },[validEmail,validPassword,validForm])


  const submitHandler = ( event ) => {
    event.preventDefault()
    const data = new FormData( event.target )
    props.handler( data.get('email'), data.get('password') )
    .then( (response) => {
      if(response === true ) {
        // return the user to previous page (/+returnPath) or home page (/)
        history.push( (returnPath) ? '/'+ returnPath : '/' )
      }
    })
    .catch( (error) => {
      console.log( error )
    })
  }

  const validateEmail = (event) => {
    const email = event.target.value
    const validate = emailValidator(email)
    if( validate.valid === false ) {
      console.log( validate.errors )
      setEmailErrors( validate.errors.join(', ') )
      setValidEmail( false )
    }
    else {
      setValidEmail( true )
    }
  }

  const validatePassword = (event) => {
    const password = event.target.value
    if( password.length < 8 ) {
      setPasswordErrors( 'minimum 8 characters' )
      setValidPassword( false )
    }
    else {
      setValidPassword( true )
    }
  }

  const validationClass = ( mainClass, validState) => {
    if( validState === true ) {
      return `${mainClass}  is-valid`
    }
    else if( validState === false ) {
      return `${mainClass}  is-invalid`
    }
    else {
      return mainClass
    }
  }
  
  return(
    <div className="row mt-4">
      <form className="col-md-4 offset-md-4" id="login" onSubmit={ submitHandler }>
        <h4>Sign in to your account</h4>
        <label className="form-label" htmlFor="email">Email</label>
        <input 
          className={validationClass("form-control",validEmail)} 
          type="email" 
          name="email" 
          id="email" 
          onChange={validateEmail}
        />
        <div className="invalid-feedback">{emailErrors}</div>
        <label className="form-label" htmlFor="password">Password</label>
        <input 
          className={validationClass("form-control",validPassword)} 
          type="password" 
          name="password" 
          id="password" 
          onChange={validatePassword}
        />
        <div className="invalid-feedback">{passwordErrors}</div>
        <div className="d-flex justify-content-center mt-3">
          <button 
            type="submit" 
            className="btn btn-primary flex-fill"
            disabled={ (!validForm) ? true : false }
          >
            Login
          </button>
        </div>
        <div className="my-4 text-center">
          <Link to={(returnPath) ? "/register?returnPath=" + returnPath : "/register"}>
            Don't have an account? Register here
          </Link>
        </div>
      </form>
    </div>
  )
}