const createCard = (data) => {
	const article = document.createElement('article')
	article.className =
		'w-64 h-96 bg-gray-800 rounded-2xl drop-shadow-sm shadow-orange-300 hover:shadow-2xl mt-20 p-8'

	const header = document.createElement('header')
	header.className = 'flex justify-end'

	const img = document.createElement('img')
	img.src = `${data.img}`
	img.className = 'w-48 h-40 object-cover rounded-xl'

	const div = document.createElement('div')
	div.className = 'text-right font-dm text-gray-50'

	const h3 = document.createElement('h3')
	h3.className = 'font-bold text-2xl  mt-3'
	h3.textContent = `${data.name}`

	const p1 = document.createElement('p')
	p.className = 'text-base'
	p.textContent = `${data.size}`

	const p2 = document.createElement('p')
	p.className = 'text-base'
	p.textContent = `${data.scent}`

	const p3 = document.createElement('p')
	p.className = 'text-xl font-bold mt-2'
	p.textContent = `${data.price}`

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
}

export default createCard
