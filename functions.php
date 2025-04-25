<?php
// Register the custom REST API route
add_action( 'rest_api_init', function () {
    register_rest_route( 'jwt-auth/v1', '/register', array(
        'methods' => 'POST',
        'callback' => 'handle_user_registration',
        'permission_callback' => '__return_true', // Make this route public
    ));
});

// Callback function to handle user registration
function handle_user_registration( $data ) {
    // Get data from the request
    $username = sanitize_text_field( $data['username'] );
    $email = sanitize_email( $data['email'] );
    $password = sanitize_text_field( $data['password'] );

    // Check if the username or email already exists
    if ( username_exists( $username ) || email_exists( $email ) ) {
        return new WP_Error( 'user_exists', 'Username or email already exists.', array( 'status' => 400 ) );
    }

    // Create the user
    $user_id = wp_create_user( $username, $password, $email );
    
    // Check if the user was created successfully
    if ( is_wp_error( $user_id ) ) {
        return new WP_Error( 'registration_error', 'Registration failed.', array( 'status' => 400 ) );
    }

    // Optionally, log the user in after registration
    wp_set_current_user( $user_id );
    wp_set_auth_cookie( $user_id );

    // Generate JWT token after registration
    $user = get_user_by( 'id', $user_id );
    $token = generate_jwt_token( $user ); // Generate the token

    return new WP_REST_Response( array( 'message' => 'Registration successful', 'token' => $token ), 200 );
}

// Function to generate JWT token
function generate_jwt_token( $user ) {
    $issued_at = time();
    $expiration_time = $issued_at + ( 60 * 60 ); // 1 hour expiration
    $payload = array(
        'iss' => get_site_url(),
        'iat' => $issued_at,
        'exp' => $expiration_time,
        'data' => array(
            'user_id' => $user->ID,
            'username' => $user->user_login,
            'email' => $user->user_email,
        ),
    );

    // Encode the payload to create JWT token
    $jwt = JWT::encode( $payload, JWT_AUTH_SECRET_KEY );
    return $jwt;
}
