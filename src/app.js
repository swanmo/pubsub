define(['ui'], function(ui) {

    var App = function(el) {
        this.el = el;
    };

    App.prototype.render = function() {
    	            console.log("render: ");
    	            console.dir(ui);
        this.el.html('require.js up and running, ' + ui.getWelcome('Kalle'));
    };

    return App;

});
