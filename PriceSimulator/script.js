const productName = document.getElementById("product-name");
const colorSelect = document.getElementById("color-select");
const colorOptionTemplate = document.getElementById("color-option-template");
const versionSelect = document.getElementById("version-select");
const versionOptionTemplate = document.getElementById(
  "version-option-template"
);
const optionField = document.getElementById("options-field");
const optionCheckboxTemplate = document.getElementById(
  "option-checkbox-template"
);
const price = document.getElementById("price");

const productData = {
  name: "Headphones",
  colors: ["black", "white", "red"],
  versions: [
    {
      name: "cheap",
      addsToPrice: 0,
    },
    {
      name: "medium",
      addsToPrice: 30,
    },
    {
      name: "Premium",
      addsToPrice: 100,
    },
  ],
  options: [
    {
      name: "Extended warranty",
      addsToPrice: 25,
    },
    {
      name: "Wireless",
      addsToPrice: 10,
    },
    {
      name: "Noise cancelling",
      addsToPrice: 20,
    },
  ],
  basePrice: 30,
};

class PriceSimulator {
  constructor(data = productData) {
    this.data = data;
    this.colorCount = 0;
    this.versionCount = 0;
    this.optionCount = 0;
    this.render();
  }

  setColorOptions(color) {
    const clone = colorOptionTemplate.content.cloneNode(true);
    const option = clone.querySelector("option");

    option.textContent = color;
    if (!this.colorCount) {
      option.setAttribute("selected", "selected");
    }
    option.setAttribute("value", color);
    this.colorCount++;
    colorSelect.appendChild(clone);
  }

  setVersionOptions(version) {
    const clone = versionOptionTemplate.content.cloneNode(true);
    const option = clone.querySelector("option");

    option.textContent = version.name;
    if (!this.versionCount) {
      option.setAttribute("selected", "selected");
    }
    option.setAttribute("value", version.name);
    this.versionCount++;
    versionSelect.appendChild(clone);
  }

  setOptionCheckboxes(option){
    const clone = optionCheckboxTemplate.content.cloneNode(true);
    const label = clone.querySelector("label");
    const checkbox = clone.querySelector("input");
    const id = "option-" + this.optionCount;

    label.setAttribute("for", id);
    label.innerText = option.name + ": ";
    checkbox.setAttribute("id", id);
    this.optionCount++;
    optionField.appendChild(clone);
  }

  render() {
    productName.innerText = this.data.name;
    this.data.colors.forEach(this.setColorOptions, this);
    this.data.versions.forEach(this.setVersionOptions, this);
    this.data.options.forEach(this.setOptionCheckboxes, this);
    price.innerText = "€" + this.data.basePrice;
  }
}

const priceSimulator = new PriceSimulator();
