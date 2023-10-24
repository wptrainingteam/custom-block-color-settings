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
			'--devblog-list-marker': markerColor !== undefined
			            ? `var( --wp--preset--color--${ markerColor } )`
				    : customMarkerColor,
		}
	} );

	return (
		<ul { ...blockProps }>
			<li>{ __( 'List Item 1', 'devblog' ) }</li>
			<li>{ __( 'List Item 2', 'devblog' ) }</li>
			<li>{ __( 'List Item 3', 'devblog' ) }</li>
			<li>{ __( 'List Item 4', 'devblog' ) }</li>
			<li>{ __( 'List Item 5', 'devblog' ) }</li>
		</ul>
	);
}
