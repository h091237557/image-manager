(function(window){
    var imageManager = function(){};

    imageManager.prototype.test = function(){
        console.log("test");
    };

    window.imageManager = new imageManager || {};
})(window);