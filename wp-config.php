<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
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
define( 'DB_NAME', 'divi_child_theme' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
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
define( 'AUTH_KEY',         ')ROV17@_B.^%dTD{j#Jr.$9np}1 F(]6U]ao]2?y@@kM+(D{d,no6JvULX<ypOH)' );
define( 'SECURE_AUTH_KEY',  '*fF>@iJ<s+mTvnaMR6-m<CiIM:]5pq&13L)&R8lHTb@fy}b?1wXndA~v(<,NNWw!' );
define( 'LOGGED_IN_KEY',    'gUc>#VVA/T,][yGJXY3vD`2=!UJ@F!F W?B0~,E#g+22HJ#sAx&Gv(lz9swdP6v8' );
define( 'NONCE_KEY',        'J<&%A9C-Sx%;@tm%^{I->#TH<]k[t0BpqD}v.f^w@fB&7NT&Ae/y9YyGG7yHTeJR' );
define( 'AUTH_SALT',        '@J) JUNRD}#]Cp6 1-Yhg=TyL$^n;BJr/b!_98hLAl<v12^O;DqRst%}DZW~E=;*' );
define( 'SECURE_AUTH_SALT', '7EN50t7WufR[SR&Q!rkmekXXF,gY!#iU@v)eE?Sa{VjJ![p ~JQi~wG|+*YW}tK3' );
define( 'LOGGED_IN_SALT',   '#oFLeesv!M63/f~`,p^Zcyk;&&6nz^HGy8!CkOMqu~e$Q$Jp{&TfL(:IUGu$pVzY' );
define( 'NONCE_SALT',       'zplp}34_jr0@LO`C6wy)^$3+-eHFC@5 Sa9TC.`[@&zGCn@LV*^uXx%Df#bsx%+5' );

/**#@-*/

/**
 * WordPress database table prefix.
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

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
