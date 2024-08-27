const cartTabToggler = document.querySelector('.cartIcon')

cartTabToggler.addEventListener('click', (event) => {
	event.preventDefault()
	const cartTab = document.querySelector('.cartTabContainer')
	cartTab.style.display = cartTab.style.display === 'none' ? 'block' : 'none'
})

document.addEventListener('click', (event) => {
	const cartSidePanel = document.querySelector('.cartTabContainer')

	if (
		!cartTabToggler.contains(event.target) &&
		!cartSidePanel.contains(event.target)
	) {
		cartSidePanel.style.display = 'none'
	}
})
