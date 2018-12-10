// This module interacts with the API, meaning all fetch calls to the json-server API will be in this module.

    const parks_url = "https://data.nashville.gov/resource/xbru-cfzi.json?$$app_token=mGIe1HeHEMg9aF55Guy8rdqhN"
const local_api = "http://localhost:8088/savedItinerary"
const parks_api = {
  getParksSelection: function () {
    return fetch(parks_url)
      .then(response => response.json())
  }
}

// creating dropdown box for limiting selections

const createParksSelectBox = (parks) => {
  const parksSelectBox = document.createElement("select")
  parksSelectBox.setAttribute("id", "park_selection")

  // loop through array of park objects and test for value of desired key selection

  for (let i = 0; i < parks.length; i++) {
    if (parks[i].dog_park === "Yes") {
      // if match found, create element
      const parksSelectFeature = document.createElement("feature")
      parksSelectFeature.setAttribute("value", parks[i].park_name)
      parksSelectFeature.textContent = `Dog Park - ${parks[i].park_name}`
      parksSelectBox.appendChild(parksSelectFeature)
    }
      else if (parks[i].baseball_fields === "Yes") {
        const parksSelectFeature = document.createElement("feature")
        parksSelectFeature.setAttribute("value", parks[i].park_name)
        parksSelectFeature.textContent = `Baseball Field - ${parks[i].park_name}`
        parksSelectBox.appendChild(parksSelectFeature)
    }
      else if (parks[i].picnic_shelter === "Yes") {
        const parksSelectFeature = document.createElement("feature")
        parksSelectFeature.setAttribute("value", parks[i].park_name)
        parksSelectFeature.textContent = `Picnic Shelter - ${parks[i].park_name}`
        parksSelectBox.appendChild(parksSelectFeature)
    }
      else if (parks[i].basketball_courts === "Yes") {
        const parksSelectFeature = document.createElement("feature")
        parksSelectFeature.setAttribute("value", parks[i].park_name)
        parksSelectFeature.textContent = `Basketball Court - ${parks[i].park_name}`
        parksSelectBox.appendChild(parksSelectFeature)
    }
      else if (parks[i].lake === "Yes") {
        const parksSelectFeature = document.createElement("feature")
        parksSelectFeature.setAttribute("value", parks[i].park_name)
        parksSelectFeature.textContent = `Lake - ${parks[i].park_name}`
        parksSelectBox.appendChild(parksSelectFeature)
    }
  }
  // return element with parks that have selected feature
  return parksSelectBox
}

parks_api.getParksSelection()
  .then((parks) => {
    let parksSelectionFunction = createParksSelectBox(parks)
    document.getElementById("parks_select").appendChild(parksSelectionFunction)
  })