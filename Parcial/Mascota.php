<?php

class Mascota
{

	private $_nombre = "pepe";
	private $_edad = 5;
	private $_fechaNacimiento= "4 de abril";
	private $_tipo = "perro";//raza
	private $_sexo= "masculino";

	public function __construct($nombre, $edad, $fecha, $tipo, $sexo)
	{
		$_this->sexo = $sexo;
		$_this->nombre = $nombre;	
		$_this->edad = $edad;
		$_this->tipo = $tipo;	
		$_this->fechaNacimiento = $fecha;
	}

	function GetNombre()
	{
		return $_this->nombre;
	}
	function SetNombre($nombre)
	{
		$_this->nombre = $nombre;
	}


	function GetEdad()
	{
		return $_this->edad;
	}
	function SetEdad($edad)
	{
		$_this->edad = $edad;
	}

	function GetFecha()
	{
		return $_this->_fechaNacimiento;
	}
	function SetFecha($fecha)
	{
		$_this->fechaNacimiento = $fecha;
	}

	function GetTipo()
	{
		return $_this->tipo;
	}
	function SetTipo($tipo)
	{
		$_this->tipo = $tipo;
	}

	function GetSexo()
	{
		return $_this->sexo;
	}
	function SetSexo($sexo)
	{
		$_this->sexo = $sexo;
	}

	public function ToString()
	{
		return $_this->nombre . "$" . $_this->edad . "$". $_this->fechaNacimiento. "$". $_this->tipo . "$". $_this->sexo. "\n";
	}

	static function Guardar($mascota)
	{
		$miArchivo = fopen("mascotas.txt","a");
		fwrite($miArchivo, $mascota->ToString());
		fclose($miArchivo);

	}

	static function UsuarioLeer()
	{
		$miArchivo = fopen("usuarios.txt","r");
		while(!(feof($miArchivo)))
		{
			$datos = fgets($miArchivo,50000);
			$vecDatos = explode("$", $datos);

		}
		fclose($miArchivo);
		return $vecDatos;
	} 
	static function UsuarioGuardar($mail, $nombre)
	{
		$miArchivo = fopen("usuarios.txt", "a");
		fwrite($miArchivo, $mail. "$" .$nombre."\n");
		fclose($miArchivo);
	}
}
?>