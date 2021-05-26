import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import { useEffect, useRef, useState } from '@wordpress/element';
import Inspector from './Inspector';
import { v4 as uuidv4 } from 'uuid';

export default function Edit({ attributes, setAttributes, className }) {
	const mycanvas = useRef();

	const {
		labels,
		title,
		chartdata,
		chartBgColor,
		labelType,
		barAxes,
		chartID,
		chartType,
	} = attributes;

	const [chartObj, setChartObj] = useState(null);

	useEffect(() => {
		// if chartID is null then create a unique id for the frontend Chart
		if (!chartID) {
			const uid = uuidv4();
			setAttributes({ chartID: `chart-${uid}` });
		}

		let chartInstance = new Chart(mycanvas.current, {
			type: chartType,
			data: {
				labels,
				datasets: [
					{
						data: chartdata,
						backgroundColor: chartBgColor,
						hoverOffset: 2,
					},
				],
			},
			options: {
				indexAxis: barAxes ? barAxes : null,
				/* 	fill: true,
				backgroundColor: 'rgba(244, 144, 128, 0.1)', */
				responsive: true,
				plugins: {
					title: {
						display: true,
						text: title,
					},
					legend: {
						display: chartType === 'bar' || chartType === 'line' ? false : true,
					},
				},
			},
		});
		setChartObj(chartInstance);
	}, []);

	useEffect(() => {
		if (chartObj) {
			/* If New CSV is uploaded Update Chart settings and Re Render the canvas */
			updateChartSettings();
		}
	}, [chartdata]);

	const updateChartSettings = () => {
		/* 	Function to Remove the Old Dataset and Push the Uploaded one */
		filterData(chartObj);
		chartObj.data.labels = labels;
		chartObj.update();
	};

	function filterData(chart) {
		if (chartType === 'bar' || chartType === 'line') {
			/* Old dataset length */
			const existingdataLength = chart.data.datasets[0].data.length;

			// exisiting colors
			let colors = [...chartBgColor];

			/*  From the existing dataset, remove the old data set items
     and push the new uploaded dataset to it */
			chartdata.forEach((dataitem, index) => {
				if (index < existingdataLength) {
					chart.data.datasets[0].data.shift();
				}
				chart.data.datasets[0].data.push(dataitem);

				// if the dataset has new bars (that is if it's length is greater than existing)
				// add colors for the new for the new bars
				if (chartBgColor.length <= chartdata.length) {
					chartBgColor.push(...colors);
				}
			});
			let newBgColor = chartBgColor.slice(0, chartdata.length);
			setAttributes({ chartBgColor: newBgColor });
		} else {
			chartObj.data.datasets[0].data = chartdata;
		}
	}

	// If the Bg color of label or The title is Changed, Update the Chart
	useEffect(() => {
		if (chartObj) {
			chartObj.options.plugins.title.text = title;
			chartObj.data.datasets[0].backgroundColor = chartBgColor;
			chartObj.update();
		}
	}, [chartBgColor, title]);

	return (
		<div {...useBlockProps()}>
			<div className='chart-wrapper'>
				<Inspector
					chartObj={chartObj}
					attributes={attributes}
					setAttributes={setAttributes}
				/>
				<canvas
					ref={mycanvas}
					className={className}
					style={{ margin: 40 }}
					width='800'
					height='800'></canvas>
			</div>
		</div>
	);
}
