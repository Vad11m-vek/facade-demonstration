document.addEventListener('click', event => {
	let color = event.target.getAttribute('id');
	//top
	if (color == 'standart') {
		document.querySelector('.top').src = '../img/1001_facade_top.jpg';
	}
	if (color == 'orangeLite') {
		document.querySelector('.top').src = '../img/1003_facade_top.jpg';
	}
	if (color == 'orange') {
		document.querySelector('.top').src = '../img/1007_facade_top.jpg';
	}
	if (color == 'brown') {
		document.querySelector('.top').src = '../img/1011_facade_top.jpg';
	}
	if (color == 'light') {
		document.querySelector('.top').src = '../img/1013_facade_top.jpg';
	}
	if (color == 'yellowLite') {
		document.querySelector('.top').src = '../img/1026_facade_top.jpg';
	}
	if (color == 'blue') {
		document.querySelector('.top').src = '../img/5022_facade_top.jpg';
	}
	if (color == 'black') {
		document.querySelector('.top').src = '../img/8022_facade_top.jpg';
	}
	//bottom
	if (color == 'standartBottom') {
		document.querySelector('.bottom').src = '../img/1001_facade_bottom.jpg';
	}
	if (color == 'orangeLiteBottom') {
		document.querySelector('.bottom').src = '../img/1003_facade_bottom.jpg';
	}
	if (color == 'orangeBottom') {
		document.querySelector('.bottom').src = '../img/1007_facade_bottom.jpg';
	}
	if (color == 'brownBottom') {
		document.querySelector('.bottom').src = '../img/1011_facade_bottom.jpg';
	}
	if (color == 'lightBottom') {
		document.querySelector('.bottom').src = '../img/1013_facade_bottom.jpg';
	}
	if (color == 'yellowLiteBottom') {
		document.querySelector('.bottom').src = '../img/1026_facade_bottom.jpg';
	}
	if (color == 'blueBottom') {
		document.querySelector('.bottom').src = '../img/5022_facade_bottom.jpg';
	}
	if (color == 'blackBottom') {
		document.querySelector('.bottom').src = '../img/8022_facade_bottom.jpg';
	}
})