// Leverating the same edit fucntion from pie

import edit from '../pie/edit';
import metadata from './block.json';
import { __ } from '@wordpress/i18n';
import { createElement } from '@wordpress/element';

const { name, category, attributes, supports, textdomain } = metadata;

const settings = {
	title: __('Doughnut Chart', `${textdomain}`),
	description: __('Display your data in a Doughnut Chart.', `${textdomain}`),
	icon: 'smiley',
	category,
	keywords: [
		__('Doughnut chart', `${textdomain}`),
		__('charts', `${textdomain}`),
		__('charts block', `${textdomain}`),
		__('charts-blocks', `${textdomain}`),
	],
	supports,
	attributes,
	edit,
	save: function () {
		return null;
	},
};

export { name, settings };
