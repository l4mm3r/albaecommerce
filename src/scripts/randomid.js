const generateUniqueId = async (length = 6) => {
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
		if (!response.ok) {
			throw new Error('Failed to fetch data')
		}
		const data = await response.json()
		return data
	} catch (error) {
		console.error(error)
	}
}

const addTopSellersId = async () => {
	try {
		const data = await fetchTopSellersJson()
		for (const item of data) {
			item.id = await generateUniqueId()
		}
		return data
	} catch (error) {
		console.error(error)
	}
}

const generateIds = async () => {
	const limit = 100
	let attempts = 0
	let uniqueId = false
	try {
		while (!uniqueId && attempts < limit) {
			const topSellersIds = await addTopSellersId()
			const newId = await generateUniqueId()
			if (!topSellersIds.includes(newId)) {
				uniqueId = newId
			} else {
				console.log('uniqueid = true')
				attempts++
			}
		}
	} catch (error) {
		console.log(error)
	}
}

addTopSellersId()
