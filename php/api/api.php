<?php

switch ( $_SERVER['REQUEST_METHOD'] ) {
	case 'GET':
	print '-=Method GET=- <br>';
		break;
	case 'POST':
	print '-=Methid POST=- <br>';
		break;
	default:
	print "Default switch: method is -> ".$_SERVER['REQUEST_METHOD'];
		break;
}