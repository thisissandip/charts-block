import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { useEffect, useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import {
	PanelBody,
	PanelRow,
	TextControl,
	FormFileUpload,
	Button,
	SelectControl,
	ColorPalette,
	ToggleControl,
} from '@wordpress/components';
import { v4 as uuidv4 } from 'uuid';

function Inspector({ attributes, setAttributes, chartObj }) {
	const { title, labels, chartBgColor, labelType, chartType, sameColor } =
		attributes;

	// local states for Custom Label Colors
	const [labelOptions, setLabelOptions] = useState([]);
	const [selectedColor, setSelectedColor] = useState(chartBgColor[0]);
	const [selectedLabel, setSelectedLabel] = useState(labels[0]);

	useEffect(() => {
		// set the Labels in SelectControls required format in the. Labels will Change when a new CSV is uploaded
		processLabelsforOptions();
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

	useEffect(() => {
		if (chartObj) {
			// Update the Labels in SelectControllers if new CSV is Uploadded
			processLabelsforOptions();
		}
	}, [labels]);

	/* File Upload Start */

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
		//const chartLabelType = columnnames[0];
		table.shift(); // remove the first item which is column names to get the rows data
		const rowsdata = table;

		//Get the labels which is the second item in rows array
		const labels = rowsdata.map((row) => row[0]);
		//Get the data which is the second item in rows array
		const data = rowsdata.map((row) => parseInt(row[1]));

		setAttributes({
			labels: labels,
			chartdata: data,
			//	labelType: chartLabelType,
		});
	};

	/* File Upload End */

	/* Label Bg Color Settings Start */

	// If same color is selected, set the color to #812ffe and set set label to first label
	// else switch back to default colors
	useEffect(() => {
		if (chartObj) {
			if (sameColor) {
				setSelectedColor('#812ffe');
				setSelectedLabel(labels[0]);
			} else {
				switchtoDefaultColors();
			}
		}
	}, [sameColor]);

	const switchtoDefaultColors = () => {
		let defaultcolors = ['#ff6385', '#36a3eb', '#ffcc56', '#812ffe', '#00e893'];
		let newBgColorsFull = [];
		labels.forEach((item) => {
			if (newBgColorsFull.length <= labels.length) {
				newBgColorsFull.push(...defaultcolors);
			}
		});

		let newBgColor = newBgColorsFull.slice(0, labels.length);
		setAttributes({ chartBgColor: [...newBgColor] });
		setSelectedColor('#ff6385');
	};

	useEffect(() => {
		if (chartObj) {
			if (sameColor) {
				// When Same Color is Selected, Switch all bars to same color
				updateAllLabelColors();
			} else {
				// if theLabel Color of  currently selectedLabel is Changed, Update the Label Color
				updateLabelColor();
			}
		}
	}, [selectedColor]);

	const updateLabelColor = () => {
		const labelIndex = labels.indexOf(selectedLabel);
		let newLabelColors = [...chartBgColor];
		newLabelColors[labelIndex] = selectedColor;
		setAttributes({ chartBgColor: [...newLabelColors] });
	};

	const updateAllLabelColors = () => {
		setAttributes({ chartBgColor: [selectedColor] });
	};

	// set default selectedcolor of the current selectedlabel using it's index
	useEffect(() => {
		const labelIndex = labels.indexOf(selectedLabel);
		const color = chartBgColor[labelIndex];
		if (chartObj && !sameColor) {
			setSelectedColor(color);
		}
	}, [selectedLabel]);

	/* Label Bg Color Settings End */

	// ColorPallete Onchange Function
	const onLabelColorChange = (newColor) => {
		setSelectedColor(newColor);
	};

	return (
		<div>
			<InspectorControls>
				<PanelBody title='Chart Settings' initialOpen={true}>
					<PanelRow>
						<TextControl
							label='Chart Tile'
							value={title}
							onChange={(title) => setAttributes({ title })}
						/>
					</PanelRow>

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

					<a href={`${siteurl}/ChartBlock_Example_Data.csv`} download>
						Download Example CSV File
					</a>
				</PanelBody>
				<PanelBody title='Chart Color Settings' initialOpen={true}>
					{(chartType === 'bar' || chartType === 'line') && (
						<div style={{ margin: '25px 0 25px 0' }}>
							<ToggleControl
								label={`Use same color for all Labels `}
								checked={sameColor}
								onChange={(e) => setAttributes({ sameColor: e })}
							/>
						</div>
					)}

					{!sameColor && (
						<SelectControl
							label={__(`Select Label`)}
							value={selectedLabel}
							onChange={(label) => setSelectedLabel(label)}
							options={[
								{
									value: null,
									label: `Select Label`,
								},
								...labelOptions,
							]}
						/>
					)}

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
		</div>
	);
}

export default Inspector;
