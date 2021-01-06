import checkEmpty from './assets/square-regular.svg';
import checkFull from './assets/check-square-regular.svg';

function VisitButton(props) {
    let visitImageUrl = checkEmpty;
    if(props.bool) {
        visitImageUrl = checkFull;
    }
    
    return(<img alt="visit" className="toggles" src={visitImageUrl} onClick={() => props.visitClick()}/>);
}

export default VisitButton;