import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import { useEffect, useRef } from '@wordpress/element';

export default function Edit({ attributes, setAttributes }) {
	const mycanvas = useRef();

	const { label, chartType } = attributes;

	useEffect(() => {
		new Chart(mycanvas.current, {
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
						text: 'hi',
					},
				},
			},
		});
	}, []);

	return (
		<div {...useBlockProps()}>
			<canvas
				ref={mycanvas}
				className='pie-chart'
				width='400'
				height='400'></canvas>
		</div>
	);
}
