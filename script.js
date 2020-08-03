console.log('HELLO');

const recipes = [
	{
		title: 'Pan cake',
		picture: 'https://www.recipetineats.com/wp-content/uploads/2017/06/Pancakes-SQ.jpg',
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
		picture: 'https://i.pinimg.com/originals/20/5c/64/205c645543c01ef8938e7258fadddac6.jpg',
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
	{
		title: 'Mofo dangitra',
		picture: 'https://www.mamina.org/sites/default/files/styles/original_watermark/public/mofo%20mangahazo.jpg?itok=k0pqqcFG',
		author: 'Milien',
		difficulty: 'easy',
		timing: '30',
		ingredients: ['cassava', 'sugar', 'water'],
		steps: [
			'Put a pan on the fire',
			'Crack the eggs on it',
			'Wait, put them out',
			'Add some salt on it',
		],
		id: 1596168523400,
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
			  	<ul>
					<li>${difficultyInfo}</li>
				</ul>
				<ul>
					<li>${timingInfo}</li>
				</ul>
			  </div>
			  <section>
				<ol>
				Ingredients:
					${recipes[i].ingredients.map(ingr => `<li>${ingr}</li>`).join('')}
				</ol>
				<ol>
				  Steps:
			  		${recipes[i].steps.map(step => `<li>${step}</li>`).join('')}
				</ol>
			  </section>
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


// Form
const handleAddRecipesForm = () => {
	innerModal.innerHTML = `
<form action="" class="form">
	<p>What's the recipe name?</p>
	<input
		class="input-form"
		type="text"
		id="recipe_name"
		name="recipe_name"
		placeholder="Enter your recipe name here"
		required
	/>

	<p>Picture of the result (URL)</p>
	<input type="url" class="input-form" id="recipe_url" name="recipe_url" accept="image/png, image/jpeg">

	<p>Who's the cook?</p>
	<input type="text" class="input-form" id="recipe_cook" name="recipe_cook" required>

	<p>What's the difficulty?</p>
	<select name="difficulty" id="difficulty" class="select-form" required>
		<option value="easy">Easy</option>
		<option value="medium">Medium</option>
		<option value="hard">Hard</option>
	</select>

	<p>How much time does it take?</p>
	<select name="duration" id="duration" class="select-form" required>
		<option value="less15">Less than 15 minutes</option>
		<option value="15min">15 minutes</option>
		<option value="30min">30 minutes</option>
		<option value="45min">45 minutes</option>
		<option value="60min">60 minutes</option>
		<option value="more1h">More than an hour</option>
	</select>

	<p>Ingredients</p>
	<ul class="ingredient_wraper">
		
	</ul>
	<input type="text" class="input-form ingredient" id="recipe_ingredient" name="recipe_ingredient" required>
	<button class="btn_add--ingredient">Add a new ingredient to the list</button>

	<p>Steps</p>
	<ul class="step_wraper">
		
	</ul>
	<input type="text" class="input-form step" id="recipe_step" name="recipe_step" required>
	<button class="btn_add--step">Add a new ingredient to the list</button>

	<button class="btn_submit">Submit</button>
</form>

`;
openModal();

}



const addRecipesBtn = document.querySelector('.add_recipe');
console.log(addRecipesBtn);

addRecipesBtn.addEventListener('click', handleAddRecipesForm);
