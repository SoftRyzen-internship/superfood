import React from 'react';

export interface ProductProps {
  params: { id: string };
}

const productDescr = [
  {
    id: 1,
    description: 'Description1',
  },
  {
    id: 2,
    description: 'Description2',
  },
  {
    id: 3,
    description: 'Description3',
  },
];

function Product({ params }: ProductProps) {
  const filterId = Number(params.id);

  const product = productDescr.find(item => item.id === filterId);

  return (
    <div className="container pt-14">
      <p className="text-xl text-center font-bold p-10">
        Hero Product Id {params.id}
      </p>
      <div className="bg-lightGreen p-10">
        <p>ProductDescription with id: {params.id}</p>
        {product ? (
          <p>{product.description}</p>
        ) : (
          <p className="bg-red">Product Not Found</p>
        )}
      </div>
    </div>
  );
}

export default Product;
