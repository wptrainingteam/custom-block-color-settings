// WordPress dependencies.
import {
	InspectorControls,
	useBlockProps
} from '@wordpress/block-editor';

import { __ } from '@wordpress/i18n';

import {
	__experimentalColorGradientSettingsDropdown as ColorGradientSettingsDropdown,
	__experimentalUseMultipleOriginColorsAndGradients as useMultipleOriginColorsAndGradients
} from '@wordpress/block-editor';

/**
 * Exports the block edit function.
 *
 * @since 1.0.0
 */
export default function Edit( {
	attributes: { markerColor },
	setAttributes,
	style,
	clientId
} ) {
	const colorGradientSettings = useMultipleOriginColorsAndGradients();

	const blockProps = useBlockProps( {
		style: {
			...style,
			'--marker': markerColor ?? null,
		}
	} );

	const markerColorDropdown = (
		<ColorGradientSettingsDropdown
			settings={ [ {
				label: __( 'Marker Color', 'custom-block-color-settings' ),
				colorValue: markerColor,
				onColorChange: ( value ) => setAttributes( {
					markerColor: value
				} )
			} ] }
			panelId={ clientId }
			hasColorsOrGradients={ false }
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
				<li>List Item 1</li>
				<li>List Item 2</li>
				<li>List Item 3</li>
				<li>List Item 4</li>
				<li>List Item 5</li>
			</ul>
		</>
	);
}
