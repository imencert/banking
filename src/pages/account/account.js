import {request} from 'modules/request';
import {accountDetails} from './sections/accountDetails';
import {accountChart} from './sections/accountChart';
import {accountTransitions} from './sections/accountTransitions';

const account = (function () {
    return {
        init: function () {
            this.requestData();
        },
        requestData: function () {
            request.fetch('https://my-json-server.typicode.com/imencert/data/db');
        },
        getData: function (data) {
            console.log('data', data);
            this.renderPage(data);
        },
        renderPage: function (data) {
            accountDetails.init(data.details);
            accountChart.init(data.transitions);
            accountTransitions.init(data.transitions);
        }
    };

})();

export {account};