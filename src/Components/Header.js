import { NavLink } from "react-router-dom";
import { SubMenu } from "./SubMenu";
import { Search } from "./Search";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function Header( props ) {
    

    const SiteNav = props.navigation.map( (item) => {
        if(item.submenu === undefined){
            return (
                <li className="nav-item">
                    
                    <NavLink to = {item.link} className = "nav-link" activeClassName ="active" > 
                    <FontAwesomeIcon icon={item.icon} /> 
                        &nbsp;{item.name}
                    </NavLink>
                </li> 
            )
        }else{
            return (
                <li className="nav-item dropdown">
                    <NavLink to = {item.link} className = "nav-link dropdown-toggle" activeClassName ="active" role="button" data-bs-toggle="dropdown" aria-expanded="false"> 
                        {item.name}
                    </NavLink>
                    
                    
                    <SubMenu subItems={item.submenu} />
                        
                    
                </li>
            )

        }
        
    })
    return (
                                                //colours for header (words and background)
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src="/images/logobrand.png" height="60"></img> 
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {SiteNav}
                    </ul>
                    <Search searchHandler={props.searchHandler}/>
                </div>
            </div>
        </nav>
    )
}
