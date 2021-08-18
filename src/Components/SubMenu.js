import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function SubMenu (props) {
        const SubMenu = props.subItems.map( (item) => {
            return (
                <li>
                    <NavLink to = {item.link} className = "dropdown-item" >
                        <FontAwesomeIcon icon={item.icon} /> 
                        &nbsp;{item.name}
                    </NavLink>
                </li> 
            )
        })
        return (
           
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                {SubMenu}      
                        
            </ul>
        )
    }