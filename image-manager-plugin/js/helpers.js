(function (window) {

    // Get element(s) by CSS selector:
    window.qs = function (selector, scope) {
        return (scope || document).querySelector(selector);
    };
    window.qsa = function (selector, scope) {
        return (scope || document).querySelectorAll(selector);
    };

    // addEventListener wrapper:
    window.$on = function (target, type, callback, useCapture) {
        target.addEventListener(type, callback, !!useCapture);
    };

    //create element
    window.elt = function(name, className) {
        var elt = document.createElement(name);
        if (className) elt.className = className;
        return elt;
    }

})(window);