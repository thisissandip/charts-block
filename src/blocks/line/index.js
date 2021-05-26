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
			<path
				d='M140 1210 l0 -1070 1065 0 1065 0 0 100 0 100 -985 0 -985 0 0 970 0
970 -80 0 -80 0 0 -1070z'
			/>
			<path
				d='M2081 1866 c-53 -29 -85 -122 -62 -181 6 -15 -40 -73 -252 -315
l-259 -295 -56 -1 c-32 0 -66 -4 -77 -8 -16 -5 -32 5 -74 48 l-55 55 0 86 -1
87 -37 34 c-31 28 -45 34 -83 34 -38 0 -52 -6 -83 -34 l-37 -35 0 -90 0 -90
-134 -154 -134 -154 -61 4 c-53 4 -65 2 -90 -18 -34 -26 -66 -92 -66 -134 0
-42 32 -107 65 -133 59 -46 154 -22 190 48 17 33 20 132 5 159 -8 16 14 46
131 179 l140 160 53 -5 c30 -3 61 -1 73 5 17 9 28 3 79 -49 l59 -60 -3 -60
c-4 -58 -3 -61 36 -99 37 -37 44 -40 94 -40 63 0 97 20 118 69 12 30 10 101
-4 132 -10 24 499 603 522 593 32 -14 93 -16 122 -4 91 38 96 218 8 266 -30
17 -97 17 -127 0z'
			/>
		</g>
	</svg>
);

const settings = {
	title: __('Line Chart', `${textdomain}`),
	description: __('Display your data in a Line Chart.', `${textdomain}`),
	icon,
	category,
	keywords: [
		__('Line chart', `${textdomain}`),
		__('Line', `${textdomain}`),
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
