let myImage = document.querySelector('img');

myImage.addEventListener('click', function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/yuki.jpg') {
      myImage.setAttribute('src', 'images/yuki2.jpg');
    } else {
      myImage.setAttribute('src', 'images/yuki.jpg');
    }
});

let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Veuillez saisir votre nom.');
    localStorage.setItem('nom', myName);
    myHeading.textContent = 'Es-tu prêt(e) à découvrir le temple de la beauté, ' + myName + '?';
  }

if (!localStorage.getItem('nom')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('nom');
    myHeading.textContent = 'Es-tu prêt(e) à découvrir le temple de la beauté, ' + storedName + '?';
  }

document.getElementById("acné").addEventListener('click', function() {
    setUserName();
  });
