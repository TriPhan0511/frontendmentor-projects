const btn = document.querySelector('#menu-btn')
const mobileMenu = document.querySelector('#menu')

if (btn && mobileMenu) {
	btn.addEventListener('click', () => {
		btn.classList.toggle('open')
		mobileMenu.classList.toggle('hidden')
		mobileMenu.classList.toggle('flex')
	})
}
