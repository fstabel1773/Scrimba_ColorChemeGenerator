const colorSeed = document.getElementById("color-seed");
const modeSelection = document.getElementById("mode-selection");
const getColorSchemeBtn = document.getElementById("get-color-scheme-btn");
const colorsContainer = document.getElementById("colors-container");
const colorsFooter = document.getElementById("colors-footer");

let colorsHexArray = [];
let colorsContainerHtml = ``;
let colorsFooterHtml = ``;

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
        colorsContainerHtml += `
            <div class="color-box" style="background-color: ${hexValue}"></div>
        `;
        colorsFooterHtml += `
            <p class="hex-value">${hexValue}</p>
        `;
      });
      console.log(colorsFooterHtml);
      renderColorScheme();
      console.log();
    });
});

function renderColorScheme() {
  colorsContainer.innerHTML = colorsContainerHtml;
  colorsFooter.innerHTML = colorsFooterHtml;
}
