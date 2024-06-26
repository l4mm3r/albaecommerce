const url = './json/topSellers.json'
const url2 = './json/allItems.json'

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
		data.forEach((item) => {
			createCard(item)
		})
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
		data.slice(1).forEach((item) => {
			createCard2(item)
		})
	} catch (error) {
		console.log(error)
	}
}

const createCard = (data) => {
	const article = document.createElement('article')
	article.className =
		'w-64 h-96 bg-gray-800 rounded-2xl drop-shadow-sm shadow-orange-300 hover:shadow-2xl mt-20 p-7'

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
		'bg-orange-400 px-2 rounded-full -mr-2 mt-3 text-gray-900 font-dm'
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
		'bg-orange-400 px-2 rounded-full -mr-2 mt-3 text-gray-900 font-dm'
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
		'bg-orange-400 px-2 rounded-full -mr-2 mt-3 text-gray-900 font-dm'
	button.textContent = 'add to cart +'

	article.append(header, div, footer)
	header.append(img1)
	div.append(img2, div2)
	div2.append(h3, p1, p2, p3)
	footer.append(button)

	document.querySelector('.allCardsContainer').append(article)
}
