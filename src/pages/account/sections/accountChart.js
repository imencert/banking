import {element} from 'modules/element';

const accountChart = (function () {
    return {
        init: function (data) {
            console.log('chart data', data);
            
            //filter money out
            const result = data.filter(transition => transition.out > 0);
            console.log('result', result);
            
            //filter array based on the category
            //loop throught all the objects passing all the categories, and push the result into a new array
            const exp = result.filter(transition => transition.category === "Housing");
            console.log('exp', exp);
            
            
            google.charts.load('current', {'packages': ['corechart']});
            google.charts.setOnLoadCallback(drawChart);
            
            element.create('div', 'piechart', null, 'root');

            function drawChart() {

                var data = google.visualization.arrayToDataTable([ //array
                  ['Task', 'Hours per Day'],
                  ['Food', 190],
                  ['Clothes & Shoes', 200], // category and total of the category expenses 
                  ['Commute', 2000],
                  ['Rent', 2000],
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