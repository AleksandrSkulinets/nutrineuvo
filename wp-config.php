<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'chefboksi_wp539' );

/** Database username */
define( 'DB_USER', 'chefboksi_wp539' );

/** Database password */
define( 'DB_PASSWORD', 'NS78p-sg6.' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'aac8twcgyetcjlhcrqoekjcl3qbo7fdxmtcelp90jznltmddgexaunjnw1vfmjx5' );
define( 'SECURE_AUTH_KEY',  'u4ro6scewuhsdjbmgahj8hx5li8rrol6u63prdcvvl2mid5ngwabxch8wdaksaev' );
define( 'LOGGED_IN_KEY',    'vrzkabg7fb4kedfioa3swvvtysk82dcoreysvawjqnlnebv9gmc8advyeqtqgvpg' );
define( 'NONCE_KEY',        'ro0y9zfw3og23dvyjuzoqjxetotq6j5gbuayxzolicp12m3wwgjgxtm6tho95fcu' );
define( 'AUTH_SALT',        'rsdsbwdojx9zwczhc28xxqbtukmqaoiyakbt15xnbtrzeb109abe9pdych24iitx' );
define( 'SECURE_AUTH_SALT', 'bl8amreulnnvdyhlktegm6enzg94uv9sqfzcfperged1kykcj3z1lzkmx42mxfbk' );
define( 'LOGGED_IN_SALT',   'lkcm5z4u4zddriqmpocnisw7g8qcd2jkratfpynawscqqrkgrztcdjfml3bcwodu' );
define( 'NONCE_SALT',       'a7xux20gw2eybgnuh2pa4vdzmb83bojznnynttb61qvzqg2dygmpf2gz2dd2g7k0' );
define('JWT_AUTH_SECRET_KEY', '2Kf9#vGp*WDqT@L8xZr!3QeUn%yC7pAv$M1oHJdXBk');



/**#@-*/


/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 *
 * At the installation time, database tables are created with the specified prefix.
 * Changing this value after WordPress is installed will make your site think
 * it has not been installed.
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/#table-prefix
 */
$table_prefix = 'wpnp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



define('DISABLE_WP_CRON', true);

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
