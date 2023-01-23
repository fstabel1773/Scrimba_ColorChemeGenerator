const colorSeed = document.getElementById("color-seed");
const getColorSchemeBtn = document.getElementById("get-color-scheme-btn");
const modeSelection = document.getElementById("mode-selection");
const colorsContainer = document.getElementById("colors-container");

let colorsHexArray = [];
let colorHtml = ``;

// Getting value of colorSeed and mode selection on clicking
getColorSchemeBtn.addEventListener("click", (event) => {
  event.preventDefault();
  console.log(colorSeed.value);
  console.log(modeSelection.value);
  col = colorSeed.value.slice(1);
  fetch(
    `https://www.thecolorapi.com/scheme?hex=${col}&format=json&mode=${modeSelection.value}&count=6`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      colorsHexArray = data.colors.map((color) => {
        return color.hex.value;
      });
      console.log(colorsHexArray);
      colorsHexArray.forEach((hexValue) => {
        colorHtml += `
            <div class="color-value-container">
                <div class="color-box" style="background-color: ${hexValue}"></div>
                <div class="hex-value-container">${hexValue}</div>
            </div>
        `;
      });
      console.log(colorHtml);
      renderColorScheme();
    });
});

function renderColorScheme(array) {
  colorsContainer.innerHTML = colorHtml;
}
