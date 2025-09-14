let heart = 0;
let coin = 100;
let copy = 0;

function setInnerText(id, value) {
    document.getElementById(id).innerText = value;

}

// heart icons
function heartIcon(){
    heart++;
    setInnerText("heartCount", heart);
}


//call btn
function callBtn(number) {
    if(coin < 20){
        alert("Nogt enough coin");
        return;
    }

    coin -= 20;
    document.getElementById("coin").innerText = coin;
    const cards = document.querySelectorAll("main section > div > div");
    let serviceName = "";

    for(let i = 0; i < cards.length; i++) {
        const card = cards[i];

        const pElement = card.querySelector("p");
        if(pElement && pElement.innerText === number){
            const h3 = card.querySelector("h3");
            if(h3) serviceName = h3.innerText;
            break;
        }
    }
    alert("Calling: " + number + serviceName);
}




