<?php
$json = json_decode(file_get_contents('php://input'));

if($json != null) echo $json;
?>