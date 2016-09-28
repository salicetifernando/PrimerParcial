<?php 
//require_once("clases/AccesoDatos.php");
//require_once("clases/cd.php");
require_once ("Mascota.php");


if(isset($_POST['queHacer']))
{
$queHago=$_POST['queHacer'];

switch ($queHago) {
	case 'foto':
		include("partes/imagen.php");
		break;
	case 'video':
			include("partes/video.html");
		break;	
	case 'MostarBotones':
			include("partes/botonesABM.php");
		break;
	case 'MostrarGrilla':
			include("partes/formGrilla.php");
		break;
	case 'MostarLogin':
			include("partes/formLogin.php");
		break;
	case 'MostrarFormAlta':
			include("partes/formCd.php");
		break;
	case 'BorrarCD':
			$cd = new cd();
			$cd->id=$_POST['id'];
			$cantidad=$cd->BorrarCd();
			echo $cantidad;

		break;
	case 'GuardarCD':
			$cd = new cd();
			$cd->id=$_POST['id'];
			$cd->cantante=$_POST['cantante'];
			$cd->titulo=$_POST['titulo'];
			$cd->año=$_POST['anio'];
			$cantidad=$cd->GuardarCD();
			echo $cantidad;

		break;
	case 'TraerCD':
			sleep(3);
			$cd = cd::TraerUnCd($_POST['id']);		
			echo json_encode($cd) ;
			break;

	case 'GuardarMascota':
		$mascota = new Mascota($_POST["nombre"],$_POST["edad"],$_POST["fecha"], "perro", "masculino");
		Mascota::Guardar($mascota);

		break;
	case 'MostrarLista':
		include "lista2.php";
		break;

	case 'Alta':
		include "altaMascota.php";
		break;
	default:
		# code...
		break;
}
}
else
{
	
	Mascota::UsuarioGuardar($_POST["nombre"], $_POST["mail"]);
	$usuario = Mascota::UsuarioLeer();
	if ($usuario[0] == $_POST["nombre"] && $usuario[1] == $_POST["mail"])
	{
		ECHO"SAAA";
	}
}
 ?>