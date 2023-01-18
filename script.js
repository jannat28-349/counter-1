// const d = document.getElementById("list");

// d.innerHTML = "<p> Hello </p>";

// const btn = document.getElementsByTagName("button")[0];
// btn.style.backgroundColor = "blue";
// btn.style.padding = "10px 20px";
// btn.style.borderRadius = "30px";
// btn.style.color = "white";
const itemTexts = [];
function getInput(){
  return document.getElementById("item").value;
}
function getElement(text) {
  const e = document.createElement("h1");
  e.innerText = text;
  return e;
}

function validation(text) {
  return (text === "") ? false : true;
}

function doesExist(text) {
  // const items = [...document.getElementsByTagName("h1")];
  // const item = items.find(function(item) {
  //   return (item.innerText === text);
  // });

  // return Boolean(item);

  return itemTexts.includes(text);

}
function addElement() {
  const text = getInput();
  if(!validation(text)) {
    alert("Empty string");
    return;
  }

  if(doesExist(text)){
    alert("Duplicate!!!");
    return;
  }

  itemTexts.push(text);
  const d = document.getElementById("list");
  const e = getElement(text);
  d.appendChild(e);
}
