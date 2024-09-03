const boxes = document.querySelectorAll(".box");
const containers = document.querySelectorAll(".container");
const lastAddedBoxes = {}; 
let lastSelCont = null;

boxes.forEach((box) => {
  box.addEventListener("click", () => fillContainer(box));
});

function fillContainer(box) {
  const containerBox = document.createElement("div");
  const text = box.textContent;

  containerBox.textContent = text;
  containerBox.style.width = "100%";
  k=text === "1" ? "red" :
  text === "2" ? "blue" :
  text === "3" ? "orangered" :
  text === "4" ? "green" :
  text === "5" ? "orange" :
  text === "6" ? "purple" :
  text === "7" ? "pink" :
  text === "8" ? "brown" : "transparent";
  containerBox.style.backgroundColor = k;
  containerBox.style.marginBottom = "5px";
  containerBox.classList.add("containerBox");

  containers[0].appendChild(containerBox);


  box.classList.add("added");

  lastAddedBoxes[containers[0].id] = containerBox; 
}


containers.forEach((container) => {
  container.addEventListener("click", () => movingboxes(container));
});



function movingboxes(container) {
    if (lastSelCont) {
      const box = lastAddedBoxes[lastSelCont.id];
      
      if (box && container !== lastSelCont) {
        lastSelCont.removeChild(box);
        container.appendChild(box);
  
        lastAddedBoxes[container.id] = box;
  
        if (lastSelCont.children.length > 0) {
          lastAddedBoxes[lastSelCont.id] = lastSelCont.lastElementChild;
        } 
        containers.forEach(item => item.classList.remove("highlighted"));
        lastSelCont = null;
      }
      else{
        alert("warning");
        lastSelCont = null;
      }
    } else {
      removeandaddHighlight(container);
      lastSelCont = container;
    }
  }

function removeandaddHighlight(container) {
  containers.forEach((item) => item.classList.remove("highlighted"));
  container.classList.add("highlighted");
}
