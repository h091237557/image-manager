(function (window) {
    function Container() {
        this.container = window.elt('div', 'image-manager__container')
    }

    Container.prototype.setContainer = function (element) {
        element.appendChild(this.container);
    };

    // Export to window
    window.app = window.app || {};
    window.app.Container = Container;
})(window);