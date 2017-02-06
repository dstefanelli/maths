<?php 
	if(!empty($_POST)) {
		$to = 'juan@lyncros.com';

		$subject = 'You have a question from the site "Real World of Maths"';

		$headers = "From: " . $_POST['InputEmail'] . "\r\n";
		$headers .= "MIME-Version: 1.0\r\n";
		$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

		$body = '<h1>Contact information</h1>';
		$body .= '<hr />';
		$body .= 'Name: ' . $_POST['InputName'] . '<br />';
		$body .= 'Email: ' . $_POST['InputEmail'] . '<br />';
		$body .= 'Phone: ' . $_POST['InputPhone'] . '<br />';
		$body .= 'Message: ' . $_POST['InputMessage'] . '<br />';

		$status = @mail($to, $subject, $body, $headers) ? "ok" : "fail";

		header("Location: index.html?status=" . $status);
		die();
	}

?>