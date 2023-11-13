const containerData = document.querySelector(".container-data");

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
      const div = document.createElement("div");
      div.classList.add("container-item");

      const imgIcono = document.createElement('img')
      const spanCategory = document.createElement("span");
      const spanScore = document.createElement("span");
      const spanOf = document.createElement('span');
      const divIconCategory = document.createElement('div');
      const divScoreOf = document.createElement('div');
      
      divIconCategory.style.display = 'flex'
      spanCategory.style.padding = '0 10px'
      divScoreOf.style.fontWeight = 'bold'
      spanOf.style.color = 'gray'
      div.style.alignItems = 'center'


      imgIcono.src = element.icon
      spanCategory.textContent = element.category
      spanScore.textContent = element.score
      spanOf.textContent = ' / 100'

      
      divIconCategory.appendChild(imgIcono)
      divIconCategory.appendChild(spanCategory)
      
      divScoreOf.appendChild(spanScore)
      divScoreOf.appendChild(spanOf)
      
      
      if(spanCategory.textContent == 'Reaction') {
          spanCategory.style.color = 'var(--Light-red)'
          div.style.backgroundColor = 'var(--Light-red-trans)'
        } else if (spanCategory.textContent == 'Memory') {
            spanCategory.style.color = 'var(--Orangey-yellow)'
            div.style.backgroundColor = 'var(--Orangey-yellow-trans)'
        } else if (spanCategory.textContent == 'Verbal'){
            spanCategory.style.color = 'var(--Green-teal)'
            div.style.backgroundColor = 'var(--Green-teal-trans)'
        } else if (spanCategory.textContent == 'Visual') {
            spanCategory.style.color = 'var(--Cobalt-blue)'
            div.style.backgroundColor = 'var(--Cobalt-blue-trans)'
        }

      div.appendChild(divIconCategory)
      div.appendChild(divScoreOf)
      containerData.appendChild(div);
  });
}


document.addEventListener("DOMContentLoaded", fetchData);
