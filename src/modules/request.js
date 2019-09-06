import {account} from './../pages/account/account';

const request = (function () {
    return {
        fetch: function (url) {
            fetch(url, {mode: 'cors'})
                .then(response => {
                    if (response.status >= 200 && response.status < 300) {
                        return Promise.resolve(response)
                    } else {
                        return Promise.reject(new Error(response.statusText))
                    }
                })
                .then(response => response.json())
                .then(data => {
                    //if(url === 'https://my-json-server.typicode.com/imencert/data/db') {
                        account.getData(data);
                    //}
                })
                .catch(function () {
                    return null;
                });
        }
    };
})();

export {request};