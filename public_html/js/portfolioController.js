let portfolioDOM = document.getElementById("portfolioPage");
let portfolioData;
fetch("./data/portfolio.json")
    .then(r => r.json())
    .then(json => {
        portfolioData = json;
        let portfolioElements = "";
        portfolioData.forEach(project=>{
            let hasLive = project.hasOwnProperty('live') && project.live !== null;
            let hasDemo = project.hasOwnProperty('demo') && project.demo !== null;
            let hasArchive = project.hasOwnProperty('archive') && project.archive !== null;
            let thisProject = "";
            //open elements + project name
            if(project.hasOwnProperty('name') && project.name !== null) {
                thisProject += `<div class="PortfolioItem">
                            <div class="ClassContainer">
                                <div class="ClaseIntro">
                                    <p class="c">.${project.name}<a Class="p"> {</a></p>
                                </div>
                            <div class="ClassBody">
                                <p>`;
            }else return;
            //github
            if(project.hasOwnProperty('github') && project.github !== null){
                thisProject+=`<a class="pr">Github</a><a class="p">: </a>
                                <a class="v"
                                   href="${project.github}">${project.github}</a><a class="p">;</a>
                                <br>`
            }
            //project link
            if(hasLive){
                thisProject+=`<a class="pr">Live-View</a><a class="p">: </a>
                                <a class="i" href="${project.live}">${project.live}</a><a class="p">;</a><br>`
            } else if(hasDemo){
                thisProject+=`<a Class="pr">Demo-View</a><a class="p">: </a>
                                <a class="i" href="${project.demo}">${project.demo}</a><a class="p">;</a><br>`
            } else if(hasArchive){
                thisProject+=`<a Class="pr">Archive-View</a><a class="p">: </a>
                                <a class="i" href="${project.archive}">${project.archive}</a><a class="p">;</a><br>`
            }
            //tools
            if(project.hasOwnProperty('toolsUsed') && project.toolsUsed !== null){
                let tools = project.toolsUsed.join(", ")
                thisProject+=`<a Class="pr">Tools-Used</a><a class="p">: </a>
                                <a class="v">${tools}</a><a class="p">;</a><br>`
            }
            //description
            if(project.hasOwnProperty('description') && project.description !== null){
                thisProject+=`<a Class="pr">Description</a><a class="p">: </a><a class="v">${project.description}</a><a class="p">;</a><br>`
            }
            //just some closing tags
            thisProject+=`</p></div><div class="ClassClose"><p class="p">}<br><br></p></div></div>`
            //image (add image src to json)
            if(project.hasOwnProperty('image') && project.image !== null){
                thisProject+=`<div class="PortfolioImageWrap">
                <img class="PortfolioImage" src="media/${project.image}" alt="${project.hasOwnProperty('imageAlt') && project.imageAlt !== null?project.imageAlt:"portfolio image"}"/></div></div>`
            }else{
                thisProject+=`<div class="PortfolioImageWrap"></div></div>`
            }
            //append project to portfolio
            portfolioElements+=thisProject
        })
        //inject portfolio into DOM
        portfolioDOM.innerHTML = portfolioElements;
    })


/**
 * Domain-for-sale corner ribbon (large, attention-grabbing).
 * Call showDomainSaleBanner() inside your existing conditional.
 * Injects its own styles once and appends the banner to <body>.
 */
function showDomainSaleBanner() {
  // Guard: don't inject twice
  if (document.getElementById("domain-sale-wrap")) return;
 
  var css = `
    .domain-sale-wrap {
      position: fixed;
      top: 0;
      right: 0;
      width: 300px;
      height: 300px;
      overflow: hidden;
      z-index: 9999;
      pointer-events: none;
      filter: drop-shadow(0 6px 16px rgba(0, 0, 0, 0.40));
    }
    .domain-sale-ribbon {
      --ribbon-bg: #1a1a2e;
      --ribbon-accent: #e9b44c;
      pointer-events: auto;
      position: absolute;
      display: block;
      width: 430px;
      left: -41px;
      top: 99px;
      transform: rotate(45deg);
      padding: 16px 0;
      background: var(--ribbon-bg);
      color: var(--ribbon-accent);
      font-family: "Georgia", "Times New Roman", serif;
      font-size: 20px;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      text-align: center;
      text-decoration: none;
      white-space: nowrap;
      line-height: 1;
      border-top: 2px solid var(--ribbon-accent);
      border-bottom: 2px solid var(--ribbon-accent);
      overflow: hidden;
      transition: filter 0.2s ease;
    }
    /* Periodic shine sweep to catch the eye */
    .domain-sale-ribbon::after {
      content: "";
      position: absolute;
      top: 0;
      left: -60%;
      width: 40%;
      height: 100%;
      background: linear-gradient(
        105deg,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 0.28) 50%,
        rgba(255, 255, 255, 0) 100%
      );
      animation: domain-sale-shine 4s ease-in-out infinite;
    }
    @keyframes domain-sale-shine {
      0%   { left: -60%; }
      35%  { left: 120%; }
      100% { left: 120%; }
    }
    .domain-sale-ribbon:hover,
    .domain-sale-ribbon:focus-visible {
      filter: brightness(1.25);
    }
    .domain-sale-ribbon:focus-visible {
      outline: 2px solid var(--ribbon-accent);
      outline-offset: 2px;
    }
    @media (prefers-reduced-motion: reduce) {
      .domain-sale-ribbon { transition: none; }
      .domain-sale-ribbon::after { animation: none; display: none; }
    }
    @media (max-width: 600px) {
      .domain-sale-wrap {
        width: auto;
        height: auto;
        overflow: visible;
        top: 12px;
        right: 12px;
      }
      .domain-sale-ribbon {
        position: static;
        width: auto;
        transform: none;
        padding: 10px 18px;
        border-radius: 999px;
        border: 2px solid var(--ribbon-accent);
        font-size: 13px;
      }
    }
  `;
 
  // Append the styles
  var style = document.createElement("style");
  style.id = "domain-sale-styles";
  style.textContent = css;
  document.head.appendChild(style);
 
  // Build the banner
  var wrap = document.createElement("div");
  wrap.id = "domain-sale-wrap";
  wrap.className = "domain-sale-wrap";
 
  var ribbon = document.createElement("a");
  ribbon.className = "domain-sale-ribbon";
  ribbon.href = "mailto:you@example.com?subject=Domain%20inquiry"; // <- edit
  ribbon.textContent = "This domain is for sale";
 
  wrap.appendChild(ribbon);
 
  // Append to the page
  document.body.appendChild(wrap);
}

if (!window.location.href.includes("timothybeck.com")){
    showDomainSaleBanner();
}
