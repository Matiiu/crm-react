# React CRM

#### 1. Instalar las dependencias
	 npm i

#### 2. Crear un archivo .env en la raíz del proyecto con las siguentes variables:
	VITE_API_URL=http://localhost:3000/clientes
	VITE_DB_USER=root

#### 3. Correr la base de datos:
	json-server --watch db.json --port 3000

#### 4. Correr la aplicación
	npm run dev


------------


## Si desea correr las pruebas:
 	Eliminar del package.json la linea 5: "type": "module",
	Agregar la url a la variable urlClient
	Usar el comando: `npm test`



