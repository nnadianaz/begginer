function customRender(reactElement, mainContainer) {
    const domElement = document.createElement(reactElement.type);
    
    // Handle children, which is an array
    reactElement.children.forEach(child => {
        if (typeof child === 'string') {
            domElement.appendChild(document.createTextNode(child));
        } else {
            // Handle case if child is another React element (not just a string)
            customRender(child, domElement);
        }
    });

    // Set attributes
    for (const prop in reactElement.props) {
        if (prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop]);
    }

    mainContainer.appendChild(domElement);
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank',
    },
    children: ['Click me to visit Google']
};

const mainContainer = document.querySelector('#root');

// Inject the react element into the main container
customRender(reactElement, mainContainer);
