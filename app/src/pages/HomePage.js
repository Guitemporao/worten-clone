import { sliderProducts } from '../components/slideProducts/slideProducts.js';

export const HomePage = {
  render: () => {
     return `
    <div>
      Slider
    </div>
    <div>
      ${sliderProducts()}
    </div>
    <div>
      hello world
    </div>
    
    `
  },
};



