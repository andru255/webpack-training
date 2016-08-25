var menuSelf = require("./src/index");
menuSelf.style();
menuSelf.view(document.body, {
    items: [
        {
          "href": "/",
          "text": "Home"
        },
        {
          "href": "/about-us",
          "text": "About us"
        }
    ]
});
