var table = (function () {
    return {
        init: function (container, data) {
            var table = document.createElement('table');
            document.getElementById(container).appendChild(table);
            
            data.forEach(function (object) {
                var tr = document.createElement('tr');
                table.appendChild(tr);
                var td = document.createElement('td');
                tr.appendChild(td);
                td.innerHTML += object.id;
            });
        }
    };

})();

export {table};