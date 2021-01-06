import heartEmpty from './assets/heart-regular.svg';
import heartFull from './assets/heart-solid.svg';

function WishButton(props) {
    let wishListImageUrl = heartEmpty;
    if(props.bool) {
        wishListImageUrl = heartFull;
    }
    
    return(<img alt="heart" className="toggles" src={wishListImageUrl} onClick={props.wishClick}/>);
}

export default WishButton;