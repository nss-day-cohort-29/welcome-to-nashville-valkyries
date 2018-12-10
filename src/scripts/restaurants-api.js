// const restaurantData = 
//     getResources() {
    fetch(`https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city&cuisines=Chinese&apikey=f0b5e8bf6e495860c5ebc585e9821882`)
      .then(response => response.json())
      .then(parsedResponse => {
          console.log(parsedResponse)
        
      })