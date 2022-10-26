import data from "../../../../api/data";
import { parseRequestUrl } from "../../utils/parseRequestUrl";
import { Rating } from "../Rating/Rating";


export const sliderProducts = () => {
    const { products } = data;

    return `
    <ul class="products">
      ${products
        .map(
          (product) => `
      <li>
        <div class="product">
          <a href="/#/product/${product._id}">
            <img
            class='product_image'
            src="${product.image}" 
            alt="${product.name}" />
          </a>
        <div class="product_name">
          <a href="/#/product/1">
            ${product.name}
          </a>
        </div>
        <div class='product_p'>
          <div class="product_p_price">
            €${product.acutalPrice}
          </div>
          <div class="product_p_lastprice">
            €${product.price}
          </div>
        </div>
        <div class="product_brand">
          ${product.brand}
        </div>
        <div class="product_rating">
          ${Rating.render({
            value: product.rating,
            text: `${product.reviews} reviews`,
          })}
        </div>
        <div class='product_cart'>
          <button onclick='addtocart'>Adicionar </button>
        </div>
        </div>
      </li>
      `
        )
      .join('\n')}
    `;
}