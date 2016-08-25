var menuComponent = require("menu");
var formComponent = require("form");

var menuElement = document.getElementById("b-app-menu");
var formElement = document.getElementById("b-app-form");

//implementing the menu
menuComponent.style();
menuComponent.view(menuElement, {
    items: [
        {
            "href": "/",
            "text": "MyApp"
        }
    ]
});

//implementing the form
formComponent.style();
formComponent.view(formElement);
