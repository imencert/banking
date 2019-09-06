import {element} from 'modules/element';
import {table} from 'modules/table';

const accountTransitions = (function (data) {
    return {
        init: function (data) {
            element.create('div', 'account-transitions', null, 'root');
            element.create('h2', null, 'My Transitions', 'account-transitions');
            table.create('transitions-table', '<th>Date</th><th>Shop</th><th>In</th><th>Out</th><th>Balance</th>', data, 'account-transitions');
        } 
    };

})(); 

export {accountTransitions};