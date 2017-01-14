(function (window) {
    function ImageManager() {
        this.container = new window.app.Container();
    }

    // Export to window
    window.app = window.app || {};
    window.app.ImageManager = ImageManager;
})(window);