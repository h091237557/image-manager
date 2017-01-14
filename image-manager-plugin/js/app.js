(function (window) {
    function ImageManager() {
        this.container = new window.app.Container();
    }

    ImageManager.prototype.init = function(options) {
        options = options || {};
        this.element = options.element || '';

        this.container.setContainer(this.element);
    };

    // Export to window
    window.app = window.app || {};
    window.app.ImageManager = ImageManager;
})(window);