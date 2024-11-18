import Button from "../button/button.component";
import "./card.style.css"
const Card = ({card}) => {
    const {heading,date,img,text} = card
    return (
        <div className="card">
            <h2>{heading}</h2>
            <div className="card-date">{date}</div>
            <img src={img} alt="resim" className="card-image"/>
            <p>{text}</p>
            <Button name="İncele"/>
            <Button name="Paylaş"/>
        </div>
    );
}
 
export default Card;