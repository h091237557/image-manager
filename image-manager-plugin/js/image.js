(function(window){
    function Image(options){
        options = options || {};
        this.container = window.elt('div', 'image');
        this.img = window.elt('img');
        this.img.setAttribute('src', options.url);
        this.container.appendChild(this.img);
    }

    Image.prototype.addToContainer = function(container){
        container.appendChild(this.container);
    };

    // Export to window
    window.app = window.app || {};
    window.app.Image = Image;
})(window);