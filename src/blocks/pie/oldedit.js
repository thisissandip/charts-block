import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { useEffect, useRef, useState } from '@wordpress/element';

import {
	PanelBody,
	PanelRow,
	TextControl,
	FormFileUpload,
	Button,
	SelectControl,
	ColorPalette,
} from '@wordpress/components';
import { v4 as uuidv4 } from 'uuid';

export default function Edit({ attributes, setAttributes, className }) {
	const mycanvas = useRef();

	const {
		labels,
		title,
		chartdata,
		chartBgColor,
		labelType,
		chartID,
		chartType,
	} = attributes;

	const [chartObj, setChartObj] = useState(null);

	// local states for Custom Label Colors
	const [labelOptions, setLabelOptions] = useState([]);
	const [selectedLabel, setSelectedLabel] = useState(labels[0]);
	/* 	const [colorOptions, setColorOptions] = useState([]); */
	const [selectedColor, setSelectedColor] = useState(chartBgColor[0]);

	useEffect(() => {
		// if chartID is null then create a unique id for the frontend Chart
		if (!chartID) {
			const uid = uuidv4();
			setAttributes({ chartID: `chart-${uid}` });
		}

		console.log(chartdata);

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
				/* 	fill: true,
				backgroundColor: 'rgba(244, 144, 128, 0.1)', */
				responsive: true,
				plugins: {
					title: {
						display: true,
						text: title,
					},
				},
			},
		});
		setChartObj(chartInstance);

		// set the Labels in SelectControls in required format. Labels will Change when a new CSV is uploaded
		processLabelsforOptions();
		// set the Colors in Colorpallete n required format.
		/* 	processColorOptions(); */
	}, []);

	const processLabelsforOptions = () => {
		let alllabelForOptions = labels.map((label) => {
			return {
				value: label,
				label: label,
			};
		});
		setLabelOptions(alllabelForOptions);
	};

	/* 	const processColorOptions = () => {
		let allColors = chartBgColor.map((color) => {
			return {
				color: color,
			};
		});
		setColorOptions(allColors);
	}; */

	useEffect(() => {
		if (chartObj) {
			/* If New CSV is uploaded Update Chart settings and Re Render the canvas */
			updateChartSettings();
			// Update the Labels in SelectControllers if new CSV is Uploadded
			processLabelsforOptions();
		}
	}, [labels, chartdata]);

	const updateChartSettings = () => {
		/* 	Function to Remove the Old Dataset and Push the Uploaded one into array */
		filterData(chartObj);
		chartObj.data.labels = labels;
		chartObj.update();

		console.log(chartObj.data.datasets[0].data);
	};

	function filterData(chart) {
		if (chartType === 'bar') {
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

	// handle CSV Upload from FormFileUpload Component and pass on result to DataPareser
	const handleCSVupload = (e) => {
		const CSVreader = new FileReader();
		CSVreader.onload = () => {
			DataParser(CSVreader.result);
		};
		CSVreader.readAsText(e.target.files[0]);
		setSelectedColor('#ff6385');
	};

	// Parse the Data in required Format and set new labels, chartdata and LabelType. (Label Type is what you see in Select Controller Select [LabelType] by default it is Language)
	const DataParser = (result) => {
		const table = result.split('\n').map((eachrow) => eachrow.split(',')); // First Split the data in rows and then separate the column values
		const columnnames = table[0]; // Get the column names which is the first item in rows array
		const chartLabelType = columnnames[0];
		table.shift(); // remove the first item which is column names to get the rows data
		const rowsdata = table;

		//Get the labels which is the second item in rows array
		const labels = rowsdata.map((row) => row[0]);
		//Get the data which is the second item in rows array
		const data = rowsdata.map((row) => parseInt(row[1]));

		setAttributes({
			labels: labels,
			chartdata: data,
			labelType: chartLabelType,
		});
	};

	// If the Bg color of label or The title is Changed, Update the Chart
	useEffect(() => {
		if (chartObj) {
			chartObj.options.plugins.title.text = title;
			chartObj.data.datasets[0].backgroundColor = chartBgColor;
			chartObj.update();
		}
		console.log(chartBgColor);
	}, [chartBgColor, title]);

	/* 	Bg Color Settings of Label Start */

	// set default selectedcolor of the current selectedlabel using it's index
	useEffect(() => {
		const labelIndex = labels.indexOf(selectedLabel);
		const color = chartBgColor[labelIndex];
		if (chartObj) {
			setSelectedColor(color);
		}
		console.log(labelIndex);
	}, [selectedLabel]);

	// if the current Label Color of selectedLabel is Changed, Update the Label Color
	useEffect(() => {
		if (chartObj) {
			updateLabelColor();
		}
		console.log(selectedColor);
	}, [selectedColor]);

	const updateLabelColor = () => {
		const labelIndex = labels.indexOf(selectedLabel);
		let newLabelColors = [...chartBgColor];
		newLabelColors[labelIndex] = selectedColor;
		setAttributes({ chartBgColor: [...newLabelColors] });
	};

	/* Bg Color Settings of Label End  */

	// set selected label color from colorPallete
	const onLabelColorChange = (newColor) => {
		setSelectedColor(newColor);
	};

	return (
		<div {...useBlockProps()}>
			<InspectorControls>
				<PanelBody title='Chart Settings' initialOpen={true}>
					<PanelRow>
						<TextControl
							label='Chart Tile'
							value={title}
							onChange={(title) => setAttributes({ title })}
						/>
					</PanelRow>

					<p>Upload CSV File</p>
					<FormFileUpload
						accept='.csv'
						onChange={handleCSVupload}
						render={({ openFileDialog }) => (
							<div>
								<Button
									style={{ marginBottom: '10px' }}
									isSecondary
									onClick={openFileDialog}>
									Upload CSV File
								</Button>
							</div>
						)}
					/>
				</PanelBody>
				<PanelBody title='Chart Color Settings' initialOpen={true}>
					<SelectControl
						label={__(`Select ${labelType}`)}
						value={selectedLabel}
						onChange={(label) => setSelectedLabel(label)}
						options={[
							{
								value: null,
								label: `Select ${labelType}`,
							},
							...labelOptions,
						]}
					/>

					<p>Select Color</p>
					<ColorPalette
						value={selectedColor}
						colors={[
							{ color: '#ff6385' },
							{ color: '#36a3eb' },
							{ color: '#ffcc56' },
							{ color: '#812ffe' },
							{ color: '#00e893' },
						]}
						style={{ width: '200px' }}
						onChange={onLabelColorChange}
					/>
				</PanelBody>
			</InspectorControls>
			<div className='chart-wrapper'>
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
