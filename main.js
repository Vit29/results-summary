const containerData = document.querySelector(".container-data");
// calling JSON file
function fetchData() {
  fetch("./data.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`error de red - ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      addData(data);
    })
    .catch((error) => {
      console.error("Error al recuperar el archivo JSON:", error);
    });
}

function addData(data) {
  data.forEach((element) => {
    // Create elements
    const div = document.createElement("div");
    const imgIcono = document.createElement("img");
    const spanCategory = document.createElement("span");
    const spanScore = document.createElement("span");
    const spanOf = document.createElement("span");
    const divIconCategory = document.createElement("div");
    const divScoreOf = document.createElement("div");
    // agreagndo estilos 
    divIconCategory.style.display = "flex";
    spanCategory.style.padding = "0 10px";
    divScoreOf.style.fontWeight = "bold";
    spanOf.style.color = "gray";
    div.style.alignItems = "center";
    div.classList.add("container-item");
    // adding the data to your HTML tags
    imgIcono.src = element.icon;
    imgIcono.alt = 'icon'
    spanCategory.textContent = element.category;
    spanScore.textContent = element.score;
    spanOf.textContent = " / 100";
    // containers for the data
    // left
    divIconCategory.appendChild(imgIcono);
    divIconCategory.appendChild(spanCategory);
    // right
    divScoreOf.appendChild(spanScore);
    divScoreOf.appendChild(spanOf);
    // applying styles depending on your category

    const category = spanCategory.textContent;

    spanCategory.style.color =
    category === "Reaction" ? "var(--Light-red)" :
    category === "Memory" ? "var(--Orangey-yellow)" :
    category === "Verbal" ? "var(--Green-teal)" :
    category === "Visual" ? "var(--Cobalt-blue)" :
    "var(--Default-color)"; 

    div.style.backgroundColor =
    category === "Reaction" ? "var(--Light-red-trans)" :
    category === "Memory" ? "var(--Orangey-yellow-trans)" :
    category === "Verbal" ? "var(--Green-teal-trans)" :
    category === "Visual" ? "var(--Cobalt-blue-trans)" :
    "var(--Default-trans)"; 
    // adding the elements to their section
    div.appendChild(divIconCategory);
    div.appendChild(divScoreOf);
    containerData.appendChild(div);
  });
}

document.addEventListener("DOMContentLoaded", fetchData);
