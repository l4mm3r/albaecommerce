import fetchTopSellers from './fetchTopSellers.js'
import createCard from './createCard.js'

const mapTopSellers = async () => {
	try {
		const mapSellers = await fetchTopSellers()
		return mapSellers.map((data) => ({
			image: data.img,
			name: data.name,
			size: data.size,
			scent: data.scent,
			price: data.price,
		}))
	} catch (error) {
		console.log(error)
		throw new error('Error fetching top sellers')
	}
}

const printCard = async () => {
	try {
		const data = await mapTopSellers()
		data.for((data) => {
			createCard(data)
		})
	} catch (error) {
		console.log(error)
	}
}

export default printCard
