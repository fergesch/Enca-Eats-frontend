import RestaurantCard from "../RestaurantCard/RestaurantCard";
import ResultHeader from "../ResultHeader/ResultHeader";
import React from "react";

function SearchResults(props) {

    return (
        <div>
            <ResultHeader />
            {
                props.restaurants.map((r, index) => (
                    <RestaurantCard restaurant={r}
                        index={index}
                        toggleHandler={props.toggleHandler}
                    />
                ))}

        </div>
    );

}

export default SearchResults;