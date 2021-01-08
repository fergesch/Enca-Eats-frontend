import "./Restaurant.css";
import GenericButton from "../GenericButton/GenericButton"

function Restaurant(props) {

    const { name, image_url, neighborhood, rating, url, categories, userInteractions} = props.restaurant;
    const { wishList, notes, visited } = userInteractions;

    let cat_titles = categories.map((cat) => {
        return cat.title;
    });

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
        <GenericButton type='wishList' bool={wishList.bool} toggleHandler={props.toggleHandler}/>
      </div>
      <div>
        <GenericButton type='visited' bool={visited.bool} toggleHandler={props.toggleHandler}/>
      </div>
    </div>
  );
}

export default Restaurant;