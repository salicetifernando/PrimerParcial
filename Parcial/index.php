<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">

<!-- disable iPhone inital scale -->
<meta name="viewport" content=" initial-scale=1.0">

<title>UTN FRA</title>

<!-- main css -->
<link href="css/style.css" rel="stylesheet" type="text/css">

<!-- media queries css -->
 <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css">
<link href="css/media-queries.css" rel="stylesheet" type="text/css">
<script src="//code.jquery.com/jquery-1.11.3.min.js"></script>
 <link rel="icon" href="http://www.octavio.com.ar/favicon.ico">
<script type="text/javascript" src="js/funcionesAjax.js"></script>
<script type="text/javascript" src="js/funcionesLogin.js"></script>
<script type="text/javascript" src="js/funcionesABM.js"></script>
<script type="text/javascript" src="FuncionesParcial.js"></script>
</head>

<body>

<div id="pagewrap">

	<header id="header">

		<hgroup>
			<h1 id="site-logo"><a href="#">Principal</a></h1>
			<h2 id="site-description">formato ajustable</h2>
		</hgroup>

		<nav>
			<ul id="main-nav" class="clearfix">
				
				<li><a onclick="MostarLogin()"  class="btn btn-primary"id="BotonLogin" >Login<br>-Sesión-</a> </li>
				<li><a onclick = "GuardarMascota()"  class="btn" id="Login" >Loguear<br></a> </li>
				<li><a onclick = "ListaMascota()"  class="btn" id="Lista" >LISTA<br></a> </li>
				<li><a onclick = "Alta()"  class="btn" id="alta" >ALTA<br></a> </li>
				
				
				
			</ul>
			<!-- /#main-nav --> 
		</nav>

		<form id="searchform" method = "POST" >
		
		

			<input type="search" id="usuario" readonly placeholder="Sin Usuario">

		</form>

	</header>
	<!-- /#header -->
	
	<div id="content" >

		<article  class="post clearfix">

			<header  >
				<h1 class="post-title"><a href="#"></a></h1>
				<p class="post-meta"><time class="post-date" datetime="2011-05-08" pubdate></time> 
			</header>
			<hr>
			<div id="principal">


			</div>		

		</article>
		<!-- /.post -->

	</div>
	<!-- /#content --> 
	
	
	<aside id="sidebar">

		<div id="botonesABM">
				<!--contenido dinamico cargado por ajax-->
		</div>
		<!-- /.widget -->

		<section class="widget clearfix" >
			<h4 class="widgettitle">informe </h4>
				<div id="informe">
				<!--contenido dinamico cargado por ajax-->
				</div>
			
		</section>
		<!-- /.widget -->
						
	</aside>
	<!-- /#sidebar -->

	
	<!-- /#footer --> 
	
</div>
<!-- /#pagewrap -->

</body>
</html>