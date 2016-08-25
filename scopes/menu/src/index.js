var template = require("./index.jade");
var Component = {
    style: function(){
        require("style!./index.css");
    },
    view: function(element, data){
        element.innerHTML += template({
            data: data
        });
    }
};
module.exports = Component;
