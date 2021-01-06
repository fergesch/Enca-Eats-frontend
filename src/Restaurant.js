import "./Restaurant.css";
import WishButton from "./WishButton"
import VisitButton from "./VisitButton"

function Restaurant(props) {

  const { name, image_url, neighborhood, rating, url, categories} = props.data;

  const { wishList, notes, visited } = props.userInteractions;

  var cat_titles = [];
  var i = 0;
  for (i = 0; i < categories.length; i++) {
    cat_titles.push(props.data.categories[i].title);
  }

  return (
    <div className="restaurant">
      <img alt="yelpPic" className="image" src={image_url} />
      <div>
        <h1>{name}</h1>
        <p>{neighborhood}</p>
        <p>Yelp Rating: {rating}</p>
        <p>Categories: {cat_titles.join(", ")}</p>
        <a target='_blank' href={url}>Yelp Page</a> 
      </div>
      <div>
        <WishButton bool={wishList.bool} wishClick={() => props.wishClick()}/>
      </div>
      <div>
        <VisitButton bool={visited.bool} visitClick={() => props.visitClick()}/>
      </div>
    </div>
  );
}

export default Restaurant;