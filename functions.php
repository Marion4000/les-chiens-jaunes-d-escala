<?php
 /**
 * Chiens-jaunes Functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 * 
* @package Wordpress
* @subpackage chiens_jaunes 
* @since 1.0.0 
*/ 
/**
 * Enqueue the style.css file. 
*
* @since 1.0.0
*/ 


/* ----------------------------------------------------------------------------------------
    THEME SUPPORT
---------------------------------------------------------------------------------------- */
if ( ! function_exists( 'chiens_jaunes_style' ) ) :

	function chiens_jaunes_support() {

		// Add support for block styles.
		add_theme_support( 'wp-block-styles' );

		// Enqueue editor styles.
		add_editor_style( 'style.css' );

	}

endif;

add_action( 'after_setup_theme', 'chiens_jaunes_support' );



/* ----------------------------------------------------------------------------------------
    LOAD CSS & SCRIPTS
---------------------------------------------------------------------------------------- */
if ( ! function_exists( 'chiens_jaunes_style' ) ) :

	function chiens_jaunes_style() {
		// Register theme stylesheet.
		$theme_version = wp_get_theme()->get( 'Version' );

		$version_string = is_string( $theme_version ) ? $theme_version : false;
		wp_register_style(
			'chiens-jaunes-style',
			get_template_directory_uri() . '/style.css',
			array(),
			$version_string
		);

		// Enqueue theme stylesheet.
		wp_enqueue_style( 'chiens-jaunes-style' );

		// Enqueue the scripts.
		wp_enqueue_script( 'chiens-jaunes-script', get_template_directory_uri().'/assets/js/scripts.js' );

	}

endif;

add_action( 'wp_enqueue_scripts', 'chiens_jaunes_style' );




/* 












Modèle de fonction depuis tuto FSE WP | Fonctionne 


*/
// function chiens_jaunes_styles() { 
// 	wp_enqueue_style(
// 		 'chiens_jaunes-style',
// 		 get_stylesheet_uri(), 
// 		array(), 
// 		wp_get_theme()->get( '1.0' )
// 	 );
//  } 
// add_action( 'wp_enqueue_scripts', 'chiens_jaunes_styles' );

