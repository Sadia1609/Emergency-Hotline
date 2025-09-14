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

// copy
function btnCopy(number) {
    navigator.clipboard.writeText(number)  
        .then(() => {
            alert("Copied: " + number);
            copy++;
            setInnerText("copyCount", copy);
        })
    }

//call btn
function callBtn(serviceName, number) {
    if(coin < 20){
        alert("Not enough coin");
        return;
    }

    coin -= 20;
   setInnerText("coinCount", coin);

   
    alert("Calling " + serviceName + " (" + number + ")");

const history = document.getElementById("historyList");
    const li = document.createElement("li");
    const localTime = new Date();
    li.innerText = serviceName + " " + number + " " + " at " + localTime.toLocaleString();
    history.appendChild(li);
}

document.getElementById("clearHistory").addEventListener("click", function () {
    document.getElementById("historyList").innerHTML = "";
});





