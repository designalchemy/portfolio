<?php
	$email       = isset($_GET['email']) ? strip_tags($_GET['email']) : '';
	$getMessage  = isset($_GET['text']) ? strip_tags($_GET['text']) : '';

	$to          = 'luke@designalchemy.co.uk';
	$subject     = 'New Contact Message';

	$message     = 'From: ' . $email . "\r\n" .
					       'Message: ' . $getMessage;

	$headers     = 'From: ' . $to . "\r\n" .
                 'Reply-To: ' . $email . "\r\n" .
                 'X-Mailer: PHP/' . phpversion();

	mail($to, $subject, $message, $headers);
	echo json_encode(array('success' => 'true'));
?>
