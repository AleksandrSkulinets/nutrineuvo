<?php
/**
 * Plugin Name: Custom Contact Form API
 * Description: Creates a custom endpoint for handling contact forms.
 * Version: 1.0
 * Author: Alexandr S
 */

function handle_contact_form_submission( $request ) {
    $params = $request->get_json_params();

    $first_name = sanitize_text_field($params['first_name']);
    $last_name = sanitize_text_field($params['last_name']);
    $phone = sanitize_text_field($params['phone']);
    $email = sanitize_email($params['email']);
    $message = sanitize_textarea_field($params['message']);

    $admin_email = get_option('admin_email');

    // Email Subject
    $subject = "New Contact Form Submission from " . $first_name . " " . $last_name;

    // Email Message
    $email_message = "Name: $first_name $last_name\n";
    $email_message .= "Phone: $phone\n";
    $email_message .= "Email: $email\n";
    $email_message .= "Message:\n$message\n";

    // Send Email
    wp_mail($admin_email, $subject, $email_message);

    return new WP_REST_Response(["message" => "Success!"], 200);
}

function register_contact_form_api() {
    register_rest_route('wp/v2', '/contact-form', array(
        'methods' => 'POST',
        'callback' => 'handle_contact_form_submission',
        'permission_callback' => '__return_true'
    ));
}

add_action('rest_api_init', 'register_contact_form_api');
