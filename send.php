<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

//$var1 = $_GET['test1'];
$fqdn = $_GET['fqdn'];
$ip = $_GET['ip'];
$pfx = $_GET['pfx-key'];

$params = $pfx.' ' .$fqdn .' '.$ip.' ';

foreach($_GET['san'] as $san){
    $params .= $san.' ';
}

$full_pfad = './mein/pfad/szum/script.ps '.$params;

echo $full_pfad;

//shell_exec($full_pfad);

