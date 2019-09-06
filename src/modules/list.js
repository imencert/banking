const list = (function () {
    return {
        init: function (container, data) {
            var ul = document.createElement('ul');
            document.getElementById(container).appendChild(ul);

            data.forEach(function (object) {
                var li = document.createElement('li');
                ul.appendChild(li);
                li.innerHTML += object.id;
            });
        }
    };

})();

export {list};