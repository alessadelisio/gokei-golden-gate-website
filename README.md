# GOKEI-GOLDEN-GATE-WEBSITE
## CHALLENGE-TEST 🌉

## Flask 

La elección de este framework se debe a que es ligero y flexible para Python; entendiéndolo bajo el contexto de que el proyecto no contiene altas complejidades.

Con este framework se pudieron definir las rutas `endpoints` asociándolas con funciones en Python que generan la respuestas que la web necesitaba. Tal como, renderizar la página principal con las imágenes situadas dentro del proyecto; como a su vez el gestionar las solicitudes del tipo `GET` en la `API` de Unsplash siendo así capaz de mostrar la galería de imágenes solicitada. 

## Masonry

El uso de `Masonry` permitió crear una cuadrícula con columnas de diferentes alturas. Utilizar esta librería de JavaScript hizo el desarrollo de la página web más sencillo, ya que hacerlo solo con CSS habría sido más laborioso y hubiese consumido más tiempo en el desarrollo. 

## Infraestructura con Terraform

Se decidió usar `Terraform` porque es una herramienta que permite crear, definir, gestionar y actualizar la infraestructura a través de códigos declarativo en un proyecto. Asegurando la consistencia y el versionado del mismo de manera eficiente creando trazabilidad.

## Cloud Run

Esta herramienta permitió desplegar y ejecutar la apliación creada. Se escogió por su versatilidad y su gran capacidad de escalamiento.

Si bien existen otras soluciones del `SAS` la configuración de `Cloud Run` no significó mayor complejidad. Esto permitió que la aplicación quedase alojada bajo un proyecto de `GCP` el cual se puede utilizar a futuro para incorporarle distintos recursos e ir añadiéndole funcionalidades. 

## API Unsplash

La decisión de usar la [API de Unsplash ](https://unsplash.com/documentation), además de un requerimiento intrínseco del challenge, tiene sentido pues permite renderizar las imágenes desde el servidor en vez de almacenarlas localmente y consumirlas de forma estática.

## Logs

Se confiraron y añadieron `logs` adentro del código para proporcionar información relevanta y así poder realizar el seguimiento del comportamiento de la aplicación. 

## Pipenv

Solución alternativa a la gestión de dependencias clásicas de `Python` (requirements.txt) pues facilita la gestión de dependencias, permitiendo así minimizar configuraciones y enfocarse principalmente en el código. 

## Python-Semantic-Release

Herramienta que permitió automatizar el versionamiento del repositorio de una forma semántica analizando el historial de `commits`, minimizando así errores humanos u otras desiciones subjetivas. 

## GitHub Actions

Es una herramienta que permite automatizar flujos de trabajo y la forma en la que se entregan cambios en un producto. Permite crear distintos ambientes para así poder testear la aplicacion y evitar los errores en entornos productivos (algo que aparentemente CrowdStrike no hace 😶‍🌫️).

## LLMs

Se utilizó `Claude 3.5` para la ayuda en el desarrollo de archivos JavaScript así como la solucion de algunos problemas que fueron ocurriendo durante el proceso de desarrollo. Esto, sin duda alguna agilizó todo el proceso de desarrollo en conjunto con documentación y videos en YouTube. 