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
