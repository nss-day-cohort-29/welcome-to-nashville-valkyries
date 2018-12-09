//Initial user experience (what they see first)

const domBuilder = {
    appendInputForm () {
        //attach to div in index.html
        let attachToHtml = document.getElementById("display-container");
        
        //create section container to be parent of forms
        let formContainer = document.createElement("section");
        attachToHtml.appendChild(formContainer);
        
        // 1 PARK 
        // //create forms containers to hold input and button for each search
        // let inputAndButtonContainer1 = document.createElement("form");
        // formContainer.appendChild(inputAndButtonContainer1);
        
        // //create input for Park search
        // inputAndButtonContainer1.appendChild(domComponents.createDomElement("input", null, null, "type", "text", "placeholder", "Parks by Feature"));
        
        // //create button for Park search BUTTON BUTTON BUTTON
        // inputAndButtonContainer1.appendChild(domComponents.createDomElement("button", null, null, "type", "button", "id", "park-button"));
        

        // // 2 RESTAURANT 
        // //create forms containers to hold input and button for each search
        // let inputAndButtonContainer2 = document.createElement("form");
        // formContainer.appendChild(inputAndButtonContainer2);

        // //create input for restaurant search
        // inputAndButtonContainer2.appendChild(domComponents.createDomElement("input", null, null, "type", "text", "placeholder", "Restaurants by Feature"));
        // //create button for restaurant search BUTTON BUTTON BUTTON
        // inputAndButtonContainer2.appendChild(domComponents.createDomElement("button", null, null, "type", "button", "id", "restaurant-button"));

        // // 3 MEETUPS 
        // let meetupInputAndButtonContainer = document.createElement("form");
        // formContainer.appendChild(meetupInputAndButtonContainer);

        // meetupInputAndButtonContainer.appendChild(
        //     domComponents.createDomElement({
        //       elementType: "input",
        //       attributes: {
        //           type: "text",
        //           placeholder: "meetups",
        //       },    
        //     })
        // );
        // meetupInputAndButtonContainer.appendChild(
        //     domComponents.createDomElement({
        //         elementType: "button",
        //         attributes: {
        //             id: "meetup-button",
        //         }
        //     })
        // );
        
       
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
                    placeholder: 'Star Wars Character',
                },
            })
        );
        concertInputAndButtonContainer.appendChild(
            domComponents.createDomElement({
                elementType: "button",
                content: "Search StarWars Character",
                cssClass: "concert",
                attributes: {
                    id: 'concert-button',
                }
                
            }));
            let searchButton = document.getElementById("concert-button");
            searchButton.addEventListener("click",  (event) => {
                eventListeners.handleSearchButton(event.target.className);
            });
    },
    appendAllResources(searchResultfrags) {
        // console.log(searchResultfrags);
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

