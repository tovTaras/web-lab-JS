const nameInput = document.getElementById("name_input");
const maxSpeedInput = document.getElementById("max_speed_input");
const millageInput = document.getElementById("millage_input");
const itemsContainer = document.getElementById("items_container");
const totalValue = document.getElementById("totalValue");


const getItemId = (id) => `item-${id}`;

const itemTemplate = ({ id, name, max_speed, millage }) => `
<div id="${getItemId(id)}" class="card" style="width: 18rem; margin-bottom: 15px">
            <div class="card-body">
              <h5 class="card-title">Name: ${name}</h5>
              <p class="card-text">Max speed: ${max_speed}km/hour</p>
              <p class="card-text">Millage: ${millage}km</p>
            </div>
          </div>`

export const addItemToPage = ({ id, name, max_speed, millage }) => {
  itemsContainer.insertAdjacentHTML(
    "afterbegin",
    itemTemplate({ id, name, max_speed, millage })
  );
}

export const clearInputs = () => {
  nameInput.value = "";
  maxSpeedInput.value = "";
  millageInput.value = "";
}

export const renderItemsList = (items) => {
  itemsContainer.innerHTML = "";

  for (const item of items) {
    addItemToPage(item)
  }
};

export const getInputValues = () => {
  var myTextboxElem = nameInput;
  if (myTextboxElem.value !== "") {
    return {
      name: nameInput.value,
      max_speed: maxSpeedInput.value,
      millage: millageInput.value,
    };
  } else {
    alert("Name is obligatory");
  }
};

export const sortItems = ({ cars, property }) => {
  function sortmax_speed(property) {
    if (property == "max_speed") {
      cars.sort((a, b) => a.max_speed - b.max_speed);
    }
  }
  function sortmillage(property) {
    if (property == "millage") {
      cars.sort((a, b) => b.millage - a.millage);
    }
  }

  if (property == "max_speed") {
    sortmax_speed(property);
  } else {
    sortmillage(property);
  }
  itemsContainer.innerHTML = ""
  renderItemsList(cars)
}

export const countValue = ({ cars, property }) => {
  totalValue.innerHTML = "";
  const totalValues = cars.reduce((sum, current) => {
    if (property === "max_speed") {
      return parseInt(sum, 10) + parseInt(current.max_speed, 10)
    }
    if (property === "millage") {
      return parseInt(sum, 10) + parseInt(current.millage, 10)
    }
    return "nothing"
  }, 0)

  totalValue.innerHTML = totalValues;
}
