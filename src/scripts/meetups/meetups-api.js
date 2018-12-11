
let eventsArray = [];

const meetupsObject = {
    meetUpsFetch(meetUpsSearchParam) {
    return fetch(`https://www.eventbriteapi.com/v3/events/search/?location.latitude=36.174465&location.longitude=-86.767960&start_date.keyword=today&q=${meetUpsSearchParam}`, {
        headers: {"Authorization": "Bearer Z7Y4SSESJQECHYEKDADA"}})
        .then(response => response.json())
        .then(response => {
            response.events.forEach(event => {
                let eventName = event.name.text;
                // let eventVenue = () => {
                //     return fetch(`https://www.eventbriteapi.com/v3/venues/${event.venue_id}/`)
                //         .then(venueResponse => venueResponse.json())
                //         .then(venueResponse => {
                //         return venueResponse.name;
                //         })
                // }
                eventsArray.push(eventName);
                console.log(eventsArray);
            });
            let domFragReturn = domComponents.createResourcesDocumentFragments(eventsArray);
            console.log(domFragReturn);
            domBuilder.appendAllResources(domFragReturn);
        })
        //domBuilder.domCompBuilder(eventsArray);
        
}};

// meetupsObject.meetUpsFetch("Music");

console.log(eventsArray);