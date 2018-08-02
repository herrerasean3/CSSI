let button = document.querySelector('#gen');
let stry = document.getElementById('result');
let body = document.querySelector('body');
let n = [];
let v = [];
let adj = [];
let num = [];
let notProv = "[Word Not Provided]";

function init(){
  n = [];
  v = [];
  adj = [];
  num = [];
  story = "";
}

function generateMsg() {
  init();
  console.log('Running generateMsg')
  let nouns = document.querySelectorAll('.n');
  let verbs = document.querySelectorAll('.v');
  let adjec = document.querySelectorAll('.adj');
  let numb = document.querySelectorAll('.num');
  body.style.backgroundColor = `rgb(${getRandomIntInclusive(100,255)},${getRandomIntInclusive(100,255)},${getRandomIntInclusive(100,255)})`;
  console.log('body color changed.')
  for (var i = 0; i < nouns.length; i++) {
    if (nouns[i] === "") {
      n[i] = notProv;

    } else {
      n[i] = nouns[i].value;
    }
  }
  console.log(n);
  for (var i = 0; i < verbs.length; i++) {
    if (verbs[i] === "") {
      v[i] = notProv;

    } else {
      v[i] = verbs[i].value;
    }
  }
  console.log(v);
  for (var i = 0; i < adjec.length; i++) {
    if (adjec[i] === "") {
      adj[i] = notProv;

    } else {
      adj[i] = adjec[i].value;
    }
  }
  console.log(adj);
  for (var i = 0; i < numb.length; i++) {
    if (numb[i] === "") {
      num[i] = notProv;
    } else {
      num[i] = numb[i].value;
    }
  }
      console.log(adj);
  let stArr = [`When I was ${num[0]}... ${num[0]} years old, I saw for the first time in my life... I saw an ${n[0]} of ${n[1]}. I saw a ${n[2]}... a ${n[2]} that, though ${adj[0]} as it seemed, ${v[0]} me... ${v[0]} my being, ${v[0]} who I am... Made me who I am... `, `The ${n[0]}, ${n[1]}, the ${n[0]} was ${adj[0]}... no more than maybe ${num[0]} years since ${n[2]}, since... since coming into ${n[2]}... and there it was before me in print, I saw it... a ${n[0]}... What was it ${v[0]}?`];
  console.log(stArr[getRandomIntInclusive(0, stArr.length-1)]);
  stry.innerHTML = `${stArr[getRandomIntInclusive(0, stArr.length-1)]}`;
  console.log(stry);
  console.log(body);
}

button.addEventListener("click", ()=>{
  generateMsg();
});

function getRandomIntInclusive(min, max){
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max-min+1))+min;
}

init();
