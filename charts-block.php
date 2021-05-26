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
    wp_enqueue_script("chartjs",CHARTS_BLOCKS_PLUGIN_URL . "assets/chart.min.js", array(), "1.0", false);
   
    // enqueue block assets
    wp_register_script( $slug.'-script' , CHARTS_BLOCKS_PLUGIN_URL . 'build/index.js',
    $assets["dependencies"],  $assets["version"], false);
    wp_enqueue_script($slug.'-script');
    wp_register_script($slug.'-frontendscript',CHARTS_BLOCKS_PLUGIN_URL ."src/blocks/frontend.js", array(),1.0 ,true);

    // variable to store all charts 
    wp_add_inline_script( "charts-blocks-frontendscript", 'let allchartsdata = []' , "before" );

    $all_blocks = array("bar","pie","doughnut", "line","horizontal-bar","horizontal-line");
    // register all blocks in the array
    foreach($all_blocks as $block_name ){
        register_blocks($slug, $block_name);
    }  
}

// Front End HTML

function display_chart($attributes){
        ob_start(); 

        $chartid = $attributes["chartID"] ? $attributes["chartID"] : "chart";
        wp_add_inline_script( "charts-blocks-frontendscript", 'allchartsdata.push( '. json_encode($attributes).')' , "before" );
        $alignWidth = $attributes["align"] ? $attributes["align"] : null;

        $alignClass = $attributes["align"] ? ' align'.$attributes["align"] : null;
        $maxWidth  = $alignClass ? null : "style='max-width: 58rem'";
        
/*         echo "<pre>";
            print_r($attributes);
        echo "</pre>"; */ 

        /* HTML OUTPUT START */
        echo '
        <div class="chart-wrapper'.$alignClass.'" '.$maxWidth.' >
            <canvas
            id='.$chartid.'
            width="900"
            height="900"
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

// Add new Block Categorie - charts_blocks

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