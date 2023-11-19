# MÓDULO SOBRE REACT.JS ⚛️

---

## Preguntas teóricas

#### 1. Explicar brevemente el concepto de ReactJS y sus principales características

> **react** es una librería de javascript para desarrollar aplicaciones web basado en componentes sus diferentes carteristas son jsx, virtual dom, gestión de estado componentes y props.

#### 2. Definir qué es un componente en ReactJS y mencionar los tipos de componentes que existen.

> los componentes de react funcionan de forma similar a las funciones de javascript, ya que aceptan entradas arbitrarias denominadas propiedades o props y existe dos tipos de componentes los **funcionales** y componentes de **clases**.

#### 3. ¿Qué es el Virtual DOM y cuál es su función en ReactJS?

> el virtual dom es una biblioteca de javascript, donde una representación ideal o “virtual” de la iu se mantiene en memoria y en sincronía con el dom “real”, su función principal es mejorar el rendimiento y eficiencia en la manipulación del dom, este proceso se conoce como reconciliación.

#### 4. ¿Qué es JSX en ReactJS y porqué es importante?

> jsx es una extensión de sintaxis para javascript que permite escribir marcado similar a html dentro de una archivo javascript.
> permite a los desarrolladores describir la estructura de los componentes de manera más declarativa y legible, mejorando la eficiencia del desarrollo se compila a código javascript puro.

> la importancia de jsx radica en su capacidad para representar visualmente la jerarquía de componentes de react de manera clara y concisa, facilita la integración de lógica y presentación en un solo archivo, mejorando la modularidad y la mantenibilidad del código. la importancia de jsx radica en su capacidad para representar visualmente la jerarquía de componentes de react de manera clara y concisa, facilita la integración de lógica y presentación en un solo archivo, mejorando la modularidad y la mantenibilidad del código.

#### 5. ¿Qué es un Hook en ReactJS y cuál es su propósito?

> Los hooks son esenciales para agregar funcionalidades a los componentes de función y gestionar el estado, los efectos y otros aspectos del ciclo de vida en aplicaciones React de manera más sencilla y declarativa, sin necesidad de convertirse en componentes de clase.

> Algunos de los **Hooks** más comunes:

> - useState
> - useEffect
> - useContext

- useReducer

> su mayor proposito es simplifican la gestión del estado, efectos secundarios y la lógica en los componentes, haciendo que el código sea más limpio, modular y fácil de entender.

#### 6. Mencionar al menos tres tipos de Hooks en ReactJS y explicar brevemente para qué se utilizan.

> - **useState**: permite a los componentes funcionales tener un **estado** local, que puede almacenar valores, y cuando el estado cambia, React **renderiza** el componente para reflejar esos cambios en la interfaz de usuario.
>   devuelve un array con dos elementos: la variable de estado actual y una función para actualizar esa variable.

> - **useMemo**: Se utiliza para memorizar el resultado de una función y evitar su recálculo innecesario en** re-renderizaciones** posteriores, ayuda a optimizar el rendimiento evitando el cálculo redundante de valores.
>   Sin embargo, es importante usarlo con moderación y entender sus efectos en el rendimiento, ya que su uso excesivo puede llevar a una complejidad innecesaria en el código.

> - **useContext**: Es especialmente útil cuando deseas acceder a datos o funcionalidades compartidas en varios componentes sin tener que pasar propiedades manualmente a través de cada nivel de la jerarquía de componentes y Sirve para compartir valores entre componentes de manera eficiente y sencilla.
>   Facilita la gestión del estado compartido y mejora la modularidad y la reutilización del código al evitar la necesidad de pasar **props** manualmente a través de múltiples niveles de componentes.

#### 7. ¿Cuáles son las reglas de uso para los Hooks en ReactJS?

> - Solo deben ser utilizados en componentes de función No deben ser utilizados en componentes de clase.

> - No usar Hooks dentro de ciclos, condiciones o funciones anidadas. Siempre úsalos en el nivel superior del componente de función.

> - No intentes llamar a Hooks desde funciones regulares de JavaScript.

> - llamar a los Hooks en el mismo orden en todas las renderizaciones del componente Esto para que React asocié correctamente el estado interno de cada Hook con el componente correspondiente.

> - Nombrar los Hooks personalizados con 'use'

#### 8. Explicar qué es React Router DOM versión 6, para qué se utiliza y cuáles son sus principales componentes y Hooks.

> React Router DOM es una biblioteca que te permite hacer **enrutados** **declarativos** en nuestras aplicaciones . Hace más fácil cambiar entre diferentes partes de una aplicación de React según la URL actual, en aplicaciones de una sola página. Antes, esto implicaba gestionar manualmente las URL o cargar páginas HTML individuales para cada ruta. Pero con React Router DOM, simplemente defines las rutas y los componentes asociados en un solo lugar, haciendo todo este proceso mucho más sencillo.

###### Componentes

> - **BrowserRouter**
> - **Route**
> - **Link**
> - **NavLink**

> ###### Hooks

> - **useParams**
> - **useNavigate**
> - **useLocation**

#### 9. Explicar cómo se realiza la navegación entre diferentes páginas utilizando React Router DOM.

> ##### PASO 1. instalada la biblioteca React Router DOM

    npm install react-router-dom

> ##### PASO 2. Configuración de rutas:

> Importar los componentes y funciones necesarios de React Router y define las rutas de la aplicación.

> ##### PASO 3. BrowserRouter :

> luedo envolmemos la aplicacion con **BrowserRouter** es el compoennete nos permite enlazar las rutas o en lasar la aplicacion con el navegador

> ##### PASO 4. Configurar las rutas: utilizando Router para envolver tus rutas.
>
> Luego, utiliza el componente Route con el atributo path y el elemento (el componente) para definir cada ruta y especificar qué componente debe mostrarse.

> ##### PASO 5. El BrowserRouter.
>
> que proporciona la infraestructura para la navegación.
>
> #####PASO 6. Navegación entre páginas
> ya puedes usar el componente Link para crear enlaces entre tus páginas. En lugar de utilizar el componente <a> tradicional de HTML, utiliza Link para mantener el estado de la aplicación sin recargar la página completa.

#### 10. ¿Cómo se definen rutas en React Router DOM?

> nota: La respuesta se encuentra en la pregunta anterior.

#### 11. Describir cómo crear un proyecto ReactJS con Vite

> ##### PASO 1: Instalación de Vite:
>
> crear un nuevo proyecto de React con Vite utilizando el siguiente comando.

>     npm create vite my-react-app --template react

> ##### PASO 2: Cambio al Directorio del Proyecto

> navega al directorio del proyecto.

>     cd my-react-app

> ##### PASO 3: Iniciar la Aplicación
>
> Para iniciar la aplicación.

    npm install
    npm run dev

> Por defecto, El Proyecto estará disponible en http://localhost:3000.

#### 12.Describir cómo desplegar un JSON server en cualquier Hosting free o servicio en la

nube gratuito de su elección

> ##### Paso 1: Crear una carpeta para el mini back.

> ##### Paso 2: Iniciar un proyecto npm:

     npm init -y


> Este comando inicializa un proyecto npm con configuraciones por defecto.

> ##### Paso 3: Instalar JSON Server:

     npm install json-server

> ##### Paso 4: Crear el archivo .gitignore:

> A la misma altura que el archivo package.json, crea un archivo llamado .gitignore y agrega la línea:}

    node_modules/

> Esto asegura que la carpeta node_modules no se incluirá en el repositorio de Git.

> ##### Paso 5: Crear la estructura de carpetas:

    - mini-back/
      - src/
        - index.js
      - data/
        - db.json
      - .gitignore
      - package.json

> ##### Paso 6: Configurar db.json:

> Dentro de la carpeta data, crea un archivo llamado db.json con tus datos.

> ##### Paso 7: Configurar index.js:
>
> Agregamos el código de configuración del JSON Server en el index.js. importante verificar las rutas del archivo en el JSON server.

> ##### Paso 8: Ejecutar el servidor localmente

    node src/index.js

> Esto iniciará tu servidor localmente. Asegúrate de que funciona correctamente antes de pasar al siguiente paso.

> ##### Paso 9: Guardar en GitHub:

    git init
    git add .
    git commit -m "Primer commit"

> ##### Paso 10: Desplegar en un servicio en la nube:

> Una vez corriendo el proyecto correctamente, lo que vamos a hacer es que desplegamos en un servicio en la nube gratuito de su elección.
