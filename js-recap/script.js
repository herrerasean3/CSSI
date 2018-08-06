let txt = '';
let a = [1,2,3,4,5];
let b = [];

function test1(value,index,array){
  txt = txt +value+" ";
  console.log(txt);
}

function test2(value,index,array){
  txt = txt + index + "";
  console.log(array);
}

function test3(value,index,array){
  if(index+1<array.length){
    b.push(value+array[index+1]);
    console.log(b);
  }
}

a.forEach(test1);
a.forEach(test3);
