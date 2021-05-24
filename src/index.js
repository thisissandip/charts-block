/**
 * import Wordpress Dependencies
 */

import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';

/**
 * import Block Settings
 */

import * as bar from './blocks/bar';
import * as pie from './blocks/pie';
import * as dougnut from './blocks/doughnut';

const regsiterBlock = (block) => {
	const { name, settings } = block;
	registerBlockType(name, settings);
};

const registerAllChartBlocks = () => {
	const allBlocks = [bar, pie, dougnut];
	allBlocks.forEach((block) => {
		regsiterBlock(block);
	});
};

registerAllChartBlocks();
