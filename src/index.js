// Import stylesheets.
import './style.scss';

// Import dependencies.
import { registerBlockType } from '@wordpress/blocks';
import blockEdit             from './edit';
import blockData             from './block.json';

// Register block type.
registerBlockType( blockData, {
	edit: blockEdit
} );
