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
	const { title, showTitle } = attributes;

	useEffect(() => {
		let chartInstance = new Chart(mycanvas.current, {
			type: 'pie',
			data: {
				labels: ['Red', 'Blue', 'Yellow'],
				datasets: [
					{
						label: 'My First Dataset',
						data: [300, 50, 100],
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
	}, [title]);

	const updateChartSettings = () => {
		chartObj.options.plugins.title.text = title;
		chartObj.update();
	};

	const handleCSVupload = (e) => {
		const CSVreader = new FileReader();
		CSVreader.onload = () => {
			console.log(CSVreader.result);
		};
		CSVreader.readAsText(e.target.files[0]);
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
