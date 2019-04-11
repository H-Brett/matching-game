let container = document.querySelector('.game-container'); 
let gamePieces = []; 
let firstClick; 

const shuffle = (array) => {
    var currentIndex = array.length
      , temporaryValue
      , randomIndex
      ;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
}

const getImage = (rand, i) => {
	let div = document.createElement('div');
	div.setAttribute('class', 'image-container');

	// https://robohash.org/${rand}?set=set4

	let img = document.createElement('img');
	img.setAttribute('src', `grey.png`);
	img.setAttribute('id', i);

	div.appendChild(img)
	div.addEventListener('click', (evt) => {
			if (firstClick) {
				img.setAttribute('src', `https://robohash.org/${rand}?set=set4`);
				img.classList.toggle('flip');
				img.classList.toggle('active'); 

				if (firstClick === evt.srcElement.id) {
					document.querySelectorAll('.active').forEach(img => {
							img.classList.toggle('active');
							img.classList.toggle('flip');
						})
					console.log('you matched'); 
					firstClick = '';
				} else {
					setTimeout( () => {
						document.querySelectorAll('.active').forEach(img => {
							img.classList.toggle('flip');
						})
					}, 1200)

					setTimeout( () => {
						document.querySelectorAll('.active').forEach(img => {
							img.setAttribute('src', 'grey.png');
							img.classList.toggle('flip');
							img.classList.toggle('active');
						})
						
					}, 2000)

					setTimeout( () => {
						document.querySelectorAll('.flip').forEach(img => {
							img.classList.toggle('flip');
						})
					}, 3200)
					console.log('no match');

					firstClick = '';
				}
			} else {
				img.setAttribute('src', `https://robohash.org/${rand}?set=set4`);
				img.classList.toggle('flip');
				img.classList.toggle('active'); 
				firstClick = evt.srcElement.id;
				console.log(firstClick);
			}
		})

	return div;
}


const createGameBoard = () => {
	for (let i = 0; i < 10; i++) {
		let random = Math.floor(Math.random() * 99999);
		container.appendChild(getImage(random, i));
		container.appendChild(getImage(random, i));
	}

	document.querySelectorAll('.image-container').forEach(node => {
			gamePieces.push(node); 
	})

	shuffle(gamePieces);
	gamePieces.forEach(img => {
		container.appendChild(img);
	})
}

createGameBoard();
console.log(gamePieces);