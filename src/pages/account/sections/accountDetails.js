import {element} from 'modules/element';

const accountDetails = (function () {
    return {
        init: function (data) {
            this.initElements(data);
        },
        initElements: function (data) {  
            element.create('div', 'account-details', null, 'root');
            element.create('h2', null, 'My Account', 'account-details');
            element.create('p', null, data.account_number, 'account-details');
            element.create('p', null, data.sort_code, 'account-details');
            element.create('p', null, data.IBAN, 'account-details');
            element.create('h3', null, data.balance, 'account-details');
        }
    };
})();

export {accountDetails};