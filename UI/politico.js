// Create a "close" button and append it to each list item
let myNodelist = document.getElementsByTagName("p");
let i;
for (i = 0; i < myNodelist.length; i++) {
  let span = document.createElement("SPAN");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

//edit
function edit() {
  document.getElementById("party-list").contentEditable = true;
}

// done
function done() {
  document.getElementById("party-list").contentEditable = false;
}

// Create a new list item when clicking on the "Add" button
    addParty = ()=> {
  let li = document.createElement("p");
  let inputValue = document.getElementById("myInput").value;
  let newParty = document.createTextNode(inputValue);
  li.appendChild(newParty);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("party-list").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  let span = document.createElement("span");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = () => {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}