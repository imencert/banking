var element = (function () {
    return {
        init: function (el, id, content, parent) {
            const element = document.createElement(el);
            if(id) {
                element.id = id;
            }
            element.innerHTML = content;
            document.getElementById(parent).appendChild(element);
        }
    };

})();

export {element};