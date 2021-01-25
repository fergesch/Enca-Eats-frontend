import checkEmpty from '../../assets/square-regular.svg';
import checkFull from '../../assets/check-square-regular.svg';
import heartEmpty from '../../assets/heart-regular.svg';
import heartFull from '../../assets/heart-solid.svg';

export default function GenericButton(props) {
    let imageUrl;
    switch(props.type){
        case 'visited':
            imageUrl = props.bool ? checkFull : checkEmpty;
            break;
        case 'wish_list':
            imageUrl = props.bool ? heartFull : heartEmpty;
            break;
        default:
            break;
    }

    return(<img alt={props.type} className="toggles" src={imageUrl} onClick={() => props.toggleHandler(props.type, props.index)}/>);
}