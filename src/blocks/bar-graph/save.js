import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';

export default function save() {
	return (
		<p {...useBlockProps.save()}>
			{__(
				'Create Redux Block – hello from the saved content!',
				'create-redux-block'
			)}
		</p>
	);
}
