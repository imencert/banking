import {element} from './element';

const table = (function () {
    return {
        create: function (id, headerData, data, parent) {
            // create table
            element.create('table', id, null, parent);
            
            // create table header
            element.create('tr', null, headerData, id);
            
            // create table rows
            data.forEach(function (object) {
                //element.create('tr', null, null, id);
                const tr = document.createElement('tr');
                document.getElementById(id).appendChild(tr);
                const td = document.createElement('td');
                tr.appendChild(td);
                td.innerHTML += object.id;
                
            });
        }
    };

})();

export {table};