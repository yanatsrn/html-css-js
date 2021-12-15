var counter = 0;

function execute() {
    let go = true;
    if (document.getElementById('name').value == "" || document.getElementById('surname').value == "" ||
        document.getElementById('course').value == "" || document.getElementById('email').value == "" ||
        document.getElementById('week').value == "") {
        if (document.getElementById('name').value == "")
            alert("Enter the name");
        if (document.getElementById('surname').value == "")
            alert("Enter the surname");
        if (document.getElementById('course').value == "")
            alert("Enter the course");
        if (document.getElementById('email').value == "")
            alert("Enter the email");
        if (document.getElementById('week').value == "")
            alert("Enter the week");
        console.log("message", "faaaaaaaaaaail");
        go = false;
    }
    if (go) {

        let personName = document.getElementById('name').value;
        let surname = document.getElementById('surname').value;
        let week = document.getElementById('week').value;
        let dormitory = " fuck u "
        if (document.getElementById('domitory').checked == true) {

            dormitory = "да";
        }
        else {
            dormitory = "нет";
        }
        let faculty = document.getElementById('faculty').value;
        const radios = document.querySelectorAll('[type="radio"]');
        let radio;
        radios.forEach((x) => {
            if (x.checked) {
                radio = x.value;
            }
        });
        let course = document.getElementById('course').value;
        let email = document.getElementById('email').value;
        let time = document.getElementById('time').value;

        const object = JSON.parse(localStorage.getItem('object')) || [];
        object.push({
            personName,
            surname,
            week,
            dormitory,
            radio,
            faculty,
            course,
            email,
            time,
        });

        let object1 = JSON.parse(localStorage.getItem('object1')) || [];
        object1.push({
            time,
            email,
            course,
            faculty,
            radio,
            dormitory,
            week,
            surname,
            personName,
        });
        console.log("Object", object)
        localStorage.setItem('object', JSON.stringify(object));
        localStorage.setItem('object1', JSON.stringify(object1));
        counter++;
    }
}

function clearAll() {
    window.close();
    localStorage.clearAll();
}