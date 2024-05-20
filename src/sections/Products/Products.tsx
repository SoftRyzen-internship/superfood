'use client';
import { usePathname } from 'next/navigation';

import Slider from '@/components/common/Slider/Slider';
import ProductCard from '@/components/ui/ProductCard';
import productCards from '@/data/products.json';
import styles from './Products.module.css';

const { products } = productCards;
const slides = products.map(product => ({
  id: product.link,
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
  const currentPath = usePathname();
  const normalizedPath = currentPath.startsWith('/')
    ? currentPath.slice(1)
    : currentPath;
  const filteredSlides = slides.filter(slide => slide.id !== normalizedPath);
  return (
    <section
      id="products"
      className={`bg-green overflow-hidden ${styles.container}`}
    >
      <Slider slides={filteredSlides} isProductsSlider={true} />
    </section>
  );
}

export default Products;
