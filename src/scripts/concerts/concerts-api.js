
function concertsFetch (concertsSearchParam) {
        
        let today = new Date();
        let searchDate = `${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}`;
        let parsedConcerts = [];
        // let concertsSearchParam = "music"; //remove once eventListeners.js is providing variable.

        fetch(`https://app.ticketmaster.com/discovery/v2/events.json?dmaId=343&classificationName=${concertsSearchParam}&localStartDateTime=${searchDate}T00:00:01,${searchDate}T23:59:59&apikey=gOoLh8VX4xnv0GAbvCblAvu8bCKOVE95`)
        .then (response => response.json())
        .then (concertInfo => {

                concertInfo._embedded.events.forEach(concert => {
                        let event = `${concert.name}, at ${concert._embedded.venues[0].name}, Genre: ${concert.classifications[0].genre.name}`;
                        parsedConcerts.push(event)
                });
                let domFragReturn = domComponents.createResourcesDocumentFragments(parsedConcerts);
                        console.log(domFragReturn);
                        domBuilder.appendAllResources(domFragReturn);
                // return parsedConcerts;
                
        });
        // console.log(parsedConcerts);
        // domBuilder.domCompBuilder(parsedConcerts);
};

// concertsFetch();

