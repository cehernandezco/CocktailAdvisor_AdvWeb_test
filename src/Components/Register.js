export function Register(props) {

    const submitHandler = (event) => {
        event.preventDefault()
        const data = new FormData(event.target)
        props.handler(data.get('email'), data.get('password'))
    }



    return (
        <form id="register" onSubmit={submitHandler}>
            <h4>Register for a DrinkAdvisor Account </h4>
            <label className="form-Label" htmlFor="email">Email</label>
            <input className="form-Control" type="email" name="email" id="email" />
            <label className="form-Label" htmlFor="password">Password</label>
            <input className="form-Cotrol" type="password" name="password" id="password" />
            <button type="submit" className="btn btn-primary">Register</button>
        </form>
    )

}