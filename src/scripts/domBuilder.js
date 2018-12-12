//Initial user experience (what they see first)
let parkTypes = ["Dog Park", "Hiking Trails", "BasketBall Courts", "VolleyBall", "Lake", "Baseball Fields", "Picnic Shelters"];
const domBuilder = {
    appendInputForm () {
        //attach to div in index.html
        let attachToHtml = document.getElementById("display-container");
        
        //create section container to be parent of forms
        let formContainer = document.createElement("section");
        attachToHtml.appendChild(formContainer);
        
        // 1 PARK 
        let parkDropdownAndButtonContainer = document.createElement("div");
        formContainer.appendChild(parkDropdownAndButtonContainer);
        let parkDropDown = document.createElement("select");
        parkDropDown.setAttribute("id", "park-selection")
        parkDropdownAndButtonContainer.appendChild(parkDropDown);

        
        let parkClassNames = ["parkOptionDog", "parkOptionHike", "parkOptionBasketBall", "parkOptionLake", "parkOptionBaseballFields", "parkOptionPicnicShelters"];

        
        for (let i = 0; i < parkTypes.length; i++) {
            let optionElement = document.createElement("option");
            optionElement.textContent = parkTypes[i];
            optionElement.setAttribute("class", parkClassNames[i]);
            parkDropDown.appendChild(optionElement);
        };
        
        parkDropdownAndButtonContainer.appendChild(
            domComponents.createDomElement({
                elementType: "button",
                content: "Select Park Feature",
                cssClass: "parks",
                attributes: {
                    id: "park-button"
                },

            })
        );

        let parkSearchButton = document.getElementById("park-button");
        parkSearchButton.addEventListener("click",  (event) => {
            eventListeners.handleparkButton(event.target.className);
        });

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
    itineraryButtonBuilder() {
        let itineraryContainer = document.getElementById("itinerary-container");
        itineraryContainer.appendChild(domComponents.createDomElement({
            elementType: "button",
            content: "store itinerary",
            attributes: {
                id: 'store-itinerary'
            }
        }));
        itineraryContainer.appendChild(domComponents.createDomElement({
            elementType: "button",
            content: "clear itinerary",
            attributes: {
                id: 'clear-itinerary'
            }
        }));

        let storeItineraryButton = document.getElementById("store-itinerary");
        let clearItineraryButton = document.getElementById("clear-itinerary");
        storeItineraryButton.addEventListener("click", () => {
            eventListeners.storeItineraryButton()
        });
        clearItineraryButton.addEventListener("click", () => {
            eventListeners.clearItineraryButton()
        });
    },
    appendAllResources(searchResultfrags) {
        
        let resultsContainer = document.getElementById("display-container");
        resultsContainer.appendChild(searchResultfrags);

    },
};

/**
 * SRP -  Single Responsibility Principal
 *   One thing should do one thing
 * 
 */

domBuilder.appendInputForm();
domBuilder.itineraryButtonBuilder();

