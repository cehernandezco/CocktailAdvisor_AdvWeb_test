import { useState, useEffect } from "react"
import { Link } from 'react-router-dom'
import { useHistory, useLocation } from "react-router"
import { emailValidator, userNameValidator, passwordValidator, 
         inputPasswordAgainValidator, nameValidator, surnameValidator,
         suburbValidator} from "./Validators"
import {Feedback} from "./Feedback";

const useQuery = () => {
    return new URLSearchParams(useLocation().search)
}

export function Register(props) {

    const history = useHistory()
    const query = useQuery()

    const [returnPath, setReturnPath] = useState()

    const [validUserName, setValidUserName] = useState()
    const [userNameErrors, setUserNameErrors] = useState([])

    const [validEmail, setValidEmail] = useState()
    const [emailErrors, setEmailErrors] = useState([])

    const [validPassword, setValidPassword] = useState()
    const [passwordErrors, setPasswordErrors] = useState([])

    const [validInputPasswordAgain, setValidInputPasswordAgain] = useState()
    const [inputPasswordAgainErrors, setInputPasswordAgainErrors] = useState([])

    const [validName, setValidName] = useState()
    const [nameErrors, setNameErrors] = useState([])

    const [validSurname, setValidSurname] = useState()
    const [surnameErrors, setSurnameErrors] = useState([])
    
    const [validSuburb, setValidSuburb] = useState()
    const [suburbErrors, setSuburbErrors] = useState([]) 

    const [validForm, setValidForm] = useState(false)
    //feedback message
    const [display,setDisplay] = useState(false)

    useEffect(() => {
        const path = query.get('returnPath')
        if (path !== undefined) {
            setReturnPath(path)
        }
    }, [query])

    useEffect(() => {
        if (validUserName && validEmail && validPassword && validInputPasswordAgain, validName, validSurname, validSuburb) {
            setValidForm(true)
        }
        else {
            setValidForm(false)
        }
    }, [validUserName, validEmail, validPassword, validInputPasswordAgain, validName, validSurname, validSuburb])

    const submitHandler = (event) => {
        event.preventDefault()
        const data = new FormData(event.target)
        props.handler(data.get('username'), data.get('email'), data.get('password'), data.get('name'), data.get('surname'), data.get('dob'), data.get('suburb'))
            .then((response) => {
                if (response) {
                    history.push((returnPath) ? '/' + returnPath : '/')
                }
            })
            .catch( error => 
                console.log(error)
            )
    }

    const validateUserName = (event) => {
        const username = event.target.value
        const validate = userNameValidator(username)
        if (validate.valid === false) {
            setUserNameErrors(validate.errors.join(', '))
            setValidUserName(false)
        }
        else {
            setValidUserName(true)
        }

    }

    const validateEmail = (event) => {
        const email = event.target.value
        const validate = emailValidator(email)
        if (validate.valid === false) {
            setEmailErrors(validate.errors.join(', '))
            setValidEmail(false)
        }
        else {
            setValidEmail(true)
        }
    }

    const validatePassword = (event) => {
        const password = event.target.value
        const validate = passwordValidator(password)
        if (validate.valid === false) {
            setPasswordErrors(validate.errors.join(', '))
            setValidPassword(false)
        }
        else {
            setValidPassword(true)
        }
    }

    const validateInputPasswordAgain = (event) => {
        const retypepassword = event.target.value
        const validate = inputPasswordAgainValidator(retypepassword)
        if (validate.valid === false) {
            setInputPasswordAgainErrors(validate.errors.join(', '))
            setValidInputPasswordAgain(false)
        }
        else {
            setValidInputPasswordAgain(true)
        }
    }

    const validateName = (event) => {
        const name = event.target.value
        const validate = nameValidator(name)
        if (validate.valid === false) {
            setNameErrors(validate.errors.join(', '))
            setValidName(false)
        }
        else {
            setValidName(true)
        }

    }

    const validateSurname = (event) => {
        const surname = event.target.value
        const validate = surnameValidator(surname)
        if (validate.valid === false) {
            setSurnameErrors(validate.errors.join(', '))
            setValidSurname(false)
        }
        else {
            setValidSurname(true)
        }

    }

    const validateSuburb = (event) => {
        const suburb = event.target.value
        const validate = suburbValidator(suburb)
        if (validate.valid === false) {
            setSuburbErrors(validate.errors.join(', '))
            setValidSuburb(false)
        }
        else {
            setValidSuburb(true)
        }

    }

    const validationClass = (mainClass, validState) => {
        if (validState === true) {
            return `${mainClass}  is-valid`
        }
        else if (validState === false) {
            return `${mainClass}  is-invalid`
        }
        else {
            return mainClass
        }
    }



    return (
        <div className="row mt-4">
            <form className="row g-3" id="register" onSubmit={submitHandler}>
                <h1>Register</h1>
                {/* EMAIL */}
                <div className="col-12">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        className={validationClass("form-control", validEmail)}
                        type="email"
                        name="email"
                        id="email"
                        onChange={validateEmail}
                        placeholder="me@example.com"
                    />
                    <div className="invalid-feedback">{emailErrors}</div>
                    {/* <input type="email" className="form-control" id="email" name="email" placeholder="username_123@domain.com" /> */}
                </div>

                {/* PASSWORD */}
                <div className="col-md-6">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                        className={validationClass("form-control", validPassword)}
                        type="password"
                        name="password"
                        id="password"
                        placeholder="minimum 8 characters"
                        onChange={validatePassword}
                    />
                    <div className="invalid-feedback">{passwordErrors}</div>
                    {/* <input type="password" className="form-control" id="password" name="password" placeholder="Password" /> */}
                </div>

                {/* INPUT AGAIN PASSWORD */}
                <div className="col-md-6">
                    <label htmlFor="retypepassword" className="form-label">Input Password Again</label>
                    <input
                        className={validationClass("form-control", validInputPasswordAgain)}
                        type="password"
                        name="retypepassword"
                        id="retypepassword"
                        placeholder="minimum 8 characters"
                        onChange={validateInputPasswordAgain}
                    />
                    <div className="invalid-feedback">{inputPasswordAgainErrors}</div>
                    {/* <input type="password" className="form-control" id="inputAgainPassword" name="inputAgainPassword" placeholder="Re-type password" /> */}
                </div>

                {/* USERNAME */}
                <div className="col-12">
                    <label htmlFor="inputUserName" className="form-label">User Name</label>
                    <input
                        className={validationClass("form-control", validUserName)}
                        type="text"
                        name="username"
                        id="username"
                        onChange={validateUserName}
                        placeholder="letters and numbers no spaces"
                    />
                    <div className="invalid-feedback">{userNameErrors}</div>
                    {/* <input type="text" className="form-control" id="username" name="username" placeholder="Input Username" /> */}
                </div>

                {/* NAME */}
                <div className="col-md-6">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                        className={validationClass("form-control", validName)}
                        type="text"
                        name="name"
                        id="name"
                        onChange={validateName}
                        placeholder="letters and numbers no spaces"
                    />
                    <div className="invalid-feedback">{nameErrors}</div>
                    {/* <input type="text" className="form-control" id="name" name="name" placeholder="Input your Name" /> */}
                </div>

                {/* SURNAME */}
                <div className="col-md-4">
                    <label htmlFor="surname" className="form-label">Surname</label>
                    <input
                        className={validationClass("form-control", validSurname)}
                        type="text"
                        name="surname"
                        id="surname"
                        onChange={validateSurname}
                        placeholder="letters and numbers no spaces"
                    />
                    <div className="invalid-feedback">{surnameErrors}</div>
                    {/* <input type="text" className="form-control" id="surname" name="surname" placeholder="Input your SurName" /> */}
                </div>

                {/* DOB */}
                <div className="col-md-2">
                    <label htmlFor="dob" className="form-label">Date Of Birth</label>
                    <input type="date" className="form-control" id="dob" name="dob" />
                </div>

                {/* SUBURB */}
                <div className="col-12 col-md-6">
                    <label htmlFor="suburb" className="form-label">Suburb</label>
                    <input
                        className={validationClass("form-control", validSuburb)}
                        type="text"
                        name="suburb"
                        id="suburb"
                        onChange={validateSuburb}
                        placeholder="letters and numbers no spaces"
                    />
                    <div className="invalid-feedback">{suburbErrors}</div>
                    {/* <input type="text" className="form-control" id="suburb" name="suburb" placeholder="Input your Subrub" /> */}
                </div>

                {/* REGISTER BUTTON */}
                <div className="d-flex justify-content-center mt-3">
                    <button type="submit"
                        className="btn btn-primary flex-fill"
                        disabled={(!validForm) ? true : false}>
                        Register
                    </button>
                </div>
                <div className="my-4 text-center">
                    <Link to="login">Already have an account? Sign in here</Link>
                </div>
            </form>
        </div>
    )

}