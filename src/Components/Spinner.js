import '../styles/spinner.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function Spinner( props ) {
  return(
  <div 
    className="spinner-body" 
    style={{minHeight:'100%',display:"grid",placeItems:"center",fontSize: props.size + "px",color:"#cccccc"}}
  >
  <FontAwesomeIcon icon="spinner" /> 
    
  </div>
  )
}