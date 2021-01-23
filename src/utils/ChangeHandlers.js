import API from './Api';

export function toggleUserInteraction(restaurant, type) {
    restaurant.userInteractions[type] = {
        datetime: Date.now(),
        bool: !restaurant.userInteractions[type]["bool"],
    };
    upsertUserInteraction({...restaurant.userInteractions});
}

function upsertUserInteraction(userInteraction) {
    API
        .post("/userInteractions", userInteraction)
        .catch(function (error) {
            console.log(error);
        });
}