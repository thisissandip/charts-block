import edit from '../edit';
import metadata from './block.json';
import { __ } from '@wordpress/i18n';
import { createElement } from '@wordpress/element';

const { name, category, attributes, supports, textdomain } = metadata;

const icon = (
	<svg
		version='1.0'
		xmlns='http://www.w3.org/2000/svg'
		width='980.000000pt'
		height='980.000000pt'
		viewBox='0 0 980.000000 980.000000'
		preserveAspectRatio='xMidYMid meet'>
		<g
			transform='translate(0.000000,980.000000) scale(0.100000,-0.100000)'
			fill='#1E1E1E'
			stroke='none'>
			<path
				d='M4900 8578 l0 -1225 121 -6 c1053 -57 1943 -765 2234 -1776 54 -190
95 -453 95 -618 l0 -53 1225 0 1225 0 0 73 c0 40 -5 144 -10 232 -70 1094
-491 2109 -1216 2935 -112 128 -386 398 -509 501 -848 714 -1878 1112 -2987
1155 l-178 7 0 -1225z'
			/>
			<path
				d='M4200 9749 c-952 -143 -1794 -528 -2505 -1144 -147 -127 -423 -405
-536 -540 -1099 -1306 -1443 -3063 -917 -4685 194 -597 500 -1146 922 -1650
98 -117 370 -393 496 -504 1149 -1010 2674 -1424 4180 -1136 807 155 1604 539
2235 1078 133 113 384 361 499 492 527 598 885 1282 1080 2057 46 183 99 479
112 616 l7 77 -247 0 c-175 0 -246 -3 -246 -11 0 -25 -33 -232 -56 -354 -165
-861 -621 -1699 -1261 -2316 -616 -593 -1371 -988 -2203 -1153 -1142 -227
-2303 0 -3284 641 -477 312 -924 755 -1243 1233 -591 887 -839 1941 -707 3010
96 782 425 1559 924 2184 706 885 1701 1454 2831 1620 59 9 112 16 118 16 8 0
11 71 11 245 l0 245 -42 -1 c-24 0 -99 -9 -168 -20z'
			/>
			<path
				d='M4258 7764 c-1097 -245 -1957 -1094 -2218 -2189 -106 -444 -104 -928
5 -1372 102 -416 295 -809 561 -1143 87 -109 344 -367 454 -454 332 -265 745
-466 1160 -565 246 -59 387 -75 680 -75 223 0 288 4 410 22 533 82 983 275
1410 606 129 100 360 329 463 458 298 374 494 789 592 1250 l23 108 -248 0
-248 0 -22 -92 c-218 -891 -925 -1591 -1820 -1802 -200 -48 -319 -60 -560 -60
-243 0 -359 12 -565 61 -527 124 -1005 427 -1347 853 -275 344 -445 736 -515
1190 -24 159 -24 519 0 680 118 769 554 1409 1224 1794 171 98 427 199 622
245 46 11 85 22 87 24 3 2 3 114 2 249 l-3 245 -147 -33z'
			/>
		</g>
	</svg>
);

const settings = {
	title: __('Doughnut Chart', `${textdomain}`),
	description: __('Display your data in a Doughnut Chart.', `${textdomain}`),
	icon,
	category,
	keywords: [
		__('Doughnut chart', `${textdomain}`),
		__('Doughnut', `${textdomain}`),
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
	example: {},
};

export { name, settings };
