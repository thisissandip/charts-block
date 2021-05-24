import edit from './edit';
import metadata from './block.json';
import { __ } from '@wordpress/i18n';
import { createElement } from '@wordpress/element';

const { name, category, attributes, supports, textdomain } = metadata;

const icon = createElement(
	'svg',
	{
		width: 25,
		height: 25,
	},
	createElement('path', {
		d: 'M4 11H2v3h2v-3zm5-4H7v7h2V7zm5-5v12h-2V2h2zm-2-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1h-2zM6 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm-5 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3z',
	})
);

const settings = {
	title: __('Bar Graph', `${textdomain}`),
	description: __('Display your data in a Bar Graph.', `${textdomain}`),
	icon: icon,
	category,
	keywords: [
		__('Bar Graph', `${textdomain}`),
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
