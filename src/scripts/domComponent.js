
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
      let domFrag = document.createDocumentFragment();
      for (let i = 0; i < concertArray.length; i++) {
        domFrag.appendChild(domComponents.createDomElement({
          elementType: "p",
          content: concertArray[i],
        }))
      }
      // console.log(domFrag);
      return domFrag;


    },
};
