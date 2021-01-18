import "./Restaurant.css";
import GenericButton from "../GenericButton/GenericButton"

function Restaurant(props) {

    const { name, image_url, neighborhood, rating, url, categories, userInteractions} = props.restaurant;
    const { wish_list, notes, visited } = userInteractions;
    
    console.log(notes);
    
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
        <a target='_blank' rel="noreferrer" href={url}>Yelp Page</a> 
      </div>
      <div>
        <GenericButton type='wish_list' bool={wish_list.bool} toggleHandler={props.toggleHandler}/>
      </div>
      <div>
        <GenericButton type='visited' bool={visited.bool} toggleHandler={props.toggleHandler}/>
      </div>
    </div>
  );
}

export default Restaurant;
