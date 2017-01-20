(function(window){
    var Menu = (function(){
        var instance;

        function init(){
            var container = window.elt('div', 'menu'),
                content = window.elt('div', 'menu__content'),
                editPanel = window.elt('div', 'menu__edit-panel'),
                deleteAllButton = window.elt('button', 'deleteAll'),
                checkAllButton = window.elt('button', 'checkAll'),
                imageList = window.app.ImageList.getInstance();

            container.appendChild(content);
            container.appendChild(editPanel);

            editPanel.appendChild(deleteAllButton);
            editPanel.appendChild(checkAllButton);

            checkAllButton.innerHTML = 'Check all';
            deleteAllButton.innerHTML = 'Delete all';

            deleteAllButton.addEventListener('click', deleteAll);
            actualView();

            function checkAll(){

            }

            function deleteAll(){
                imageList.invoke('delete');
            }

            function actualView(){
                var plural = imageList.count() === 1 ? '' : 's';
                content.innerHTML = imageList.count() + ' image' + plural;
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