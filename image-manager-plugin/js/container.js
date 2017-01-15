(function (window) {
    function Container() {
        this.menu =  window.app.Menu.getInstance();
        this.container = window.elt('div', 'image-manager__container');
        this.container.content = window.elt('div', 'image-manager__content');
        this.container.appendChild(this.container.content);
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
            self.container.content.appendChild(img.container);
        }
    };

    Container.prototype.addMenu = function (){
        this.container.insertBefore( this.menu.container, this.container.childNodes[0]);
    };

    Container.prototype.init = function (options) {
        options = options || {};
        var element = options.element || '',
            images = options.images || [];

        this.setContainer(element);
        this.addMenu();
        this.addImages(images);
    };


    // Export to window
    window.app = window.app || {};
    window.app.Container = Container;
})(window);