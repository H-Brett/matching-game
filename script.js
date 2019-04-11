let container = document.querySelector('.game-container'); 
let gamePieces = []; 
let randomPieces = []; 
let firstClick = false; 

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

const getImage = (i, rand) => {
	let img = document.createElement('img');
	img.setAttribute('src', `https://robohash.org/${rand}?set=set4`);
	img.setAttribute('id', i);

	return img
}


const createGameBoard = () => {
	for (let i = 0; i < 10; i++) {
		let random = Math.floor(Math.random() * 99999);
		container.appendChild(getImage(i, random));
		container.appendChild(getImage(i, random));
	}

	document.querySelectorAll('img').forEach(node => {
		gamePieces.push(node); 
	})
	shuffle(gamePieces);
	gamePieces.forEach(img => {
		container.appendChild(img);
	})
}

createGameBoard();

console.log(gamePieces);
console.log(randomPieces);