import edit from '../edit';
import metadata from './block.json';
import { __ } from '@wordpress/i18n';

const { name, category, attributes, supports, textdomain, example } = metadata;

const icon = (
	<svg
		version='1.0'
		xmlns='http://www.w3.org/2000/svg'
		width='980.000000pt'
		height='996.000000pt'
		viewBox='0 0 980.000000 996.000000'
		preserveAspectRatio='xMidYMid meet'>
		<g
			transform='translate(0.000000,996.000000) scale(0.100000,-0.100000)'
			fill='#1E1E1E'
			stroke='none'>
			<path
				d='M4651 9949 c-919 -53 -1828 -376 -2588 -921 -392 -281 -795 -679
-1089 -1073 -453 -609 -756 -1309 -895 -2064 -42 -229 -79 -608 -79 -808 l0
-73 2475 0 2475 0 0 2475 0 2475 -77 -1 c-43 -1 -143 -6 -222 -10z'
			/>
			<path
				d='M5468 6803 l-3 -2468 -2467 -3 -2468 -2 0 -33 c0 -57 30 -298 56
-452 213 -1247 953 -2374 2021 -3078 1226 -808 2759 -986 4147 -482 465 169
905 418 1313 743 184 147 511 467 659 647 572 692 926 1508 1038 2395 53 415
44 898 -24 1318 -303 1863 -1704 3357 -3546 3781 -213 49 -565 101 -681 101
l-43 0 -2 -2467z m722 1886 c724 -184 1381 -559 1915 -1094 681 -681 1093
-1541 1207 -2520 17 -149 17 -702 0 -860 -98 -881 -449 -1677 -1032 -2338
-684 -774 -1619 -1259 -2665 -1384 -211 -25 -710 -25 -915 0 -770 95 -1460
372 -2060 826 -229 174 -491 422 -671 636 -420 499 -714 1077 -868 1705 -16
69 -33 144 -37 168 l-7 42 2439 0 2439 0 -3 2436 -4 2437 53 -7 c30 -4 123
-25 209 -47z'
			/>
		</g>
	</svg>
);

const settings = {
	title: __('Pie Chart', `${textdomain}`),
	description: __('Display your data in a Pie Chart.', `${textdomain}`),
	icon,
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
	example,
};

export { name, settings };
