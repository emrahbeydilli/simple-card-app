import "./button.css";

const Button = (props) => {
    // Card componentten gelen props nesnesini parçalama(destructuring)
    const {btnname} = props;
    return (
        <button className="btn">{btnname}</button>
    );
}
 
export default Button;  