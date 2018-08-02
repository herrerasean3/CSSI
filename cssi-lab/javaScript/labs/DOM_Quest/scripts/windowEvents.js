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

console.log("Running Window Events Script");
let box6 = document.getElementById('box6');
let rect = document.getElementById('rect');
let masterD = document.getElementById('DOMaster');
box6.style.height = '100px';
box6.style.width = '100px';
window.addEventListener("keypress", e=> {
  console.log(e.which || e.keyCode);
  let b6h = parseInt(box6.style.height.replace("px",""))
  let b6w = parseInt(box6.style.width.replace("px",""))
  if (e.which === 99 || e.keyCode === 99) {
    box6.style.borderRadius = '50%';
    box6.style.height = `${b6h/2}px`;
    box6.style.width = `${b6w/2}px`;
  } else if (e.which === 115 || e.keyCode === 115) {
    box6.style.borderRadius = '0%';
    box6.style.height = `${b6h*2}px`;
    box6.style.width = `${b6w*2}px`;
  }
})

window.addEventListener('scroll',()=>{
  if (window.scrollY > 50){
    rect.style.backgroundColor = "black";
    masterD.classList.remove("hide");
  } else {
    rect.style.backgroundColor = "tomato";
    masterD.classList.add("hide");
  }
})

// insert a function that prints out the key code of a key pressed
