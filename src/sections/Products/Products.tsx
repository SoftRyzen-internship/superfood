import Slider from '@/components/common/Swiper/Swiper';
import ProductCard from '@/components/ui/ProductCard';
import { products } from '@/data/products.json';
console.log(products);
function Products() {
  <Slider slides={products} isProductsSlider={true} />;
}

export default Products;
