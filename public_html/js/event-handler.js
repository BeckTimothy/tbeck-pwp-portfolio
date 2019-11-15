window.onload = function() {
	initEventHandling();
};
//remove button focus on click
function initEventHandling() {
	//load elements into variables
	let resumeButton = document.getElementById("resumeButton");
	let portfolioButton = document.getElementById("portfolioButton");
	let contactButton = document.getElementById("contactButton");
	let aboutMeButton = document.getElementById("aboutMeButton");
	let dynamicContent = document.getElementById("dynamicContent")
	//create eventlisteners for elements
	resumeButton.addEventListener('click', () => {switchToResume();});
	portfolioButton.addEventListener('click', () => {switchToPortfolio();});
	contactButton.addEventListener('click', () => {switchToContact();});
	aboutMeButton.addEventListener('click', () => {switchToAboutMe();});
}


function switchToResume() {
	//change button images
	resumeButton.src="../media/resumeActive.PNG";
	portfolioButton.src="../media/portfolioInactive.PNG";
	contactButton.src="../media/contactInactive.png";
	aboutMeButton.src="../media/aboutmeInactive.png";

	//disable button focus onlcick
	resumeButton.style.outline = "none";

	//TODO change mobile nav text

	//remove & append page content
	dynamicContent.innerHTML ='<div class="ClassIntro"><a class="pr">let </a><a class="p">webDeveloper </a><a class="m">= </a><a class="p">{</a></div>\n' +
		'<div class="ClassBody">\n' +
		'\t<p>\n' +
		'\t\t<a class="s">\'name\'</a><a class="p">: </a><a class="s">\'Timothy Beck\'</a><a class="p">,</a><br>\n' +
		'\t\t<a class="s">\'location</a><a class="p">: </a><a class="s">\'Albuquerque, New Mexico\'</a><a class="p">,</a><br>\n' +
		'\t\t<a class="s">\'phone\'</a><a class="p">: </a><a class="s">\'(775)671.8596\'</a><a class="p">,</a><br>\n' +
		'\t\t<a class="s">\'email\'</a><a class="p">: </a><a class="s">\'dev@timothybeck.com\'</a><a class="p">,</a><br>\n' +
		'\t\t<a class="s">\'github\'</a><a class="p">: </a><a class="s">\'Github.com/BeckTimothy\'</a><a class="p">,</a><br>\n' +
		'\t</p><br>\n' +
		'\t<a class="s">\'myObjective\'</a><a class="p">: </a><a class="s">\'I love learning, experiencing new challenges, and\n' +
		'\tdiscussing interesting concepts especially \'</a><a class="m"> +</a><br>\n' +
		'\t<div class="ClassBody">\n' +
		'\t\t<a class="s">\'related to software development. Through diligent studying and networking with other \'</a><a\n' +
		'\t\tclass="m"> +</a><br>\n' +
		'\t\t<a class="s">\'professionals, I hope to gain a firm footing in the development industry and kick down the door\n' +
		'\t\t\t\'</a><a class="m"> +</a><br>\n' +
		'\t\t<a class="s">\'at local businesses that can potentially hire a developer with an avid drive to learn as much as\n' +
		'\t\t\t\'</a><a class="m"> +</a><br>\n' +
		'\t\t<a class="s">\'possible in the realm of programming.\'</a><a class="p">,</a><br>\n' +
		'\t</div>\n' +
		'\t<a class="c">getObjective</a><a class="p">: </a><a class="pr">function</a><a class="p">() {</a><br>\n' +
		'\t<div class="ClassBody"><a class="m">return </a><a class="o">this</a><a class="p">.myObjective;</a></div>\n' +
		'\t<a class="p">},</a><br>\n' +
		'\t<br>\n' +
		'\t<a class="s">\'mySkills\'</a><a class="p">: [</a>\n' +
		'\t<div class="ClassBody">\n' +
		'\t\t<a class="s">\'Strong sense of motivation and a drive to learn more.\'</a><a class="p">,</a><br>\n' +
		'\t\t<a class="s">\'HTML, CSS, JavaScript Front-End experience\'</a><a class="p">,</a><br>\n' +
		'\t\t<a class="s">\'PHP, SQL, JavaScript Back-End experience\'</a><a class="p">,</a><br>\n' +
		'\t\t<a class="s">\'AGILE frameworks, such as Scrum and Kanban\'</a><a class="p">,</a><br>\n' +
		'\t\t<a class="s">\'Object-Oriented Programming\'</a><a class="p">,</a><br>\n' +
		'\t\t<a class="s">\'Photo, Video, and Audio editing skills\'</a><br>\n' +
		'\t</div>\n' +
		'\t<a class="p">],</a><br>\n' +
		'\t<a class="c">getSkills</a><a class="p">: </a><a class="pr">function</a><a class="p">() {</a><br>\n' +
		'\t<div class="ClassBody"><a class="m">return </a><a class="o">this</a><a class="p">.mySkills;</a></div>\n' +
		'\t<a class="p">},</a><br>\n' +
		'\t<br>\n' +
		'\t<a class="s">\'myProfessionalExperience\'</a><a class="p">: {</a>\n' +
		'\t<div class="ClassBody">\n' +
		'\t\t<a class="s">\'deepDiveCoding\'</a><a class="p">: {</a><a class="s">\'position\'</a><a class="p">: </a><a class="s">\'Intern\'</a><a\n' +
		'\t\tclass="p">, </a><a class="s">\'startDate\'</a><a class="p">: </a><a class="s">\'Oct.2019\'</a><a class="p">, </a><a\n' +
		'\t\tclass="s">\'endDate\'</a><a class="p">: </a><a class="s">\'Dec.2019\'</a><a class="p">},</a><br>\n' +
		'\t\t<a class="s">\'windsorDoorSales\'</a><a class="p">: {</a><a class="s">\'position\'</a><a class="p">: </a><a class="s">\'Data\n' +
		'\t\tEntry\'</a><a class="p">, </a><a class="s">\'startDate\'</a><a class="p">: </a><a class="s">\'Apr.2018\'</a><a\n' +
		'\t\tclass="p">, </a><a class="s">\'endDate\'</a><a class="p">: </a><a class="s">\'Oct.2019\'</a><a class="p">},</a><br>\n' +
		'\t\t<a class="s">\'westernRefining\'</a><a class="p">: {</a><a class="s">\'position\'</a><a class="p">: </a><a class="s">\'Customer\n' +
		'\t\tService Rep\'</a><a class="p">, </a><a class="s">\'startDate\'</a><a class="p">: </a><a class="s">\'Jan.2017\'</a><a\n' +
		'\t\tclass="p">, </a><a class="s">\'endDate\'</a><a class="p">: </a><a class="s">\'Oct.2017\'</a><a class="p">}</a><br>\n' +
		'\t</div>\n' +
		'\t<a class="p">},</a><br>\n' +
		'\t<a class="c">getExperience</a><a class="p">: </a><a class="pr">function</a><a class="p">() {</a><br>\n' +
		'\t<div class="ClassBody"><a class="m">return </a><a class="o">this</a><a class="p">.myProfessionalExperience;</a></div>\n' +
		'\t<a class="p">},</a><br>\n' +
		'\t<br>\n' +
		'\t<a class="s">\'myEducation\'</a><a class="p">: {</a>\n' +
		'\t<div class="ClassBody">\n' +
		'\t\t<a class="s">\'deepDiveCoding\'</a><a class="p">: {</a><a class="s">\'award\'</a><a class="p">: </a><a class="s">\'Certificate\'</a><a\n' +
		'\t\tclass="p">, </a><a class="s">\'dateAwarded\'</a><a class="p">: </a><a class="s">\'Dec.2019\'</a><a class="p">, </a><a\n' +
		'\t\tclass="s">\'expirationDate\'</a><a class="p">: </a><a class="s">\'null\'</a><a class="p">}</a><br>\n' +
		'\t</div>\n' +
		'\t<a class="p">},</a><br>\n' +
		'\t<a class="c">getEducation</a><a class="p">: </a><a class="pr">function</a><a class="p">() {</a><br>\n' +
		'\t<div class="ClassBody"><a class="m">return </a><a class="o">this</a><a class="p">.myEducation;</a></div>\n' +
		'\t<a class="p">},</a>\n' +
		'</div>\n' +
		'<a class="p">};</a>';
}

function switchToPortfolio() {
	//change button images
	resumeButton.src="../media/resumeInactive.PNG";
	portfolioButton.src="../media/portfolioActive.PNG";
	contactButton.src="../media/contactInactive.png";
	aboutMeButton.src="../media/aboutmeInactive.png";

	//disable button focus onlcick
	portfolioButton.style.outline = "none";

	//TODO change mobile nav text

	//remove & append page content
	dynamicContent.innerHTML = '<div class="PortfolioItem">\n' +
		'\t<div class="ClassContainer">\n' +
		'\t\t<div class="ClaseIntro">\n' +
		'\t\t\t<p class="c">.PersonalWebsite<a Class="p"> {</a></p>\n' +
		'\t\t</div>\n' +
		'\t\t<div class="ClassBody"><p>\n' +
		'\t\t\t<a Class="pr">Github</a><a class="p">: </a><a\n' +
		'\t\t\tclass="v">github.com/BeckTimothy/tbeck-pwp-portfolio</a><a class="p">;</a><br>\n' +
		'\t\t\t<a Class="pr">Live-View</a><a class="p">: </a><a class="i">TimothyBeck</a><a class="m">.com</a><a\n' +
		'\t\t\tclass="p">;</a><br>\n' +
		'\t\t\t<a Class="pr">Tools-Used</a><a class="p">: </a><a class="v">Javascript, CSS, HTML</a><a\n' +
		'\t\t\tclass="p">;</a><br>\n' +
		'\t\t\t<a Class="pr">Description</a><a class="p">: </a><a class="v">I created this project to outline my\n' +
		'\t\t\tskills and resume as a professional developer and to practice my skills using various\n' +
		'\t\t\tlanguages</a><a class="p">;</a><br>\n' +
		'\t\t</p>\n' +
		'\t\t</div>\n' +
		'\t\t<div class="ClassClose">\n' +
		'\t\t\t<p class="p">}<br><br></p>\n' +
		'\t\t</div>\n' +
		'\t</div>\n' +
		'\t<div class="PortfolioImageWrap">\n' +
		'\t\t<img class="PortfolioImage" src="../../../public_html/documentation/star-wars-lando-calrissian.jpg"\n' +
		'\t\t\t  alt="portolio">\n' +
		'\t</div>\n' +
		'</div>\n' +
		'<!-- class container contains a punch of stylizing rules for the content appended to the page to allow it to appear as psuedo code. Not sure if this is okay to do like this-->\n' +
		'<div class="PortfolioItem">\n' +
		'\t<div class="ClassContainer">\n' +
		'\t\t<div class="ClaseIntro">\n' +
		'\t\t\t<p class="c">.VeteranResourceApp<a Class="p"> {</a></p>\n' +
		'\t\t</div>\n' +
		'\t\t<div class="ClassBody"><p>\n' +
		'\t\t\t<a Class="pr">Github</a><a class="p">: </a><a\n' +
		'\t\t\tclass="v">github.com/Veteran-Capstone-Group/Veteran-Resource-WebApp</a><a class="p">;</a><br>\n' +
		'\t\t\t<a Class="pr">Live-View</a><a class="p">: </a><a class="i">ToBeAnnounced</a><a class="m">.com</a><a\n' +
		'\t\t\tclass="p">;</a><br>\n' +
		'\t\t\t<a Class="pr">Tools-Used</a><a class="p">: </a><a class="v">React.JS, CSS, Bootstrap, HTML, PHP</a><a\n' +
		'\t\t\tclass="p">;</a><br>\n' +
		'\t\t\t<a Class="pr">Description</a><a class="p">: </a><a class="v">John Johnson-Rodgers and I created\n' +
		'\t\t\tthis webapp to combat homelessness and suicide rates among the veteran population in the\n' +
		'\t\t\tAlbuquerque area by providing information of helpful social services that may prove useful to\n' +
		'\t\t\tsomeone struggling to integrate into society</a><a class="p">;</a><br>\n' +
		'\t\t</p>\n' +
		'\t\t</div>\n' +
		'\t\t<div class="ClassClose">\n' +
		'\t\t\t<p class="p">}<br><br></p>\n' +
		'\t\t</div>\n' +
		'\t</div>\n' +
		'\t<div class="PortfolioImageWrap">\n' +
		'\t\t<img class="PortfolioImage" src="../../../public_html/documentation/star-wars-lando-calrissian.jpg"\n' +
		'\t\t\t  alt="portolio">\n' +
		'\t</div>\n' +
		'</div>';
}

function switchToContact() {
	//change button images
	resumeButton.src="../media/resumeInactive.PNG";
	portfolioButton.src="../media/portfolioInactive.PNG";
	contactButton.src="../media/contactActive.png";
	aboutMeButton.src="../media/aboutmeInactive.png";

	//disable button focus onlcick
	contactButton.style.outline = "none";

	//TODO change mobile nav text

	//remove & append page content
	dynamicContent.innerHTML = '<a class="p">&lt;?php</a>\n' +
		'<a class="cm">/**</a>\n' +
		'<div class="DocblockBody">\n' +
		'\t<a class="cm">&nbsp;* </a><a class="pb">Constructor to create an Email for contacting Timothy Beck</a><br>\n' +
		'\t<a class="cm">&nbsp;* </a><br>\n' +
		'\t<a class="cm">&nbsp;* </a><a class="m">@param </a><a class="cm">string $newYourName</a><br>\n' +
		'\t<a class="cm">&nbsp;* </a><a class="m">@param </a><a class="cm">string $newYourEmail</a><br>\n' +
		'\t<a class="cm">&nbsp;* </a><a class="m">@param </a><a class="cm">string $newYourEmailSubject</a><br>\n' +
		'\t<a class="cm">&nbsp;* </a><a class="m">@param </a><a class="cm">string $newYourEmailBody</a><br>\n' +
		'\t<a class="cm">&nbsp;* </a><a class="m">@param </a><a class="cm">boolean $newYourEmailVerification</a><br>\n' +
		'\t<a class="cm">&nbsp;* </a><a class="m">@throws </a><a class="cm">\\InvalidArgumentException if inputs are empty or Invalid</a><br>\n' +
		'\t<a class="cm">&nbsp;* </a><a class="m">@throws </a><a class="cm">\\RangeException if input data is too long</a><br>\n' +
		'\t<a class="cm">&nbsp;* </a><a class="m">@throws </a><a class="cm">\\TypeError if data types violate type hints</a><br>\n' +
		'\t<a class="cm">&nbsp;*/ </a>\n' +
		'</div>\n' +
		'<p><a class="m">public </a><a class="pr">function </a><a class="v">__construct</a><a class="p">(</a><a class="pr">string </a><a class="o">$newYourName</a><a class="p">,</a>\n' +
		'<div class="ClassBody">\n' +
		'\t<div class="ClassBody"><div class="ClassBody"><div class="ClassBody"><div class="ClassBody"><div class="ClassBody"><div class="ClassBody">\n' +
		'\t\t<a class="pr">string </a><a class="o">$newYourEmail</a><a class="p">,</a><br>\n' +
		'\t\t<a class="pr">string </a><a class="o">$newYourEmailSubject</a><a class="p">,</a><br>\n' +
		'\t\t<a class="pr">string </a><a class="o">$newYourEmailBody</a><a class="p">,</a><br>\n' +
		'\t\t<a class="pr">boolean </a><a class="o">$newYourEmailVerification</a><a class="p">) {</a><br>\n' +
		'\t</div></div></div></div></div></div>\n' +
		'\t<a class="m">try </a><a class="p">{</a><br>\n' +
		'\t<div class="ClassBody">\n' +
		'\t\t<!-- NAME FIELD-->\n' +
		'\t\t<form id="Timothy-Beck-form" action="../php/" method="post">\n' +
		'\t\t\t<div class="form-group">\n' +
		'\t\t\t\t<label for="name"><a class="o">$this</a><a class="p">-></a><a class="v">setYourName</a><a class="p">($newYourName);</a><br></label>\n' +
		'\t\t\t\t<div class="input-group">\n' +
		'\t\t\t\t\t<div class="input-group-prepend">\n' +
		'\t\t\t\t\t\t<span class="input-group-text"></span>\n' +
		'\t\t\t\t\t\t<i class="fa fa-user" aria-hidden="true"></i>\n' +
		'\t\t\t\t\t</div>\n' +
		'\t\t\t\t\t<input type="text" class="form-control" id="name" name="name" placeholder="Name">\n' +
		'\t\t\t\t</div>\n' +
		'\t\t\t</div>\n' +
		'\t\t\t<!--END OF NAME FIELD-->\n' +
		'\t\t\t<!-- EMAIL FIELD-->\n' +
		'\t\t\t<div class="form-group">\n' +
		'\t\t\t\t<label for="email"><a class="o">$this</a><a class="p">-></a><a class="v">setYourEmail</a><a class="p">($newYourEmail);</a><br></label>\n' +
		'\t\t\t\t<div class="input-group">\n' +
		'\t\t\t\t\t<div class="input-group-prepend">\n' +
		'\t\t\t\t\t\t<span class="input-group-text"></span>\n' +
		'\t\t\t\t\t\t<i class="fa fa-envelope" aria-hidden="true"></i>\n' +
		'\t\t\t\t\t</div>\n' +
		'\t\t\t\t\t<input type="email" class="form-control" id="email" name="email" placeholder="Email">\n' +
		'\t\t\t\t</div>\n' +
		'\t\t\t</div>\n' +
		'\t\t\t<!--END OF EMAIL FIELD-->\n' +
		'\t\t\t<!-- SUBJECT FIELD-->\n' +
		'\t\t\t<div class="form-group">\n' +
		'\t\t\t\t<label for="subject"><a class="o">$this</a><a class="p">-></a><a class="v">setYourEmailSubject</a><a class="p">($newYourEmailSubject);</a><br></label>\n' +
		'\t\t\t\t<div class="input-group">\n' +
		'\t\t\t\t\t<div class="input-group-prepend">\n' +
		'\t\t\t\t\t\t<span class="input-group-text"></span>\n' +
		'\t\t\t\t\t\t<i class="fa fa-pencil" aria-hidden="true"></i>\n' +
		'\t\t\t\t\t</div>\n' +
		'\t\t\t\t\t<input type="text" class="form-control" id="subject" name="subject" placeholder="Subject">\n' +
		'\t\t\t\t</div>\n' +
		'\t\t\t</div>\n' +
		'\t\t\t<!--END OF SUBJECT FIELD-->\n' +
		'\t\t\t<!-- BODY FIELD-->\n' +
		'\t\t\t<div class="form-group">\n' +
		'\t\t\t\t<label for="message"><a class="o">$this</a><a class="p">-></a><a class="v">setYourEmailBody</a><a class="p">($newYourEmailBody);</a><br></label>\n' +
		'\t\t\t\t<div class="input-group">\n' +
		'\t\t\t\t\t<div class="input-group-prepend">\n' +
		'\t\t\t\t\t\t<span class="input-group-text"></span>\n' +
		'\t\t\t\t\t\t<i class="fa fa-comment" aria-hidden="true"></i>\n' +
		'\t\t\t\t\t</div>\n' +
		'\t\t\t\t\t<textarea class="form-control" rows="5" id="message" name="message" placeholder="(2000 characters max)"></textarea>\n' +
		'\t\t\t\t</div>\n' +
		'\t\t\t</div>\n' +
		'\t\t\t<!--END OF BODY FIELD-->\n' +
		'\t\t\t<!-- reCAPTCHA and SEND/RESET BUTTONS-->\n' +
		'\t\t\t<div class="form-group"><label><a class="o">$this</a><a class="p">-></a><a class="v">setYourEmailVerification</a><a class="p">($newYourEmailVerification);</a></label></div>\n' +
		'\t\t\t<!-- reCAPTCHA -->\n' +
		'\t\t\t<div class="g-recaptcha" data-sitekey="--YOUR RECAPTCHA SITE KEY--"></div>\n' +
		'\t\t\t<button class="btn btn-success" type="submit"><i class="fa fa-paper-plane"></i> Send</button>\n' +
		'\t\t\t<button class="btn btn-warning" type="reset"><i class="fa fa-ban"></i> Reset</button>\n' +
		'\t\t</form>\n' +
		'\t\t<!--empty area for form error/success output-->\n' +
		'\t\t<div class="row">\n' +
		'\t\t\t<div class="col-xs-12">\n' +
		'\t\t\t\t<div id="output-area"></div>\n' +
		'\t\t\t</div>\n' +
		'\t\t</div>\n' +
		'\t\t<!-- END OF reCAPTCHA and SEND/RESET BUTTONS-->\n' +
		'\t</div>\n' +
		'\t<a class="p">} </a><a class="cm">// determine if/what exception was thrown</a><br>\n' +
		'\t<a class="m">catch</a><a class="p">(\\</a><a class="pr">InvalidArgumentException </a><a class="p">| \\</a><a class="pr">RangeException </a><a class="p">| \\</a><a class="pr">TypeError </a><a class="p">| \\</a><a class="pr">Exception </a><a class="p">$exception) {</a><br>\n' +
		'\t<div class="ClassBody">\n' +
		'\t\t<a class="p">$exceptionType </a><a class="m">= </a><a class="v">get_class</a><a class="p">(exception);</a><br>\n' +
		'\t\t<a class="m">throw</a><a class="p">(</a><a class="m">new </a><a class="p">$exceptionType($exception-></a><a class="v">getMessage</a><a class="p">(),</a><a class="i"> 0</a><a class="p">, $exception));</a><br>\n' +
		'\t</div>\n' +
		'\t<a class="p">}</a><br>\n' +
		'</div>\n' +
		'<a class="p">\n' +
		'\t}<br>\n' +
		'\t?&gt;<br></a>';
}

function switchToAboutMe() {
	//change button images
	resumeButton.src="../media/resumeInactive.PNG";
	portfolioButton.src="../media/portfolioInactive.PNG";
	contactButton.src="../media/contactInactive.png";
	aboutMeButton.src="../media/aboutmeActive.png";

	//disable button focus onlcick
	aboutMeButton.style.outline = "none";

	//TODO change mobile nav text

	//remove & append page content
	dynamicContent.innerHTML = '<a class="p">Content coming soon</a>';
}
