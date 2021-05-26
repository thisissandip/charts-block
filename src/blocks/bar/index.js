import edit from '../edit';
import metadata from './block.json';
import { __ } from '@wordpress/i18n';

const { name, category, attributes, supports, textdomain, example } = metadata;

const icon = (
	<svg
		version='1.0'
		xmlns='http://www.w3.org/2000/svg'
		width='250.000000pt'
		height='250.000000pt'
		viewBox='0 0 250.000000 250.000000'
		preserveAspectRatio='xMidYMid meet'>
		<g
			transform='translate(0.000000,250.000000) scale(0.100000,-0.100000)'
			fill='#1E1E1E'
			stroke='none'>
			<path d='M250 1235 l0 -1115 255 0 255 0 0 1115 0 1115 -255 0 -255 0 0 -1115z' />
			<path d='M1020 1050 l0 -940 255 0 255 0 0 940 0 940 -255 0 -255 0 0 -940z' />
			<path d='M1760 800 l0 -680 255 0 255 0 0 680 0 680 -255 0 -255 0 0 -680z' />
		</g>
	</svg>
);

const settings = {
	title: __('Bar Chart', `${textdomain}`),
	description: __('Display your data in a Bar Chart.', `${textdomain}`),
	icon,
	category,
	keywords: [
		__('Bar Chart', `${textdomain}`),
		__('Bar', `${textdomain}`),
		__('charts', `${textdomain}`),
		__('charts block', `${textdomain}`),
		__('charts-blocks', `${textdomain}`),
		__('graph', `${textdomain}`),
		__('graphs', `${textdomain}`),
	],
	supports,
	attributes,
	edit,
	save: function () {
		return null;
	},
	example,
};

export { name, settings };
