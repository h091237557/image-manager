(function (window) {
    function Container() {
        this.container = window.elt('div', 'image-manager__container');
        this.imageArray = [];
    }

    Container.prototype.setContainer = function (element) {
        element.appendChild(this.container);
    };

    Container.prototype.addImages = function(imageArray){
        var self = this;
        imageArray.map(function(value){
            var img = new window.app.Image(value);
            self.imageArray.push(img);
            img.addToContainer(self.container);
        })
    };

    // Export to window
    window.app = window.app || {};
    window.app.Container = Container;
})(window);