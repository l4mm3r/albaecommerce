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

const printTopCards = async () => {
	try {
		const data = await mapTopSellers()
		for (const item of data) {
			createCard(item)
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
			createCard2(item)
		}
	} catch (error) {
		console.log(error)
	}
}

const createCard = (data) => {
	const article = document.createElement('article')
	article.className =
		'w-64 h-96 bg-gray-800 rounded-2xl drop-shadow-sm shadow-orange-300 hover:shadow-2xl mt-20 p-7'
	article.dataset.id = `${data.id}`

	const header = document.createElement('header')
	header.className = 'flex justify-end'

	const img = document.createElement('img')
	img.src = `${data.image}`
	img.className = 'w-48 h-40 object-cover rounded-xl'

	const div = document.createElement('div')
	div.className = 'text-right font-dm text-gray-50'

	const h3 = document.createElement('h3')
	h3.className = 'font-bold text-2xl  mt-3'
	h3.textContent = `${data.name}`

	const p1 = document.createElement('p')
	p1.className = 'text-base'
	p1.textContent = `${data.size}`

	const p2 = document.createElement('p')
	p2.className = 'text-base'
	p2.textContent = `${data.scent}`

	const p3 = document.createElement('p')
	p3.className = 'text-xl font-bold mt-2'
	p3.textContent = `${data.price}`

	const footer = document.createElement('footer')
	footer.className = 'flex justify-end'

	const button = document.createElement('button')
	button.className =
		'bg-orange-400 px-2 rounded-full -mr-2 mt-3 text-gray-900 font-dm addToCart'
	button.textContent = 'add to cart +'

	article.append(header, div, footer)
	header.append(img)
	div.append(h3, p1, p2, p3)
	footer.append(button)

	document.querySelector('.topSellerContainer').append(article)
}

const createCard2 = (data) => {
	const article = document.createElement('article')
	article.className =
		'w-64 h-96 bg-gray-800 rounded-2xl drop-shadow-sm shadow-orange-300 hover:shadow-2xl mt-20 p-7'
	article.dataset.id = `${data.id}`

	const header = document.createElement('header')
	header.className = 'flex justify-end'

	const img = document.createElement('img')
	img.src = `${data.image}`
	img.className = 'w-48 h-40 object-cover rounded-xl'

	const div = document.createElement('div')
	div.className = 'text-right font-dm text-gray-50'

	const h3 = document.createElement('h3')
	h3.className = 'font-bold text-2xl  mt-3'
	h3.textContent = `${data.name}`

	const p1 = document.createElement('p')
	p1.className = 'text-base'
	p1.textContent = `${data.size}`

	const p2 = document.createElement('p')
	p2.className = 'text-base'
	p2.textContent = `${data.scent}`

	const p3 = document.createElement('p')
	p3.className = 'text-xl font-bold mt-2'
	p3.textContent = `${data.price}`

	const footer = document.createElement('footer')
	footer.className = 'flex justify-end'

	const button = document.createElement('button')
	button.className =
		'bg-orange-400 px-2 rounded-full -mr-2 mt-3 text-gray-900 font-dm addToCart'
	button.textContent = 'add to cart +'

	article.append(header, div, footer)
	header.append(img)
	div.append(h3, p1, p2, p3)
	footer.append(button)

	document.querySelector('.allCardsContainer').append(article)
}

const createBigCard = (data) => {
	const article = document.createElement('article')
	article.className =
		'w-[600px] h-96 bg-gray-800 rounded-2xl drop-shadow-sm shadow-orange-300 hover:shadow-2xl mt-20 p-7'
	article.dataset.id = `${data.id}`

	const header = document.createElement('header')
	header.className = 'flex justify-end'

	const img1 = document.createElement('img')
	img1.src = `${data.image.foto1}`
	img1.className = 'w-full h-40 object-cover rounded-xl'

	const img2 = document.createElement('img')
	img2.src = `${data.image.foto2}`
	img2.className = 'w-2/3 h-28 object-cover rounded-xl mt-6'

	const div = document.createElement('div')
	div.className = 'text-right font-dm text-gray-50 flex'

	const div2 = document.createElement('div')
	div2.className = 'flex flex-col w-1/3'

	const h3 = document.createElement('h3')
	h3.className = 'font-bold text-2xl  mt-3'
	h3.textContent = `${data.name}`

	const p1 = document.createElement('p')
	p1.className = 'text-base'
	p1.textContent = `${data.size}`

	const p2 = document.createElement('p')
	p2.className = 'text-base'
	p2.textContent = `${data.scent}`

	const p3 = document.createElement('p')
	p3.className = 'text-xl font-bold mt-2'
	p3.textContent = `${data.price}`

	const footer = document.createElement('footer')
	footer.className = 'flex justify-end'

	const button = document.createElement('button')
	button.className =
		'bg-orange-400 px-2 rounded-full -mr-2 mt-3 text-gray-900 font-dm addToCart'
	button.textContent = 'add to cart +'

	article.append(header, div, footer)
	header.append(img1)
	div.append(img2, div2)
	div2.append(h3, p1, p2, p3)
	footer.append(button)

	document.querySelector('.allCardsContainer').append(article)
}

/////////////////////////
const listProducts = document.querySelector('.topSellerContainer')
const updateQuantity = document.querySelector('.listCart')
const carts = []

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
	div3.className = 'itemDescription flex flex-col pl-6 justify-center'

	const p1 = document.createElement('p')
	p1.className = 'text-base'
	p1.textContent = `${item.name}` // Assuming item has a 'name' property

	const p2 = document.createElement('p')
	p2.className = 'text-base'
	p2.textContent = `${item.size}` // Assuming item has a 'size' property

	const div4 = document.createElement('div')
	div4.className = 'cartItemPrice flex flex-row-reverse justify-between mt-2'

	const div5 = document.createElement('div')
	div5.className = 'totalPrice'

	const p3 = document.createElement('p')
	p3.className = 'text-xl font-bold mt-2'
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

const updateQuantityNumber = (quantity) => {
	document.querySelector('.quantityNumber').textContent = `${quantity}`
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
		updateQuantityNumber(quantity)
	}
	if (positionClick.classList.contains('minus')) {
		const product_id =
			positionClick.parentElement.parentElement.parentElement.dataset.id
		const positionThisProductInCart = carts.findIndex(
			(value) => value.product_id === product_id,
		)
		carts[positionThisProductInCart].quantity--
		const quantity = carts[positionThisProductInCart].quantity
		updateQuantityNumber(quantity)
	}
})
