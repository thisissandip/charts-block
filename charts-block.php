<?php

/**
 * Plugin Name: Charts Blocks for Gutenberg
 * Description: Responsive, Interactive and Animated Charts in just two simple clicks. Select a Chart Block, Upload your CSV file and DONE. It's that easy!
 * Version: 1.0.0
 * Author: Sandip Mondal
 *
 * @category Gutenberg
 * @author Sandip Mondal
 * @version 1.0.0
 */

if(!defined("ABSPATH")) {
    exit;
};

define('CHARTS_BLOCKS_VERSION',"1.0.0");
define('CHARTS_BLOCKS_PLUGIN_PATH', plugin_dir_path( __FILE__ ) ) ;
define('CHARTS_BLOCKS_PLUGIN_URL',  plugin_dir_url( __FILE__ )) ;
define('CHARTS_BLOCKS_BASE', plugin_basename( __FILE__ ) ) ;

if( ! function_exists("sandip_charts_blocks_load_all_blocks_assets")){

    function sandip_charts_blocks_load_all_blocks_assets(){
        $slug = "charts-blocks";
        $assets = include(CHARTS_BLOCKS_PLUGIN_PATH . 'build/index.asset.php'); 
        
        // enqueue chartjs script for frontend
        wp_enqueue_script($slug.'-chartjs',CHARTS_BLOCKS_PLUGIN_URL . "chartjs/chart.min.js", array(), "1.0", false);
        // enqueue block assets
        wp_register_script( $slug.'-script' , CHARTS_BLOCKS_PLUGIN_URL . 'build/index.js',
        $assets["dependencies"],  $assets["version"], false);
        wp_enqueue_script($slug.'-script');
         // provide site url to editor script
        wp_add_inline_script( $slug.'-script', 'let siteurl = "'.CHARTS_BLOCKS_PLUGIN_URL.'"', "before" );
    
        wp_enqueue_script($slug.'-frontendscript',CHARTS_BLOCKS_PLUGIN_URL ."build/frontendscript.js", array(), 1.0 ,true);
        // variable to store all charts attributes
        wp_add_inline_script( $slug.'-frontendscript', 'let allchartsdata = []' , "before" );
    
        $all_blocks = array("bar","pie","doughnut", "line","horizontal-bar","horizontal-line");
        // register all blocks in the array
        foreach($all_blocks as $block_name ){
            sandip_charts_blocks_register_blocks($slug, $block_name);
        }  
    }

}


// Render Callback Function

function sandip_charts_blocks_render_all_charts($attributes){
        ob_start(); 
        $chartid = $attributes["chartID"] ? $attributes["chartID"] : "chart";
        wp_add_inline_script( "charts-blocks-frontendscript", 'allchartsdata.push( '. json_encode($attributes).')' , "before" );
        $alignWidth = $attributes["align"] ? $attributes["align"] : null;

        $alignClass = $attributes["align"] ? ' align'.$attributes["align"] : null;
        $maxWidth  = $alignClass ? null : "style='max-width: 600px'";
        /*  echo "<pre>";
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


// Register Blocks

if( ! function_exists("sandip_charts_blocks_register_blocks")){
    function sandip_charts_blocks_register_blocks($slug, $block_name){
        register_block_type( $slug . '/' . $block_name, array(
            "editor_script" => $slug . '-script',
            "script"        => $slug . '-frontendscript',
            'attributes'      => array( 
                'chartType' => array(
                    "type" => "string",
                    "default" => $block_name
                ),
            ), 
            "render_callback" => "sandip_charts_blocks_render_all_charts"
        ) );
    } 
}

add_action("init", "sandip_charts_blocks_load_all_blocks_assets");


// Add new Block Category - charts_blocks

if( ! function_exists("sandip_register_charts_blocks_category")){

    function sandip_register_charts_blocks_category($categories)
    {
        $existing_categories = wp_list_pluck( $categories, 'slug' );
        
        if( ! in_array("charts-blocks", $categories))
        { 
            $new_block_categories = array_merge($categories, array(
                array(
                    "slug" => "charts-blocks",
                    "title" => "Charts",
                    "icons" => NULL
                )
                ));
                    
            return $new_block_categories;
        } 
    }
    
}

add_filter("block_categories", "sandip_register_charts_blocks_category");