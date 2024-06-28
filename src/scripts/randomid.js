const randomId = (length = 6) => {
	return Math.random()
		.toString(36)
		.substring(2, length + 2)
}

const fetchTopSellersJson = async () => {
	try {
		const response = await fetch('./json/topSellers.json', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		})
		const data = response.json()
		return data
	} catch (error) {
		console.error(error)
	}
}

const addTopSellersId = async (ids) => {
	try {
		const data = await fetchTopSellersJson()
		for (const item of data) {
			item.id = randomId()
		}

		const ids = data.map((item) => item.id)
		return ids
	} catch (error) {
		console.error(error)
	}
}

const checkIds = async (ids) => {
	const itemsIds = await addTopSellersId(ids)
	const mapIds = itemsIds.map((item) => item)
	const newId = randomId()
	mapIds.find((id) => {
		return id === newId
	})
	return mapIds
}

const generateIds = async () => {
	const limit = 100
	let attempts = 0
	let id = false
	try {
		while (!id && attempts < limit) {
			id = await addTopSellersId()
			if (!checkIds(id)) {
				id = false
				attempts++
			}
		}
		return id
	} catch (error) {
		console.error(error)
	}
}

console.log(generateIds())
