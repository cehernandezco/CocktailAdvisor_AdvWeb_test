export function About ( props ) {
    return(
        <div className = "About">
            

            <div className ="row">
                <div className="col-md-6">
                    <div className="about1 ">
                        <img src="/images/about1.jpeg" className="about w-100 mb-4" alt="about1"/>  
                    </div>
                    <h4 className="followUs mt-5"> Follow us on social media for:</h4>
                    <ul class="socialOptions mt-3">
                        <li class="socialList"> daily updates</li>
                        <li class="socialList"> giveaways</li>
                        <li class="socialList"> vouchers</li>
                        <li class="socialList"> and much more... </li>
                    </ul>
                    <div className="socialIcons">
                        <button className="btn btn-outline-light"><img src="/images/instagramIcon.png" className="instagramIcon" alt="instagramIcon"/></button>
                        <button className="btn btn-outline-light"><img src="/images/facebookIcon.png" className="instagramIcon" alt="facebookIcon"/></button>
                        <button className="btn btn-outline-light"><img src="/images/twitterIcon.png" className="instagramIcon" alt="twitterIcon"/></button>
                        <button className="btn btn-outline-light"><img src="/images/snapchatIcon.png" className="instagramIcon" alt="snapchatIcon"/></button>
                        <button className="btn btn-outline-light"><img src="/images/tiktokIcon.png" className="instagramIcon" alt="tiktokIcon"/></button>
                    </div>
                </div>
                <div className="col-md-6">
                    <h1>About us</h1>
                    <h5> Welcome to evryone ! </h5>
                    <h6 className="mt-4 mb-4">This is the online Cocktail Advisor platform that helps 
                         users  to find the best cocktails places and an easy way on how to prepare them.</h6>
                    <h6 className="mt-4 mb-4">This website was created by a group of university students with the purpose of providing feedback about the
                        best places to go and enjoy your favourite cocktail in the city of Syney! And in case the options 
                        of going out is not available we are offering how  to prepare them in your home.</h6>
                    <h6>Since 2021 we are helping cocktails fans to find their best places or favourite cocktail recipe with only 
                        few clicks comfortably from your computer! Enjoy the platform and remember to subscribe to receive updates !
                         </h6>
                    <div>
                        <img src="/images/about2.jpeg" className="about w-100 mt-4 mb-4" alt="about2"/> 
                    </div>
                            
                </div>
            </div>
        </div>
    )
}