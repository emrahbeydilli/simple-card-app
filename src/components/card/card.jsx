import Button from "../button/button";
import "./card.css";

const Card = (props) => {
    // Card componentten gelen props nesnesini parçalama(destructuring)
    const {heading,date,img,text} = props.card;
    return (
        <div className="card">
            <h2>{heading}</h2>
            <div className="card-date">{date}</div>
            <img src={img} alt="resim" />
            <p>{text}</p>
            <Button btnname="İncele"/>
            <Button btnname="Paylaş"/>
        </div>
    );
}
 
export default Card;