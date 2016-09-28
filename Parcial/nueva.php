<?php
include_once "Mascota.php";
$mascota = new Mascota($_POST["nombre"],$_POST["edad"],$_POST["fecha"],"asdas","wqweweqwqe");
Mascota::Guardar($mascota);

?>