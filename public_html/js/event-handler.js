window.onload = function() {
	initEventHandling();
};
//remove button focus on click
function initEventHandling() {
	//parts of page to hide/show
	let resumePage = document.getElementById("resumePage");
	let portfolioPage = document.getElementById("portfolioPage");
	let contactFormPage =document.getElementById("contactFormPage");
	let aboutMePage = document.getElementById("aboutMePage");

	//hide/show different parts of page
	resumePage.style.display = 'block';
	portfolioPage.style.display = 'none';
	contactFormPage.style.display = 'none';
	aboutMePage.style.dispay = 'none';

	//load button elements into variables
	let resumeButton = document.getElementById("resumeButton");
	let portfolioButton = document.getElementById("portfolioButton");
	let contactButton = document.getElementById("contactButton");
	let aboutMeButton = document.getElementById("aboutMeButton");
	let mobileResumeButton = document.getElementById("resumeButtonMobile");
	let mobilePortfolioButton = document.getElementById("portfolioButtonMobile");
	let mobileContactButton = document.getElementById("contactButtonMobile");
	let mobileAboutMeButton = document.getElementById("aboutMeButtonMobile");

	//checks if mobile buttons are active, returns true/false
	let resumeCheck = document.getElementById("resumeButtonMobile").classList.contains("active");
	let portfolioCheck = document.getElementById("portfolioButtonMobile").classList.contains("active");
	let contactCheck = document.getElementById("contactButtonMobile").classList.contains("active");
	let aboutCheck = document.getElementById("aboutMeButtonMobile").classList.contains("active");

	//toggle off mobile buttons
	document.getElementById("portfolioButtonMobile").classList.toggle("active");
	document.getElementById("contactButtonMobile").classList.toggle("active");
	document.getElementById("aboutMeButtonMobile").classList.toggle("active");


	//create eventlisteners for elements
	resumeButton.addEventListener('click', () => {switchToResume();});
	mobileResumeButton.addEventListener('click', () => {switchToResume();});
	portfolioButton.addEventListener('click', () => {switchToPortfolio();});
	mobilePortfolioButton.addEventListener('click', () => {switchToPortfolio();});
	contactButton.addEventListener('click', () => {switchToContact();});
	mobileContactButton.addEventListener('click', () => {switchToContact();});
	aboutMeButton.addEventListener('click', () => {switchToAboutMe();});
	mobileAboutMeButton.addEventListener('click', () => {switchToAboutMe();});
}


function switchToResume() {
	//change button images
	resumeButton.src="../media/resumeActive.PNG";
	portfolioButton.src="../media/portfolioInactive.PNG";
	contactButton.src="../media/contactInactive.png";
	aboutMeButton.src="../media/aboutmeInactive.png";

	//switch z-index of button tabs
	resumeButton.style.zIndex = "500";
	portfolioButton.style.zIndex = "400";
	contactButton.style.zIndex = "300";
	aboutMeButton.style.zIndex = "200";


	//checks if mobile buttons are active, returns true/false
	let resumeCheck = document.getElementById("resumeButtonMobile").classList.contains("active");
	let portfolioCheck = document.getElementById("portfolioButtonMobile").classList.contains("active");
	let contactCheck = document.getElementById("contactButtonMobile").classList.contains("active");
	let aboutCheck = document.getElementById("aboutMeButtonMobile").classList.contains("active");

	//switch classes for mobile button tabs if they aren't already the correct classes
	if(resumeCheck === false) {
		document.getElementById("resumeButtonMobile").classList.toggle("active");
	}
	if(portfolioCheck === true) {
		document.getElementById("portfolioButtonMobile").classList.toggle("active");
	}
	if(contactCheck === true) {
		document.getElementById("contactButtonMobile").classList.toggle("active");
	}
	if(aboutCheck === true) {
		document.getElementById("aboutMeButtonMobile").classList.toggle("active");
	}

	//disable button focus onlcick
	resumeButton.style.outline = "none";

	//hide/show different parts of page
	resumePage.style.display = 'block';
	portfolioPage.style.display = 'none';
	contactFormPage.style.display = 'none';
	aboutMePage.style.dispay = 'none';
}

function switchToPortfolio() {
	//change button images
	resumeButton.src="../media/resumeInactive.PNG";
	portfolioButton.src="../media/portfolioActive.PNG";
	contactButton.src="../media/contactInactive.png";
	aboutMeButton.src="../media/aboutmeInactive.png";

	//disable button focus onlcick
	portfolioButton.style.outline = "none";

	//switch z-index of button tabs
	resumeButton.style.zIndex = "400";
	portfolioButton.style.zIndex = "500";
	contactButton.style.zIndex = "300";
	aboutMeButton.style.zIndex = "200";


	//checks if mobile buttons are active, returns true/false
	let resumeCheck = document.getElementById("resumeButtonMobile").classList.contains("active");
	let portfolioCheck = document.getElementById("portfolioButtonMobile").classList.contains("active");
	let contactCheck = document.getElementById("contactButtonMobile").classList.contains("active");
	let aboutCheck = document.getElementById("aboutMeButtonMobile").classList.contains("active");

	//switch classes for mobile button tabs if they aren't already the correct classes
	if(resumeCheck === true) {
		document.getElementById("resumeButtonMobile").classList.toggle("active");
	}
	if(portfolioCheck === false) {
		document.getElementById("portfolioButtonMobile").classList.toggle("active");
	}
	if(contactCheck === true) {
		document.getElementById("contactButtonMobile").classList.toggle("active");
	}
	if(aboutCheck === true) {
		document.getElementById("aboutMeButtonMobile").classList.toggle("active");
	}

	//hide/show different parts of page
	resumePage.style.display = 'none';
	portfolioPage.style.display = 'block';
	contactFormPage.style.display = 'none';
	aboutMePage.style.dispay = 'none';
}

function switchToContact() {
	//change button images
	resumeButton.src="../media/resumeInactive.PNG";
	portfolioButton.src="../media/portfolioInactive.PNG";
	contactButton.src="../media/contactActive.png";
	aboutMeButton.src="../media/aboutmeInactive.png";

	//disable button focus onlcick
	contactButton.style.outline = "none";

	//switch z-index of button tabs
	resumeButton.style.zIndex = "300";
	portfolioButton.style.zIndex = "400";
	contactButton.style.zIndex = "500";
	aboutMeButton.style.zIndex = "200";

	//checks if mobile buttons are active, returns true/false
	let resumeCheck = document.getElementById("resumeButtonMobile").classList.contains("active");
	let portfolioCheck = document.getElementById("portfolioButtonMobile").classList.contains("active");
	let contactCheck = document.getElementById("contactButtonMobile").classList.contains("active");
	let aboutCheck = document.getElementById("aboutMeButtonMobile").classList.contains("active");

	//switch classes for mobile button tabs if they aren't already the correct classes
	if(resumeCheck === true) {
		document.getElementById("resumeButtonMobile").classList.toggle("active");
	}
	if(portfolioCheck === true) {
		document.getElementById("portfolioButtonMobile").classList.toggle("active");
	}
	if(contactCheck === false) {
		document.getElementById("contactButtonMobile").classList.toggle("active");
	}
	if(aboutCheck === true) {
		document.getElementById("aboutMeButtonMobile").classList.toggle("active");
	}

	//hide/show different parts of page
	resumePage.style.display = 'none';
	portfolioPage.style.display = 'none';
	contactFormPage.style.display = 'block';
	aboutMePage.style.dispay = 'none';

	/*
	//reset recaptcha
	grecaptcha.getScript("https://www.google.com/recaptcha/api.js");
	*/

}

function switchToAboutMe() {
	//change button images
	resumeButton.src="../media/resumeInactive.PNG";
	portfolioButton.src="../media/portfolioInactive.PNG";
	contactButton.src="../media/contactInactive.png";
	aboutMeButton.src="../media/aboutmeActive.png";

	//disable button focus onlcick
	aboutMeButton.style.outline = "none";

	//switch z-index of button tabs
	resumeButton.style.zIndex = "200";
	portfolioButton.style.zIndex = "300";
	contactButton.style.zIndex = "400";
	aboutMeButton.style.zIndex = "500";

	//checks if mobile buttons are active, returns true/false
	let resumeCheck = document.getElementById("resumeButtonMobile").classList.contains("active");
	let portfolioCheck = document.getElementById("portfolioButtonMobile").classList.contains("active");
	let contactCheck = document.getElementById("contactButtonMobile").classList.contains("active");
	let aboutCheck = document.getElementById("aboutMeButtonMobile").classList.contains("active");

	//switch classes for mobile button tabs if they aren't already the correct classes
	if(resumeCheck === true) {
		document.getElementById("resumeButtonMobile").classList.toggle("active");
	}
	if(portfolioCheck === true) {
		document.getElementById("portfolioButtonMobile").classList.toggle("active");
	}
	if(contactCheck === true) {
		document.getElementById("contactButtonMobile").classList.toggle("active");
	}
	if(aboutCheck === false) {
		document.getElementById("aboutMeButtonMobile").classList.toggle("active");
	}

	console.log('test success');
	//hide/show different content
	resumePage.style.display = 'none';
	portfolioPage.style.display = 'none';
	contactFormPage.style.display = 'none';
	aboutMePage.style.display = 'block';


	/*
	//remove & append page content
	dynamicContent.innerHTML = '<a class="p">Content coming soon</a>';

	*/
}