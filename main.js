const changer = document.querySelector('.changer');
const result = document.getElementById('myInput');
changer.addEventListener('click', () => {
	let colors = ['0', '1', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']
	let color1 = '#'
	let color2 = '#'
	for (i = 0; i < 6; i++) {
		const random = Math.floor(Math.random() * colors.length)
		color1 += colors[random]
		console.log(1);
	}
	for (i = 0; i < 6; i++) {
		const random = Math.floor(Math.random() * colors.length)
		color2 += colors[random]

	}

	let deg = Math.floor(Math.random() * 360)
	result.innerHTML = `linear-gradient: (${deg}deg, ${color1} , ${color2} )`
	document.body.style.background = `linear-gradient(${deg}deg, ${color1} ,${color2})`
})