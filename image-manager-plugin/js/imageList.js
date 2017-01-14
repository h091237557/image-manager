(function(window){
    function ImageList(){
        this.list = [];
    }

    ImageList.prototype.add = function(obj){
        console.log('added image nr:' + (this.count()+1));
      return this.list.push(obj);
    };

    ImageList.prototype.count = function(){
        return this.list.length;
    };

    ImageList.prototype.get = function( index ){
        if( index > -1 && index < this.list.length ){
            return this.list[ index ];
        }
    };

    ImageList.prototype.indexOf = function( obj, startIndex ){
        var i = startIndex;

        while( i < this.list.length ){
            if( this.list[i] === obj ){
                return i;
            }
            i++;
        }

        return -1;
    };

    // Export to window
    window.app = window.app || {};
    window.app.ImageList = ImageList;
})(window);