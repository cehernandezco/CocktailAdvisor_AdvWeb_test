import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react';


export function About ( props ) {
    return(
        <div className = "About">
            

            <div className ="row">
                <div className="col-md-6">
                    <div className="about1 ">
                        <img src="/images/about1.jpeg" className="about w-100 mb-4 rounded" alt="about1"/>  
                    </div>
                    <h4 className="followUs mt-5"> <em>Follow us on social media for:</em></h4>
                    <ul class="socialOptions mt-3 mb-4">
                        <li class="socialList"> daily updates</li>
                        <li class="socialList"> giveaways</li>
                        <li class="socialList"> vouchers</li>
                        <li class="socialList"> and much more... </li>
                    </ul>
                    
                    

                    <div className="socialIcons">
                        <a href="https://www.instagram.com/cocktailavisorait/">
                            <FontAwesomeIcon className="fa-fw" icon={['fab', 'instagram']} size="2x" />
                        </a>
                        <a href="https://www.facebook.com/Cocktail-Advisor-103760635361038">
                            <FontAwesomeIcon className="fa-fw" icon={['fab', 'facebook']} size="2x" />
                        </a>
                        <a href="https://twitter.com">
                            <FontAwesomeIcon className="fa-fw" icon={['fab', 'twitter']} size="2x" />
                        </a>
                        <a href="https://www.snapchat.com">
                            <FontAwesomeIcon className="fa-fw" icon={['fab', 'snapchat']} size="2x" />
                        </a>
                        <a href="https://www.tiktok.com/en/">
                            <FontAwesomeIcon className="fa-fw" icon={['fab', 'tiktok']} size="2x" />
                        </a>
                        
                        {/* <button className="btn btn-outline-light"><img src="/images/instagramIcon.png" className="instagramIcon" alt="instagramIcon"/></button>
                        <button className="btn btn-outline-light"><img src="/images/facebookIcon.png" className="instagramIcon" alt="facebookIcon"/></button>
                        <button className="btn btn-outline-light"><img src="/images/twitterIcon.png" className="instagramIcon" alt="twitterIcon"/></button>
                        <button className="btn btn-outline-light"><img src="/images/snapchatIcon.png" className="instagramIcon" alt="snapchatIcon"/></button>
                        <button className="btn btn-outline-light"><img src="/images/tiktokIcon.png" className="instagramIcon" alt="tiktokIcon"/></button>
                    */}
                    </div>
                </div>
                <div className="col-md-6">
                    <h1>About us</h1>
                    <h5> Welcome to everyone ! </h5>
                    <h6 className="mt-4 mb-4">This is the online Cocktail Advisor platform that helps 
                         users  to find the best cocktails places and an easy way on how to prepare them.</h6>
                    <h6 className="mt-4 mb-4">This website was created by a group of university students with the purpose of providing feedback about the
                        best places to go and enjoy your favourite cocktail in the city of Sydney! And in case the options 
                        of going out is not available, as during these lockdown days during COVID-19, we are offering how  to prepare them in your home.</h6>
                    <h6 className=" mb-5">Since 2021 we are helping cocktails fans to find their best places or favourite cocktail recipe with only 
                        few clicks comfortably from your computer! Enjoy the platform and remember to subscribe to receive updates and news!
                         </h6>
                    <div>
                        <img src="/images/about2.jpeg" className="about w-100 mt-4 mb-4 rounded" alt="about2"/> 
                    </div>
                            
                </div>
            </div>
        </div>
    )
}