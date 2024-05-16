import Slider from '@/components/common/Slider/Slider';
import ProductCard from '@/components/ui/ProductCard';
import { products } from '@/data/products.json';
console.log(products);
const slides = products.map((product, i) => ({
  id: i,
  content: (
    <ProductCard
      img={product.alt}
      imgBg={product.imgBg}
      alt={product.alt}
      name={product.name}
      descriptionItems={product.descriptionItems}
      link={product.link}
      buttonText=""
    />
  ),
}));
function Products() {
  <Slider slides={slides} isProductsSlider={true} />;
}

export default Products;
