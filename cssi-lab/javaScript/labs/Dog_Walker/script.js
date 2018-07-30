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

// Task 1
let dogName1 = "Steve";
let dogType1 = "beagle";

// Complete Task 1 Below

  let task1 = document.createElement("div");
  let t1Cont = document.createTextNode(`I will walk ${dogName1} the ${dogType1} today at 12:00pm`);
  task1.appendChild(t1Cont);
   var targetEle = document.getElementById("script");
   document.body.insertBefore(task1, targetEle);

let dogName2 = "Joe";
let dogType2 = "bulldog";

// Complete Task 2 Below

if (dogType2.toUpperCase() == ="CORGI") {
  console.log(`I will walk ${dogName2} the ${dogType2} today at 12:00pm.`)
} else {
  console.log(`I will walk ${dogName2} the ${dogType2} today at 2:00pm.`)
}

let dogName = "Lola";
let dogType = "poodle";

// Complete Task 3 Below

function dogSchedulerBasic(name, breed) {
  if (breed.toUpperCase() === "CORGI" || "BEAGLE") {
    console.log(`I will walk ${dogName2} the ${dogType2} today at 12:00pm.`);
  } else if(breed.toUpperCase() === "BULLDOG") {
    console.log(`I will walk ${dogName2} the ${dogType2} today at 1:00pm.`);
  } else {
    console.log(`I will walk ${dogName2} the ${dogType2} today at 2:00pm.`);
  }
}

//Extension Below

function dogSchedulerAdv(name, breed, dogOwner) {
  var str = name.toLowerCase();
  str = str.split("");
  if (dogOwner === null){
    dogOwner = "Unknown";
  }
  str[0] = str[0].toUpperCase();
  str = str.join("");

  if (breed.toUpperCase() === "CORGI" || "BEAGLE") {
    console.log(`I will walk ${dogOwner}'s ${str} today at 12:00pm.`);
  } else if(breed.toUpperCase() === "BULLDOG") {
    console.log(`I will ${dogOwner}'s walk ${str} today at 1:00pm.`);
  } else {
    console.log(`I will ${dogOwner}'s walk ${str} today at 2:00pm.`);
  }
}
