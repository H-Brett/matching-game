let container = document.querySelector('.game-container'); 
let gamePieces = []; 

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


const createGameBoard = () => {
	for (let i = 0; i < 10; i++) {
		// create initial 10 cards 
		let img = document.createElement('img');
		let random = Math.floor(Math.random() * 99999);
		// save generated hash and id in array, deeply nested
		gamePieces.push([random, i]); 
		img.setAttribute('src', `https://robohash.org/${random}?set=set4`);
		img.setAttribute('id', i); 
		container.appendChild(img);
		let imgAtId = document.getElementById(i)
		imgAtId.addEventListener('click', (evt) => {
			console.log(evt);
		})
	}

	// shuffle hash/id array
	shuffle(gamePieces); 

	// place initial 10 cards randomized as new elements with previously generated hash/id array 
	gamePieces.forEach(x => {
		let img = document.createElement('img');
		img.setAttribute('src', `https://robohash.org/${x[0]}?set=set4`)
		img.setAttribute('id', x[1] + 10);
		container.appendChild(img);
		let imgAtId = document.getElementById(x[1] + 10)
		imgAtId.addEventListener('click', (evt) => {
			console.log(evt);
		})
	})
}

createGameBoard();

console.log(gamePieces);