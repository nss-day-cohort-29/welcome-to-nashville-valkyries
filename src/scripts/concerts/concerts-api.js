let today = new Date();
let searchDate = `${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}`;
let concertsSearchParam = "music"//eventListeners.concertsSearchParam;
let parsedConcerts = [];

function concertsFetch (concertsSearchParam) {fetch
(`https://app.ticketmaster.com/discovery/v2/events.json?dmaId=343&classificationName=${concertsSearchParam}&localStartDateTime=${searchDate}T00:00:01,${searchDate}T23:59:59&apikey=gOoLh8VX4xnv0GAbvCblAvu8bCKOVE95`)
        .then (response => response.json())
        .then (concertInfo => {

                concertInfo._embedded.events.forEach(concert => {
                        let eventName = concert.name;
                        let genre = concert.classifications[0].genre.name;
                        let venue = concert._embedded.venues[0].name;
                        let event = `${eventName}, at ${venue}, Genre: ${genre}`;
                        parsedConcerts.push(event)
                })

                return parsedConcerts;
        });
        console.log(parsedConcerts);
        //domBuilder.domCompBuilder(parsedConcerts);
};

concertsFetch();