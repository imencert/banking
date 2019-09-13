import {element} from './element';

const table = (function () {
    return {
        create: function (id, headerData, data, parent) {
            element.create('table', id, null, parent);
            element.create('tr', null, headerData, id);

            data.forEach(function (object) {
                const row = document.createElement('tr');
                document.getElementById(id).appendChild(row);

                const properties = Object.keys(object);
                var prop, date;
                for (prop in object) {
                    date = new Date(object['date']);
                    object['date'] = date.toDateString();
                    
                    const cell = document.createElement('td');
                    row.appendChild(cell);
                    
                    if (object[prop] && prop != 'id') {
                        cell.innerHTML += object[prop];
                    }
                }
            });
        }
    };

})();

export {table};