// DECLARING THE SEARCH VARIABLE AND THE ARRAY FOR RESULTS TO BE RETURNED

let searchVar = "china";
let parsedRestaraunts = [];

// FUNCTION USING THE SEARCH VARIABLE TO FETCH FROM API WITH SPECIFIC TERM

function restarauntFetch(searchVar) {
          
    fetch(`https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city&q=${searchVar}&apikey=f0b5e8bf6e495860c5ebc585e9821882`)
    .then(response => response.json())
    .then(parsedResponse => {
        console.log(parsedResponse)

//  FILTERING OUT SPECIFIC ELEMENTS OF SEARCH RESULTS TO RETURN (EX. NAME, ADDRESS, RATING)       

    parsedResponse.restaurants.forEach(selection => {
        let restaurantName = selection.restaurant.name;
        let restaurantAddress = selection.restaurant.location.address;
        let restaurantRating = selection.restaurant.user_rating.aggregate_rating;
        let restaurantInfo = `${restaurantName} Address: ${restaurantAddress} Rating: ${restaurantRating}`;
        parsedRestaraunts.push(restaurantInfo);
// RETURNING FILTERED RESULTS TO THE ARRAY        
        return parsedRestaraunts;
    })
})

// APPEND ARRAY OF RESULTS TO THE DOM        

        console.log(parsedRestaraunts);
        //domBuilder.domCompBuilder(parsedRestaraunts);
};
    
restarauntFetch(searchVar);

     
        // let cuisines = [
        //   {
        //     "cuisine": {
        //       "cuisine_id": 152,
        //       "cuisine_name": "African"
        //     }
        //   },
        //   {
        //     "cuisine": {
        //       "cuisine_id": 1,
        //       "cuisine_name": "American"
        //     }
        //   },
        //   {
        //     "cuisine": {
        //       "cuisine_id": 3,
        //       "cuisine_name": "Asian"
        //     }
        //   },
        //   {
        //     "cuisine": {
        //       "cuisine_id": 193,
        //       "cuisine_name": "BBQ"
        //     }
        //   },
        //   {
        //     "cuisine": {
        //       "cuisine_id": 5,
        //       "cuisine_name": "Bakery"
        //     }
        //   },
        //   {
        //     "cuisine": {
        //       "cuisine_id": 227,
        //       "cuisine_name": "Bar Food"
        //     }
        //   },
        //   {
        //     "cuisine": {
        //       "cuisine_id": 270,
        //       "cuisine_name": "Beverages"
        //     }
        //   },
        //   {
        //     "cuisine": {
        //       "cuisine_id": 159,
        //       "cuisine_name": "Brazilian"
        //     }
        //   },
        //   {
        //     "cuisine": {
        //       "cuisine_id": 182,
        //       "cuisine_name": "Breakfast"
        //     }
        //   },
        //   {
        //     "cuisine": {
        //       "cuisine_id": 133,
        //       "cuisine_name": "British"
        //     }
        //   },
        //   {
        //     "cuisine": {
        //       "cuisine_id": 247,
        //       "cuisine_name": "Bubble Tea"
        //     }
        //   },
        //   {
        //     "cuisine": {
        //       "cuisine_id": 168,
        //       "cuisine_name": "Burger"
        //     }
        //   },
        //   {
        //     "cuisine": {
        //       "cuisine_id": 30,
        //       "cuisine_name": "Cafe"
        //     }
        //   },
        //   {
        //     "cuisine": {
        //       "cuisine_id": 491,
        //       "cuisine_name": "Cajun"
        //     }
        //   },
        //   {
        //     "cuisine": {
        //       "cuisine_id": 956,
        //       "cuisine_name": "California"
        //     }
        //   },
        //   {
        //     "cuisine": {
        //       "cuisine_id": 158,
        //       "cuisine_name": "Caribbean"
        //     }
        //   },
        //   {
        //     "cuisine": {
        //       "cuisine_id": 25,
        //       "cuisine_name": "Chinese"
        //     }
        //   },
        //   {
        //     "cuisine": {
        //       "cuisine_id": 161,
        //       "cuisine_name": "Coffee and Tea"
        //     }
        //   },
        //   {
        //     "cuisine": {
        //       "cuisine_id": 287,
        //       "cuisine_name": "Colombian"
        //     }
        //   },
        //   {
        //     "cuisine": {
        //       "cuisine_id": 928,
        //       "cuisine_name": "Creole"
        //     }
        //   },
        //   {
        //     "cuisine": {
        //       "cuisine_id": 153,
        //       "cuisine_name": "Cuban"
        //     }
        //   },
        //   {
        //     "cuisine": {
        //       "cuisine_id": 192,
        //       "cuisine_name": "Deli"
        //     }
        //   },
        //   {
        //     "cuisine": {
        //       "cuisine_id": 100,
        //       "cuisine_name": "Desserts"
        //     }
        //   },
        //   {
        //     "cuisine": {
        //       "cuisine_id": 411,
        //       "cuisine_name": "Dim Sum"
        //     }
        //   },
        //   {
        //     "cuisine": {
        //       "cuisine_id": 541,
        //       "cuisine_name": "Diner"
        //     }
        //   },
        //   {
        //     "cuisine": {
        //       "cuisine_id": 959,
        //       "cuisine_name": "Donuts"
        //     }
        //   },
        //   {
        //     "cuisine": {
        //       "cuisine_id": 268,
        //       "cuisine_name": "Drinks Only"
        //     }
        //   },
        //   {
        //     "cuisine": {
        //       "cuisine_id": 651,
        //       "cuisine_name": "Eastern European"
        //     }
        //   },
        //   {
        //     "cuisine": {
        //       "cuisine_id": 149,
        //       "cuisine_name": "Ethiopian"
        //     }
        //   },
        //   {
        //     "cuisine": {
        //       "cuisine_id": 38,
        //       "cuisine_name": "European"
        //     }
        //   },
        //   {
        //     "cuisine": {
        //       "cuisine_id": 40,
        //       "cuisine_name": "Fast Food"
        //     }
        //   },
        //   {
        //     "cuisine": {
        //       "cuisine_id": 318,
        //       "cuisine_name": "Fondue"
        //     }
        //   },
        //   {
        //     "cuisine": {
        //       "cuisine_id": 45,
        //       "cuisine_name": "French"
        //     }
        //   },
        //   {
        //     "cuisine": {
        //       "cuisine_id": 501,
        //       "cuisine_name": "Frozen Yogurt"
        //     }
        //   },
        //   {
        //     "cuisine": {
        //       "cuisine_id": 274,
        //       "cuisine_name": "Fusion"
        //     }
        //   },
        //   {
        //     "cuisine": {
        //       "cuisine_id": 134,
        //       "cuisine_name": "German"
        //     }
        //   },
        //   {
        //     "cuisine": {
        //       "cuisine_id": 156,
        //       "cuisine_name": "Greek"
        //     }
        //   },
        //   {
        //     "cuisine": {
        //       "cuisine_id": 521,
        //       "cuisine_name": "Hawaiian"
        //     }
        //   },
        //   {
        //     "cuisine": {
        //       "cuisine_id": 143,
        //       "cuisine_name": "Healthy Food"
        //     }
        //   },
        //   {
        //     "cuisine": {
        //       "cuisine_id": 233,
        //       "cuisine_name": "Ice Cream"
        //     }
        //   },
        //   {
        //     "cuisine": {
        //       "cuisine_id": 148,
        //       "cuisine_name": "Indian"
        //     }
        //   },
        //   {
        //     "cuisine": {
        //       "cuisine_id": 154,
        //       "cuisine_name": "International"
        //     }
        //   },
        //   {
        //     "cuisine": {
        //       "cuisine_id": 55,
        //       "cuisine_name": "Italian"
        //     }
        //   },
        //   {
        //     "cuisine": {
        //       "cuisine_id": 207,
        //       "cuisine_name": "Jamaican"
        //     }
        //   },
        //   {
        //     "cuisine": {
        //       "cuisine_id": 60,
        //       "cuisine_name": "Japanese"
        //     }
        //   },
        //   {
        //     "cuisine": {
        //       "cuisine_id": 164,
        //       "cuisine_name": "Juices"
        //     }
        //   },
        //   {
        //     "cuisine": {
        //       "cuisine_id": 67,
        //       "cuisine_name": "Korean"
        //     }
        //   },
        //   {
        //     "cuisine": {
        //       "cuisine_id": 136,
        //       "cuisine_name": "Latin American"
        //     }
        //   },
        //   {
        //     "cuisine": {
        //       "cuisine_id": 70,
        //       "cuisine_name": "Mediterranean"
        //     }
        //   },
        //   {
        //     "cuisine": {
        //       "cuisine_id": 73,
        //       "cuisine_name": "Mexican"
        //     }
        //   },
        //   {
        //     "cuisine": {
        //       "cuisine_id": 137,
        //       "cuisine_name": "Middle Eastern"
        //     }
        //   },
        //   {
        //     "cuisine": {
        //       "cuisine_id": 996,
        //       "cuisine_name": "New American"
        //     }
        //   },
        //   {
        //     "cuisine": {
        //       "cuisine_id": 963,
        //       "cuisine_name": "Pacific Northwest"
        //     }
        //   },
        //   {
        //     "cuisine": {
        //       "cuisine_id": 162,
        //       "cuisine_name": "Peruvian"
        //     }
        //   },
        //   {
        //     "cuisine": {
        //       "cuisine_id": 82,
        //       "cuisine_name": "Pizza"
        //     }
        //   },
        //   {
        //     "cuisine": {
        //       "cuisine_id": 983,
        //       "cuisine_name": "Pub Food"
        //     }
        //   },
        //   {
        //     "cuisine": {
        //       "cuisine_id": 320,
        //       "cuisine_name": "Ramen"
        //     }
        //   },
        //   {
        //     "cuisine": {
        //       "cuisine_id": 998,
        //       "cuisine_name": "Salad"
        //     }
        //   },
        //   {
        //     "cuisine": {
        //       "cuisine_id": 601,
        //       "cuisine_name": "Salvadorean"
        //     }
        //   },
        //   {
        //     "cuisine": {
        //       "cuisine_id": 304,
        //       "cuisine_name": "Sandwich"
        //     }
        //   },
        //   {
        //     "cuisine": {
        //       "cuisine_id": 83,
        //       "cuisine_name": "Seafood"
        //     }
        //   },
        //   {
        //     "cuisine": {
        //       "cuisine_id": 461,
        //       "cuisine_name": "Soul Food"
        //     }
        //   },
        //   {
        //     "cuisine": {
        //       "cuisine_id": 972,
        //       "cuisine_name": "South American"
        //     }
        //   },
        //   {
        //     "cuisine": {
        //       "cuisine_id": 471,
        //       "cuisine_name": "Southern"
        //     }
        //   },
        //   {
        //     "cuisine": {
        //       "cuisine_id": 966,
        //       "cuisine_name": "Southwestern"
        //     }
        //   },
        //   {
        //     "cuisine": {
        //       "cuisine_id": 89,
        //       "cuisine_name": "Spanish"
        //     }
        //   },
        //   {
        //     "cuisine": {
        //       "cuisine_id": 141,
        //       "cuisine_name": "Steak"
        //     }
        //   },
        //   {
        //     "cuisine": {
        //       "cuisine_id": 177,
        //       "cuisine_name": "Sushi"
        //     }
        //   },
        //   {
        //     "cuisine": {
        //       "cuisine_id": 997,
        //       "cuisine_name": "Taco"
        //     }
        //   },
        //   {
        //     "cuisine": {
        //       "cuisine_id": 179,
        //       "cuisine_name": "Tapas"
        //     }
        //   },
        //   {
        //     "cuisine": {
        //       "cuisine_id": 163,
        //       "cuisine_name": "Tea"
        //     }
        //   },
        //   {
        //     "cuisine": {
        //       "cuisine_id": 964,
        //       "cuisine_name": "Teriyaki"
        //     }
        //   },
        //   {
        //     "cuisine": {
        //       "cuisine_id": 150,
        //       "cuisine_name": "Tex-Mex"
        //     }
        //   },
        //   {
        //     "cuisine": {
        //       "cuisine_id": 95,
        //       "cuisine_name": "Thai"
        //     }
        //   },
        //   {
        //     "cuisine": {
        //       "cuisine_id": 142,
        //       "cuisine_name": "Turkish"
        //     }
        //   },
        //   {
        //     "cuisine": {
        //       "cuisine_id": 308,
        //       "cuisine_name": "Vegetarian"
        //     }
        //   },
        //   {
        //     "cuisine": {
        //       "cuisine_id": 99,
        //       "cuisine_name": "Vietnamese"
        //     }
        //   }
        // ];


    //   cuisines.forEach(food => {
          
    //       if (food.cuisine.cuisine_name === "Vietnamese") {
    //         console.log(food.cuisine.cuisine_id);
    //           cuisineSearchValue = food.cuisine.cuisine_id;
    //       } 
          
    //   });



      