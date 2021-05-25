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
    
    // enqueue chartjs script for frontend
    wp_enqueue_script("chartjs","https://cdn.jsdelivr.net/npm/chart.js", array(), "1.0", false);
   
    // enqueue block assets
    wp_register_script( $slug.'-script' , CHARTS_BLOCKS_PLUGIN_URL . 'build/index.js',
    $assets["dependencies"],  $assets["version"], false);
    wp_enqueue_script($slug.'-script');
    wp_register_script($slug.'-frontendscript',CHARTS_BLOCKS_PLUGIN_URL ."includes/frontend.js", array(),1.0 ,true);
    wp_enqueue_style( $slug.'-editorStyles', CHARTS_BLOCKS_PLUGIN_URL . 'build/editorStyles.css', array("wp-edit-blocks"),  "1.0");
    wp_enqueue_style( $slug.'-frontendStyles', CHARTS_BLOCKS_PLUGIN_URL . 'build/frontendStyles.css', array(), "1.0");

    // variable to store all charts 
    wp_add_inline_script( "charts-blocks-frontendscript", 'let allchartsdata = []' , "before" );

    $all_blocks = array("bar","pie","doughnut", "line","horizontal-bar","horizontal-line");

    foreach($all_blocks as $block_name ){
        register_blocks($slug, $block_name);
    }  
}

function display_chart($attributes){
        ob_start(); 

        $chartid = $attributes["chartID"] ? $attributes["chartID"] : "chart";
        wp_add_inline_script( "charts-blocks-frontendscript", 'allchartsdata.push( '. json_encode($attributes).')' , "before" );
        
       /*  echo "<pre>";
            print_r($attributes);
        echo "</pre>"; */

        /* HTML OUTPUT START */
        echo '
        <div className="chart-wrapper">
            <canvas
            id='.$chartid.'
            aria-label="Hello ARIA World"
            width="800"
            height="800"
            role="img">
            </canvas>
        </div>
        ';
        /* HTML OUTPUT END */

        return ob_get_clean();
     
}

function register_blocks($slug, $block_name){
    register_block_type( $slug . '/' . $block_name, array(
        "editor_script" => $slug . '-script',
        "editor-style"  => $slug . '-editorStyles',
        "style"         => $slug . '-frontendStyles',
        "script"        => $slug . '-frontendscript',
        'attributes'      => array( 
            'chartType' => array(
                "type" => "string",
                "default" => $block_name
            ),
        ), 
        "render_callback" => "display_chart"
    ) );
} 

add_action("init", "load_charts_block");

function charts_blocks_categories($categories)
{
    $existing_categories = wp_list_pluck( $categories, 'slug' );
    
    if( ! in_array("charts_block_sandip", $categories))
    { 
        $new_block_categories = array_merge($categories, array(
            array(
                "slug" => "charts_blocks",
                "title" => "Charts",
                "icons" => NULL
            )
            ));
                
        return $new_block_categories;
    } 

}

add_filter("block_categories", "charts_blocks_categories");