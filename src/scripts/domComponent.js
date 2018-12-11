
const domComponents = {
    createDomElement({ elementType, content = null, cssClass = '', attributes = {} }) {
      const element = document.createElement(elementType);
      element.textContent = content;
      

      if (cssClass) {
        element.classList.add(cssClass);
      }

      for (let key in attributes) {
        element.setAttribute(key, attributes[key]);
      }
      return element;
    },
    createResourcesDocumentFragments(concertArray) {
      console.log(concertArray.length);
      const homeDiv = document.getElementById("display-container")
      let searchResultContainer = this.createDomElement({
        elementType: "div",
        content: "YOUR SEARCH RESULTS ARE",
        cssClass: "search-result-box"
      })
      homeDiv.appendChild(searchResultContainer);
      let domFrag = document.createDocumentFragment();
      
      for (let i = 0; i < concertArray.length; i++) {
        domFrag.appendChild(domComponents.createDomElement({
          elementType: "p",
          content: concertArray[i],
        }));
        domFrag.appendChild(domComponents.createDomElement({
          elementType: "button",
          content: "Save",
          cssClass: `concert${i}`,
        }));
        
      };
      // console.log(domFrag);
      searchResultContainer.appendChild(domFrag);
      return domFrag;
    },
};
