// var counter = 0;
// var nameArr = new Array();
// let surnameArr = [];
// var weekArr = [];
// var dormitoryArr = [];
// var facultyArr = [];
// var problemProfessorArr = [];
// var problemStudyArr = [];
// var problemBuildingArr = [];
// var courseArr = [];
// let emailArr = [];

// function execute() {
//     let go = true;
//     if(document.getElementById('name').value == "" || document.getElementById('surname').value == "" ||
//         document.getElementById('course').value == "" || document.getElementById('email').value == "" ||
//             document.getElementById('week').value == "") {
//         if(document.getElementById('name').value=="")
//             alert("Enter the name");
//         if(document.getElementById('surname').value=="" )
//             alert("Enter the surname");
//         if(document.getElementById('course').value=="")
//             alert("Enter the course");
//         if(document.getElementById('email').value == "")
//             alert("Enter the email");
//         if(document.getElementById('week').value == "")
//             alert("Enter the week");
//         console.log("message","faaaaaaaaaaail");
//         go = false;
//     }
//     if(go) {
    //     nameArr[counter] = document.getElementById('name').value;
    //     surnameArr[counter] = document.getElementById('surname').value;
    //     weekArr[counter] = document.getElementById('week').value;
    //     if(document.getElementById('domitory').checked == true) {
            
    //         dormitoryArr[counter] = "да";
    //     }
    //     else {
    //         dormitoryArr[counter] = "нет";
    //     }
    //     facultyArr[counter] = document.getElementsByTagName('faculty').value;
    //     problemProfessorArr[counter] = document.querySelector('input[name="people"]:checked');
    //     problemStudyArr[counter] = document.querySelector('input[name="education"]:checked');
    //     problemBuildingArr[counter] = document.querySelector('input[name="building"]:checked');
    //     courseArr[counter] = document.getElementById('course').value;
    //     emailArr[counter] = document.getElementById('email').value;
    //     counter++;
    // }
// }

// function tabl() {
//     var html = "<p class='Information'>" +
//         "</p>" +
//         "<table class='Information' align='center' border='4px' id='tableNames'>" +
//         "<tr>" +
//         "<th>Name</th>" +
//         "<th>Surname</th>" +
//         "<th>Week</th>" +
//         "<th>Domitory</th>" +
//         "<th>Problem with prof</th>" +
//         "<th>Problem with study</th>" +
//         "<th>Problem with buildings</th>" +
//         "<th>Course</th>" +
//         "<th>Email</th>" +
//         "</tr>";
//     for(var i=0; i<nameArr.length;i++) {
//         /*html+= "<tr>" + "<th>mark</th>" + "</tr>";*/
//         html+="<tr>" +
//             "<td>"+ nameArr[i]+"</td>" +
//             "<td>"+ surnameArr[i]+"</td>" +
//             "<td>"+ weekArr[i]+"</td>" +
//             "<td>"+ dormitoryArr[i]+"</td>" +
//             "<td>"+ problemProfessorArr[i]+"</td>" +
//             "<td>"+ problemStudyArr[i]+"</td>" +
//             "<td>"+ problemBuildingArr[i]+"</td>" +
//             "<td>"+ courseArr[i]+"</td>" +
//             "<td>"+ emailArr[i]+"</td>" +
//             "</tr>";
//     }
//     html+= "</table>";

//     html+= "<p align='center' class='Information'>list of clients</p>" + 
//     "<input list='clients'>" +
//     "<datalist id='clients'>";
//     for (i = 0; i < nameArr.length ; i++)
//     {
//         html+= "<option>" + nameArr[i] + "</option>";
//     }
//     html+= "</datalist>"

//     return html;
// }

// function example(){
//     console.log(nameArr);
// }

// function show() {
//     var newWindow = window.open();
//     newWindow.document.write('<!DOCTYPE html>\n' +
//     '<html lang="en">\n' +
//         '<head>\n' +
//         '    <meta charset="UTF-8">\n' +
//         '    <title >Опрос о проблемах вуза</title> \n' +
//         '    <link rel="stylesheet" href= "css\style.css"> \n' +
//         '    <script type="text/javascript" src="js\script.js"></script>\n' +
//         '</head>\n' +
//         '<body>\n' +
//         '<div class="flexBox">' +
//         '<header class="blockHeader">' +
//         '<h1>' +
//         '<h2>Tourism</h2>' +
//         '</h1>' +
//         '</header>' +
//         '<article class = "blockArticle" align="center">' +
//         '<p>' + tabl() +'</p>'+
//         '\n' +
//         '</article>' +
//         '<nav class="blockNav" id="nav">\n' +
//         '\n' +
//         '        <button style="margin-top: 210px; margin-left: 60px; height: 35px; border-radius: 10px;" name="send" type="button"  onclick="window.close()">The main</button>\n' +
//         '        <br><br>\n' +
//         '        <button style="margin-left: 65px; height: 35px; border-radius: 10px;" name="send" type="button" disabled>Results</button>' +
//         '</nav>\n' +
//         '</footer>\n' +
//         '</div>\n' +
//         '</body>\n' +
//         '</html>')
// }

// function clearAll() {
//     window.close();
//     nameArr.clearAll();
// }