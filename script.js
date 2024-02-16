let $ = document;
let selectBtn = $.querySelector(".select-btn");
let selectBoxValue = $.querySelector(".select-btn span");
let optionsEl = $.querySelector(".options");
let inputEl = $.querySelector(".search input");

let countries = [
  "Afghanistan",
  "Algeria",
  "Argentina",
  "Australia",
  "Bangladesh",
  "Belgium",
  "Bhutan",
  "Brazil",
  "Canada",
  "China",
  "Denmark",
  "Ethiopia",
  "Finland",
  "France",
  "Germany",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Italy",
  "Japan",
  "Malaysia",
  "Maldives",
  "Mexico",
  "Morocco",
  "Nepal",
  "Netherlands",
  "Nigeria",
  "Norway",
  "Pakistan",
  "Peru",
  "Russia",
  "Romania",
  "South Africa",
  "Spain",
  "Sri Lanka",
  "Sweden",
  "Switzerland",
  "Thailand",
  "Turkey",
  "Uganda",
  "Ukraine",
  "United States",
  "United Kingdom",
  "Vietnam",
];

selectBtn.addEventListener("click", (e) => {
  e.currentTarget.parentElement.classList.toggle("active");
});

function updateElem(liEl) {
  inputEl.value = "";
  for (const liItem of optionsEl.children) {
    if (liItem.innerHTML === liEl.innerHTML) {
      // liItem.classList.add("selected")
      liItem.setAttribute("class", "selected");
    } else {
      // liItem.classList.remove("selected")
      liItem.removeAttribute("class", "selected");
    }
  }
  selectBoxValue.innerHTML = liEl.innerHTML;
  selectBtn.parentElement.classList.remove("active");
}

function showCountries() {
  let liEl = null;
  countries.forEach((country) => {
    optionsEl.insertAdjacentHTML(
      "beforeend",
      `<li onclick="updateElem(this)">${country}</li>`
    );
    /*
    liEl = $.createElement("li")
    liEl.innerHTML = country
    liEl.addEventListener("click",(e)=>{
            e.target.classList.add("selected")
            selectBoxValue.innerHTML  = e.target.innerHTML
            selectBtn.parentElement.classList.remove("active")
    })
    optionsEl.append(liEl)
    */
  });
}
inputEl.addEventListener("keyup", (e) => {
  let searchedValue = inputEl.value.toLowerCase();
  let filterdCountries = countries.filter((country) => {
    return country.toLowerCase().startsWith(searchedValue);
  });
  let mappedCountries = filterdCountries.map(
    (liItemMapped) => `<li onclick="updateElem(this)">${liItemMapped}</li>`
  );
  let joinedCountries = mappedCountries.join("")
  
  if ((searchedValue = "")) {
    showCountries();
  } else {
    optionsEl.innerHTML = joinedCountries ? joinedCountries:`<li>this country not found</li>`;
  }
//   if (!joinedCountries) {
//     optionsEl.innerHTML = `<li>this country not found</li>`
//   }

});
window.addEventListener("load", showCountries);
