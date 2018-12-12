
let eventsArray = ["meetups"];

// This object contains the method which fetches the queried meetups data from the Eventbrite API. It then parses this information in order to
// append it to the DOM.

const meetupsObject = {
    meetUpsFetch(meetUpsSearchParam) {
    return fetch(`https://www.eventbriteapi.com/v3/events/search/?location.latitude=36.174465&location.longitude=-86.767960&start_date.keyword=today&q=${meetUpsSearchParam}&token`, {
        headers: {"Authorization": "Bearer Z7Y4SSESJQECHYEKDADA"}})
        .then(response => response.json())
        .then(response => {
            eventsArray = ["meetups"];
            response.events.forEach(event => {
                let eventName = event.name.text;
                // The below function returns another fetch which parses the appropriate event venue name based on the venue ID.
                // This was necessary since the original event search object did not contain the venue name, just it's ID.
                // Finally, this function pushes the interpolated string to the eventsArray and then the function is called.
                let eventVenue = () => {
                    return fetch(`https://www.eventbriteapi.com/v3/venues/${event.venue_id}/`, {
                        headers: {"Authorization": "Bearer Z7Y4SSESJQECHYEKDADA"}})
                        .then(venueResponse => venueResponse.json())
                        .then(venueResponse => {
                        let venueName = venueResponse.name;
                           eventsArray.push(`${eventName}, Location: ${venueName}`);
                        });
                }
                eventVenue();
            });
            // The below code creates a document fragment based on the populated event array and then appends it to the DOM
            let domFragReturn = domComponents.createResourcesDocumentFragments(eventsArray);
            console.log("meetups", domFragReturn);
            domBuilder.appendAllResources(domFragReturn);
        });
}};

// console.log(eventsArray);
