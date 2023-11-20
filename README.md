# Módulo sobre react.js ⚛️

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
>  - **useMemo**: Memoriza el resultado de una función para optimizar el rendimiento.
>  - **useContext**: Facilita el acceso a datos o funcionalidades compartidas entre componentes.

#### 7. ¿Cuáles son las reglas de uso para los Hooks en ReactJS?

> - Solo deben ser utilizados en componentes de función.
> - No usar dentro de ciclos, condiciones o funciones anidadas.
> - No llamar desde funciones regulares de JavaScript.
> - Llamar en el mismo orden en todas las renderizaciones.
> - Nombrar los Hooks personalizados con 'use'.

#### 8. Explicar qué es React Router DOM versión 6, para qué se utiliza y cuáles son sus principales componentes y Hooks.

> React Router DOM es una biblioteca que facilita el enrutado declarativo en aplicaciones de React. Sus componentes incluyen `BrowserRouter`, `Route`, `Link`, y sus Hooks incluyen `useParams`, `useNavigate`, y `useLocation`.

#### 9. Explicar cómo se realiza la navegación entre diferentes páginas utilizando React Router DOM.

> 1. Instalar React Router DOM: `npm install react-router-dom`.
> 2. Configurar rutas y envolver la aplicación con `BrowserRouter`.
> 3. Configurar las rutas usando el componente `Route`.
> 4. Utilizar el componente `Link` para crear enlaces entre páginas.

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



 # Gestion de estados y datos con react context y usereducer. ⚛️ 🌐

---

## Preguntas teóricas

---

## Preguntas teóricas

#### 1. ¿Qué es React Context y para qué se utiliza en el desarrollo web con React?

> es una característica de React que simplifica la transferencia de datos entre componentes al permitir que la información atraviese el árbol de componentes sin la necesidad de pasar propiedades manualmente en cada nivel. Esto es  valioso cuando múltiples componentes requieren compartir una cantidad significativa de datos entre sí.

> no solo simplifica la transferencia de datos, sino que también  manejar estados globales en aplicaciones donde la información compartida entre componentes es sustancial y compleja.


#### 2. Describir cómo se crea un contexto en React y cómo se proporciona y consume información a través de él.

> Para crear un contexto en React, se utiliza la función `createContext()`. Luego, el contexto se proporciona y consume utilizando los componentes `Provider` y `Consumer`, respectivamente. El `Provider` se utiliza para envolver la parte de la aplicación donde se compartirá el contexto, y el `Consumer` se utiliza para consumir el valor del contexto en componentes específicos.

#### 3. ¿Cuál es la ventaja de utilizar React Context en lugar de pasar props a través de múltiples componentes?

> La ventaja de utilizar React Context es que evita la prop drilling o pasar props a través de varios niveles de componentes. Esto mejora la limpieza del código y la legibilidad, ya que el valor del contexto se puede acceder directamente en cualquier nivel sin tener que pasar manualmente las props en cada nivel.

#### 4. Explicar el propósito de useReducer en React y cómo se diferencia de useState.
 
>  tiene como propósito gestionar el estado de manera más estructurada y compleja en comparación con useState. Mientras `useState` es ideal para manejar estados simples en un componente individual, useReducer  ofrece una estructura más organizada para gestionar estados complejos a nivel global, compartiendo datos entre componentes en aplicaciones más extensas.



#### 5. Describe los argumentos que toma la función useReducer.

> La función `useReducer` toma dos argumentos: un `reducer` y un `estado inicial`. El `reducer` es una función que especifica cómo el estado debería cambiar en respuesta a una acción, y el `estado inicial` es el estado inicial del componente.

#### 6. ¿Por qué es útil utilizar useReducer para gestionar el estado en aplicaciones más complejas?

> `useReducer` es útil en aplicaciones más complejas porque proporciona una forma más estructurada de gestionar el estado. Permite actualizar el estado, lo que facilita el mantenimiento y la comprensión del código en aplicaciones grandes y complejas.

#### 7. ¿Cómo se puede utilizar React Context junto con useReducer para gestionar el estado global en una aplicación de React?

> Para mí, la clave está en separar qué contexto es específico, por ejemplo, productos o usuarios, conceptos muy específicos de la aplicación que pueden compartir información entre ellos, como un producto y un carrito.

> Cuando se trata de trabajar con aspectos globales, como la carga de la aplicación, el inicio de sesión y los estados globales de errores, se puede utilizar React Context junto con useReducer. Esto se logra al crear un contexto que abarque un proveedor que utilice useReducer para gestionar el estado global. Los componentes que necesitan acceder a este estado global pueden consumir este contexto y enviar acciones al `dispatch` proporcionado por useReducer.



#### 8. ¿Por qué es importante tener un sistema de gestión de estado global en aplicaciones React más grandes?

> Un sistema de gestión de estado global en aplicaciones React más grandes es importante porque facilita la gestión y actualización del estado en toda la aplicación. Ayuda a evitar la complejidad de pasar props a través de múltiples componentes y centraliza la lógica de estado, lo que mejora la mantenibilidad del código.

#### 9. Menciona al menos tres ventajas de utilizar una combinación de React Context y useReducer en comparación con el manejo de estado local en componentes.

> - **Evita la prop drilling**: No es necesario pasar props a través de varios niveles.
> - **Centraliza la gestión del estado**: Mejora la estructura y comprensión del código.
> - **Facilita la gestión de acciones complejas**: `useReducer` permite lógica avanzada en la actualización del estado.

#### 10. ¿En qué situaciones podría ser beneficioso migrar de un enfoque de manejo de estado local a un enfoque de estado global utilizando React Context y useReducer?

> Podría ser beneficioso migrar a un enfoque de estado global cuando la aplicación crece en complejidad y la gestión del estado local se vuelve difícil de mantener. Además, en situaciones donde varios componentes necesitan acceder y actualizar el mismo estado, migrar a un enfoque global simplifica la comunicación entre componentes y mejora la organización del código.
