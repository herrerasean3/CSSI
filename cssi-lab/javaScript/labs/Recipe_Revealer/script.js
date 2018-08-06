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

let body = document.querySelector('body');
let button = document.querySelector('button');
let recipe = [];

function addInstructions(recipeArray){
// add all of the instructions into the recipeArray variable
recipe.push("Heat oven to 425ºF. Prepare Double-Crust Pastry.");
recipe.push("Mix sugar, flour, cinnamon, nutmeg and salt in large bowl.");
recipe.push("Stir in apples.");
recipe.push("Turn into pastry-lined pie plate. Dot with butter. Trim overhanging edge of pastry 1/2 inch from rim of plate.");
recipe.push("Roll other round of pastry. Fold into fourths and cut slits so steam can escape.");
recipe.push("Unfold top pastry over filling; trim overhanging edge 1 inch from rim of plate.");
recipe.push("Fold and roll top edge under lower edge, pressing on rim to seal; flute as desired.");
recipe.push("Cover edge with 3-inch strip of aluminum foil to prevent excessive browning. Remove foil during last 15 minutes of baking.");
recipe.push("Bake 40 to 50 minutes or until crust is brown and juice begins to bubble through slits in crust. Serve warm if desired.");


// return the array

return recipe;
}

function checkStep(arr,access){
// return the correct step in the given array
return arr[access-1]
}

// Write a function checkLength

function checkLength(arr){
  return arr.length;
}


// Write a function publishRecipe
function publishRecipe(arr){
  arr.forEach((e)=>{
  console.log(`${arr.indexOf(e)+1}. ${e}`);
})
}

function publishRecipeToPage(arr){
  arr.forEach((e)=>{
    var para = document.createElement('p');
    para.id = `${arr.indexOf(e)+1}`;
    para.textContent = `${arr.indexOf(e)+1}. ${e}`
    body.appendChild(para);

  })
}

button.addEventListener('click', function(){
  addInstructions();
  publishRecipeToPage(recipe);
});
