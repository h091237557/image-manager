/**
 * Created by b50 on 2017-01-20.
 */
/*global NodeList */
(function (window) {
    window.$on = function (target, type, callback, useCapture) {
        target.addEventListener(type, callback, !!useCapture);
    };
})(window);
