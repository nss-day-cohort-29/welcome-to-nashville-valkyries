// This module is responsible for appending DOM components to the DOM.

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
    createResourcesDocumentFragments(resourcesArray) {
      let domFrag = document.createDocumentFragment();

      resourcesArray.results.forEach((character) => {
        console.log(character.name);
        const nameContainer = this.createDomElement({
          elementType: "section",
          content: character.name,
          cssClass: "searchResult",
        });
        console.log(nameContainer);
        for (property in character) {
          // console.log(character);
          nameContainer.appendChild(this.createDomElement({
            elementType: "p",
            content: character[property],
            cssClass: "more-info",
          }))
        }
        domFrag.appendChild(nameContainer);
      })
      // console.log(domFrag);
      return domFrag;

    }
};
