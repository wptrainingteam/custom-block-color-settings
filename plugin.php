<?php
/**
 * Plugin Name:       Custom Block Color Settings
 * Plugin URI:        https://github.com/...
 * Description:       An example block with custom color settings.
 * Version:           1.0.0
 * Requires at least: 6.3
 * Requires PHP:      7.4
 * Author:            WordPress Developer Blog
 * Author URI:        https://developer.wordpress.org/news/
 * Text Domain:       custom-block-color-settings
 */

namespace DevBlog\CustomBlockColorSettings;

add_action( 'init', __NAMESPACE__ . '\\setup' );

function setup() {
	register_block_type( untrailingslashit( __DIR__ ) . '/build' );
}
