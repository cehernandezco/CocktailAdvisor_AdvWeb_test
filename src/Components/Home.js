export function Home(props) {

    const username = () => {
        if (props.auth === true) {
            <h5> props.user</h5>
        } else {

        }
    }
    return (
        <div className="Home">
            <div>
                <h1 className="welcome text-center"><em>Welcome {username}</em></h1>
            </div>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner mb-4">
                    <div className="carousel-item active">
                        <img src="/images/image1.jpeg" className="d-block w-100" alt="image1" />
                    </div>
                    <div className="carousel-item">
                        <img src="/images/image2.jpeg" className="d-block w-100" alt="image2" />
                    </div>
                    <div className="carousel-item">
                        <img src="/images/image3.jpeg" className="d-block w-100" alt="image3" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div>
                <h4 className="email text-center mb-4">For any questions send us an email at: <em> <a href="https://mail.google.com">cocktailadvisor@gmail.com.au </a></em></h4>
            </div>
        </div>
    )
}