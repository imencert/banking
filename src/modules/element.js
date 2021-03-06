const element = (function () {
    return {
        create: function (name, id, content, parent) {
            const element = document.createElement(name);
            if(id) {
                element.id = id;
            }
            element.innerHTML = content;
            document.getElementById(parent).appendChild(element);
        }
    };

})();

export {element};