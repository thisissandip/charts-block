import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { useEffect, useRef, useState } from '@wordpress/element';
import {
	PanelBody,
	PanelRow,
	TextControl,
	FormFileUpload,
	Button,
} from '@wordpress/components';

export default function Edit({ attributes, setAttributes, className }) {
	const mycanvas = useRef();

	const [chartObj, setChartObj] = useState(null);
	const { labels, title, showTitle, chartdata } = attributes;

	useEffect(() => {
		let chartInstance = new Chart(mycanvas.current, {
			type: 'pie',
			data: {
				labels,
				datasets: [
					{
						data: chartdata,
						backgroundColor: [
							'rgb(255, 99, 132)',
							'rgb(54, 162, 235)',
							'rgb(255, 205, 86)',
						],
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
		setChartObj(chartInstance);
	}, []);

	useEffect(() => {
		if (chartObj) {
			updateChartSettings();
		}
	}, [title, labels, chartdata]);

	const updateChartSettings = () => {
		chartObj.options.plugins.title.text = title;
		chartObj.data.datasets[0].data = chartdata;
		chartObj.data.labels = labels;
		chartObj.update();
	};

	const handleCSVupload = (e) => {
		const CSVreader = new FileReader();
		CSVreader.onload = () => {
			DataParser(CSVreader.result);
		};
		CSVreader.readAsText(e.target.files[0]);
	};

	const DataParser = (result) => {
		const table = result.split('\n').map((eachrow) => eachrow.split(',')); // First Split the data in rows and then separate the column values

		const columnnames = table[0]; // Get the column names which is the first item in rows array
		table.shift(); // remove the first item which is column names to get the rows data
		const rowsdata = table;

		//Get the labels which is the second item in rows array
		const labels = rowsdata.map((row) => row[0]);
		//Get the data which is the second item in rows array
		const data = rowsdata.map((row) => parseInt(row[1]));

		setAttributes({ labels: labels, chartdata: data });
	};

	return (
		<div {...useBlockProps()}>
			<InspectorControls>
				<PanelBody title='Pie Chart Settings' initialOpen={true}>
					<PanelRow>
						<TextControl
							label='Chart Tile'
							value={title}
							onChange={(title) => setAttributes({ title })}
						/>
					</PanelRow>

					<p>Upload CSV File</p>
					<FormFileUpload
						id='HI'
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
			</InspectorControls>
			<canvas
				ref={mycanvas}
				className='pie-chart'
				width='400'
				height='400'></canvas>
		</div>
	);
}
