import {
	InspectorControls,
	useBlockProps,
	withColors,
	__experimentalColorGradientSettingsDropdown as ColorGradientSettingsDropdown,
	__experimentalUseMultipleOriginColorsAndGradients as useMultipleOriginColorsAndGradients
} from '@wordpress/block-editor';

import { __ } from '@wordpress/i18n';

const Edit = ( {
	attributes: {
		customMarkerColor
	},
	markerColor,
	setMarkerColor,
	setAttributes,
	style,
	clientId
} ) => {
	const colorGradientSettings = useMultipleOriginColorsAndGradients();

	const blockProps = useBlockProps( {
		style: {
			...style,
			'--devblog-list-marker': markerColor.slug
			            ? `var( --wp--preset--color--${ markerColor.slug } )`
				    : customMarkerColor,
		}
	} );

	const markerColorDropdown = (
		<ColorGradientSettingsDropdown
			settings={ [ {
				label: __( 'Marker Color', 'devblog' ),
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
				<li>{ __( 'List Item 1', 'devblog' ) }</li>
				<li>{ __( 'List Item 2', 'devblog' ) }</li>
				<li>{ __( 'List Item 3', 'devblog' ) }</li>
				<li>{ __( 'List Item 4', 'devblog' ) }</li>
				<li>{ __( 'List Item 5', 'devblog' ) }</li>
			</ul>
		</>
	);
};

export default withColors( {
	markerColor: 'marker-color'
} )( Edit );
