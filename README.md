# MÓDULO SOBRE REACT.JS ⚛️

---

## Preguntas teóricas

#### 1. Explicar brevemente el concepto de ReactJS y sus principales características

> **React** es una biblioteca de JavaScript para desarrollar aplicaciones web basada en componentes. Sus características principales incluyen JSX, Virtual DOM, gestión de estado, componentes y props.

#### 2. Definir qué es un componente en ReactJS y mencionar los tipos de componentes que existen.

> Los componentes en React funcionan de manera similar a las funciones de JavaScript, aceptando propiedades o "props". Hay dos tipos de componentes: funcionales y de clases.

#### 3. ¿Qué es el Virtual DOM y cuál es su función en ReactJS?

> El Virtual DOM es una representación ideal o "virtual" de la interfaz de usuario que se mantiene en memoria. Su función principal es mejorar el rendimiento y eficiencia en la manipulación del DOM a través de un proceso conocido como reconciliación.

#### 4. ¿Qué es JSX en ReactJS y por qué es importante?

> JSX es una extensión de sintaxis para JavaScript que permite escribir marcado similar a HTML dentro de un archivo JavaScript. Facilita la representación visual de la jerarquía de componentes de React de manera clara y concisa, mejorando la eficiencia del desarrollo.

#### 5. ¿Qué es un Hook en ReactJS y cuál es su propósito?

> Los Hooks en React son funciones que permiten agregar funcionalidades a los componentes de función, gestionando el estado, efectos y otros aspectos del ciclo de vida de manera declarativa. Algunos Hooks comunes incluyen `useState`, `useEffect`, y `useContext`.

#### 6. Mencionar al menos tres tipos de Hooks en ReactJS y explicar brevemente para qué se utilizan.

> - **useState**: Gestiona el estado local en componentes funcionales.
- **useMemo**: Memoriza el resultado de una función para optimizar el rendimiento.
- **useContext**: Facilita el acceso a datos o funcionalidades compartidas entre componentes.

#### 7. ¿Cuáles son las reglas de uso para los Hooks en ReactJS?

> - Solo deben ser utilizados en componentes de función.
- No usar dentro de ciclos, condiciones o funciones anidadas.
- No llamar desde funciones regulares de JavaScript.
- Llamar en el mismo orden en todas las renderizaciones.
- Nombrar los Hooks personalizados con 'use'.

#### 8. Explicar qué es React Router DOM versión 6, para qué se utiliza y cuáles son sus principales componentes y Hooks.
> 
React Router DOM es una biblioteca que facilita el enrutado declarativo en aplicaciones de React. Sus componentes incluyen `BrowserRouter`, `Route`, `Link`, y sus Hooks incluyen `useParams`, `useNavigate`, y `useLocation`.

#### 9. Explicar cómo se realiza la navegación entre diferentes páginas utilizando React Router DOM.

> 1. Instalar React Router DOM: `npm install react-router-dom`.
2. Configurar rutas y envolver la aplicación con `BrowserRouter`.
3. Configurar las rutas usando el componente `Route`.
4. Utilizar el componente `Link` para crear enlaces entre páginas.

#### 10. ¿Cómo se definen rutas en React Router DOM?

> `path` y el componente asociado.> Se definen usando el componente `Route` dentro de `BrowserRouter`, especificando el `path` y el componente asociado.

#### 11. Describir cómo crear un proyecto ReactJS con Vite

> 1. Instalar Vite: `npm create vite my-react-app --template react`.
> 2. Cambiar al directorio del proyecto: `cd my-react-app`.
> 3. Iniciar la aplicación: `npm install` y `npm run dev`.

#### 12. Describir cómo desplegar un JSON server en cualquier Hosting free o servicio en la nube gratuito de su elección

> 1. Crear una carpeta para el mini backend.
> 2. Iniciar un proyecto npm: `npm init -y`.
> 3. Instalar JSON Server: `npm install json-server`.
> 4. Crear el archivo `.gitignore`.
> 5. Crear la estructura de carpetas y configurar `db.json`.
> 6. Configurar `index.js`.
>7. Ejecutar el servidor localmente: `node src/index.js`.
> 8. Guardar en GitHub: `git init`, `git add .`, `git commit -m "Primer commit"`.
> 9. Desplegar en un servicio en la nube gratuito de su elección.
