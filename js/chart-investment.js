"use strict";

// 1.0 => Area Chart 1

var areaChart1 = {
    chart: {
        height: 240,
        type: 'area',
        animations: {
            enabled: true,
            easing: 'easeinout',
            speed: 1000
        },
        dropShadow: {
            enabled: true,
            opacity: 0.1,
            blur: 1,
            left: -5,
            top: 18
        },
        zoom: {
            enabled: false
        },
        toolbar: {
            show: false
        },
    },
    colors: ['#0134d4', '#ea4c62','#ea4ddd','#f5da42', '#f5f5f0'],
    dataLabels: {
        enabled: false
    },
    fill: {
        type: "gradient",
        gradient: {
            type: "vertical",
            shadeIntensity: 1,
            inverseColors: true,
            opacityFrom: 0.15,
            opacityTo: 0.02,
            stops: [40, 100],
        }
    },
    grid: {
        borderColor: '#dbeaea',
        strokeDashArray: 4,
        xaxis: {
            lines: {
                show: true
            }
        },
        yaxis: {
            lines: {
                show: false,
            }
        },
        padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        },
    },
    legend: {
        position: 'bottom',
        horizontalAlign: 'center',
        offsetY: 4,
        fontSize: '14px',
        markers: {
            width: 9,
            height: 9,
            strokeWidth: 0,
            radius: 20
        },
        itemMargin: {
            horizontal: 5,
            vertical: 0
        }
    },
    title: {
        text: 'Modal: Rp.7.500.000',
        align: 'left',
        margin: 0,
        offsetX: 0,
        offsetY: 20,
        floating: false,
        style: {
            fontSize: '16px',
            color: '#8480ae'
        },
    },
    tooltip: {
        theme: 'dark',
        marker: {
            show: true,
        },
        x: {
            show: false,
        }
    },
    subtitle: {
        text: 'This year earn',
        align: 'left',
        margin: 0,
        offsetX: 0,
        offsetY: 0,
        floating: false,
        style: {
            fontSize: '14px',
            color: '#8480ae'
        }
    },
    stroke: {
        show: true,
        curve: 'smooth',
        width: 3
    },
    labels: ['2021', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    series: [{
        name: 'Cake',
        data: [0, 1500, 2780]
    },{
        name: 'Love',
        data: [0, 200,]
    },{
        name: 'XMS',
        data: [0, 3000]
    },{
        name: 'Xava',
        data: [0, 2000]
    }, {
        name: 'USD-IDR',
        data: [0, 14.5, 14.7,]
    }],
    xaxis: {
        crosshairs: {
            show: true
        },
        labels: {
            offsetX: 0,
            offsetY: 0,
            style: {
                colors: '#8480ae',
                fontSize: '12px',
            },
        },
        tooltip: {
            enabled: false,
        },
    },
    yaxis: {
        labels: {
            offsetX: -10,
            offsetY: 0,
            style: {
                colors: '#8480ae',
                fontSize: '12px',
            },
        }
    },
}

var areaChart_01 = new ApexCharts(document.querySelector("#areaChart1"), areaChart1);
areaChart_01.render();

// 2.0 => Area Chart 2

var chartHunnyDao = {
    chart: {
        height: 240,
        type: 'area',
        animations: {
            enabled: true,
            easing: 'easeinout',
            speed: 1000
        },
        dropShadow: {
            enabled: true,
            opacity: 0.1,
            blur: 1,
            left: -5,
            top: 5
        },
        zoom: {
            enabled: false
        },
        toolbar: {
            show: false
        },
    },
    colors: ['#0134d4'],
    dataLabels: {
        enabled: false
    },
    fill: {
        type: "gradient",
        gradient: {
            type: "vertical",
            shadeIntensity: 1,
            inverseColors: true,
            opacityFrom: 0.15,
            opacityTo: 0.05,
            stops: [40, 100],
        }
    },
    grid: {
        borderColor: '#dbeaea',
        strokeDashArray: 4,
        xaxis: {
            lines: {
                show: true
            }
        },
        yaxis: {
            lines: {
                show: false,
            }
        },
        padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        },
    },
    legend: {
        position: 'top',
        horizontalAlign: 'right',
        offsetY: -60,
        fontSize: '14px',
        markers: {
            width: 9,
            height: 9,
            strokeWidth: 0,
            radius: 20
        },
        itemMargin: {
            horizontal: 5,
            vertical: 0
        }
    },
    title: {
        text: '$270',
        align: 'left',
        margin: 0,
        offsetX: 0,
        offsetY: 20,
        floating: false,
        style: {
            fontSize: '16px',
            color: '#8480ae'
        },
    },
    tooltip: {
        theme: 'dark',
        marker: {
            show: true,
        },
        x: {
            show: false,
        }
    },
    subtitle: {
        text: '2021-2022',
        align: 'left',
        margin: 0,
        offsetX: 0,
        offsetY: 0,
        floating: false,
        style: {
            fontSize: '14px',
            color: '#8480ae'
        }
    },
    stroke: {
        show: true,
        curve: 'smooth',
        width: 3
    },
    labels: ['00', '01', '02', '03', '14', '05', '06'],
    series: [{
        name: '1st',
        data: [25.5, 29, 21, 32, 25, 29, 33]
    }],
    xaxis: {
        crosshairs: {
            show: true
        },
        labels: {
            offsetX: 0,
            offsetY: 0,
            style: {
                colors: '#8480ae',
                fontSize: '12px',
            },
        },
        tooltip: {
            enabled: false,
        },
    },
    yaxis: {
        labels: {
            offsetX: -10,
            offsetY: 0,
            style: {
                colors: '#8480ae',
                fontSize: '12px',
            },
        }
    },
}

var areaChart_02 = new ApexCharts(document.querySelector("#chartHunnyDao"), chartHunnyDao);
areaChart_02.render();

