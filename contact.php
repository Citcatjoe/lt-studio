<?php

	/*
	Vérification du nom
	*/

	if( $_POST['name'] == "")
	{
		echo '<i class="fa fa-exclamation-triangle" aria-hidden="true"></i> Merci de spécifier votre nom';
		exit();
	}
	else if( strlen($_POST['name']) <2)
	{
		echo '<i class="fa fa-exclamation-triangle" aria-hidden="true"></i> Votre nom doit comporter au moins deux lettres (2)';
		exit();
	}
	else if( !preg_match("~^[\w\-\séèàç]+$~i", $_POST['name']) )
	{
		echo '<i class="fa fa-exclamation-triangle" aria-hidden="true"></i> Un caractère non autorisé a été utilisé dans le nom';
		exit();
	}


	/*
	Vérification du mail
	*/

	if( $_POST['email'] == "")
	{
		echo '<i class="fa fa-exclamation-triangle" aria-hidden="true"></i> Merci de renseigner votre adresse mail';
		exit();
	}
	else if( !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL))
	{
		echo '<i class="fa fa-exclamation-triangle" aria-hidden="true"></i> Le format de votre adresse email est invalide';
		exit(); 
	}

	/*
	Vérification de l'entreprise
	*/

	if( $_POST['company'] == "")
	{
		echo '<i class="fa fa-exclamation-triangle" aria-hidden="true"></i> Merci de spécifier le nom de votre entreprise';
		exit();
	}
	else if( strlen($_POST['company']) <2)
	{
		echo '<i class="fa fa-exclamation-triangle" aria-hidden="true"></i> Le nom de votre entreprise doit comporter au moins deux lettres (2)';
		exit();
	}
	else if( !preg_match("~^[\w\-\séèàç]+$~i", $_POST['company']) )
	{
		echo '<i class="fa fa-exclamation-triangle" aria-hidden="true"></i> Un caractère non autorisé a été utilisé dans le nom de votre entreprise';
		exit();
	}


	/*
	Vérification du message
	*/

	if( $_POST['message'] == "")
	{
		echo '<i class="fa fa-exclamation-triangle" aria-hidden="true"></i> Vous ne pouvez pas envoyer un message vide';
		exit();
	}
	else if( strlen($_POST['message']) <50)
	{
		echo '<i class="fa fa-exclamation-triangle" aria-hidden="true"></i> Votre message est trop court (50)';
		exit();
	}

	$to = 'thomas.delechat@illustre.ch';
	//$to = 'cesargreppin@gmail.com';
	// $sujet = $_POST['subject']." (Native Studio)";
	$sujet = "Nouveau message de Native Studio";
	$message_txt = $_POST['message'];
	$message_html = "<html><head></head><body>".$_POST['message']."</body></html>";
	$job = $_POST['job'];
	$company = $_POST['company'];
	$name = $_POST['name'];
	$email =$_POST['email'];
	$boundary = "-----=".md5(rand());
	
	if (!preg_match("#^[a-z0-9._-]+@(hotmail|live|msn).[a-z]{2,4}$#", $mail)) // On filtre les serveurs qui rencontrent des bogues.
	{
		$passage_ligne = "\r\n";
	}
	else
	{
		$passage_ligne = "\n";
	}

	/*
	Entête de l'email
	*/
	$header = 'FROM : ' . $name . ' <' . $email . '>' . $passage_ligne;
	$header .= "Reply-To:" . $email.$passage_ligne;
	$header .= "MIME-Version: 1.0".$passage_ligne;
	$header.= "Content-Type: multipart/alternative;".$passage_ligne." boundary=\"$boundary\"".$passage_ligne;
 
	/*
	Début/création du message
	*/
	$message = $passage_ligne."--".$boundary.$passage_ligne;

	/*
	Ajout du message au format texte
	*/
	$message.= "Content-Type: text/plain; charset=\"UTF-8\"".$passage_ligne;
	$message.= "Content-Transfer-Encoding: 8bit".$passage_ligne;
	$message.= $passage_ligne.$message_txt.$passage_ligne;
	$message.= $passage_ligne.$name;
	$message.= $passage_ligne.$email;
	$message.= $passage_ligne.$job;
	$message.= $passage_ligne.$company;
	
	$message.= $passage_ligne."--".$boundary.$passage_ligne;

	/*
	Ajout du message au format HTML
	*/
	$message.= "Content-Type: text/html; charset=\"UTF-8\"".$passage_ligne;
	$message.= "Content-Transfer-Encoding: 8bit".$passage_ligne;
	
	$message.= $passage_ligne.$message_html.$passage_ligne.'<br><br>';
	$message.= $passage_ligne.'<b>Expéditeur :</b><br>';
	$message.= $passage_ligne.$name.'<br>';
	$message.= $passage_ligne.$job.'<br>';
	$message.= $passage_ligne.$company.'<br>';

	$message.= $passage_ligne."--".$boundary."--".$passage_ligne;
	$message.= $passage_ligne."--".$boundary."--".$passage_ligne;

	/*
	Envoi du message
	*/
	mail($to,$sujet,$message,$header);

	/*
	Retour pour message utilisateur
	*/
	echo '<i class="fa fa-check-circle" aria-hidden="true"></i> Votre message a bien été envoyé. Merci';

?>