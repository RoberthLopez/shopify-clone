class CustomVariantSelector extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const product = JSON.parse(this.dataset.product);
    this.addEventListener('change', (event) => {
      this.updateVariant(product);
    });
  }

  updateVariant(product) {
    const selectedOptions = [];
    const variantInput = this.querySelector('#variant-id-input');

    product.options.forEach((optionName) => {
      const optionValue = this.querySelector('input[name="options[' + optionName + ']"]:checked').value;
      selectedOptions.push(optionValue);
    });

    const selectedVariant = this.getSelectedVariant(product, selectedOptions);
    if (selectedVariant) {
      variantInput.value = selectedVariant.id;
      this.updatePrice(selectedVariant);
    }

    this.handleButtonAvailability(selectedVariant);
  }

  getSelectedVariant(product, options) {
    return product.variants.find((variant) => {
      return variant.options.every((option, index) => {
        return option === options[index];
      });
    });
  }

  updatePrice(selectedVariant) {
    const priceElement = document.querySelector('.product-info__normal-price');

    priceElement.textContent = `$${selectedVariant.price / 100}`;
  }

  handleButtonAvailability(selectedVariant) {
    const addToCartButton = this.querySelector('.product-info__add-to-cart');
    if (selectedVariant) {
      if (selectedVariant.available) {
        addToCartButton.disabled = false;
        addToCartButton.textContent = 'Add to Cart';
      } else {
        addToCartButton.disabled = true;
        addToCartButton.textContent = 'Sold Out';
      }
    } else {
      addToCartButton.disabled = true;
      addToCartButton.textContent = 'Unavailable';
    }
  }
}
customElements.define('custom-variant-selector', CustomVariantSelector);

class CustomQuantitySelector extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    requestAnimationFrame(() => {
      this.sum = this.querySelector('.custom-qty-selector__add');
      this.minus = this.querySelector('.custom-qty-selector__substract');
      this.quantityInput = this.querySelector('input[type="number"]');

      this.sum.addEventListener('click', () => this.incrementQuantity());
      this.minus.addEventListener('click', () => this.decrementQuantity());
    });
  }

  incrementQuantity() {
    let currentValue = parseInt(this.quantityInput.value);
    if (!isNaN(currentValue)) {
      this.quantityInput.value = currentValue + 1;
    }
  }

  decrementQuantity() {
    let currentValue = parseInt(this.quantityInput.value);
    const minValue = parseInt(this.quantityInput.min) || 1;
    if (!isNaN(currentValue) && currentValue > minValue) {
      this.quantityInput.value = currentValue - 1;
    }
  }
}

customElements.define('custom-quantity-selector', CustomQuantitySelector);
