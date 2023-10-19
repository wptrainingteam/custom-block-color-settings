import { useBlockProps } from '@wordpress/block-editor';
import { __ }            from '@wordpress/i18n';

export default function Save( {
	attributes: {
		markerColor,
		customMarkerColor
	},
	style
} ) {

	const blockProps = useBlockProps.save( {
		style: {
			...style,
			'--marker': markerColor !== undefined
			            ? `var( --wp--preset--color--${ markerColor } )`
				    : customMarkerColor,
		}
	} );

	return (
		<ul { ...blockProps }>
			<li>{ __( 'List Item 1', 'custom-block-color-settings' ) }</li>
			<li>{ __( 'List Item 2', 'custom-block-color-settings' ) }</li>
			<li>{ __( 'List Item 3', 'custom-block-color-settings' ) }</li>
			<li>{ __( 'List Item 4', 'custom-block-color-settings' ) }</li>
			<li>{ __( 'List Item 5', 'custom-block-color-settings' ) }</li>
		</ul>
	);
}
