// Fetching data from files:
var file = document.getElementById('inputfile')
file.addEventListener('change', function () {

    var fr = new FileReader();
    fr.onload = function () {
        document.getElementById('source').textContent = fr.result;
    }
    fr.readAsText(this.files[0]);
});


// -----------------Gelolocation--------------------

// setTimeout(() => {
//     function getLocation() {
//         try {
//             navigator.geolocation.getCurrentPosition(showPosition);
//         } catch {
//             x.innerHTML = err;
//         }
//     }

//     function showPosition(position) {
//         alert("Latitude: " + position.coords.latitude +
//             "                                                                    Longitude: " + position.coords.longitude);
//     }

//     getLocation() // call the geolcation
// }, 6000);



// function upload() {

//     const fileSelector = document.getElementById('myFile');
//     fileSelector.addEventListener('change', (event) => {
//         // const fileList = event.target.files;
//         // console.log(fileList);
//         // -new update
//         function getData() {
//             console.log("Started getData function...");
//             let url = event.target.textContent;
//             // fetch api returns a promise
//             fetch(url).then((response) => { //method : async
//                 console.log("Inside first then of function");
//                 return response.text(); //this one is a promise
//             }).then((data) => {
//                 console.log("Inside second then of function");
//                 console.log(data);
//             })
//         };
//         getData();
//     });
// }

// -----------------------Xml checker-------------------------
function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            myFunction(this);
        }
    };
    xhttp.open("GET", "https://www.w3schools.com/xml/plant_catalog.xml", true);
    xhttp.send();
}
function myFunction(xml) {
    var i;
    var xmlDoc = xml.responseXML;
    var table = "<tr><th>Artist</th><th>Title</th></tr>";
    var x = xmlDoc.getElementsByTagName("CD");
    for (i = 0; i < x.length; i++) {
        table += "<tr><td>" +
            x[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue +
            "</td><td>" +
            x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
            "</td></tr>";
    }
    document.getElementById("demo").innerHTML = table;
}