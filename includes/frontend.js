function displayAllCharts() {
	allchartsdata.forEach((chart) => {
		let chartctx = document.querySelector(`#${chart.chartID}`);

		let labels = chart.labels ? chart.labels : ['English', 'Spanish', 'French'];
		let data = chart.chartdata ? chart.chartdata : [300, 50, 100];
		let bgColors = chart.chartBgColor
			? chart.chartBgColor
			: ['#ff6385', '#36a3eb', '#ffcc56', '#812ffe', '#00e893'];
		let title = chart.title
			? chart.title
			: 'Pie Chart of Mostly Spoken Languages';

		var myChart = new Chart(chartctx, {
			type: chart.chartType,
			data: {
				labels: labels,
				datasets: [
					{
						data: data,
						backgroundColor: bgColors,
						hoverOffset: 4,
					},
				],
			},
			options: {
				plugins: {
					title: {
						display: true,
						text: title,
					},
				},
			},
		});
	});
}

displayAllCharts();