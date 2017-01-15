(function(window){
    var Menu = (function(){
        var instance;

        function init(){
            var container = window.elt('div', 'image-manager__menu'),
                imageList = window.app.ImageList.getInstance();

            actualView();

            function checkAll(){

            }

            function deleteAll(){

            }

            function actualView(){
                container.innerHTML = imageList.count();
            }

            return {
                container: container,
                actualView: actualView
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