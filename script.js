/* ------------------------------------------- UPLOAD FORM MODAL ------------------------------------------- */

const openAddModalButtons = document.querySelectorAll("[data-modal-target]");
const closeAddModalButtons = document.querySelectorAll("[data-close-button]");
const addOverlay = document.getElementById("addoverlay");

openAddModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});

addOverlay.addEventListener("click", () => {
  const modals = document.querySelectorAll(".modal.active");
  modals.forEach((modal) => {
    closeModal(modal);
  });
});

closeAddModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = button.closest(".modal");
    closeModal(modal);
  });
});

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add("active");
  addOverlay.classList.add("active");
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove("active");
  addOverlay.classList.remove("active");
}

/* -------------------------------------------- UPLOAD FORM MODAL ENDS HERE ------------------------------------ */

/* ---------------------------------------------- SEARCH FUNCTIONALITY ------------------------------------ */

const searchmodel = () => {
  let filter = document.getElementById("search-id").value.toUpperCase();
  let modellist = document.getElementsByTagName("a");
  let modeltext = document.getElementsByClassName("model-title");
  for (var i = 0; i < modeltext.length; i++) {
    let textValue = modeltext[i].textContent;
    if (textValue.toUpperCase().indexOf(filter) > -1) {
      modellist[i].style.display = "";
    } else {
      modellist[i].style.display = "none";
    }
  }
};

/* -------------------------------------- SEARCH FUNCTIONALITY ENDS HERE ------------------------------------ */

/* ------------------------------------------ MODEL LIST ITEM UPLOAD ---------------------------------------- */

var models = [["name", "link"]];

function upload() {
  var link = document.getElementById("link").value;
  var name = document.getElementById("model-name").value;
  models.push([name, link]);
  localStorage.models = JSON.stringify(models);

  let modellist = document.getElementsByTagName("a");
  var x = modellist[0].cloneNode(true);
  x.href = link;
  x.children[0].innerText = name;
  document.getElementById("model-list-id").appendChild(x);

  document.getElementById("link").value = "";
  document.getElementById("model-name").value = "";
  const modals = document.querySelectorAll(".modal.active");
  modals.forEach((modal) => {
    closeModal(modal);
  });
}

/* -------------------------------------- MODEL LIST ITEM UPLOAD ENDS HERE ---------------------------------- */

/* -------------------------------------------- LOADING STORED MODELS --------------------------------------- */

function test() {
  var storedModels = JSON.parse(localStorage.models);
  for (var i = 1; i < storedModels.length; i++) {
    let modellist = document.getElementsByTagName("a");
    var x = modellist[0].cloneNode(true);
    x.href = storedModels[i][1];
    x.children[0].innerText = storedModels[i][0];
    document.getElementById("model-list-id").appendChild(x);
  }
}

window.onload = function () {
  test();
};

/* -------------------------------------- LOADING STORED MODELS ENDS HERE ------------------------------------ */

/* ------------------------------------------ PREVENTING PAGE REFRESH ---------------------------------------- */

var form = document.getElementById("add-form");
function handleForm(event) {
  event.preventDefault();
}
form.addEventListener("submit", handleForm);

/* ---------------------------------- PREVENTING PAGE REFRESH ENDS HERE -------------------------------------- */
