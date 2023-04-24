// AJAX

//Asynchronous JavaScript And XML

// ("<object><name>Some Name</name> <age>10</age></object>");

//XMLParser...

//JSON -> JavaScript Object Notation...

//String

//Number

//Object

//Array...

// AJAX -> XMLHttpRequest

//Methods :

//CRUDE

//GET  ->  Read
//POST -> Create
//PATCH/PUT   -> Update means 
//DELETE -> Delete

//const url = "https://jsonplaceholder.typicode.com/photos"

//const xms = new XMLHttpRequest();   // new is -> constructor
//console.log(xms);

//xms.onreadystatechange = function () {
  //  console.log(xms.readyState);
//};
//xms.open("GET",url);
//xms.send();

// 0 -> UNSENT   // No Object Create and No Open Methode Call 
// 1 -> OPEN    // You Called Open this means 1
// 2 -> HEADERS_RECEVIED   
// -- Error -- //  Only Private Person Allowed
// 3 -> LOADING  // Data Loading 
// 4 -> DONE
// 404 -> Not Found

// MIME type...

const Container = document.getElementsByClassName("contentContainer")[0];

function showToUser(data) {
    for (let i = 0; i < data.length; i++) {
        const newElement = document.createElement("h3");
        newElement.textContent = `${i + 1}) ${data[i].title}`;
        Container.append(newElement);
    }
}

const url = "https://jsonplaceholder.typicode.com/photos"

const xhr = new XMLHttpRequest();
//console.log(xhr);

xhr.onreadystatechange = function() {
    if(xhr.readyState ===4) {
       if(xhr.status === 200) {
            const photosArray = JSON.parse(xhr.response);
            showToUser(photosArray);
       }else {
          console.log("ERROR");
       }
    }
}

xhr.open("GET",url);
xhr.send()

// Latest Uses
// fetch()
// axios