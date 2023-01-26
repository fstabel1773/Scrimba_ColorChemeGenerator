const colorSeed = document.getElementById("color-seed");
const colorCountInput = document.getElementById("color-count");
const modeSelection = document.getElementById("mode-selection");
const getColorSchemeBtn = document.getElementById("get-color-scheme-btn");
const colorsContainer = document.getElementById("colors-container");
const colorsFooter = document.getElementById("colors-footer");

getColorSchemeBtn.addEventListener("click", async (event) => {
  event.preventDefault();

  const hexValue = colorSeed.value.slice(1);
  const mode = modeSelection.value;
  const count = colorCountInput.value;

  const response = await fetch(
    `https://www.thecolorapi.com/scheme?hex=${hexValue}&format=json&mode=${mode}&count=${count}`
  );
  const data = await response.json();
  const colorsHexArray = data.colors.map((color) => {
    return color.hex.value;
  });

  let colorBoxHtml = ``;
  let colorsFooterHtml = ``;
  colorsHexArray.forEach((hexValue) => {
    colorBoxHtml += `
      <div class="color-box" style="background-color: ${hexValue}"></div>
      `;
    colorsFooterHtml += `<p>${hexValue}</p>`;
  });

  colorsContainer.style.gridTemplateColumns = `repeat(${count}, 1fr`;
  colorsFooter.style.gridTemplateColumns = `repeat(${count}, 1fr`;

  colorsContainer.innerHTML = colorBoxHtml;
  colorsFooter.innerHTML = colorsFooterHtml;
});
