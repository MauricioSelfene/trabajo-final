trabajo-final

Producto
	idProducto
	nombre
	precio
	idCategoria
	estado
	imagen Middleware de validacion http
	descripcion
	creacion 
	modificacion

categoria
	idCategoria	
	nombre
	estado
	creacion
	modificacion

usuario
	usuario
	email   Middleware de validacion email
	clave
	rol   ADMIN - VENDEDOR

desarrollo:

trabajar con un inicio de sesion en jwt 

Usuario cliente o Publico solo puede buscar productos 

Rol admin puede realizar CRUD sobre todas las colecciones - debe estar logeado

Rol vendedor solo puede CRUD Productos - debe estar logeado
