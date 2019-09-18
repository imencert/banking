import {element} from 'modules/element';

const accountChart = (function () {
    return {
        init: function (data) {
            console.log('chart data', data);

            google.charts.load('current', {'packages': ['corechart']});
            google.charts.setOnLoadCallback(drawChart);
            
            element.create('div', 'piechart', null, 'root');

            function drawChart() {
                var data = google.visualization.arrayToDataTable([
                  ['Task', 'Hours per Day'],
                  ['Work', 190],
                  ['Eat', 200],
                  ['Commute', 2000],
                  ['Watch TV', 2000],
                  ['Sleep', 700]
                ]);

                var options = {
                    title: 'My Daily Activities',
                    chartArea:{left:20, top:0, width:'70%', height:'95%'}
                };

                var chart = new google.visualization.PieChart(document.getElementById('piechart'));

                chart.draw(data, options);
            }

        }
        /*,
                initElements: function (data) {  
                    element.create('div', 'account-details', null, 'root');
                    element.create('h2', null, 'My Account', 'account-details');
                    element.create('p', null, data.account_number, 'account-details');
                    element.create('p', null, data.sort_code, 'account-details');
                    element.create('p', null, data.IBAN, 'account-details');
                    element.create('h3', null, data.balance, 'account-details');
                }*/
    };
})();

export {accountChart};