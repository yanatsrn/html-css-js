//изменение цвета страницы
function changeColor() { 
    switch(document.getElementById('color').value) {
        case "1":
            color = "#DC143C";
            break;
        case "2":
            color = "#FFA500";
            break;
        case "3":
            color = "#FFD700";
            break;
        case "4":
            color = "#006400";
            break;
        case "5":
            color = "#00FFFF";
            break;
        case "6":
            color = "#000080";
            break;
        case "7":
            color = "#4B0082";
            break;
    }
    document.body.style.background = color;
}

function init() {

    //активность кнопки
    function setButtonColors(button, nonactiveColor, activeColor) {
    button.style.background = nonactiveColor;
    button.addEventListener("mouseenter", function (event) {
        event.target.style.background = activeColor;
    }, false);
    button.addEventListener("mouseleave", function (event) {
        event.target.style.background = nonactiveColor;
    }, false);
    }

    buttons = document.getElementsByClassName("typeOfCat");
    for (i = 0; i < buttons.length; i++) {
        setButtonColors(buttons[i], "#ffffff", "#c9c0bb");
        buttons[i].onclick = function (event) {
            let infoWindow = window.open("cats.html#" + event.target.innerText, "Новое окно", "width=1000, height=510, resizable=true");
            infoWindow.moveTo(150, 200);
            infoWindow.location.reload();
        }
    }

    //на четность можно с помощью класса!
    for (i = 0;i<buttons.length; i++) {
        if (i%2 ==0){
            setButtonColors(buttons[i], "#FFA500", "#c9c0bb");
        }
    }

    button = document.getElementById("addButton");
    setButtonColors(button, "#ffffff", "#c9c0bb");

    button.onclick = function (event) {
        let element = document.createElement("button");
        element.className = "typeOfCat";
        element.innerHTML = document.getElementById("text").value === "" ? " " : document.getElementById("text").value ;
        setButtonColors(element, color, "#c9c0bb");
        element.style.color = document.getElementById("menu").style.background;
        element.onclick = function (event) {
            let infoWindow = window.open("cats.html#Котики", "", "width=1000, height=510, resizable=true");
            infoWindow.moveTo(150, 200);
            infoWindow.location.reload();
        };
        document.getElementById("menu").appendChild(element);
    };
    document.body.style.background = "#e687a4";
}

