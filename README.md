# visualPartnerAPI
Creación de una API con pruebas automatizadas de GitHub Actions como parte del camino de aprendizaje de LaunchX


Se siguió la metodología TDD para realizar este projecto, es decir se inicio realizando los archivos de prueba para los diferentes archivos generados y después de ello se realizó los archivos, se comprobó que las pruebas fallaran y después, al generar el código se verificó que las pruebas fueran exitosas. Cada prueba exitosa tiene consigo un commit.

La estructura del projecto es la siguiente:
### app:
* Controllers: Contiene el archivo que une a los sevices
* Services: Contiene el archivo que realiza las operaciones esperadas.
* Utils: Contiene el archivo que lee la bd

En la raíz de app se encuentra server.js que implementa los endpoints.

Rutas para comprobar el archivo

|Link  |Resultado  |
|---------|---------|
|/partners     |  Obtenemos todos los partners inscritos       |
|/partners/certification     |    Obtenemos los partners con certificación     |
|/partners/credits/:credits     |  Obtenemos los partner con creditos mayores o iguales al indicado       |
