<!DOCTYPE html>
<html lang="en">
<head>
	<title>PWP Project Milestone 2</title>
	<meta charset="UTF-8">
	<link rel="stylesheet" type="text/css" href="m2styles.css">
</head>
<body>
	<div>
		<h1>Content Strategy</h1>
		<p class="text">Starting from top to bottom, left to right, I will have a banner bar followed by a nav bar. Inside the banner bar will be my name in a stylized text/image and likely a logo for branding. My page will consist of a single page that will utilize javascript buttons in the nav bar that will dynamically append and remove HTML elements containing a Resume, Portfolio, About-Me Section, and contact form to the page. On desktop I will have social media buttons on the far right of the nav bar, hoeever on mobile the nav buttons and social media buttons will be housed in a hamburger menu. To the left of the main page element will be a line number element running the hieght of the page numbering each text line, it will likely be 35px in width on desktop view and 12 to 15px on mobile. The contents of each page will be written in psuedocode and stylized to the sublime text theme, my resume page will contain my resume, as well as a button to download a more professional .pdf version, my portfolio will contain several elements each describing projects I've worked on with a preview image to the right (or below on mobile) and a link to view the live view where applicable. The About-Me page will contain my elevator pitch as well as a couple paragraphs about who I am. My contact form will be a simple contact form that allows people to reach out to me via email. and should be captchya protected.</p>
		<br><br>
		<p class="text">...for more information use dev console to see the comment blocks of my html/js/css commented outlines:</p>
		<br>
		<ul>
			<li><a href="./roughdrafting/index-roughdraft.html">index.html that contains the page layout</a></li>
			<li><s><a href="./roughdrafting/aboutme-content-roughdraft.html">About Me, Dom inserted html</a></s></li>
			<li><s><a href="./roughdrafting/contactform-content-roughdraft.html">Contact, Dom inserted html</a></s></li>
			<li><s><a href="./roughdrafting/portfolio-content-roughtdraft.html">portfolio, Dom inserted html</a></s></li>
			<li><s><a href="./roughdrafting/resume-content-roughdraft.html">resume, Dom inserted html</a></s></li>
			<li><s><a href="./roughdrafting/styles-roughdraft.css">styles</a></s></li>
			<li><a href="./roughdrafting/scripts-roughdraft.js">javascript</a></li>
		</ul>
	</div>
	<div>
		<h1>Wireframes</h1>
		<h2>Mobile</h2>
		<div id="flexrow">
		<img class="mobileWire" src="./wireframe-assets/Mobile-Menu.png" alt="Mobile Menu">
		<img class="mobileWire" src="./wireframe-assets/Resume.png" alt="resume">
		<img class="mobileWire" src="./wireframe-assets/About.png" alt="about">
		<img class="mobileWire" src="./wireframe-assets/Portfolio.png" alt="portfolio">
		<img class="mobileWire" src="./wireframe-assets/Contact.png" alt="contact">
		</div>
		<h2>Desktop</h2>
		<div class="gridbox">
		<img id="respic" src="./wireframe-assets/Desktop-Resume.png" alt="desktop resume">
		<img id="aboutpic" src="./wireframe-assets/Desktop-About.png" alt="desktop about">
		<img id="portpic" src="./wireframe-assets/Desktop-Portfolio.png" alt="desktop portfolio">
		<img id="contpic" src="./wireframe-assets/Desktop-Contact.png" alt="desktop contact">
		</div>
	</div>
</body>
</html>