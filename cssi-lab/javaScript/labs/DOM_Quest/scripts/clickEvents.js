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

console.log("Running Click Events Script");
let aBox = document.querySelectorAll('.box');
let rOB = document.querySelectorAll('#container1 .box');

rOB.forEach((e)=> {
  e.addEventListener('click', rOBCheck);
})

aBox.forEach((e)=> {
  e.addEventListener('click', activeBox);
})

function rOBCheck(e){
  e.target.style.backgroundColor = `rgb(${randomColor(255)},${randomColor(255)},${randomColor(255)})`;
  for (var i = 0; i < rOB.length; i++) {
    rOB[i].style.backgroundColor = `${e.target.style.backgroundColor}`
  }
}

function activeBox(e){
  e.target.classList.toggle('active');
}

function randomColor(max){
  return  getRandomIntInclusive(0,max);
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}
