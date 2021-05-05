<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'u803030629_wordpress' );

/** MySQL database username */
define( 'DB_USER', 'u803030629_root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'nIE^@&|@0' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '&_V~I@weK$=|VLiemgR79{<F63^#,b&zL!h0^RZ|at(|{Ez+`e2lW2gZ=wlXf;x^' );
define( 'SECURE_AUTH_KEY',  '40*wesj,[~h}V.g%m KA)WLPkdE@zUUuR98FMA>#u<DlB6?fN{^aQ%?Fe5^O=D0*' );
define( 'LOGGED_IN_KEY',    '_Y}qY},dS>XZPQkjEARBV) UF;Y9k*9C)#=+`xk=4r7VwST!z]VwY^^S%[>Av>;<' );
define( 'NONCE_KEY',        'p,C_~no1%4hEU_[Bd=-7>P]JAmV`ck:S8CKYL3odt/ 32iAt,xRP9B>DHwvYLY{E' );
define( 'AUTH_SALT',        'wO_}h</jAJIY+rT<U`pKc;s*lk>L<<)$ n.%MC_)|D,mM(gvZ*7sC,@$:(`@waHr' );
define( 'SECURE_AUTH_SALT', 'tRQ8dSPKZA}/%e3:}WP5*lyBW`=jwj}7uE[.z}TS[L9Mj)ZKv8=!JX8H<SIgHMy<' );
define( 'LOGGED_IN_SALT',   '}ybs+h?S0GG >:pSGvGA}k!n]8%k=G=@*N%v>7I4&(xSa]+@Vm61MC;[+`*EoD-8' );
define( 'NONCE_SALT',       '.}}h] (fm)6<XP56?!`trt+TjF4!G;SMV;{6Xcpb@yf~CVX;.fO62Euc>~CK6D>D' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

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
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
