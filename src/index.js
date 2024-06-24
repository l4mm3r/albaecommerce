const url = './json/topSellers.json'

document.addEventListener('DOMContentLoaded', async () => {
	try {
		await printCard()
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
const printCard = async () => {
	try {
		const data = await mapTopSellers()
		data.forEach((item) => {
			createCard(item)
		})
	} catch (error) {
		console.log(error)
	}
}

const createCard = (data) => {
	const article = document.createElement('article')
	article.className =
		'w-64 h-96 bg-gray-800 rounded-2xl drop-shadow-sm shadow-orange-300 hover:shadow-2xl mt-20 p-8'

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
