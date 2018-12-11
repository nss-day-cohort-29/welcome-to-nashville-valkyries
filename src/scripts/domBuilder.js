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
       
        // // 3 MEETUPS 
        // let meetupInputAndButtonContainer = document.createElement("div");
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
                    placeholder: 'Search',
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
            let searchButton = document.getElementById("concert-button");
            searchButton.addEventListener("click",  (event) => {
                eventListeners.handleSearchButton(event.target.className);
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

