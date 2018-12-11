//Initial user experience (what they see first)

const domBuilder = {
    appendInputForm () {
        //attach to div in index.html
        let attachToHtml = document.getElementById("display-container");
        
        //create section container to be parent of forms
        let formContainer = document.createElement("section");
        attachToHtml.appendChild(formContainer);
        
        // 1 PARK 

       // 2 RESTAURANT 
       let restaurantInputAndButtonContainer = document.createElement("div");
       formContainer.appendChild(restaurantInputAndButtonContainer);

       restaurantInputAndButtonContainer.appendChild(
           domComponents.createDomElement({
               elementType: "input",
               cssClass: "restaurants",
               attributes: {
                   type: "text",
                   placeholder: "restaurants",
               },
           })
       );
       restaurantInputAndButtonContainer.appendChild(
           domComponents.createDomElement({
               elementType: "button",
               content: "Search Nashville Restaurants",
               cssClass: "restaurants",
               attributes: {
                   id: "restaurant-button"
               },
           })
       );
        let restaurantSearchButton = document.getElementById("restaurant-button");
        restaurantSearchButton.addEventListener("click",  (event) => {
            eventListeners.handleRetaurantButton(event.target.className);
        });
       
        // // 3 MEETUPS 
        let meetupInputAndButtonContainer = document.createElement("div");
        formContainer.appendChild(meetupInputAndButtonContainer);

        meetupInputAndButtonContainer.appendChild(
            domComponents.createDomElement({
              elementType: "input",
              cssClass: "meetups",
              attributes: {
                  type: "text",
                  placeholder: "meetups",
              },    
            })
        );
        meetupInputAndButtonContainer.appendChild(
            domComponents.createDomElement({
                elementType: "button",
                content: "Search Nashville Meetups",
                cssClass: "meetups",
                attributes: {
                    id: "meetup-button",
                },
            })
        );
        let meetupSearchButton = document.getElementById("meetup-button");
        meetupSearchButton.addEventListener("click",  (event) => {
            eventListeners.handleMeetupSearchButton(event.target.className);
        });
        
       
        // 4 CONCERT 
        //create forms containers to hold input and button for each search
        const concertInputAndButtonContainer = document.createElement("div");
        formContainer.appendChild(concertInputAndButtonContainer);

        concertInputAndButtonContainer.appendChild(
            domComponents.createDomElement({
                elementType: 'input',
                cssClass: "concert",
                attributes: {
                    id: "concert-input",
                    type: 'text',
                    placeholder: 'Genre',
                },
            })
        );
        concertInputAndButtonContainer.appendChild(
            domComponents.createDomElement({
                elementType: "button",
                content: "Search Nashville Concert",
                cssClass: "concert",
                attributes: {
                    id: 'concert-button',
                },
                
            }));
            let concertSearchButton = document.getElementById("concert-button");
            concertSearchButton.addEventListener("click",  (event) => {
                eventListeners.handleConcertButton(event.target.className);
            });
    },
    appendAllResources(searchResultfrags) {
        
        let resultsContainer = document.getElementById("display-container");
        resultsContainer.appendChild(searchResultfrags);

    }
};

/**
 * SRP -  Single Responsibility Principal
 *   One thing should do one thing
 * 
 */

domBuilder.appendInputForm();

