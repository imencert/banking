import {element} from 'modules/element';
import {list} from 'modules/list';

var accountTransitions = (function (data) {
    return {
        init: function (data) {
            element.init('div', 'account-transitions', null, 'root');
            element.init('h2', null, 'My Transitions', 'account-transitions');
            list.init('account-transitions', data);  //use table
        }
    };

})();

export {accountTransitions};