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
			<path d='M120 2090 l0 -250 1135 0 1135 0 0 250 0 250 -1135 0 -1135 0 0 -250z' />
			<path d='M110 1280 l0 -310 755 0 755 0 0 310 0 310 -755 0 -755 0 0 -310z' />
			<path d='M120 460 l0 -290 1035 0 1035 0 0 290 0 290 -1035 0 -1035 0 0 -290z' />
		</g>
	</svg>
);

const settings = {
	title: __('Horizontal Bar Chart', `${textdomain}`),
	description: __(
		'Display your data in a Horizontal Bar Chart.',
		`${textdomain}`
	),
	icon: icon,
	category,
	keywords: [
		__('Horizontal Bar Chart', `${textdomain}`),
		__('Horizontal Bar', `${textdomain}`),
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
