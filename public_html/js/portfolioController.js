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
 * Domain-for-sale corner ribbon.
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
      width: 160px;
      height: 160px;
      overflow: hidden;
      z-index: 9999;
      pointer-events: none;
      filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.30));
    }
    .domain-sale-ribbon {
      --ribbon-bg: #1a1a2e;
      --ribbon-accent: #e9b44c;
      pointer-events: auto;
      position: absolute;
      display: block;
      width: 225px;
      left: -20px;
      top: 52px;
      transform: rotate(45deg);
      padding: 9px 0;
      background: var(--ribbon-bg);
      color: var(--ribbon-accent);
      font-family: "Georgia", "Times New Roman", serif;
      font-size: 12px;
      font-weight: 600;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      text-align: center;
      text-decoration: none;
      white-space: nowrap;
      line-height: 1;
      border-top: 1px solid var(--ribbon-accent);
      border-bottom: 1px solid var(--ribbon-accent);
      transition: filter 0.2s ease;
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
    }
    @media (max-width: 600px) {
      .domain-sale-wrap {
        width: auto;
        height: auto;
        overflow: visible;
        top: 10px;
        right: 10px;
      }
      .domain-sale-ribbon {
        position: static;
        width: auto;
        transform: none;
        padding: 8px 14px;
        border-radius: 999px;
        border: 1px solid var(--ribbon-accent);
        font-size: 11px;
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
  ribbon.href = "https://www.namecheap.com/market/";
  ribbon.textContent = "This domain is for sale";

  wrap.appendChild(ribbon);

  // Append to the page
  document.body.appendChild(wrap);
}

if (window.location.href.includes("lowtechsanonymous")){
    showDomainSaleBanner();
}
