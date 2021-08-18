import { useState, useEffect } from "react"
import { Link } from 'react-router-dom'
import { useHistory, useLocation } from "react-router"
import { emailValidator, userNameValidator, passwordValidator } from "./Validators"


export function Register(props) {

    const submitHandler = (event) => {
        event.preventDefault()
        const data = new FormData(event.target)
        props.handler(data.get('email'), data.get('password'), data.get('userName'),data.get('inputName'))
    }



    return (

        <form className="row g-3" id="register" onSubmit={ submitHandler }>
             <h1>Register</h1>
                    <div className="col-12">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" name="email" placeholder="username_123@domain.com"/>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" name="password" placeholder="Password"/>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputAgainPassword" className="form-label">Input Password Again</label>
                        <input type="password" className="form-control" id="inputAgainPassword" name="inputAgainPassword" placeholder="Re-type password"/>
                    </div>
                    <div className="col-12">
                        <label htmlFor="inputUserName" className="form-label">User Name</label>
                        <input type="text" className="form-control" id="inputUserName" name="inputUserName" placeholder="Input User Name"/>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputName" className="form-label">Name</label>
                        <input type="text" className="form-control" id="inputName" name="inputName" placeholder="Input your Name"/>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="inputSurname" className="form-label">Surname</label>
                        <input type="text" className="form-control" id="inputSurname" name="inputSurname" placeholder="Input your SurName" />
                    </div>
                    <div className="col-md-2">
                        <label htmlFor="inputdob" className="form-label">Date Of Birth</label>
                        <input type="date" className="form-control" id="inputdob" name="inputdob" />
                    </div>
                    <div className="col-12 col-md-6">
                        <label htmlFor="inputSuburb" className="form-label">Suburb</label>
                        <input type="text" className="form-control" id="inputSuburb" name="inputSuburb" placeholder="Input your Subrub" />
                    </div>

                    
                    <div className="col-10">
                        <button type="submit" className="btn btn-primary">Sign in</button>
                    </div>
      </form>


                )

}