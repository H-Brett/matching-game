let container = document.querySelector('.game-container'); 
let gamePieces = []; 
let clickedElements = []; 

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

const listener = (evt) => {
	div = evt.path[1];

	if(div.classList.contains('flip-back')) {
		setTimeout( () => {
			div.classList.toggle('flip-back'); 
		}, 1)
	}

	setTimeout( () => {
		div.classList.toggle('flip');
		div.firstChild.classList.toggle('hidden'); 
	}, 5)
	
	clickedElements.push(div);
	if(clickedElements.length === 2) {
		compareValues(clickedElements); 
	}
}

const compareValues = (arr) => {
	if(arr[0].lastChild.id === arr[1].lastChild.id) {
		console.log('match');
		arr.forEach(div => {
			div.removeEventListener('click', listener); 
		})
	} else {
		setTimeout( () => {
			arr.forEach(div => {
				div.classList.toggle('flip');
			})
		}, 2800)
		setTimeout( () => {
			arr.forEach(div => {
				div.classList.toggle('flip-back')
				div.firstChild.classList.toggle('hidden')
			})
		}, 3000)
	}
	clickedElements = []; 
}

const getImage = (rand, i) => {
	let div = document.createElement('div');
	div.setAttribute('class', 'image-container');

	let img = document.createElement('img');
	img.setAttribute('src', `grey.png`);
	img.setAttribute('id', 'grey');
	img.classList.add('over')

	let gamePiece = document.createElement('img'); 
	gamePiece.setAttribute('src',`https://robohash.org/${rand}?set=set4`)
	gamePiece.setAttribute('id', i); 

	div.appendChild(img)
	div.appendChild(gamePiece)

	div.addEventListener('click', listener)

	return div;
}


const createGameBoard = () => {
	for (let i = 0; i < 10; i++) {
		let random = Math.floor(Math.random() * 99999);
		gamePieces.push(getImage(random, i));
		gamePieces.push(getImage(random, i));
	}

	shuffle(gamePieces);
	gamePieces.forEach(img => {
		container.appendChild(img);
	})
}

createGameBoard();
console.log(gamePieces);