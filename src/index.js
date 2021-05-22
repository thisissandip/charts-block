/**
 * import Wordpress Dependencies
 */

import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';

/**
 * import Block Settings
 */

import * as bargraph from './blocks/bar-graph';
import * as piechart from './blocks/pie-chart';

const regsiterBlock = (block) => {
	const { name, settings } = block;
	registerBlockType(name, settings);
};

const registerAllChartBlocks = () => {
	const allBlocks = [bargraph, piechart];
	allBlocks.forEach((block) => {
		regsiterBlock(block);
	});
};

registerAllChartBlocks();
