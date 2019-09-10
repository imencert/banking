import {element} from './element';

const table = (function () {
    return {
        create: function (id, headerData, data, parent) {
            element.create('table', id, null, parent);
            element.create('tr', null, headerData, id);

            data.forEach(function (object) {
                const tr = document.createElement('tr');
                document.getElementById(id).appendChild(tr);

                const properties = Object.keys(object);
                console.log('properties', properties);
                var x;
                for (x in object) {
                    const td = document.createElement('td');
                    tr.appendChild(td);
                    td.innerHTML += object[x];
                }

            });
        }
    };

})();

export {table};