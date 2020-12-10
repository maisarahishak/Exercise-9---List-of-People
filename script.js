function fullNameList(){
  var people = {info:[
                  {fName:'Alysssa', mName:'P.', lName:'Hacker', age:26},
                  {fName:'Ben', mName:'L.', lName:'Bitdiddle', age:34},
                  {fName:'Eva', mName:'Lu', lName:'Ator', age:40},
                  {fName:'Lem', mName:'E.', lName:'Tweakit', age:45},
                  {fName:'Louis', mName:'M.', lName:'Reasoner', age:21},
                  {fName:'Shahan', mName:'Haig', lName:'Krakirian', age:26},
              ]}

  var text = "";
  let chars = people['info'];
  for(let i=0, len=chars.length; i<len; i++){
    text += [i+1] + "- " + chars[i].fName + " " + chars[i].mName + " " + chars[i].lName + "<br>";
  }
  document.getElementById("solution").innerHTML = text;
}

function getAgeFunction(){
  if(document.getElementById("name-input").value == "Alysssa"){
    document.getElementById("solution1").innerHTML = 26;
  }else if(document.getElementById("name-input").value == "Ben"){
    document.getElementById("solution1").innerHTML = 34;
  }else if(document.getElementById("name-input").value == "Eva"){
    document.getElementById("solution1").innerHTML = 40;
  }else if(document.getElementById("name-input").value == "Lem"){
    document.getElementById("solution1").innerHTML = 45;
  }else if(document.getElementById("name-input").value == "Louis"){
    document.getElementById("solution1").innerHTML = 21;
  }else if(document.getElementById("name-input").value == "Shahan"){
    document.getElementById("solution1").innerHTML = 26;
  }else{
    document.getElementById("solution1").innerHTML = "";
  }
}

let btn = document.getElementById("all");
btn.addEventListener("click", fullNameList);
let btn2 = document.getElementById("age-button");
btn2.addEventListener("click", getAgeFunction);
