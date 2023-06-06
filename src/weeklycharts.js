// script.js
import { weeklyDatas } from './datastores.js';

const data = {
	labels: ['week1', 'week 2', 'week 3'],
	datasets: [
		{
			label: "weekly bad things",
			backgroundColor: "hsl(259, 61%, 87%)",
			borderColor: "hsl(259, 61%, 87%)",
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
					display: true
				},
				ticks: {
					fontColor: 'black',
					fontSize: 12,
					maxTicksLimit: 8
				}
			},
			y: {
				grid: {
					display: true
				},
				ticks: {
					fontColor: 'black',
					fontSize: 12,
					beginAtZero: true
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

var chartLine = new Chart(
	document.getElementById("weeklycharts"),
	configLineChart
	);