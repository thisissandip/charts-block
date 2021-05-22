import edit from './edit';
import save from './save';
import metadata from './block.json';
import { __ } from '@wordpress/i18n';

const { name, category, attributes, supports, textdomain } = metadata;

const settings = {
	title: __('Pie Chart', `${textdomain}`),
	description: __('Display your data in a Pie Chart.', `${textdomain}`),
	icon: 'smiley',
	category,
	keywords: [
		__('Pie chart', `${textdomain}`),
		__('charts', `${textdomain}`),
		__('charts block', `${textdomain}`),
		__('charts-blocks', `${textdomain}`),
	],
	supports,
	attributes,
	edit,
	save,
};

export { name, settings };
