let heart = 0;
let coin = 100;
let copy = 0;

function setInnerText(id, value) {
    document.getElementById(id).innerText = value;

}

function heartIcon(){
    heart++;
    setInnerText("heartCount", heart);
}