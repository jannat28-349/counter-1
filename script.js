// const d = document.getElementById("list");

// d.innerHTML = "<p> Hello </p>";

// const btn = document.getElementsByTagName("button")[0];
// btn.style.backgroundColor = "blue";
// btn.style.padding = "10px 20px";
// btn.style.borderRadius = "30px";
// btn.style.color = "white";

function addElement() {
  const d = document.getElementById("list");
  const e = document.createElement("h1");
  const text = document.getElementById("item").value;
  e.innerText = text;
  d.appendChild(e);
}
