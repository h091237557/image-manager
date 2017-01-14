(function (window) {
    function Container() {
        this.container = window.elt('div', 'image-manager__container');
        this.imageList = new window.app.ImageList();
    }

    Container.prototype.setContainer = function (element) {
        element.appendChild(this.container);
    };

    Container.prototype.addImages = function (imageArray) {
        var self = this;
        if (Object.prototype.toString.call(imageArray) === '[object Array]') imageArray.map(add);
        else add(imageArray);

        function add(value) {
            var img = new window.app.Image(value);
            self.imageList.add(img);
            self.container.appendChild(img.container);
        }

    };

    Container.prototype.init = function (options) {
        options = options || {};
        var element = options.element || '',
            images = options.images || [];

        this.setContainer(element);
        this.addImages(images);
    };


    // Export to window
    window.app = window.app || {};
    window.app.Container = Container;
})(window);