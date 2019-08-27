import {element} from 'modules/element';
//import {list} from 'modules/list';
import {table} from 'modules/table';

var accountTransitions = (function (data) {
    return {
        init: function (data) {
            element.init('div', 'account-transitions', null, 'root');
            element.init('h2', null, 'My Transitions', 'account-transitions');
            table.init('account-transitions', data);
            //list.init('account-transitions', data);
        }
    };

})();

export {accountTransitions};