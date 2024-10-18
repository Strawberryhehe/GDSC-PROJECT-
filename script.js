
const createChart = (ctx, label, data, color) => {
    return new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
            datasets: [{
                label: label,
                data: data,
                borderColor: color,
                backgroundColor: color + '33',
                borderWidth: 3,
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
};

createChart(document.getElementById('visitorsMonth'), 'Website Visitors (Month)', [1200, 1500, 1800, 2000], '#FFB6C1'); // Light Pink
createChart(document.getElementById('visitorsWeek'), 'Website Visitors (Week)', [300, 350, 450, 500], '#87CEFA'); // Light Sky Blue
createChart(document.getElementById('salesCallsMonth'), 'Sales Calls (Month)', [80, 90, 100, 120], '#98FB98'); // Pale Green
createChart(document.getElementById('dealsClosedMonth'), 'Deals Closed (Month)', [30, 40, 55, 70], '#FFDAB9'); // Peach Puff
createChart(document.getElementById('installationsMonth'), 'Installations (Month)', [10, 20, 35, 50], '#FFDEAD'); // Navajo White
createChart(document.getElementById('billingsMonth'), 'Billings (Month)', [5000, 6000, 7500, 8500], '#E6E6FA'); // Lavender


const profitMonth = new Chart(document.getElementById('profitMonth'), {
    type: 'bar',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [{
            label: 'Profit (in ₹)',
            data: [120000, 150000, 180000, 170000, 200000, 220000],
            backgroundColor: '#FFB6C1', // Pastel Pink
            borderColor: '#FF69B4',
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Line chart: Profit Every Week
const profitWeek = new Chart(document.getElementById('profitWeek'), {
    type: 'line',
    data: {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [{
            label: 'Weekly Profit (in ₹)',
            data: [30000, 40000, 35000, 50000],
            borderColor: '#87CEFA',
            backgroundColor: '#87CEFA33',
            borderWidth: 2,
            fill: true,
            tension: 0.4
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

const areasReached = new Chart(document.getElementById('areasReached'), {
    type: 'line',
    data: {
        labels: ['North', 'South', 'East', 'West', 'Central'],
        datasets: [{
            label: 'Areas Reached',
            data: [50, 80, 60, 90, 70],
            borderColor: '#98FB98',
            backgroundColor: '#98FB9833',
            borderWidth: 2,
            fill: true,
            tension: 0.4
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

const companyShares = new Chart(document.getElementById('companyShares'), {
    type: 'pie',
    data: {
        labels: ['Company A', 'Company B', 'Company C', 'Company D'],
        datasets: [{
            data: [40, 25, 20, 15],
            backgroundColor: ['#FFDAB9', '#FFDEAD', '#FFB6C1', '#E6E6FA'],
            borderColor: '#fff',
            borderWidth: 2
        }]
    },
    options: {
        responsive: true
    }
});


const productMoney = new Chart(document.getElementById('productMoney'), {
    type: 'doughnut',
    data: {
        labels: ['Food', 'Electronics', 'Materials', 'Clothing'],
        datasets: [{
            data: [30000, 50000, 20000, 40000],
            backgroundColor: ['#FFB6C1', '#98FB98', '#87CEFA', '#FFDAB9'],
            borderColor: '#fff',
            borderWidth: 2
        }]
    },
    options: {
        responsive: true
    }
});


const billingsMonth = new Chart(document.getElementById('billingsMonth'), {
    type: 'pie',
    data: {
        labels: ['Product A', 'Product B', 'Product C', 'Product D'],
        datasets: [{
            data: [50000, 70000, 60000, 80000],
            backgroundColor: ['#E6E6FA', '#FFDEAD', '#FFDAB9', '#98FB98'],
            borderColor: '#fff',
            borderWidth: 2
        }]
    },
    options: {
        responsive: true
    }
});

