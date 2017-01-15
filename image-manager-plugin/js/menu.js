(function(window){
    var Menu = (function(){
        var instance;

        function init(){
            var container = window.elt('div', 'image-manager__menu'),
                imageList = window.app.ImageList.getInstance();

            function checkAll(){

            }

            function deleteAll(){

            }

            function actualView(){

            }

            return {
                container: container
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
    window.app.Menu = Menu;
})(window);