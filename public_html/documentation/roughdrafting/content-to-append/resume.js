let webDeveloper = {
	'name': 'Timothy Beck',
	'location': 'Albuquerque, New Mexico',
	'phone': '(775)671.8596',
	'email': 'dev@timothybeck.com',
	'github': 'Github.com/BeckTimothy',

	'myObjective': 'I love learning, experiencing new challenges, and discussing interesting concepts especially ' +
		'related to software development. Through diligent studying and networking with other ' +
		'professionals, I hope to gain a firm footing in the development industry and kick down the door ' +
		'at local businesses that can potentially hire a developer with an avid drive to learn as much as ' +
		'possible in the realm of programming.',
	getObjective: function() {
		return this.myObjective;
	},

	'mySkills': [
		'Strong sense of motivation and a drive to learn more.',
		'HTML, CSS, JavaScript Front-End experience',
		'PHP, SQL, JavaScript Back-End experience',
		'AGILE frameworks, such as Scrum and Kanban',
		'Object-Oriented Programming',
		'Photo, Video, and Audio editing skills'
	],
	getSkills: function() {
		return this.mySkills;
	},

	'myProfessionalExperience': {
		'deepDiveCoding': {'position': 'Intern', 'startDate': 'Oct.2019', 'endDate': 'Dec.2019'},
		'windsorDoorSales': {'position': 'Data Entry', 'startDate': 'Apr.2018', 'endDate': 'Oct.2019'},
		'westernRefining': {'position': 'Customer Service Rep', 'startDate': 'Jan.2017', 'endDate': 'Oct.2017'},
	},
	getExperience: function() {
		return this.myProfessionalExperience;
	},

	'myEducation': {
		'DeepDiveCoding': {'award': 'certificate', 'dateAwarded': 'Dec.2019', 'expirationDate': 'null'},
	},
	getEducation: function() {
		return this.myEducation;
	}
};