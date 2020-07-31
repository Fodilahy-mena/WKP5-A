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
		id: 1596168522409,
	},
];
const container = document.querySelector('.container');

//<p>Ingredients: ${recipe.ingredients}</p>
//<p>${recipe.steps}</p>

const renderCard = () => {
	// check the recipes collection
	recipes.map(recipe=>{
		console.log (
			recipe.title,
			recipe.picture,
			recipe.author,
			recipe.difficulty,
			recipe.timing,
			recipe.ingredients,
			recipe.steps,
			recipe.id,
		)
	});
	
	container.innerHTML = recipes.map(recipe => 
		`<div class="card" data_id="${recipe.id}">
		  <h1>${recipe.title}</h1>
		  <img src="${recipe.picture}" alt="recipe img" width="400" height="300">
		  <h2>${recipe.author}</h2>
		  <div class="align">
			<span>Difficulty: ${recipe.difficulty}</span>
			<span>Duration: ${recipe.timing}</span>
		  </div>
		  <button class="info_btn">More info</button>
		</div>`
	).join('')
		
	// generate the HTML
	// put it in the DOM
};

const card = document.querySelectorAll('.card');

const handleMoreInfo = (event) => {
	// recipes.map(recipe=>{
	// 	console.log (
	// 		recipe.title,
	// 		recipe.picture,
	// 		recipe.author,
	// 		recipe.difficulty,
	// 		recipe.timing,
	// 		recipe.ingredients,
	// 		recipe.steps,
	// 	)
	// });
	// container.innerHTML = recipes.map(recipe => 
	// 	`<div class="modal">
	// 	  <h1>${recipe.title}</h1>
	// 	  <img src="${recipe.picture}" alt="recipe img" width="400" height="300">
	// 	  <h2>${recipe.author}</h2>
	// 	  <div class="align">
	// 		<span>Difficulty: ${recipe.difficulty}</span>
	// 		<span>Duration: ${recipe.timing}</span>
	// 	  </div>
	// 	  <p>Ingredients: ${recipe.ingredients}</p>
	// 	  <p>Steps: ${recipe.steps}</p>
	// 	</div>`
	// ).join('')
	// card.classList.add('hide');
	if (event.target.matches('button.info_btn')) {
		const parent = event.target.closest('.card');
		const id = parent.closest.id;
		const findRecipe = recipes.find(singleRecipe => singleRecipe.id = id);
	};

};

const generateButton = document.querySelector('button.generate');
generateButton.addEventListener('click', renderCard);

const infoBtn = document.querySelectorAll('.info_btn');
infoBtn.forEach(button => button.addEventListener('click', handleMoreInfo));
