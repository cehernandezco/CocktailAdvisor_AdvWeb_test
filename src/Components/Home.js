export function Home(props) {
    return (
        <div className="Home">

            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner mb-4">
                    <div className="carousel-item active">
                        <img src="/images/image1.jpeg" className="d-block w-100" alt="image1"/>
                    </div>
                        <div className="carousel-item">
                            <img src="/images/image2.jpeg" className="d-block w-100" alt="image2"/>
                    </div>
                    <div className="carousel-item">
                            <img src="/images/image3.jpeg" className="d-block w-100" alt="image3"/>
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
                    </div>
    )
}