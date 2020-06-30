new Chart(document.getElementById("line-chart"), {
    type: 'line',
    data: {
        labels: [2560, 2561, 2562],
        datasets: [{
            data: [1716, 778, 653],
            label: "รวมสารกำจัดศัตรูพืช",
            borderColor: "#3e95cd",
            fill: false
        }, {
            data: [754, 419, 240],
            label: "สารกำจักแมลง",
            borderColor: "#bf85dd",
            fill: false
        }, {
            data: [380, 199, 256],
            label: "สารกำจัดวัชพืช",
            borderColor: "#ff708f",
            fill: false
        }, {
            data: [580, 160, 157],
            label: "สารกำจัดศัตรูพืชอื่นๆ",
            borderColor: "#ffa400",
            fill: false
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        title: {
            display: false,
            text: 'World population per region (in millions)'
        }
    }
});

// GAP

new Chart(document.getElementById("gap-chart"), {
    type: 'line',
    data: {
        labels: [2558, 2559, 2560, 2561, 2562, 2563],
        datasets: [{
            data: [33363, 41397, 43081, 39741, 38256, 36352],
            label: "เชียงใหม่",
            borderColor: "#3e95cd",
            fill: false
        }, {
            data: [14742, 15607, 18010, 16886, 15768, 13133],
            label: "เชียงราย",
            borderColor: "#7292df",
            fill: false
        }, {
            data: [1551, 2799, 3567, 3551, 2780, 2800],
            label: "แม่ฮ่องสอน",
            borderColor: "#ac89e0",
            fill: false
        }, {
            data: [2643, 3348, 3500, 3739, 3696, 3948],
            label: "พะเยา",
            borderColor: "#e17ccf",
            fill: false
        }, {
            data: [16658, 14839, 11942, 9785, 10688, 11752],
            label: "ลำพูน",
            borderColor: "#ff71ac",
            fill: false
        }, {
            data: [8906, 9146, 8221, 7488, 8341, 6293],
            label: "ลำปาง",
            borderColor: "#ff737f",
            fill: false
        }, {
            data: [5081, 4998, 4858, 5375, 6174, 6664],
            label: "น่าน",
            borderColor: "#ff874c",
            fill: false
        }, {
            data: [1224, 1140, 1296, 1385, 1564, 1705],
            label: "แพร่",
            borderColor: "#ffa400",
            fill: false
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        title: {
            display: false,
            text: 'World population per region (in millions)'
        }
    }
});

new Chart(document.getElementById("doughnut-herbicide"), {
    type: 'doughnut',
    data: {
        labels: ["Paraquat", "Glyphosate"],
        datasets: [{
            backgroundColor: ["#3e95cd", "#8e5ea2"],
            data: [2022.94, 1611.48]
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
            display: false
        },
        title: {
            display: false,
            text: 'Predicted world population (millions) in 2050'
        }
    }
});

new Chart(document.getElementById("doughnut-herbicide-res"), {
    type: 'doughnut',
    data: {
        labels: ["Paraquat", "Glyphosate"],
        datasets: [{
            backgroundColor: ["#3e95cd", "#8e5ea2"],
            data: [2022.94, 1611.48]
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
            display: false
        },
        title: {
            display: false,
            text: 'Predicted world population (millions) in 2050'
        }
    }
});

new Chart(document.getElementById("doughnut-organ"), {
    type: 'doughnut',
    data: {
        labels: ["Chlorpyrifos"],
        datasets: [{
            backgroundColor: ["#3e95cd"],
            data: [195.39]
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
            display: false
        },
        title: {
            display: false,
            text: 'Predicted world population (millions) in 2050'
        }
    }
});

new Chart(document.getElementById("doughnut-organ-res"), {
    type: 'doughnut',
    data: {
        labels: ["Chlorpyrifos"],
        datasets: [{
            backgroundColor: ["#3e95cd"],
            data: [195.39]
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
            display: false
        },
        title: {
            display: false,
            text: 'Predicted world population (millions) in 2050'
        }
    }
});

new Chart(document.getElementById("pie-chart"), {
    type: 'pie',
    data: {
        labels: ["เชียงใหม่", "เชียงราย", "แม่ฮ่องสอน", "พะเยา", "ลำพูน", "ลำปาง", "น่าน", "แพร่"],
        datasets: [{
            label: "Population (millions)",
            backgroundColor: ["#3e95cd", "#7292df", "#ac89e0", "#e17ccf", "#ff71ac", "#ff737f", "#ff874c", "#ffa400"],
            data: [13721, 7499, 1747, 4684, 8390, 7655, 12355, 6740]
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
            display: false
        },
        title: {
            display: false,
            text: 'Predicted world population (millions) in 2050'
        }
    }
});

new Chart(document.getElementById("pie-chart-res"), {
    type: 'pie',
    data: {
        labels: ["เชียงใหม่", "เชียงราย", "แม่ฮ่องสอน", "พะเยา", "ลำพูน", "ลำปาง", "น่าน", "แพร่"],
        datasets: [{
            label: "Population (millions)",
            backgroundColor: ["#3e95cd", "#7292df", "#ac89e0", "#e17ccf", "#ff71ac", "#ff737f", "#ff874c", "#ffa400"],
            data: [13721, 7499, 1747, 4684, 8390, 7655, 12355, 6740]
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
            display: false
        },
        title: {
            display: false,
            text: 'Predicted world population (millions) in 2050'
        }
    }
});