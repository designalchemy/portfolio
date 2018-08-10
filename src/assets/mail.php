<?php
	$email       = isset($_POST['email']) ? strip_tags($_POST['email']) : '';
	$getMessage  = isset($_POST['message']) ? strip_tags($_POST['message']) : '';

	$to          = 'luke@designalchemy.co.uk';
	$subject     = 'New Contact Message';

	$message     = 'From: ' . $email . "\r\n" .
                 'Email: ' . $email . "\r\n" .
					       'Message: ' . $getMessage;

	$headers     = 'From: ' . $to . "\r\n" .
                 'Reply-To: ' . $email . "\r\n" .
                 'X-Mailer: PHP/' . phpversion();

	mail($to, $subject, $message, $headers);
	echo json_encode(array('success' => 'true'));
?>
