(function (window) {
    function ImageManager() {
        this.container = new window.app.Container();
    }

    ImageManager.prototype.init = function() {
        this.container.setContainer();
    };

    // Export to window
    window.app = window.app || {};
    window.app.ImageManager = ImageManager;
})(window);