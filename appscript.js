noCounter = 0;

function noButtonPressed(){
    noCounter++;
    if (noCounter == 1) {
        document.getElementById("nobtn").innerHTML = "mmm nah";
        document.getElementById("yesbtn").style.fontSize = "54px";
        document.getElementById("image").src = "heol.jpg";
        document.getElementById("text").innerHTML = "heol! you don't want?";
    }
    if (noCounter == 2) {
        document.getElementById("nobtn").innerHTML = "still don't want";
        document.getElementById("nobtn").style.fontSize = "16px";
        document.getElementById("yesbtn").style.fontSize = "74px";
        document.getElementById("image").src = "cry.gif";
        document.getElementById("text").innerHTML = "excuse me.";
    } 
    if (noCounter == 3) {
        document.getElementById("nobtn").innerHTML = "haii";
        document.getElementById("nobtn").style.fontSize = "16px";
        document.getElementById("yesbtn").style.fontSize = "84px";
        document.getElementById("text").innerHTML = "hello";
    } 
    if (noCounter == 3) {
        document.getElementById("nobtn").innerHTML = "heol! 发脾气?";
        document.getElementById("nobtn").style.fontSize = "16px";
        document.getElementById("yesbtn").style.fontSize = "84px";
        document.getElementById("image").src = "fliptable.gif";
        document.getElementById("text").innerHTML = "hmph";
    } 
    if (noCounter == 4) {
        document.getElementById("nobtn").innerHTML = "hehe you so cute";
        document.getElementById("nobtn").style.fontSize = "12px";
        document.getElementById("yesbtn").style.fontSize = "104px";
        document.getElementById("image").src = "hmph.gif";
        document.getElementById("text").innerHTML = "hmph";
    } 
    if (noCounter == 5) {
        document.getElementById("nobtn").innerHTML = "squish";
        document.getElementById("nobtn").style.fontSize = "104px";
        document.getElementById("yesbtn").style.visibility = "hidden";
        document.getElementById("yesbtn").style.fontSize = "36px";
        document.getElementById("image").src = "crying.gif";
        document.getElementById("text").innerHTML = "cryyyy";
    } 
    if (noCounter == 6) {
        document.getElementById("nobtn").innerHTML = "ok fineeee";
        document.getElementById("nobtn").style.fontSize = "36px";
        document.getElementById("yesbtn").style.visibility = "hidden";
        document.getElementById("image").src = "ignore.jpg";
        document.getElementById("text").innerHTML = "*ignoring*";
    } 
    if (noCounter == 7) {
        document.getElementById("nobtn").innerHTML = "orighty";
        document.getElementById("nobtn").style.fontSize = "36px";
        document.getElementById("yesbtn").style.visibility = "hidden";
        document.getElementById("image").src = "heheyay.jpg";
        document.getElementById("text").innerHTML = "hehe yay i'll ask again";
    } 
    if (noCounter == 8) {
        document.getElementById("yesbtn").innerHTML = "YESSSSS";
        document.getElementById("nobtn").style.fontSize = "36px";
        document.getElementById("yesbtn").style.fontSize = "154px";
        document.getElementById("yesbtn").style.visibility = "visible";
        document.getElementById("nobtn").style.visibility = "hidden";
        document.getElementById("image").src = "shinheart.jpg";
        document.getElementById("text").innerHTML = "자기야, will you be my Valentine? <3";
    } 
}

function yesButtonPressed(){
    if (noCounter > 6) {
        document.getElementById("yesbtn").style.visibility = "hidden";
        document.getElementById("nobtn").style.visibility = "hidden";
        document.getElementById("image").src = "yay.gif";
        document.getElementById("text").innerHTML = "Yay! See you Monday! <3";
    }
}