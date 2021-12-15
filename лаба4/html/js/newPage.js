function hide(){
    button = document.getElementById("hide");
    button.onclick = function(event) {
        if(button.value == 1) {
            document.getElementById("newCat").style.visibility = "hidden";
            document.getElementById("hide").value = 0;
        }
        else if(button.value == 0) {
            document.getElementById("newCat").style.visibility = "visible";
            document.getElementById("hide").value = 1;
        }

    }
}