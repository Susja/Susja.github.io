let myImage = document.querySelector('img');

myImage.onclick = () => {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/2B9D0692-48CD-434E-9885-8D65999235B0.jpeg') {
    myImage.setAttribute ('src','images/1763AE12-8609-466D-BE35-C0FD1A07AD58.jpeg');
  } else {
    myImage.setAttribute ('src','images/2B9D0692-48CD-434E-9885-8D65999235B0.jpeg');
  }
}

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Hello, ' + myName;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  let storedName = localStorage.getItem("name");
  myHeading.innerHTML = 'Hello, ' + storedName;
}


myButton.onclick = () => {
  setUserName();
}