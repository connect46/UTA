/*
 *  Document   : base_comp_charts.js
 *  Author     : pixelcave
 *  Description: Custom JS code used in Charts Page
 */

var BaseCompCharts = function() {
    // Chart.js Charts, for more examples you can check out http://www.chartjs.org/docs
    var initChartsChartJS = function () {
        // Get Chart Containers
        var $chartLinesCon  = jQuery('.js-chartjs-lines')[0].getContext('2d');
        var $chartBarsCon   = jQuery('.js-chartjs-bars')[0].getContext('2d');
//        var $chartRadarCon  = jQuery('.js-chartjs-radar')[0].getContext('2d');
//        var $chartPolarCon  = jQuery('.js-chartjs-polar')[0].getContext('2d');
//        var $chartPieCon    = jQuery('.js-chartjs-pie')[0].getContext('2d');
//        var $chartDonutCon  = jQuery('.js-chartjs-donut')[0].getContext('2d');

        // Set Chart and Chart Data variables
        var $chartLines, $chartBars, $chartRadar, $chartPolar, $chartPie, $chartDonut;
        var $chartLinesBarsRadarData, $chartPolarPieDonutData;

        // Set global chart options
        var $globalOptions = {
            scaleFontFamily: "'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif",
            scaleFontColor: '#999',
            scaleFontStyle: '600',
            tooltipTitleFontFamily: "'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif",
            tooltipCornerRadius: 3,
            maintainAspectRatio: false,
            responsive: true
        };

        // Lines/Bar/Radar Chart Data
        var $chartLinesBarsRadarData = {
            labels: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
            datasets: [
                {
                    label: 'Last Week',
                    fillColor: 'rgba(220,220,220,.3)',
                    strokeColor: 'rgba(220,220,220,1)',
                    pointColor: 'rgba(220,220,220,1)',
                    pointStrokeColor: '#fff',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(220,220,220,1)',
                    data: [30, 32, 40, 45, 43, 38, 55]
                },
                {
                    label: 'This Week',
                    fillColor: 'rgba(171, 227, 125, .3)',
                    strokeColor: 'rgba(171, 227, 125, 1)',
                    pointColor: 'rgba(171, 227, 125, 1)',
                    pointStrokeColor: '#fff',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(171, 227, 125, 1)',
                    data: [15, 16, 20, 25, 23, 25, 32]
                }
            ]
        };


        // Init Charts
        $chartLines = new Chart($chartLinesCon).Line($chartLinesBarsRadarData, $globalOptions);
        $chartBars  = new Chart($chartBarsCon).Bar($chartLinesBarsRadarData, $globalOptions);
    };

    // jQuery Sparkline Charts, for more examples you can check out http://omnipotent.net/jquery.sparkline/#s-docs
    var initChartsSparkline = function(){
        // Bar Charts
        var $barOptions = {
            type: 'bar',
            barWidth: 8,
            barSpacing: 6,
            height: '70px',
            barColor: '#fadb7d',
            tooltipPrefix: '',
            tooltipSuffix: ' Tickets',
            tooltipFormat: '{{prefix}}{{value}}{{suffix}}'
        };
        jQuery('.js-slc-bar1').sparkline('html', $barOptions);

        $barOptions['barColor']         = '#abe37d';
        $barOptions['tooltipPrefix']    = '$ ';
        $barOptions['tooltipSuffix']    = '';
        jQuery('.js-slc-bar2').sparkline('html', $barOptions);

        $barOptions['barColor']         = '#faad7d';
        $barOptions['tooltipPrefix']    = '';
        $barOptions['tooltipSuffix']    = ' Sales';
        jQuery('.js-slc-bar3').sparkline('html', $barOptions);

        // Line Charts
        var $lineOptions = {
            type: 'line',
            width: '120px',
            height: '70px',
            tooltipOffsetX: -25,
            tooltipOffsetY: 20,
            lineColor: '#fadb7d',
            fillColor: '#fadb7d',
            spotColor: '#777777',
            minSpotColor: '#777777',
            maxSpotColor: '#777777',
            highlightSpotColor: '#777777',
            highlightLineColor: '#777777',
            spotRadius: 2,
            tooltipPrefix: '',
            tooltipSuffix: ' Tickets',
            tooltipFormat: '{{prefix}}{{y}}{{suffix}}'
        };
        jQuery('.js-slc-line1').sparkline('html', $lineOptions);

        $lineOptions['lineColor']       = '#abe37d';
        $lineOptions['fillColor']       = '#abe37d';
        $lineOptions['tooltipPrefix']   = '$ ';
        $lineOptions['tooltipSuffix']   = '';
        jQuery('.js-slc-line2').sparkline('html', $lineOptions);

        $lineOptions['lineColor']       = '#faad7d';
        $lineOptions['fillColor']       = '#faad7d';
        $lineOptions['tooltipPrefix']   = '';
        $lineOptions['tooltipSuffix']   = ' Sales';
        jQuery('.js-slc-line3').sparkline('html', $lineOptions);

        // Pie Charts
        var $pieCharts = {
            type: 'pie',
            width: '50px',
            height: '50px',
            sliceColors: ['#fadb7d','#faad7d', '#75b0eb','#abe37d'],
            tooltipPrefix: '',
            tooltipSuffix: ' Tickets',
            tooltipFormat: '{{prefix}}{{value}}{{suffix}}'
        };
        jQuery('.js-slc-pie1').sparkline('html', $pieCharts);

        $pieCharts['tooltipPrefix'] = '$ ';
        $pieCharts['tooltipSuffix'] = '';
        jQuery('.js-slc-pie2').sparkline('html', $pieCharts);

        $pieCharts['tooltipPrefix'] = '';
        $pieCharts['tooltipSuffix'] = ' Sales';
        jQuery('.js-slc-pie3').sparkline('html', $pieCharts);

        // Tristate Charts
        var $tristateOptions = {
            type: 'tristate',
            barWidth: 8,
            barSpacing: 6,
            height: '80px',
            posBarColor: '#abe37d',
            negBarColor: '#faad7d'
        };
        jQuery('.js-slc-tristate1').sparkline('html', $tristateOptions);
        jQuery('.js-slc-tristate2').sparkline('html', $tristateOptions);
        jQuery('.js-slc-tristate3').sparkline('html', $tristateOptions);
    };



    return {
        init: function () {
            // Init all charts
            initChartsChartJS();
            initChartsSparkline();
//            initChartsFlot();

            // Randomize Easy Pie values functionality
            //initRandomEasyPieChart();
        }
    };
}();

// Initialize when page loads
jQuery(function(){ BaseCompCharts.init(); });