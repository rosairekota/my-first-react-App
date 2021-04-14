import Bouton from "../button/bouton";
import ImageAvatar from "../image/image";
import Biography from "../textDescription/biography";
import profile from "../../assets/images/profile.svg";


const Card = (props) => {
    return (
        <>
         
            <div className={props.className}>
                <ImageAvatar src={profile} className="img-circle" alt="image-avatar"/>
                <Biography className="title-group"/>
                <Bouton className="btn-delete"/>
            </div>
        </>
    )
}
export default Card;