
let eventsArray = [];

// const meetupsObject = {
//     meetUpsFetch(meetUpsSearchParam) {
//     return fetch(`https://www.eventbriteapi.com/v3/events/search/?location.latitude=36.174465&location.longitude=-86.767960&start_date.keyword=today&q=${meetUpsSearchParam}`, {
//         headers: {"Authorization": "Bearer Z7Y4SSESJQECHYEKDADA"}})
//         .then(response => response.json())
//         .then(response => {
//             response.events.forEach(event => {
//                 let eventName = event.name.text;
//                 eventsArray.push(eventName);
//             });
//         })
//         //domBuilder.domCompBuilder(eventsArray);
// }};

// meetupsObject.meetUpsFetch("Music");

// console.log(eventsArray);

// SECTION FOR VENUE NAME TO BE IMPLEMENTED

// fetch(`https://www.eventbriteapi.com/v3/events/search/?location.latitude=36.174465&location.longitude=-86.767960&start_date.keyword=today&q=Music`, {
//     headers: {"Authorization": "Bearer Z7Y4SSESJQECHYEKDADA"}})
//     .then(response => response.json())
//     .then(response => {
//         response.events.forEach(event => {
//             let eventName = event.name.text;
//             let eventVenue = () => {
//                 return fetch(`https://www.eventbriteapi.com/v3/venues/${event.venue_id}/`, {
//                     headers: {"Authorization": "Bearer Z7Y4SSESJQECHYEKDADA"}})
//                     .then(venueResponse => venueResponse.json())
//                     .then(venueResponse => {
//                     return venueResponse.name;
//                     })
//             };
//             eventsArray.push(`${eventName}, Location: ${eventVenue()}`);
//         })
//     });

// console.log(eventsArray);

let thing = "";

const fooFunction = () => {
    fetch("https://www.eventbriteapi.com/v3/venues/28111554/?token=Z7Y4SSESJQECHYEKDADA")
    .then(venueResponse => venueResponse.json())
    .then(venueResponse => {
        venueResponse.forEach(venue => {
            thing = venue.name;
        });
    });
};

console.log(thing);

fooFunction();