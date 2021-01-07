import RestaurantCard from "../RestaurantCard/RestaurantCard";
import ResultHeader from "../ResultHeader/ResultHeader";
import React from "react";

function SearchResults (props) {

    return (
        <div>
            <ResultHeader/>
            {
                props.data.map((restaurant, index) => (
                    <RestaurantCard data={restaurant}
                                    wishClick={() => props.wishClick(index)}
                                    visitClick={() => props.visitClick(index)}/>
                                    ))}

        </div>
    );

}

export default SearchResults;