import { parseRequestUrl } from "../utils/parseRequestUrl";
import { getProduct } from "../api/GET/getProduct";


export const ProductPage = {
  render: async () => {
    const req = parseRequestUrl();
    const product = await getProduct(req.id);
    console.log(product);
    const { _id: id, name, category, image, brand, price, acutalPrice, rating, countInStock
    } = product;
  
   if (product.error) {
      return `<div>${product.error}</div>`;
    }

    return `
        <div class='page_product'>
            <div class='page_product_column_one'>
              <picture>
                <img src=${image} />
              </picture>
            </div>
            <div class='page_product_column_two'>
                <div>
                  <h1>${name}</h1>
                  <span>${rating}</span>
                </div>
                <div class='page_product_info'>
                   <div class='page_product_info_content'>
                    <span class='page_product_info_cat'>Categoria:</span>
                    <span class='page_product_info_cat_text'>
                    <a href='#'>${category}</a></span> 
                  </div>

                  <div>
                    <span class='page_product_info_brand'>Marca:</span>
                    <span class='page_product_info_brand_text'>
                    <a href='#'>${brand}</a></span> 
                  </div>
                </div>
                <div class='page_product_count'>
                  <span>${
                    countInStock > 0 
                      ? `<span class="success">Disponível</span>`
                      : `<span class="error">Indispoível</span>`
                  } </span>
                  <span>${countInStock} unidades</span>
                </div>
                 <div class='page_product_price'>
                  <span
                   class='page_product_price_one'
                  ><a href='#'>€${acutalPrice}</a></span>
                  <span
                    class='page_product_price_one_old'
                  ><a href='#'>€${price}</a></span>
                </div>
                <div class='page_product_cartbtn'>
                  <button id='add_to_cart' 
                  class='page_product_cartbtn_btn'> 
                  ADICIONAR AO CARRINHO</button>
                </div>
            </div>
        </div>
    `;
  },
};

