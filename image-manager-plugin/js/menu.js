(function(window){
    function Menu(){
        this.container = window.elt('div', 'image-manager__menu');
        this.imageList = new window.ImageList();
    }

    Menu.prototype.checkAll = function(){

    };

    Menu.prototype.deleteAll = function(){

    };

    Menu.prototype.actualView = function(){

    };



    // Export to window
    window.app = window.app || {};
    window.app.Menu = Menu;
})(window);