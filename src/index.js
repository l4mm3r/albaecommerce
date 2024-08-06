const urlTopSellers = './src/json/topSellers.json'
const urlAllItems = './src/json/allItems.json'
const topSellersList = document.querySelector('.topSellerContainer')

document.addEventListener('DOMContentLoaded', async () => {
	try {
		await printTopCards()
		await printAllCards()
	} catch (error) {
		console.error(error)
	}
})

//funcion para obtener los productos destacados
const fetchTopSellers = async () => {
	try {
		const response = await fetch(urlTopSellers, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		})
		const data = await response.json()
		return data
	} catch (error) {
		console.error(error)
		throw new Error('Failed to fetch top sellers')
	}
}

//funcion para obtener todos los productos
const fetchAllItems = async () => {
	try {
		const response = await fetch(urlAllItems, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		})
		const data = await response.json()
		return data
	} catch (error) {
		console.error(error)
		throw new Error('Failed to fetch on all items')
	}
}

//funcion para mapear los productos destacados
const mapTopSellers = async () => {
	try {
		const data = await fetchTopSellers()
		return data.map((item) => ({
			id: item.id,
			image: item.img,
			name: item.name,
			size: item.size,
			scent: item.scent,
			price: item.price,
		}))
	} catch (error) {
		console.error(error)
		throw new Error('Failed to map top sellers')
	}
}

//funcion para mapear todos los productos
const mapAllItems = async () => {
	try {
		const data = await fetchAllItems()
		return data.map((item) => ({
			id: item.id,
			image: item.img,
			name: item.name,
			size: item.size,
			scent: item.scent,
			price: item.price,
		}))
	} catch (error) {
		console.error(error)
		throw new Error('Failed to map all items')
	}
}

//crear cards
const createCard = (data, containerClass) => {
	const article = createArticleElement(
		'w-64 h-96 bg-gray-800 rounded-2xl drop-shadow-sm shadow-orange-300 hover:shadow-2xl mt-20 p-7',
		data.id,
	)
	const header = createHeaderElement('flex justify-end')
	const img = createImageElement(
		data.image,
		'w-48 h-40 object-cover rounded-xl',
	)
	const div = createDivElement('text-right font-dm text-gray-50')
	const h3 = createHeadingElement('font-bold text-2xl mt-3', data.name)
	const p1 = createParagraphElement('text-base', data.size)
	const p2 = createParagraphElement('text-base', data.scent)
	const p3 = createParagraphElement(
		'text-xl font-bold mt-2',
		`${'$ '}${data.price}`,
	)
	const footer = createFooterElement('flex justify-end')
	const button = createButtonElement(
		'bg-orange-400 px-2 rounded-full -mr-2 mt-3 text-gray-900 font-dm addToCart',
		'add to cart +',
	)

	appendElements(article, header, div, footer)
	appendElements(header, img)
	appendElements(div, h3, p1, p2, p3)
	appendElements(footer, button)

	document.querySelector(containerClass).append(article)
}

const createBigCard = (data) => {
	const article = createArticleElement(
		'w-[600px] h-96 bg-gray-800 rounded-2xl drop-shadow-sm shadow-orange-300 hover:shadow-2xl mt-20 p-7',
		data.id,
	)
	const header = createHeaderElement('flex justify-end')
	const img1 = createImageElement(
		data.image.foto1,
		'w-full h-40 object-cover rounded-xl',
	)
	const img2 = createImageElement(
		data.image.foto2,
		'w-2/3 h-28 object-cover rounded-xl mt-6',
	)
	const div = createDivElement('text-right font-dm text-gray-50 flex')
	const div2 = createDivElement('flex flex-col w-1/3')
	const h3 = createHeadingElement('font-bold text-2xl mt-3', data.name)
	const p1 = createParagraphElement('text-base', data.size)
	const p2 = createParagraphElement('text-base', data.scent)
	const p3 = createParagraphElement('text-xl font-bold mt-2', data.price)
	const footer = createFooterElement('flex justify-end')
	const button = createButtonElement(
		'bg-orange-400 px-2 rounded-full -mr-2 mt-3 text-gray-900 font-dm addToCart',
		'add to cart +',
	)

	appendElements(article, header, div, footer)
	appendElements(header, img1)
	appendElements(div, img2, div2)
	appendElements(div2, h3, p1, p2, p3)
	appendElements(footer, button)

	document.querySelector('.allCardsContainer').append(article)
}

const createArticleElement = (className, dataId) => {
	const article = document.createElement('article')
	article.className = className
	article.dataset.id = dataId
	return article
}

const createHeaderElement = (className) => {
	const header = document.createElement('header')
	header.className = className
	return header
}

const createImageElement = (src, className) => {
	const img = document.createElement('img')
	img.src = src
	img.className = className
	return img
}

const createDivElement = (className) => {
	const div = document.createElement('div')
	div.className = className
	return div
}

const createHeadingElement = (className, textContent) => {
	const h3 = document.createElement('h3')
	h3.className = className
	h3.textContent = textContent
	return h3
}

const createParagraphElement = (className, textContent) => {
	const p = document.createElement('p')
	p.className = className
	p.textContent = textContent
	return p
}

const createFooterElement = (className) => {
	const footer = document.createElement('footer')
	footer.className = className
	return footer
}

const createButtonElement = (className, textContent) => {
	const button = document.createElement('button')
	button.className = className
	button.textContent = textContent
	return button
}

const appendElements = (parent, ...children) => {
	for (const child of children) {
		parent.append(child)
	}
}

//crea las cards de los topSellers
const printTopCards = async () => {
	try {
		const data = await mapTopSellers()
		for (const item of data) {
			createCard(item, '.topSellerContainer')
		}
	} catch (error) {
		console.error(error)
	}
}

//crea las cards de todos los productos
const printAllCards = async () => {
	try {
		const data = await mapAllItems()
		if (data.length > 0) {
			createBigCard(data[0])
		} else {
			console.error('No data found')
		}
		for (const item of data.slice(1)) {
			createCard(item, '.allCardsContainer')
		}
	} catch (error) {
		console.error(error)
	}
}

///////////////////////// SIDE CART //////////////////////////
const listProducts = document.querySelector('.topSellerContainer')
const updateQuantity = document.querySelector('.listCart')
const clearCart = document.querySelector('.clearCarTab')
let carts = []

//evento para escuchar cuando hacen click en addtocart
listProducts.addEventListener('click', (event) => {
	const positionClick = event.target
	if (positionClick.classList.contains('addToCart')) {
		const productoId = positionClick.parentElement.parentElement.dataset.id
		addToCart(productoId)
	}
})

//funcion para mostrar la cantidad de items totales en el carrito en la barra de navegacion
const cartCounter = () => {
	const cartCounter = document.querySelector('.cartCounter')
	const quantity = carts.reduce((acc, item) => acc + item.quantity, 0)
	cartCounter.textContent = quantity
}

//funcion para checkear si existe un item con el mismo id en el carrito
const addToCart = async (productoId) => {
	try {
		const positionThisProductInCart = carts.findIndex(
			(value) => value.productoId === productoId,
		)
		if (positionThisProductInCart < 0) {
			carts.push({
				productoId: productoId,
				quantity: 1,
			})
			await renderCart(productoId)
			cartCounter()
			updateSubtotal()
			updateTotal()
		} else {
			alert('El item ya existe en el carrito')
		}
		cartCounter()
	} catch (error) {
		console.error(error)
	}
}

//funcion para mostrar el item en el carrito por el id
const renderCart = async (productoId) => {
	try {
		const data = await fetchTopSellers()
		const item = data.find((item) => item.id === productoId)
		const cartItem = carts.find(
			(cartItem) => cartItem.productoId === productoId,
		)
		const quantity = cartItem.quantity
		saveCartToLocalStorage()
		createItemInCart(item, quantity)
	} catch (error) {
		console.log(error)
	}
}

//función para crear la card del item en el carrito
const createItemInCart = (item, quantity) => {
	// Create elements for the cart item
	const article = document.createElement('article')
	article.dataset.id = `${item.id}`
	article.className = 'itemRendered'

	const cartItem = carts.find((value) => value.productoId === item.id)
	const totalPerItem = (cartItem.quantity * item.price).toFixed(2)
	article.dataset.totalPerItem = totalPerItem

	const div = document.createElement('div')
	div.className = 'cartItem flex mt-4'

	const div2 = document.createElement('div')
	div2.className = 'itemImg'

	const img = document.createElement('img')
	img.src = `${item.img}`
	img.className = 'w-24 rounded-lg'

	const div3 = document.createElement('div')
	div3.className =
		'itemDescription flex flex-col pl-6 justify-center font-dm text-gray-50'

	const p1 = document.createElement('p')
	p1.className = 'text-base'
	p1.textContent = `${item.name}`

	const p2 = document.createElement('p')
	p2.className = 'text-base'
	p2.textContent = `${item.size}`

	const div4 = document.createElement('div')
	div4.className =
		'cartItemPrice flex flex-row-reverse justify-between items-center mt-2'

	const functionValorItem = (item) => {
		const div5 = document.createElement('div')
		div5.className = 'totalPrice'

		const p3 = document.createElement('p')
		p3.className = 'text-xl font-bold'
		p3.textContent = `$ ${totalPerItem}`

		div5.append(p3)
		return div5
	}

	const div6 = document.createElement('div')
	div6.className = 'quantity pl-5 font-dm flex gap-4'

	const span1 = document.createElement('span')
	span1.className = 'minus cursor-pointer'
	span1.textContent = '-'
	const span2 = document.createElement('span')
	span2.className = 'quantityNumber'
	span2.textContent = `${quantity}`

	const span3 = document.createElement('span')
	span3.className = 'plus cursor-pointer'
	span3.textContent = '+'

	// Constructing the DOM structure
	div2.appendChild(img)
	div3.append(p1, p2)
	div6.append(span1, span2, span3)
	div4.append(functionValorItem(item), div6)
	div.append(div2, div3)
	article.append(div, div4)
	// Appending the constructed item to the cart list container
	document.querySelector('.listCart').append(article)
}

//funcion para incrementar o decrementar la cantidad de items en el carrito
updateQuantity.addEventListener('click', async (event) => {
	const positionClick = event.target

	if (positionClick.classList.contains('plus')) {
		const productoId =
			positionClick.parentElement.parentElement.parentElement.dataset.id
		const positionThisProductInCart = carts.findIndex(
			(value) => value.productoId === productoId,
		)

		if (positionThisProductInCart >= 0) {
			carts[positionThisProductInCart].quantity++
			const quantity = carts[positionThisProductInCart].quantity

			// Obtener el precio del ítem
			const data = await fetchTopSellers()
			const item = data.find((item) => item.id === productoId)
			const itemPrice = item.price
			updateQuantityNumber(productoId, quantity, itemPrice)
			cartCounter()
		}
	}

	if (positionClick.classList.contains('minus')) {
		const productoId =
			positionClick.parentElement.parentElement.parentElement.dataset.id
		const positionThisProductInCart = carts.findIndex(
			(value) => value.productoId === productoId,
		)

		if (positionThisProductInCart >= 0) {
			const quantity = carts[positionThisProductInCart].quantity

			if (quantity > 1) {
				carts[positionThisProductInCart].quantity--

				// Obtener el precio del ítem
				const data = await fetchTopSellers()
				const item = data.find((item) => item.id === productoId)
				const itemPrice = item.price

				updateQuantityNumber(productoId, quantity - 1, itemPrice)
				cartCounter()
			} else {
				console.log('La cantidad mínima alcanzada')
			}
		}
	}
})

//asigna el span y hace la mutiplicación para mostrar el total por item
const updateQuantityNumber = async (productoId, quantity, itemPrice) => {
	const cartItem = document.querySelector(`.listCart [data-id="${productoId}"]`)
	if (cartItem) {
		const totalPriceElement = cartItem.querySelector('.totalPrice p')
		cartItem.querySelector('.quantityNumber').textContent = quantity
		if (itemPrice) {
			const totalPrice = (quantity * itemPrice).toFixed(2)
			totalPriceElement.textContent = `$${totalPrice}`
			cartItem.dataset.totalPerItem = totalPrice
			saveCartToLocalStorage()
			updateSubtotal()
			updateTotal()
		}
	}
}

//funcion para actualizar el subtotal
const updateSubtotal = () => {
	const cartItems = document.querySelectorAll('.listCart .itemRendered') //se obtienen todos los items del carrito
	let total = 0 //se resetea el subtotal para contarlo nuevamente
	for (const item of cartItems) {
		//se recorre el array del carrito y se obtiene el total por cada item
		total += Number.parseFloat(item.dataset.totalPerItem) //se asigna el total por item y se va sumando en la variable total
	}
	const subtotal = document.querySelector('.subTotalValue') //se obtiene el span del subtotal
	subtotal.textContent = `$ ${total.toFixed(2)}` //se actualiza el subtotal

	localStorage.setItem('subtotal', total.toFixed(2))
	return total
}

const updateTotal = () => {
	const cartItems = document.querySelectorAll('.listCart .itemRendered') //se obtienen todos los items del carrito
	let total = 0 //se resetea el total para contarlo nuevamente
	for (const item of cartItems) {
		const totalPerItem = Number.parseFloat(item.dataset.totalPerItem) //se asigna el total por item y se va sumando en la variable total
		total += totalPerItem
	}
	const totalWithTax = total * 1.12

	const totalValue = document.querySelector('.cartTotalValue') //se obtiene el span del total
	totalValue.textContent = `$ ${totalWithTax.toFixed(2)}` //se actualiza el total

	localStorage.setItem('total', totalWithTax.toFixed(2))
	return totalWithTax
}

//event para vaciar el carrito
clearCart.addEventListener('click', (event) => {
	const positionClick = event.target
	if (positionClick.classList.contains('clearCarTab')) {
		//se escucha si se hace click en el boton clearCarTab
		emptyCart() //se llama la funcion para vaciar el carrito
	}
})

//funcion para vaciar el carrito
const emptyCart = () => {
	carts = []
	document.querySelector('.listCart').innerHTML = ''
	updateSubtotal() //se borra el subtotal cuando se vacia el carrito
	updateTotal() //se borra el total cuando se vacia el carrito
	saveCartToLocalStorage() //se guardan los cambios
	cartCounter() //se actualiza el contador en la barra de navegación
}

// Función para guardar el carrito en localStorage
const saveCartToLocalStorage = () => {
	localStorage.setItem('shoppingCart', JSON.stringify(carts))

	const totalPerItemArray = []
	for (const item of document.querySelectorAll('.listCart .itemRendered')) {
		const productId = item.dataset.id
		const totalPerItem = item.dataset.totalPerItem || '0.00'
		totalPerItemArray.push({ productId, totalPerItem })
	}

	localStorage.setItem('totalPerItemArray', JSON.stringify(totalPerItemArray))
}

// Función para cargar el carrito desde localStorage al cargar la página
const loadCartFromLocalStorage = () => {
	const savedCart = localStorage.getItem('shoppingCart')
	const savedTotalPerItemArray = localStorage.getItem('totalPerItemArray')
	const savedSubtotal = localStorage.getItem('subtotal')
	const savedTotalWithTax = localStorage.getItem('total')

	if (savedCart) {
		carts = JSON.parse(savedCart)
	}

	if (savedTotalPerItemArray) {
		const totalPerItemArray = JSON.parse(savedTotalPerItemArray)

		for (const item of totalPerItemArray) {
			const cartItem = document.querySelector(
				`.listCart [data-id="${item.productId}"]`,
			)
			if (cartItem) {
				cartItem.dataset.totalPerItem = item.totalPerItem
			}
		}
	}

	for (const item of carts) {
		renderCart(item.productoId)
	}

	if (savedSubtotal) {
		const subtotal = document.querySelector('.subTotalValue')
		subtotal.textContent = `$ ${Number.parseFloat(savedSubtotal).toFixed(2)}`
	}

	if (savedTotalWithTax) {
		const totalValue = document.querySelector('.cartTotalValue')
		totalValue.textContent = `$ ${Number.parseFloat(savedTotalWithTax).toFixed(2)}`
	}

	cartCounter()
	console.log('carrito cargado desde el local storage')
}

// Cargar el carrito desde localStorage al cargar la página
loadCartFromLocalStorage()

///////////////////CHECKOUT MODAL////////////////////
//TODO: adicionar condicional si no existe ningún item en el carrito

const modalPopUp = document.querySelector('.proceedCarTab')
const modalClose = document.querySelector('.closeModal')
const continueToPayment = document.querySelector('.continueToPayment')

//boton de checkout muestra el modal
modalPopUp.addEventListener('click', (event) => {
	const positionClick = event.target
	if (positionClick.classList.contains('proceedCarTab')) {
		const formCheckout = document.querySelector('.formPopUp')
		formCheckout.classList.toggle('hidden')

		const cartTab = document.querySelector('.cartTabContainer')
		cartTab.style.display = cartTab.style.display === 'none' ? 'block' : 'none'
	}
})

//boton cerrar modal de checkout
modalClose.addEventListener('click', (event) => {
	const positionClick = event.target
	if (positionClick.classList.contains('closeModal')) {
		const formCheckout = document.querySelector('.formPopUp')
		formCheckout.classList.toggle('hidden')
	}
})

/////////////// CONFIRM PAYMENT MODAL //////////////////
const modalPayment = document.querySelector('.confirmPayment')
const closePayment = document.querySelector('.closePayment')

continueToPayment.addEventListener('click', (event) => {
	const positionClick = event.target
	if (positionClick.classList.contains('continueToPayment')) {
		const formCheckout = document.querySelector('.formPopUp')
		//oculta el modal del formulario
		formCheckout.classList.toggle('hidden')

		//muestra el modal de confirmar pago
		modalPayment.classList.toggle('hidden')
		updatePricesDescription()
	}
})

//boton de cerrar el modal de confirmar pago
closePayment.addEventListener('click', (event) => {
	const positionClick = event.target
	if (positionClick.classList.contains('closePayment')) {
		const paymentModal = document.querySelector('.confirmPayment')
		paymentModal.classList.toggle('hidden')
	}
})

//function apply discount code
const applyDiscount = () => {
	const discountCode = document.querySelector('.discountInput').value
	if (discountCode !== 'DISCOUNT') {
		return 0.0
	} else {
		return 10.0
	}
}

//event listener para boton apply cupon code
const applyDiscountCode = document.querySelector('.applyCode')
applyDiscountCode.addEventListener('click', (event) => {
	const positionClick = event.target
	if (positionClick.classList.contains('applyCode')) {
		const discountValue = applyDiscount()
		updatePricesDescription(discountValue)
	}
})

//function to update prices description
const updatePricesDescription = () => {
	const subTotal = updateSubtotal()
	const totalValue = updateTotal()
	const discountCodePrice = applyDiscount()

	const subtotDescription = document.querySelector('.subtotalDescription')
	const discountDescription = document.querySelector('.discountDescription')
	const totalTotal = document.querySelector('.totalDescription')

	subtotDescription.textContent = `R$ ${subTotal.toFixed(2)}`
	discountDescription.textContent = `R$ ${discountCodePrice.toFixed(2)}`
	totalTotal.textContent = `R$ ${totalValue.toFixed(2) - discountCodePrice.toFixed(2)}`
}

//oculta el modal anterior y muestra otro agradeciendo por la compra
const finishPayment = document.querySelector('.makePayment')
finishPayment.addEventListener('click', (event) => {
	const positionClick = event.target
	if (positionClick.classList.contains('makePayment')) {
		const paymentModal = document.querySelector('.confirmPayment')
		paymentModal.classList.toggle('hidden')

		const purchasedComplete = document.querySelector('.purchasedCompleted')
		purchasedComplete.classList.toggle('hidden')

		setTimeout(() => {
			purchasedComplete.classList.toggle('hidden')
		}, 2000)
	}
})
