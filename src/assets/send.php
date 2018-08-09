<?php
	$name       = 	isset($_POST['name']) ? strip_tags($_POST['name']) : '';
	$email      = 	isset($_POST['email']) ? strip_tags($_POST['email']) : '';
	$number     = 	isset($_POST['number']) ? strip_tags($_POST['number']) : '';
	$message    = 	isset($_POST['message']) ? strip_tags($_POST['message']) : '';

	$to         = 	'luke@designalchemy.co.uk';
	$subject    = 	'New Contact Message';

	$message    = 	'From: ' . $name . "\r\n" . 
					'Email: ' . $email . "\r\n" . 
					'Phone Number: ' . $number  . "\r\n" . 
					'Message: ' . $message;

	$headers    = 	'From: ' . $to . "\r\n" .
					'Reply-To: ' . $email . "\r\n" .
	    			'X-Mailer: PHP/' . phpversion();

	mail($to, $subject, $message, $headers);
	echo json_encode(array('success' => 'true')); 
?>