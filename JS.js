let left = document.querySelector("#left > ul");
let right = document.querySelector("#right");
let chatMessageForUser = 4;
let numberOfUsers = 33;


function random(min, max) { // Функция определения случайного значения
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); 
}


for (var i = 1; i<=numberOfUsers; i++) {
  var m = 0;
  var element = document.createElement('li');
  element.textContent = "User "+i;
  left.append(element);

  
  while (m < chatMessageForUser) {
    var element = document.createElement('p');
    element.textContent = "Message from the user "+random(i, numberOfUsers);
    right.append(element);
    m++;
  }
}