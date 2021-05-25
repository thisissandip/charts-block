import edit from '../bar/edit';
import metadata from './block.json';
import { __ } from '@wordpress/i18n';
import { createElement } from '@wordpress/element';

const { name, category, attributes, supports, textdomain } = metadata;

const settings = {
	title: __('Pie Chart', `${textdomain}`),
	description: __('Display your data in a Doughnut Chart.', `${textdomain}`),
	icon: 'smiley',
	category,
	keywords: [
		__('Pie chart', `${textdomain}`),
		__('Pie', `${textdomain}`),
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
};

export { name, settings };
