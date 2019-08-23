import {element} from 'modules/element';

var accountDetails = (function () {
    return {
        init: function (data) {
            this.initElements(data);
        },
        initElements: function (data) {  
            element.init('div', 'account-details', null, 'root');
            element.init('h2', null, 'My Account', 'account-details');
            element.init('p', null, data.account_number, 'account-details');
            element.init('p', null, data.sort_code, 'account-details');
            element.init('p', null, data.IBAN, 'account-details');
            element.init('h3', null, data.balance, 'account-details');
        }
    };
})();

export {accountDetails};