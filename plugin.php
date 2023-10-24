<?php
/**
 * Plugin Name:       List Block With Marker Colors
 * Plugin URI:        https://developer.wordpress.org/news/
 * Description:       An example block that shows a list with a custom marker color option.
 * Version:           1.0.0
 * Requires at least: 6.3
 * Requires PHP:      7.4
 * Author:            WordPress Developer Blog
 * Author URI:        https://developer.wordpress.org/news/
 * Text Domain:       devblog
 */

add_action( 'init', 'devblog_list_marker_colors_setup' );

function devblog_list_marker_colors_setup() {
	register_block_type( trailingslashit( __DIR__ ) . 'build' );
}
