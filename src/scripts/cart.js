const cartTabToggler = document.querySelector('.cartIcon')
const iconCartSpan = document.querySelector('.cartIcon span')

cartTabToggler.addEventListener('click', () => {
	const cartTab = document.querySelector('.cartTabContainer')
	cartTab.style.display = cartTab.style.display === 'none' ? 'block' : 'none'
})
