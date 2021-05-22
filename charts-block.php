<?php

/**
 * Plugin Name: Charts Blocks
 * Plugin URI: Charts Blocks
 * Description: Display Beautiful Charts in your Website
 * Version: 1.0
 * Author: Sandip Mondal
 * Author URI: Sandip Mondal
 *
 * @category Gutenberg
 * @author Sandip Mondal
 * @version 1.0
 */

if(!defined("ABSPATH")) {
    exit;
};

define('CHARTS_BLOCKS_VERSION',"1.0");
define('CHARTS_BLOCKS_PLUGIN_PATH', plugin_dir_path( __FILE__ ) ) ;
define('CHARTS_BLOCKS_PLUGIN_URL',  plugin_dir_url( __FILE__ )) ;
define('CHARTS_BLOCKS_BASE', plugin_basename( __FILE__ ) );

function load_charts_block(){

    $slug = "charts-blocks";

    $assets = include(CHARTS_BLOCKS_PLUGIN_PATH . 'build/index.asset.php'); 
    
    wp_register_script( $slug.'-script' , CHARTS_BLOCKS_PLUGIN_URL . 'build/index.js',
    $assets["dependencies"],  $assets["version"], false);
    wp_enqueue_script($slug.'-script');
    wp_enqueue_style( $slug.'-editorStyles', CHARTS_BLOCKS_PLUGIN_URL . 'build/editorStyles.css', array("wp-edit-blocks"),  "1.0");
    wp_enqueue_style( $slug.'-frontendStyles', CHARTS_BLOCKS_PLUGIN_URL . 'build/frontendStyles.css', array(), "1.0");

    $all_blocks = array("bar-graph","pie-chart");

    foreach($all_blocks as $block_name ){
        register_blocks($slug, $block_name);
    }  
}

function register_blocks($slug, $block_name){
    register_block_type( $slug . '/' . $block_name, array(
        "editor_script" => $slug . '-script',
        "editor-style"  => $slug . '-editorStyles',
        "style"         => $slug . '-frontendStyles'
    ) );
} 

add_action("init", "load_charts_block");

