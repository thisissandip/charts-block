import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';

export default function Edit() {
	return (
		<p {...useBlockProps()}>
			{__('Create Redux Block – hello from the editor!', 'create-redux-block')}
		</p>
	);
}
