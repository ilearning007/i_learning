<?php 

require 'config/config.php';
/**
* 
*/
class Conexion extends Mysqli
{
	
	function __construct()
	{
		parent::__construct(HOST, USER, PASS, DB_NAME);
		$this->connect_error? die("error al conectar") : '';
	}
}

//$db = new Conexion();

 ?>