if (window.screen.width < 1100 || window.visualViewport.width < 1100){
    let webringPrevLinkElement = document.getElementById("webringPrevLink");
    let webringCenterLinkElement = document.getElementById("webringCenterLink");
    let webringNextLinkElement = document.getElementById("webringNextLink");

    webringPrevLinkElement.innerText="<";
    webringCenterLinkElement.innerText=" ALA! ";
    webringNextLinkElement.innerText= ">";
}


window.addEventListener("resize", function(event) {
    let webringPrevLinkElement = document.getElementById("webringPrevLink");
    let webringCenterLinkElement = document.getElementById("webringCenterLink");
    let webringNextLinkElement = document.getElementById("webringNextLink");
    if (window.screen.width < 1100 || window.visualViewport.width < 1100){
        webringPrevLinkElement.innerText="<";
        webringCenterLinkElement.innerText=" ALA! ";
        webringNextLinkElement.innerText= ">";
    }else{
        webringPrevLinkElement.innerText="<< prev";
        webringCenterLinkElement.innerText="Lowtechs Anonymous Webring";
        webringNextLinkElement.innerText= "next >>";
    }
});