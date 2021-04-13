import ImageAvatar from "../image/image"
import textDescription from "../textDescription/biography"
import Card from "./card"



const CardContainer = (props) => {
    return (
       
       <div className={props.className}>      
          <Card className="flex-contact"/>
        </div>
    )
}
export default CardContainer;