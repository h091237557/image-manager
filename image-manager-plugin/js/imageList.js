(function(window){
    var ImageList = (function(){
        var instance;

        function init(){
            var list = [];

            function add(obj){
                console.log('added image nr:' + (this.count()+1));
                return list.push(obj);
            }

            function count(){
                return list.length;

            }

            function get(index){
                if( index > -1 && index < list.length ){
                    return list[ index ];
                }
            }

            function indexOf(obj, startIndex){
                var i = startIndex;

                while( i < list.length ){
                    if( list[i] === obj ){
                        return i;
                    }
                    i++;
                }

                return -1;
            }

            function removeAt( index ){
                list.splice( index, 1 );
            }

            function removeObject(obj){
                removeAt(indexOf(obj,0))
            }

            return {
                add: add,
                count: count,
                get: get,
                indexOf: indexOf,
                removeAt: removeAt,
                removeObject: removeObject
            }
        }

        return {
            getInstance: function () {
                if (!instance) {
                    instance = init();
                }
                return instance;
            }
        }
    })();

    // Export to window
    window.app = window.app || {};
    window.app.ImageList = ImageList;
})(window);