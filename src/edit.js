import {
	InspectorControls,
	useBlockProps,
	withColors,
	__experimentalColorGradientSettingsDropdown as ColorGradientSettingsDropdown,
	__experimentalUseMultipleOriginColorsAndGradients as useMultipleOriginColorsAndGradients
} from '@wordpress/block-editor';

import { __ } from '@wordpress/i18n';

export function Edit( {
	attributes: {
		customMarkerColor
	},
	markerColor,
	setMarkerColor,
	setAttributes,
	style,
	clientId
} ) {
	const colorGradientSettings = useMultipleOriginColorsAndGradients();

	const blockProps = useBlockProps( {
		style: {
			...style,
			'--marker': markerColor.slug
			            ? `var( --wp--preset--color--${ markerColor.slug } )`
				    : customMarkerColor,
		}
	} );

	const markerColorDropdown = (
		<ColorGradientSettingsDropdown
			settings={ [ {
				label: __( 'Marker Color', 'custom-block-color-settings' ),
				colorValue: markerColor.color || customMarkerColor,
				onColorChange: ( value ) => {
					setMarkerColor( value );

					setAttributes( {
						customMarkerColor: value
					} );
				}
			} ] }
			panelId={ clientId }
			hasColorsOrGradients={ false }
			disableCustomColors={ false }
			__experimentalIsRenderedInSidebar
			{ ...colorGradientSettings }
		/>
	);

	return (
		<>
			<InspectorControls group="color">
				{ markerColorDropdown }
			</InspectorControls>
			<ul { ...blockProps }>
				<li>{ __( 'List Item 1', 'custom-block-color-settings' ) }</li>
				<li>{ __( 'List Item 2', 'custom-block-color-settings' ) }</li>
				<li>{ __( 'List Item 3', 'custom-block-color-settings' ) }</li>
				<li>{ __( 'List Item 4', 'custom-block-color-settings' ) }</li>
				<li>{ __( 'List Item 5', 'custom-block-color-settings' ) }</li>
			</ul>
		</>
	);
}

export default withColors( {
	markerColor: 'marker-color'
} )( Edit );
