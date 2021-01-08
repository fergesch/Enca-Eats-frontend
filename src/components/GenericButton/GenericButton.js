import checkEmpty from '../../assets/square-regular.svg';
import checkFull from '../../assets/check-square-regular.svg';
import heartEmpty from '../../assets/heart-regular.svg';
import heartFull from '../../assets/heart-solid.svg';


function GenericButton(props) {
    let imageUrl;
    switch(props.type){
        case 'visited':
            imageUrl = props.bool ? checkFull : checkEmpty;
            break;
        case 'wishList':
            imageUrl = props.bool ? heartFull : heartEmpty;
            break;
        default:
            break;
    }

    
    // return(<img alt="visit" className="toggles" src={visitImageUrl} onClick={props.visitClick}/>);
    return(<img alt={props.type} className="toggles" src={imageUrl} onClick={() => props.toggleHandler(props.type, props.index)}/>);
}

export default GenericButton;