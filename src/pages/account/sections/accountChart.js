import {element} from 'modules/element';

const accountChart = (function () {
    return {
        init: function (data) {
            google.charts.load('current', {'packages': ['corechart']});
            google.charts.setOnLoadCallback(drawChart);
            
            element.create('div', 'piechart', null, 'root');
            
            //filter expenses
            const expenses = data.filter(transition => transition.out > 0);
            
            //filter category
            const entertainment = expenses.filter(transition => transition.category === "Entertainment");
            const personalCare = expenses.filter(transition => transition.category === "Personal Care");
            
            //iterate array to convert string into number
            const entertainmentNumber = entertainment.map(transition => parseInt(transition.out));
            const personalCareNumber = personalCare.map(transition => parseInt(transition.out));
            
            //calculate total for the category
            const entertainmentTotal = entertainmentNumber.reduce((x, y) => x + y);
            const personalCareTotal = personalCareNumber.reduce((x, y) => x + y);

            function drawChart() {
                var data = google.visualization.arrayToDataTable([ //array
                  ['tasks', 'Hours per Day'],
                  ['Personal Care', personalCareTotal],       
                  ['Food', 190],
                  ['Clothes & Shoes', 200], 
                  ['Commute', 2000],
                  ['Rent', 2000],
                  ['Entertainment', entertainmentTotal]
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