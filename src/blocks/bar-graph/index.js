import edit from './edit';
import save from './save';
import metadata from './block.json';
import { __ } from '@wordpress/i18n';

const { name, category, attributes, supports, textdomain } = metadata;

const settings = {
	title: __('Bar Graph', `${textdomain}`),
	description: __('Display your data in a Bar Graph.', `${textdomain}`),
	icon: 'smiley',
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
	save,
};

export { name, settings };
