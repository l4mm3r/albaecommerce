const cartTabToggler = document.querySelector('.cartIcon')

cartTabToggler.addEventListener('click', () => {
	const cartTab = document.querySelector('.cartTabContainer')
	cartTab.style.display = cartTab.style.display === 'none' ? 'block' : 'none'
})
