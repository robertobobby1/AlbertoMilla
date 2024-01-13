<?php

if(!isset($_POST['cenviar']))
    die("El acceso directo a este archivo no es permitido.");

if(isset($_POST['nombre'])){
    $nombre = $_POST['nombre'];
}
if(isset($_POST['email'])){
    $email = $_POST['email'];
}
if(isset($_POST['url'])){
    $url = $_POST['url'];
}
if(isset($_POST['telefono'])){
    $telefono = $_POST['telefono'];
}
if(isset($_POST['mensaje'])){
    $mensaje = $_POST['mensaje'];
}
// Si cualquier línea es más larga de 70 caracteres, se debería usar wordwrap()
$mensaje = wordwrap($mensaje, 70, "\r\n");

$msj = "De: ".$nombre."\r\n";
$msj .= "Email: ".$email."\r\n";
$msj .= "Fecha: ".date("d-m-Y H:i:s")."\r\n";
$msj .= "Web: ".$url."\r\n";
$msj .= "Telefono: ".$telefono."\r\n\n\n\n";
$msj .= "Mensaje: ".$mensaje;

$header = "From: info@albertomilla.com" . "\r\n";
$header .= "Reply-To: info@albertomilla.com" . "\r\n";
$header .= "X-Mailer: PHP/" . phpversion();

/***** Zona de envio con la funcion MAIL de php *****/
mail($email, "Prueba", $msj, $header);

