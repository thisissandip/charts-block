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
				d='M190 1250 l0 -1070 1065 0 1065 0 0 100 0 100 -985 0 -985 0 0 970 0
970 -80 0 -80 0 0 -1070z'
			/>
			<path
				d='M566 2251 c-16 -11 -35 -30 -42 -43 -18 -31 -17 -93 0 -126 28 -53
121 -86 181 -63 15 6 73 -40 315 -252 l295 -259 1 -56 c0 -32 4 -66 8 -77 5
-16 -5 -32 -48 -74 l-55 -55 -86 0 -87 -1 -34 -37 c-28 -31 -34 -45 -34 -83 0
-38 6 -52 34 -83 l35 -37 90 0 90 0 154 -134 154 -134 -4 -61 c-4 -53 -2 -65
18 -90 26 -34 92 -66 134 -66 42 0 107 32 133 65 46 59 22 154 -48 190 -33 17
-132 20 -159 5 -16 -8 -46 14 -179 131 l-160 140 5 53 c3 30 1 61 -5 73 -9 17
-3 28 49 79 l60 59 60 -3 c58 -4 61 -3 99 36 37 37 40 44 40 94 0 63 -20 97
-69 118 -30 12 -101 10 -132 -4 -24 -10 -603 499 -593 522 14 32 16 93 4 122
-7 17 -27 39 -45 50 -44 27 -138 28 -179 1z'
			/>
		</g>
	</svg>
);

const settings = {
	title: __('Horizontal Line Chart', `${textdomain}`),
	description: __(
		'Display your data in a Horizontal Line Chart.',
		`${textdomain}`
	),
	icon,
	category,
	keywords: [
		__('Horizontal Line Chart', `${textdomain}`),
		__('Horizontal Line ', `${textdomain}`),
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
