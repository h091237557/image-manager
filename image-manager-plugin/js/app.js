(function (window) {
    function ImageManager() {
        this.container = new window.app.Container();
    }

    ImageManager.prototype.init = function(options) {
        this.container.init(options);
    };
    ImageManager.prototype.addImage = function(imageArray) {
        this.container.addImages(imageArray);
    };

    // Export to window
    window.app = window.app || {};
    window.app.ImageManager = ImageManager;
})(window);