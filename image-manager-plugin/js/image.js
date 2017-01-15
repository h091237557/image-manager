(function(window){
    function Image(options){
        options = options || {};
        this.img = window.elt('img');
        this.img.setAttribute('src', options.url);
        this.container = window.elt('div', 'image');
        this.imageList = window.app.ImageList.getInstance();


        this.container.addEventListener('click', function(e){
            this.delete(e)
        }.bind(this), false);
    }

    Image.prototype.add = function(element){
        this.container.appendChild(this.img);
        this.imageList.add(this.img);
        element.appendChild(this.container);
    };

    Image.prototype.delete = function(){
        this.imageList.removeObject(this.img);
        this.container.parentNode.removeChild(this.container);
    };

    Image.prototype.delateChechked = function(){

    };


    // Export to window
    window.app = window.app || {};
    window.app.Image = Image;
})(window);