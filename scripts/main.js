let myImage = document.querySelector('img');

myImage.onclick = () => {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/IMG_0605.jpg') {
    myImage.setAttribute ('src','images/2015-10-24 09.25.19.jpeg');
  } else {
    myImage.setAttribute ('src','images/IMG_0605.jpg');
  }
}

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  let myName = prompt('Simona, how old are you?');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Your age now is ' + myName + ' years!';
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  let storedName = localStorage.getItem("name");
  myHeading.innerHTML = 'Congratulation, your age is ' + storedName + ' years!';
}


myButton.onclick = () => {
  setUserName();
}