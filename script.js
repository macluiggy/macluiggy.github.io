const data = [
	{
		title: 'Full Stack Movie Reviews App',
		img: 'https://macluiggy.github.io/images/movie-reviews.png',
		description: 'This MERN app fetches movies from a Mongo database, you can also login and post a review, update delete the reviews you have made in the database.',
		icon_name: ['vscode-icons:file-type-mongo', 'simple-icons:express', "logos:react", "vscode-icons:file-type-node"],
		"source_code": 'https://github.com/macluiggy/movies-reviwes-mern-app.git',
		project_live: 'https://movies-reviews-frontend.netlify.app/',
		technologies: ['MongoDB', 'Express', 'React', 'Node.js'],
	},
	{
		title: 'JavaScript Calculator',
		img: 'https://macluiggy.github.io/images/javascript-calculator.png',
		description: 'Javascript Calculator from freeCodeCamp FrontendLibraries Projects. User can add, subtract, divide and multiply.',
		icon_name: ['logos:javascript', 'logos:sass', "logos:react", "logos:redux"],
		"source_code": 'https://github.com/macluiggy/javascript-calculator.git',
		project_live: 'https://javascript-calculator-free-code-camp.netlify.app/',
		technologies: ['JavaScript', 'Sass', 'React', 'Redux'],
	},
	{
		title: 'Drum Machine',
		img: 'https://macluiggy.github.io/images/drum-machine.png',
		description: 'This application allows you to listen to some clips, you can switch between two drums, turn the drum on and off and raise and lower the volume of the drum.',
		icon_name: ['logos:javascript', 'logos:sass', "logos:react", "logos:redux"],
		"source_code": 'https://github.com/macluiggy/drum-machine-free-code-camp',
		project_live: 'https://drum-machine-free-code-camp.netlify.app/',
		technologies: ['JavaScript', 'Sass', 'React', 'Redux'],
	},
]
/*let technologies = data.reduce((acum, currentTech) => {
	let { icon_name, technologies } = currentTech;
	return [...acum, { icon_name, technologies }];
}, [])*/

let tech = data.map(el => {
	const { icon_name, technologies } = el
	return {
		icon_name,
		technologies
	}
})
console.log(tech)
/*for (let i = 0; i < data.length; i++) {
	const element = data[i];
	//console.log(element)
	const { icon_name, technologies } = element;
	//console.log(icon_name)
	let obj = {icon_name: [], technologies: []}
	obj.icon_name = icon_name;
	obj.technologies = technologies;
	tech.concat([{icon_name, technologies}]);
}for (let i = 0; i < data.length; i++) {
	const element = data[i];
	//console.log(element)
	const { icon_name, technologies } = element;
	//console.log(icon_name)
	let obj = {icon_name: [], technologies: []}
	obj.icon_name = icon_name;
	obj.technologies = technologies;
	tech.concat([{icon_name, technologies}]);
}*/