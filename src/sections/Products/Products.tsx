import Slider from '@/components/common/Slider/Slider';
import ProductCard from '@/components/ui/ProductCard';
import { products } from '@/data/products.json';
import styles from './Products.module.css';
const slides = products.map((product, i) => ({
  id: i,
  content: (
    <ProductCard
      img={product.img}
      imgBg={product.imgBg}
      alt={product.alt}
      name={product.name}
      descriptionItems={product.descriptionItems}
      link={product.link}
      buttonText="детальніше"
    />
  ),
}));
function Products() {
  return (
    <section id="products" className={`bg-green ${styles.container}`}>
      <Slider slides={slides} isProductsSlider={true} />
    </section>
  );
}

export default Products;
