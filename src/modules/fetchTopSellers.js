const url = './json/topSellers.json'

const fetchTopSellers = async () => {
	try {
		const response = await fetch(url, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		})
		const data = await response.json()
		console.log(data)
		return data
	} catch (error) {
		console.log(error)
	}
}

fetchTopSellers()
export default fetchTopSellers
