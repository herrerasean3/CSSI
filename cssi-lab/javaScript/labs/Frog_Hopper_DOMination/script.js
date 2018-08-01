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

let currentlily = 1;

let frogger = document.querySelector("#frog");
let aPad = document.querySelector(`#lilypad${currentlily}`);
let wOL = document.querySelector('#status');
let allPads = document.getElementsByClassName('lily_pad');
let invisPads = [];

frogger.addEventListener('click', e=>{
  console.log("hop");
  activePad();
});

function activePad(){
    let nPad = document.querySelector(`#lilypad${currentlily+1}`);
    if (currentlily === allPads.length) {
        wOL.textContent = "You Win!";
        window.setTimeout(restartGame, 3000);
    } else if (nPad.classList.contains('invis') === true) {
      wOL.textContent = "You Lose!";
      window.setTimeout(restartGame, 3000);
    } else {
      aPad.classList.remove("active");
      frogger.classList.remove(`pad${currentlily}`);
      currentlily++;
      aPad = document.querySelector(`#lilypad${currentlily}`);
      aPad.classList.add("active");
      frogger.classList.add(`pad${currentlily}`);
    }
    console.log(allPads.length);
    console.log(`#lilypad${currentlily}`);
}

window.setInterval(function(){
  if (frogger.classList.contains(`pad${currentlily}`) && aPad.classList.contains(`pad${currentlily}`)){
  for (var i = 0; i < invisPads.length; i++) {
    if (invisPads[i] != currentlily){
      allPads[invisPads[i]-1].classList.toggle(`invis`);
    }
  }
}
else {
  for (i = 0; i < invisPads.length; i++) {
    allPads[invisPads[i]-1].classList.toggle(`invis`);
  }
}
},1000);

function invisGen(){
  let genCount = getRandomIntInclusive(1,allPads.length-1);
  for (var i = 1; i <= genCount; i++) {
    let gen = getRandomIntInclusive(2,allPads.length-1);
    allPads[gen-1].classList.add(`pad${gen}`, `invis`);
    invisPads.push(gen);
    console.log(gen);
    console.log(`Pad ${gen} should be invisible!`);
  }
}

function restartGame(){
  for (let i = 0; i < allPads.length; i++) {
    console.log(i);
    console.log(allPads[i].classList);
    allPads[i].classList.toggle('invis', false);
    allPads[i].classList.remove(`active`, `invis`, `pad${i+1}`);
    frogger.classList.remove(`pad${i+1}`);
  }
  currentlily = 1;
  aPad = document.querySelector(`#lilypad${currentlily}`);
  wOL.textContent = "";
  aPad.classList.add("active");
  frogger.classList.add(`pad${currentlily}`);
  invisPads = [];
  invisGen();
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

document.body.onkeyup = function(e){
    if(e.keyCode == 32){
        restartGame();
    }
};

invisGen();
