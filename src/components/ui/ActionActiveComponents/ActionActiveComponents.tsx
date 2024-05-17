import { ActionActiveComponentsProps } from './ActionActiveComponents.types';

import action from '@/data/actionActiveComponents.json';

function ActionActiveComponents({ productId }: ActionActiveComponentsProps) {
  const product = action.actionsActiveComponents.find(
    ({ id }) => id === productId
  );
  return (
    product && (
      <div>
        <h3 className="font-roboto font-bold text-medium uppercase text-green mb-4 md:text-xl md:leading-[1.30] md:mb-6 xl:text-large">
          {action.title}
        </h3>
        <p className="font-geologica font-light text-light tracking-[-0.02em] text-black mb-8 md:mb-[43px] xl:text-medium">
          {product.text}
        </p>
        <a
          href={product.link}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="inline-block px-6 py-4 text-center font-geologica font-bold text-light uppercase text-green border border-solid border-[rgba(23,117,49,0.5)] rounded-full w-full transition-colors cursor-pointer hover:bg-green hover:text-white focus:bg-green focus:text-white md:w-[250px] "
        >
          {action.linkText}
        </a>
      </div>
    )
  );
}

export default ActionActiveComponents;
