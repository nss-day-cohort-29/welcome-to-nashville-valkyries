
const meetupsObject = {
    meetUpsFetch(meetUpsSearchParam) {
    return fetch(`https://www.eventbriteapi.com/v3/events/search/?location.latitude=36.174465&location.longitude=-86.767960&sort_by=date&q=${meetUpsSearchParam}`, {
        headers: {"Authorization": "Bearer Z7Y4SSESJQECHYEKDADA"}})
        .then(response => response.json())
        .then(response => {
            let eventsArray = [];
            for (let i = 0; i < response.length; i++) {
                eventsArray.push(response[i].name.text);
            };
            console.log(eventsArray);
        })
}};

meetupsObject.meetUpsFetch("Music");