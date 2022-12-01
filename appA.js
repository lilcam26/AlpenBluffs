//text field transition
nbutton = this.document.getElementById("not");
sub = this.document.getElementById("sub");
e = this.document.getElementById("e");


function notify(){
    nbutton.style.width = "20vw";
    nbutton.style.marginLeft = "40vw";
    nbutton.style.backgroundColor = "white";

    sub.style.opacity = "100%";
    setTimeout(() => {
        e.style.zIndex = "1";
        e.style.opacity = "100%";
        nbutton.style.opacity = "0%";
    }, 600); 
}