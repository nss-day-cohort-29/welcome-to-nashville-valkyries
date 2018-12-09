//Initial user experience (what they see first)

const domBuilder = {
    appendInputForm () {
        //attach to div in index.html
        let attachToHtml = document.getElementById("display-container");
        
        //create section container to be parent of forms
        let formContainer = document.createElement("section");
        attachToHtml.appendChild(formContainer);
        
        // 1 PARK 
        //create forms containers to hold input and button for each search
        let inputAndButtonContainer1 = document.createElement("form");
        formContainer.appendChild(inputAndButtonContainer1);
        
        //create input for Park search
        inputAndButtonContainer1.appendChild(domComponents.createDomElement("input", null, null, "type", "text", "placeholder", "Parks by Feature"));
        
        //create button for Park search BUTTON BUTTON BUTTON
        inputAndButtonContainer1.appendChild(domComponents.createDomElement("button", null, null, "type", "button", "id", "park-button"));
        

        // 2 RESTAURANT 
        //create forms containers to hold input and button for each search
        let inputAndButtonContainer2 = document.createElement("form");
        formContainer.appendChild(inputAndButtonContainer2);

        //create input for restaurant search
        inputAndButtonContainer2.appendChild(domComponents.createDomElement("input", null, null, "type", "text", "placeholder", "Restaurants by Feature"));
        //create button for restaurant search BUTTON BUTTON BUTTON
        inputAndButtonContainer2.appendChild(domComponents.createDomElement("button", null, null, "type", "button", "id", "restaurant-button"));

        // 3 MEETUPS 
        //create forms containers to hold input and button for each search
        let inputAndButtonContainer3 = document.createElement("form");
        formContainer.appendChild(inputAndButtonContainer3);
        //create input for restaurant search

        inputAndButtonContainer3.appendChild(domComponents.createDomElement("input", null, null, "type", "text", "placeholder", "Meetups by Feature"));
        //create button for restaurant search BUTTON BUTTON BUTTON
        inputAndButtonContainer3.appendChild(domComponents.createDomElement("button", null, null, "type", "button", "id", "meetups-button"));

        // 4 CONCERT 
        //create forms containers to hold input and button for each search
        let inputAndButtonContainer4 = document.createElement("form");
        formContainer.appendChild(inputAndButtonContainer4);
        //create input for restaurant search
        inputAndButtonContainer4.appendChild(
            domComponents.createDomElement({
                elementType: 'input',
                attributes: {
                    type: 'text',
                    placeholder: 'Concerts Bitch',
                },
            })
        );
        //create button for restaurant search BUTTON BUTTON BUTTON
        // "button", null, null, "type", "button", "id", "concert-button"
        inputAndButtonContainer4.appendChild(
            domComponents.createDomElement({
                elementType: "button",
                attributes: {
                    id: 'concert-button',
                }

            }));
    }
};

/**
 * SRP -  Single Responsibility Principal
 *   One thing should do one thing
 * 
 */

// const DOMContainer = {
//   displayContainer: document.getElementById("display-container"),
// }

// const { API_URL } = thing

// const domBuilder = {
//     appendInputForm({ displayContainer }) {
//         const formContainer = document.createElement("section");
//         displayContainer.appendChild(formContainer);
//         const inputAndButtonContainer = document.createElement("form");
//         formContainer.appendChild(inputAndButtonContainer1);
//         inputAndButtonContainer.appendChild(domComponents.flksj(
//             {
//               elementType: 'input',
//               content: {},
//               cssClass
//             }))
//         inputAndButtonContainer.appendChild(domComponents.createDomElement("button", null, null, "type", "button", "id", "park-button"));
//     }
// };

domBuilder.appendInputForm();