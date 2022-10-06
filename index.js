import {
    getInputValues,
    addItemToPage,
    clearInputs,
    renderItemsList,
    sortItems,
    countValue,
  } from "./dom_util.js";

  const submitButton = document.getElementById("submit_button");
  const findButton = document.getElementById("find_button");
  const cancelFindButton = document.getElementById("cancel_find_button");
  const findInput = document.getElementById("find_input");
  const sortProperty = document.getElementById("property_sorting");
  const sort_button = document.getElementById("sort_button");
  const totalValues = document.getElementById("property_total_value");
  const value_button = document.getElementById("value-button")


  let cars = [];

  const addItem = ({ name, max_speed, millage }) => {
    const generatedId = uuid.v1();

    const newItem = {
      id: generatedId,
      name,
      max_speed,
      millage
    };
    cars.push(newItem);
    addItemToPage(newItem);
  };

  submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    const { name, max_speed, millage } = getInputValues();
    clearInputs();
    addItem({
      name,
      max_speed,
      millage,
    });
  });

  findButton.addEventListener("click", () => {
    const foundcars = cars.filter(cars => cars.name.search(findInput.value) !== -1);

    renderItemsList(foundcars);
  });

  cancelFindButton.addEventListener("click", () => {
    renderItemsList(cars);
    findInput.value = "";
  });

  sortProperty.addEventListener("change", () => {
    sortItems({ cars, property: sortProperty.value });
  });

  sort_button.addEventListener("click", () => {
    cars = cars.reverse();
    renderItemsList(cars);
  });
 

  totalValues.addEventListener("change", () => {
    countValue({ cars, property: totalValues.value })
  });
 

  renderItemsList(cars);