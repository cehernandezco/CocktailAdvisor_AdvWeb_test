import { NavLink } from "react-router-dom";

export function SubMenu (props) {
        const SubMenu = props.subItems.map( (item) => {
            return (
                <li>
                    <NavLink to = {item.link} className = "dropdown-item" > 
                        {item.name}
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