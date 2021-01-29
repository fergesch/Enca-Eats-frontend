import './GenericButton.css'
import {ReactComponent as CheckEmptyReact} from '../../assets/square-regular.svg';
import {ReactComponent as CheckFullReact} from '../../assets/check-square-regular.svg';
import {ReactComponent as HeartEmptyReact} from '../../assets/heart-regular.svg';
import { ReactComponent as HeartFullReact } from '../../assets/heart-solid.svg';

export default function GenericButton(props) {
    let imageUrl;
    switch (props.type) {
        case 'visited':
            imageUrl = props.bool ? <CheckFullReact /> : <CheckEmptyReact />;
            break;
        case 'wish_list':
            imageUrl = props.bool ? <HeartFullReact /> : <HeartEmptyReact />;
            break;
        default:
            break;
    }

    return (
        <div className="toggles" onClick={() => props.toggleHandler(props.type, props.index)}>
            {imageUrl}
        </div>
    );
}