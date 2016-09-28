
function MostrarError()
{
	/*
	//var funcionAjax=$.ajax({url:"nexoNoExiste.php",type:"post",data:{queHacer:"MostrarTexto"}});
	//funcionAjax.done(function(retorno){
	//	$("#principal").html(retorno);
	//	$("#informe").html("Correcto!!!");
	//});
	//funcionAjax.fail(function(retorno){
	//		$("#principal").html("error :(");
	//	$("#informe").html(retorno.responseText);		
	//});
	//funcionAjax.always(function(retorno){
		///alert("siempre "+retorno.statusText);
	//});
*/
	$.ajax({url:"nexoNoExiste.php"})
	.then(function(datosCorrectos){
		alert("primero");
	},
	function(datos){
		//alert("segundo");
		
	})//url: donde va a ir. then: recibe una funcion. Callback: funciones que se van a disparar
}
function MostrarSinParametros()
{
	/*
	var funcionAjax=$.ajax({url:"nexoTexto.php"});

	funcionAjax.done(function(retorno){
		$("#principal").html(retorno);
		$("#informe").html("Correcto!!!");
	});
	funcionAjax.fail(function(retorno){
		$("#principal").html(":(");
		$("#informe").html(retorno.responseText);	
	});
	funcionAjax.always(function(retorno){
		//alert("siempre "+retorno.statusText);

	});*/
	
	$.ajax({url: "nexoTexto.php"})
	.then(function ok(respuesta)
	{
		//alert(respuesta);
		$("#principal").html(respuesta);
	},
	function mal(error)
	{
		alert(error);
	});

}

function Mostrar(queMostrar)
{
	/*
		//alert(queMostrar);
	var funcionAjax=$.ajax({
		url:"nexo.php",
		type:"post",
		data:{queHacer:queMostrar}
	});
	funcionAjax.done(function(retorno){
		$("#principal").html(retorno);
		$("#informe").html("Correcto!!!");	
	});
	funcionAjax.fail(function(retorno){
		$("#principal").html(":(");
		$("#informe").html(retorno.responseText);	
	});
	funcionAjax.always(function(retorno){
		//alert("siempre "+retorno.statusText);

	});*/

	$.ajax(
		{
		url : "nexoadministrador.php",
		type : "post",
		data: { queHacer:queMostrar }//los datos que voy a pasar para el otro lado.

		})
	.then(function si(exito)
	{
		$("#principal").html(exito);
	},
	function no(error)
	{

	});



}

function MostarLogin()
{
		//alert(queMostrar);
	var funcionAjax=$.ajax({
		url:"nexoadministrador.php",
		type:"post",
		data:{queHacer:"MostarLogin"}
	});
	funcionAjax.done(function(retorno){
		$("#principal").html(retorno);
		$("#informe").html("Correcto Form login!!!");	
	});
	funcionAjax.fail(function(retorno){
		$("#botonesABM").html(":(");
		$("#informe").html(retorno.responseText);	
	});
	funcionAjax.always(function(retorno){
		//alert("siempre "+retorno.statusText);

	});
/*
	$.ajax({
		url :"nexo.php",
		type : "post",
		data: {queHacer:"MostrarLogin"}
		})
	.then(function si(exito)
	{	
		$("#principal").html(exito);
	},
	function no(error)
	{
		alert("ERROR!");
	});*/
}
function BorrarCD(idParametro)
{
	//alert(idParametro);
		var funcionAjax=$.ajax({
		url:"nexoadministrador.php",
		type:"post",
		data:{
			queHacer:"BorrarCD",
			id:idParametro	
		}
	});
	funcionAjax.done(function(retorno){
		Mostrar("MostrarGrilla");
		$("#informe").html("cantidad de eliminados "+ retorno);	
		
	});
	funcionAjax.fail(function(retorno){	
		$("#informe").html(retorno.responseText);	
	});	
}

function EditarCD(idParametro)
{
	var funcionAjax=$.ajax({
		url:"nexoadministrador.php",
		type:"post",
		data:{
			queHacer:"TraerCD",
			id:idParametro	
		}
	});
	funcionAjax.done(function(retorno){
					Mostrar("MostrarFormAlta");
					
					setTimeout(function(){

					var cd =JSON.parse(retorno);			
					$("#idCD").val(cd.id);
					$("#cantante").val(cd.cantante);
					$("#titulo").val(cd.titulo);
					$("#anio").val(cd.año);
				 	alert("llego");


						 }, 3000);
					
		


	});
	funcionAjax.fail(function(retorno){	
		$("#informe").html(retorno.responseText);	





	});

		
	//sleep(6);	

	

}

function GuardarCD()
{
		var id=$("#idCD").val();
		var cantante=$("#cantante").val();
		var titulo=$("#titulo").val();
		var anio=$("#anio").val();

		var funcionAjax=$.ajax({
		url:"nexo.php",
		type:"post",
		data:{
			queHacer:"GuardarCD",
			id:id,
			cantante:cantante,
			titulo:titulo,
			anio:anio	
		}
	});
	funcionAjax.done(function(retorno){
			Mostrar("MostrarGrilla");
		$("#informe").html("cantidad de agregados "+ retorno);	
		
	});
	funcionAjax.fail(function(retorno){	
		$("#informe").html(retorno.responseText);	
	});	
}
function validarLogin()
{
		var varUsuario=$("#correo").val();
		var varClave=$("#clave").val();
		var recordar=$("#recordarme").is(':checked');
		
$("#informe").html("<img src='imagenes/ajax-loader.gif' style='width: 30px;'/>");
	

	var funcionAjax=$.ajax({
		url:"php/validarUsuario.php",
		type:"post",
		data:{
			recordarme:recordar,
			usuario:varUsuario,
			clave:varClave
		}
	});


	funcionAjax.done(function(retorno){
		//alert(retorno);
			if(retorno!="No-esta"){	
				MostarBotones();
				MostarLogin();

				$("#BotonLogin").html("Ir a salir<br>-Sesión-");
				$("#BotonLogin").addClass("btn btn-danger");				
				$("#usuario").val("usuario: "+retorno);
			}else
			{
				$("#informe").html("usuario o clave incorrecta");	
				$("#formLogin").addClass("animated bounceInLeft");
			}
	});
	funcionAjax.fail(function(retorno){
		$("#botonesABM").html(":(");
		$("#informe").html(retorno.responseText);	
	});
	
}
function deslogear()
{	
	var funcionAjax=$.ajax({
		url:"php/deslogearUsuario.php",
		type:"post"		
	});
	funcionAjax.done(function(retorno){
			MostarBotones();
			MostarLogin();
			$("#usuario").val("Sin usuario.");
			$("#BotonLogin").html("Login<br>-Sesión-");
			$("#BotonLogin").removeClass("btn-danger");
			$("#BotonLogin").addClass("btn-primary");
			
	});	
}
function MostarBotones()
{		//alert(queMostrar);
	var funcionAjax=$.ajax({
		url:"nexoadministrador.php",
		type:"post",
		data:{queHacer:"MostarBotones"}
	});
	funcionAjax.done(function(retorno){
		$("#botonesABM").html(retorno);
		//$("#informe").html("Correcto BOTONES!!!");	
	});
}
function GuardarMascota()
{

	$.ajax({url : "nexoadministrador.php",
		type : "post",
		data : {queHacer : "GuardarMascota"}
		})
	.then(function ok(rteorno)
	{
		$("#informe").html("CORRRRRRRRRRRRRRRRRRRRRRRECTO");
		alert("BIEN PAPAAAAAAA!");
	},function no(retorno)
	{
		alert("SOS UN ASCO!");
	});
}

function ListaMascota()
{

	$.ajax({url:"nexoadministrador.php",
	type : "post",
	data: {queHacer : "MostrarLista"}
	})
	.then(function  si(dato)
	{
		$("#principal").html(dato);
		alert("muestro lista");
	},function no(dato)
	{
		alert("fallo todo sos un desastre papa!!!!!");
	});

}
function Alta()
{
	$.ajax({url:"nexoadministrador.php",
	type : "post",
	data : {queHacer : "Alta"}
	})
	.then(function a(ret )
	{
		$("#principal").html(ret);
		$("#informe").html("VAMO");
	},function b (ret)
	{
		alert("fallo");
	});
}

