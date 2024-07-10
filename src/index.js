const url = './json/topSellers.json'
const url2 = './json/allItems.json'
const topSellersList = document.querySelector('.topSellerContainer')

document.addEventListener('DOMContentLoaded', async () => {
	try {
		await printTopCards()
		await printAllCards()
	} catch (error) {
		console.error(error)
	}
})

const fetchTopSellers = async () => {
	try {
		const response = await fetch(url, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		})
		const data = await response.json()
		return data
	} catch (error) {
		console.log(error)
		throw new Error('Failed to fetch top sellers')
	}
}

const fetchAllItems = async () => {
	try {
		const response = await fetch(url2, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		})
		const data = await response.json()
		return data
	} catch (error) {
		console.log(error)
		throw new Error('Failed to fetch on all items')
	}
}

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
		console.log(error)
		throw new Error('Failed to map top sellers')
	}
}

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
		console.log(error)
		throw new Error('Failed to map all items')
	}
}

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
	const p3 = createParagraphElement('text-xl font-bold mt-2', data.price)
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
	children.forEach((child) => {
		parent.append(child)
	})
}

const printTopCards = async () => {
	try {
		const data = await mapTopSellers()
		for (const item of data) {
			createCard(item, '.topSellerContainer')
		}
	} catch (error) {
		console.log(error)
	}
}

const printAllCards = async () => {
	try {
		const data = await mapAllItems()
		if (data.length > 0) {
			createBigCard(data[0])
		} else {
			console.log('No data found')
		}
		for (const item of data.slice(1)) {
			createCard(item, '.allCardsContainer')
		}
	} catch (error) {
		console.log(error)
	}
}

///////////////////////// SIDE CART //////////////////////////
const listProducts = document.querySelector('.topSellerContainer')
const updateQuantity = document.querySelector('.listCart')
const carts = []

const cartCounter = () => {
	const cartCounter = document.querySelector('.cartCounter')
	const quantity = carts.reduce((acc, item) => acc + item.quantity, 0)
	cartCounter.textContent = quantity
}

listProducts.addEventListener('click', (event) => {
	const positionClick = event.target
	if (positionClick.classList.contains('addToCart')) {
		const product_id = positionClick.parentElement.parentElement.dataset.id
		addToCart(product_id)
	}
})

const addToCart = async (product_id) => {
	try {
		const positionThisProductInCart = carts.findIndex(
			(value) => value.product_id === product_id,
		)

		if (positionThisProductInCart < 0) {
			carts.push({
				product_id: product_id,
				quantity: 1,
			})
		} else {
			carts[positionThisProductInCart].quantity++
		}
		await renderCart(product_id)
		cartCounter()
	} catch (error) {
		console.log(error)
	}
}

const renderCart = async (product_id) => {
	try {
		const data = await fetchTopSellers()
		const item = data.find((item) => item.id === product_id)
		/* console.log(carts) */
		createItemInCart(item)
	} catch (error) {
		console.log(error)
	}
}

const createItemInCart = (item) => {
	// Create elements for the cart item
	const article = document.createElement('article')
	article.dataset.id = `${item.id}`

	const div = document.createElement('div')
	div.className = 'cartItem flex mt-4'

	const div2 = document.createElement('div')
	div2.className = 'itemImg'

	const img = document.createElement('img')
	img.src = `${item.img}` // Assuming item has an 'img' property
	img.className = 'w-24 rounded-lg'

	const div3 = document.createElement('div')
	div3.className =
		'itemDescription flex flex-col pl-6 justify-center font-dm text-gray-50'

	const p1 = document.createElement('p')
	p1.className = 'text-base'
	p1.textContent = `${item.name}` // Assuming item has a 'name' property

	const p2 = document.createElement('p')
	p2.className = 'text-base'
	p2.textContent = `${item.size}` // Assuming item has a 'size' property

	const div4 = document.createElement('div')
	div4.className =
		'cartItemPrice flex flex-row-reverse justify-between items-center mt-2'

	const div5 = document.createElement('div')
	div5.className = 'totalPrice'

	const p3 = document.createElement('p')
	p3.className = 'text-xl font-bold'
	p3.textContent = `${item.price}` // Assuming item has a 'price' property

	const div6 = document.createElement('div')
	div6.className = 'quantity pl-5 font-dm flex gap-4'

	const span1 = document.createElement('span')
	span1.className = 'minus cursor-pointer'
	span1.textContent = '-' // Placeholder for minus symbol

	const span2 = document.createElement('span')
	span2.className = 'quantityNumber'
	span2.textContent = `${carts[0].quantity}` // Assuming item has a 'quantity' property

	const span3 = document.createElement('span')
	span3.className = 'plus cursor-pointer'
	span3.textContent = '+' // Placeholder for plus symbol

	// Constructing the DOM structure
	div2.appendChild(img)
	div3.append(p1, p2)
	div5.appendChild(p3)
	div6.append(span1, span2, span3)
	div4.append(div5, div6)
	div.append(div2, div3)
	div4.append(div5, div6)
	article.append(div, div4)
	// Appending the constructed item to the cart list container
	document.querySelector('.listCart').append(article)
}

const updateQuantityNumber = (product_id, quantity) => {
	const cartItem = document.querySelector(`.listCart [data-id="${product_id}"]`)
	if (cartItem) {
		cartItem.querySelector('.quantityNumber').textContent = quantity
	}
}

updateQuantity.addEventListener('click', (event) => {
	const positionClick = event.target

	if (positionClick.classList.contains('plus')) {
		const product_id =
			positionClick.parentElement.parentElement.parentElement.dataset.id
		const positionThisProductInCart = carts.findIndex(
			(value) => value.product_id === product_id,
		)
		carts[positionThisProductInCart].quantity++
		const quantity = carts[positionThisProductInCart].quantity
		updateQuantityNumber(product_id, quantity)
		cartCounter()
	}
	if (positionClick.classList.contains('minus')) {
		const product_id =
			positionClick.parentElement.parentElement.parentElement.dataset.id
		const positionThisProductInCart = carts.findIndex(
			(value) => value.product_id === product_id,
		)
		carts[positionThisProductInCart].quantity--
		const quantity = carts[positionThisProductInCart].quantity
		updateQuantityNumber(product_id, quantity)
		cartCounter()
	}
})
