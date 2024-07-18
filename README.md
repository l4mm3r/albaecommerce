# albaecommerce

EL código JavaScript se encarga de mostrar productos destacados y un listado completo de productos en una tienda en línea, además de gestionar el carrito de compras.

Archivos y Dependencias:
El código está dividido en dos archivos Javascript:
script.js: Contiene la lógica principal de la aplicación.
cart.js: Contiene la lógica del toggle para abrir y cerrar el carrito
allItems.json y topSellers.json : Contiene los datos de los productos (se supone que está en formato JSON).


Variables Globales
- url: Ruta del archivo JSON con los productos destacados (./src/json/topSellers.json).
- url2: Ruta del archivo JSON con todos los productos (./src/json/allItems.json).
- topSellersList: Elemento HTML que contiene la lista de productos destacados (obtenido con document.querySelector('.topSellerContainer')).
- listProducts: Elemento HTML que contiene el botón "addToCart".
- updateQuantity: Elemento HTML que uso para esuchar un evento en el cambio de cantidad de un item agregado en el carrito.
- clearCart: Asignado al botón HTML para borrar los items en el array "carts"
- carts: Array donde se almacena el product_id y cantidad

Funciones

Funciones de Obtención de Datos
- fetchTopSellers:
Realiza una petición GET al url para obtener los productos destacados.
Devuelve una promesa que se resuelve con los datos del JSON parseados o rechaza con un error.
- fetchAllItems:
Realiza una petición GET al url2 para obtener todos los productos.
Devuelve una promesa que se resuelve con los datos del JSON parseados o rechaza con un error.

Funciones de Procesamiento de Datos
- mapTopSellers:
Obtiene los datos de los productos destacados mediante fetchTopSellers.
Mapea los datos para crear un nuevo array con la estructura deseada (ej: { id, image, name, size, scent, price }).
Devuelve una promesa que se resuelve con el array mapeado o rechaza con un error.

- mapAllItems:
Obtiene los datos de todos los productos mediante fetchAllItems.
Mapea los datos para crear un nuevo array con la estructura deseada (similar a mapTopSellers).
Devuelve una promesa que se resuelve con el array mapeado o rechaza con un error.

Funciones de Creación de Elementos HTML
- createArticleElement: Crea un elemento article con las clases y el data-id proporcionados.
- createHeaderElement: Crea un elemento header con la clase proporcionada.
- createImageElement: Crea un elemento img con la fuente, las clases y el tamaño especificados.
- createDivElement: Crea un elemento div con la clase proporcionada.
- createHeadingElement: Crea un elemento h3 con la clase y el texto proporcionados.
- createParagraphElement: Crea un elemento p con la clase y el texto proporcionados.
- createFooterElement: Crea un elemento footer con la clase proporcionada.
- createButtonElement: Crea un elemento button con la clase, el texto y el tipo de botón especificados.
- appendElements: Agrega elementos hijos a un elemento padre.

Funciones de Presentación de Productos
- createCard:
Recibe los datos de un producto y el contenedor donde se agregará.
Crea una tarjeta HTML con la estructura y estilos deseados utilizando las funciones de creación de elementos anteriores.
Agrega la tarjeta al contenedor especificado.

- createBigCard:
Similar a createCard pero con una estructura y estilos diferentes, posiblemente para productos destacados.

Funciones del Carrito de Compras
- cartCounter:
Actualiza la cantidad total de productos en el carrito mostrandola en un elemento con la clase cartCounter.

- updateQuantityNumber:
Recibe el ID de un producto, la cantidad y el precio unitario.
Actualiza la cantidad y el precio total del producto en el carrito.

- addToCart:
Recibe el ID de un producto.
Verifica si el producto ya está en el carrito.
Si no está, lo agrega al array carts con una cantidad inicial de 1.
Vuelve a renderizar el producto en el carrito utilizando renderCart.
Actualiza el contador del carrito.

- renderCart:
Recibe el ID de un producto.
Obtiene los datos del producto.
Crea un elemento HTML para el producto en el carrito utilizando createItemInCart.

- createItemInCart:
Recibe los datos de un producto y su cantidad.
Crea una estructura HTML para mostrar el producto en el carrito, incluyendo