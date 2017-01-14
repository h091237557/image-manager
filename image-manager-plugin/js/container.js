(function (window) {
    function Container() {
    }

    Container.prototype.setContainer = function () {
        console.log("test");
    };

    // Export to window
    window.app = window.app || {};
    window.app.Container = Container;
})(window);