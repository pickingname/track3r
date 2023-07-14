import { weeklyDatas } from './datastores.js';
import { chartgridcolor } from './datastores.js';
import { weeklyAverage } from './datastores.js';
console.debug(weeklyDatas)
console.debug('avg: '+weeklyAverage)

const data = {
  labels: ['week 1', 'week 2', 'week 3', 'week 4', 'week 5', 'week 6', 'week 7', 'week 8'],
  datasets: [
    {
      label: "weekly bad things",
      backgroundColor: "hsl(25, 64%, 43%)",
      borderColor: "hsl(25, 64%, 43%)",
      data: weeklyDatas,
      fill: false
    },
  ],
};

const configLineChart = {
  type: "line",
  data: data,
  options: {
    maintainAspectRatio: false,
    responsive: true,
    legend: {
      display: true,
      labels: {
        fontColor: 'white',
        fontSize: 14
      }
    },
    scales: {
      x: {
        grid: {
          display: true,
          color: chartgridcolor
        },
        ticks: {
          fontColor: 'black',
          fontSize: 12,
          maxTicksLimit: 8
        }
      },
      y: {
        grid: {
          display: true,
			color: chartgridcolor
		},
		  ticks: {
			fontColor: 'black',
			  fontSize: 12,
			  beginAtZero: true,
        max: 100,
        min: 0,
		}
	  }
	},
	  tooltips: {
		mode: 'index',
		  intersect: false,
		  callbacks: {
			label: function(tooltipItem, data) {
				return tooltipItem.yLabel.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
			}
		}
	}
  },
};

const chartLine = new Chart(document.getElementById("weeklycharts"), configLineChart);

// Determine if bad things or good things increased and by how much
const statusElement = document.getElementById('status');
const averageElement = document.getElementById('average');
averageElement.innerHTML = 'Average Incidents: '+weeklyAverage;
const lastValue = weeklyDatas[weeklyDatas.length - 1];
const secondLastValue = weeklyDatas[weeklyDatas.length - 2];
const difference = lastValue - secondLastValue;
if (difference > 0) {
	statusElement.innerHTML = `<span class='red'>Bad things Increased by ${difference}</span>`;
} else if (difference < 0) {
	statusElement.innerHTML = `<span class='green'>Bad things Decreased by ${-difference}</span>`;
} else {
	statusElement.innerHTML = 'This week is the same value as last week (${secondLastValue})';
}