// Copyright 2018 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// Use querySelector to store the div in a variable.
let redButton = document.querySelector('#r');
let greenButton = document.querySelector('#g');
let blueButton = document.querySelector('#b');
let clearButton = document.querySelector('#c');
let box = document.querySelector('#responseBox');

// Use addEventListener to respond to a click event.
redButton.addEventListener('click', (e) => {
  buttonCode("red");
})

greenButton.addEventListener('click', (e) => {
  buttonCode("green");
})

blueButton.addEventListener('click', (e) => {
  buttonCode("blue");
})

clearButton.addEventListener('click', (e) => {
  buttonCode("clear");

})

function buttonCode(color){
  console.log(`You clicked the ${color} button!`);
  box.className = `${color}`;
  if (color === "clear") {
    box.className = "";
    box.innerHTML = "";
  } else {
    box.className = `${color}`;
    box.innerHTML += `${color.toUpperCase()} `;
  }
}
