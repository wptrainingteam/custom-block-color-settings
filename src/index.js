// Import stylesheets.
import './style.scss';

// Import dependencies.
import { registerBlockType } from '@wordpress/blocks';
import blockEdit             from './edit';
import blockSave             from './save';
import blockData             from './block.json';

// Register block type.
registerBlockType( blockData, {
	edit: blockEdit,
	save: blockSave
} );
