var modal2 = document.getElementById("about_modal");
var btn2 = document.getElementById("about");
var span2 = document.getElementsByClassName("about_close")[0];
btn2.onclick = function() {
    modal2.style.display = "block";
    modal1.style.display = "none";
}
span2.onclick = function() {
    modal2.style.display = "none";
    modal1.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal2) {
        modal2.style.display = "none";
        modal1.style.display = "none";
    }
};

var modal1 = document.getElementById("contact_modal");
var btn1 = document.getElementById("contact");
var span1 = document.getElementsByClassName("contact_close")[0];
btn1.onclick = function() {
    modal1.style.display = "block";
    modal2.style.display = "none";
}
span1.onclick = function() {
    modal1.style.display = "none";
    modal2.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
        modal2.style.display = "none";
    }
};
document.oncontextmenu = document.body.oncontextmenu = function() {return false;}
e=e || window.event;
pauseEvent(e);
function pauseEvent(e){
    if(e.stopPropagation) e.stopPropagation();
    if(e.preventDefault) e.preventDefault();
    e.cancelBubble=true;
    e.returnValue=false;
    return false;}