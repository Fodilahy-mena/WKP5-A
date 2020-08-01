console.log('HELLO');

const recipes = [
	{
		title: 'Pan cake',
		picture: 'https://bit.ly/2ZXyiKI',
		author: 'Jerome',
		difficulty: 'medium',
		timing: '45',
		ingredients: ['eggs', 'banana', 'water', 'flour'],
		steps: [
			'Pill the banana and smash it inside of a basin',
			'Crack the eggs and smash very well',
			'Add the flour and mix them with some water',
			'Put a pan on the fire',
			'Put only two spons on the pan',
			'Wait, put them out',
		],
		id: 1596168482053,
	},
	{
		title: 'Eggs',
		picture: 'https://bit.ly/2ZXyiKI',
		author: 'Loïc',
		difficulty: 'easy',
		timing: '15',
		ingredients: ['eggs', 'salt', 'water','oil'],
		steps: [
			'Put a pan on the fire',
			'Crack the eggs on it',
			'Wait, put them out',
			'Add some salt on it',
		],
		id: 1596168522409,
	},
	{
		title: 'My recipe',
		picture: 'https://bit.ly/2ZXyiKI',
		author: 'Jay',
		difficulty: 'easy',
		timing: '15',
		ingredients: ['eggs', 'salt', 'water'],
		steps: [
			'Put a pan on the fire',
			'Crack the eggs on it',
			'Wait, put them out',
			'Add some salt on it',
		],
		id: 1596168523409,
	},
];
const container = document.querySelector('.container');


const renderCard = () => {
	// check the recipes collection
	
	
	container.innerHTML = recipes.map(recipe => 
		`<div class="card" data-id="${recipe.id}">
		  <h1 class="${recipe.title}">${recipe.title}</h1>
		  <img src="${recipe.picture}" alt="recipe img" width="400" height="300">
		  <h2 class="${recipe.author}">${recipe.author}</h2>
		  <div class="align">
			<span class="${recipe.difficulty}">Difficulty: ${recipe.difficulty}</span>
			<p class="${recipe.timing}">Duration: ${recipe.timing}</p>
		  </div>
		  <button class="info_btn">More info</button>
		</div>`
	).join('')
		
	// generate the HTML
	// put it in the DOM
};

const outerModal = document.querySelector('.outer');
const innerModal = document.querySelector('.inner');


const openModal = (e) => {
	outerModal.classList.add('open');
	};

	
const handleMoreInfo = (event) => {
	if (event.target.matches('button.info_btn')) {
    	const card = event.target.closest('.card');
		const id = Number(card.dataset.id);
		const findRecipe = recipes.find(singleRecipe => singleRecipe.id = id);
		const titleInfo = card.querySelector('h1').textContent;
		const imgInfo = card.querySelector('img').src;
		const authorInfo = card.querySelector('h2').textContent;
		const difficultyInfo = card.querySelector('span').textContent;
		const timingInfo = card.querySelector('p').textContent;
		for (let i = 0; i < recipes.length; i++) {
		innerModal.innerHTML =
			`<div class="modal" data-id="${id}">
			  <h1>${titleInfo}</h1>
			  <img src="${imgInfo}" alt="recipe img" width="365" height="300">
			  <h2>${authorInfo}</h2>
			  <div class="align">
				<span>${difficultyInfo}</span>
				<span>${timingInfo}</span>
			  </div>
			  <p>Ingredients: ${recipes[i].ingredients}</p>
			  <p>Steps: ${recipes[i].steps}</p>
			</div>`
		openModal(findRecipe);
	}
}
};

const closeModal = () => {
    outerModal.classList.remove('open');
}

outerModal.addEventListener('click', event => {
    event.target;
    const isOutside = !event.target.closest('.inner');
    if (isOutside) {
        closeModal();
    }
});

window.addEventListener('keydown', event => {
    if (event.key === "Escape") {
        closeModal();
    }
});

const generateButton = document.querySelector('button.generate');
generateButton.addEventListener('click', renderCard);

window.addEventListener('click', handleMoreInfo);
