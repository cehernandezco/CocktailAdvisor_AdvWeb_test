export function Register(props) {

    const submitHandler = (event) => {
        event.preventDefault()
        const data = new FormData(event.target)
        props.handler(data.get('email'), data.get('password'))
    }



    return (

        <form className="row g-3">
             <h1>Register</h1>
                    <div class="col-12">
                        <label for="inputEmail4" className="form-label">Email</label>
                        <input type="email" className="form-control" id="inputEmail4" placeholder="jg23@hotmail.com"/>
                    </div>
                    <div class="col-md-6">
                        <label for="inputPassword4" className="form-label">Password</label>
                        <input type="password" className="form-control" id="inputPassword4"placeholder="**********"/>
                    </div>
                    <div class="col-md-6">
                        <label for="inputAgainPassword4" className="form-label">Input Password Again</label>
                        <input type="againPassword" className="form-control" id="inputAgainPassword4"placeholder="**********"/>
                    </div>
                    <div class="col-12">
                        <label for="inputUserName" className="form-label">User Name</label>
                        <input type="userName" className="form-control" id="inputUserName" placeholder="Input User Name"/>
                    </div>
                    <div className="col-md-6">
                        <label for="inputName" className="form-label">Name</label>
                        <input type="name" className="form-control" id="inputName" placeholder="Input your Name"/>
                    </div>
                    <div className="col-md-4">
                        <label for="inputSurname" className="form-label">Surname</label>
                        <input type="surname" className="form-control" id="inputSurname" placeholder="Input your SurName" />
                    </div>
                    <div className="col-md-2">
                        <label for="inputDate" className="form-label">Date Of Birth</label>
                        <input type="date" className="form-control" id="inputDate" />
                    </div>
                    <div className="col-9">
                        <label for="inputSuburb" className="form-label">Suburb</label>
                        <input type="text" className="form-control" id="inputAddress" placeholder="Input your Subrub" />
                    </div>

                    <div className="col-9">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="gridCheck" />
                            <label className="form-check-label" for="gridCheck">
                                Check me out
                            </label>
                        </div>
                    </div>
                    <div class="col-10">
                        <button type="submit" className="btn btn-primary">Sign in</button>
                    </div>
      </form>


                )

}