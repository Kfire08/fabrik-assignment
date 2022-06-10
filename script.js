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

/* search */

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

var models = [
  [
    "car",
    "https://sketchfab.com/3d-models/free-1972-datsun-240k-gt-b2303a552b444e5b8637fdf5169b41cb",
  ],
];

function upload() {
  var link = document.getElementById("link");
  var name = document.getElementById("model-name");
  models.push([name, link]);
  console.log(models);
  const modals = document.querySelectorAll(".modal.active");
  modals.forEach((modal) => {
    closeModal(modal);
  });
}

function test() {
  let modellist = document.getElementsByTagName("a");
  var x = modellist[0];
  x.href = models[0][1];
  x.children[0].innerText = models[0][0];
  document.getElementById("model-list-id").appendChild(x);

  for (var i = 1; i < models.length; i++) {
    let modellist = document.getElementsByTagName("a");
    var x = modellist[0].cloneNode(true);
    x.href = models[i][1];
    x.children[0].innerText = models[i][0];
    document.getElementById("model-list-id").appendChild(x);
  }
}

window.onload = function () {
  test();
};

var form = document.getElementById("add-form");
function handleForm(event) {
  event.preventDefault();
}
form.addEventListener("submit", handleForm);
